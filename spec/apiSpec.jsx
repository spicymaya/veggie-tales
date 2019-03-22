import api from "../lib/api.js";

describe("Api.js", () => {
  describe("getFoods library", () => {
    beforeEach(function() {
      this.url = "http://localhost:3000/foods";
    });
    it("Should call fetch to getFoods with correct url", async function() {
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      await api.getFoods();
      expect(spy).toHaveBeenCalledWith(this.url, { method: "GET" });
    });

    it("Should call fetch to getSingleFood with correct url and id", async function() {
      const id = "3";
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      const urlWithId = this.url + "/" + id;
      await api.getSingleFood(id);
      expect(spy).toHaveBeenCalledWith(urlWithId, { method: "GET" });
    });

    it("Should call fetch to POST a new item with correct data", async function() {
      const data = [
        {
          id: 3,
          name: "Orange",
          region: "China",
          type: "Fruit",
          rating: 7,
          image_url: null,
          created_at: null,
          updated_at: null
        }
      ];

      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({
          json: () => Promise.resolve({ data }),
          ok: true
        })
      );

      await api.createFood(data);
      expect(spy).toHaveBeenCalledWith(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify(data)
      });
    });
    it("Should call fetch to POST a new item and throw an error message", async function() {
      const data = [
        {
          id: 3,
          name: "Orange",
          region: "China",
          type: "Fruit",
          rating: 7,
          image_url: null,
          created_at: null,
          updated_at: null
        }
      ];

      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({
          json: () => Promise.resolve({ message: "hello" }),
          ok: false
        })
      );
      try {
        await api.createFood(data);
      } catch (error) {
        expect(error).toBe("hello");
        expect(spy).toHaveBeenCalledWith(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          credentials: "same-origin",
          body: JSON.stringify(data)
        });
      }
    });

    it("Should call fetch to PATCH a new item", async function() {
      const id = "3";
      const data = [
        {
          id: 3,
          name: "Orange",
          region: "China",
          type: "Fruit",
          rating: 7,
          image_url: null,
          created_at: null,
          updated_at: null
        }
      ];
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => data })
      );
      const urlWithId = this.url + "/" + id;
      await api.updateFood(data, id);
      expect(spy).toHaveBeenCalledWith(urlWithId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(data)
      });
    });

    it("Should call fetch to DELETE with correct url and id", async function() {
      const id = "3";
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      const urlWithId = this.url + "/" + id;
      await api.deleteFood(id);
      expect(spy).toHaveBeenCalledWith(urlWithId, { method: "DELETE" });
    });
  });
});
