import api from "../lib/api.js";

describe("Api.js", () => {
  describe("getFoods", () => {
    beforeEach(function() {
      this.url = "http://localhost:3000/foods";
    });
    it("Should call fetch to getFoods with correct url", function() {
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      api.getFoods();
      expect(spy).toHaveBeenCalledWith(this.url, { method: "GET" });
    });

    it("Should call fetch to getSingleFood with correct url and id", function() {
      const id = "3";
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      const urlWithId = this.url + "/" + id;
      api.getSingleFood(id);
      expect(spy).toHaveBeenCalledWith(urlWithId, { method: "GET" });
    });

    it("Should call fetch to POST a new item", function() {
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
        Promise.resolve({ json: () => null })
      );
      api.createFood(data);
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

    it("Should call fetch to PATCH a new item", function() {
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
        Promise.resolve({ json: () => null })
      );
      const urlWithId = this.url + "/" + id;
      api.updateFood(data, id);
      expect(spy).toHaveBeenCalledWith(urlWithId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(data)
      });
    });

    it("Should call fetch to DELETE with correct url and id", function() {
      const id = "3";
      const spy = spyOn(global, "fetch").and.returnValue(
        Promise.resolve({ json: () => null })
      );
      const urlWithId = this.url + "/" + id;
      api.deleteFood(id);
      expect(spy).toHaveBeenCalledWith(urlWithId, { method: "DELETE" });
    });
  });
});
