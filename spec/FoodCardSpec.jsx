import React from "react";
import "@babel/polyfill";
import { mount } from "enzyme";
import FoodCard from "../src/js/components/FoodCard";

describe("FoodsComponent", () => {
  it("Should render Orange", function() {
    global.document.addEventListener("load", function() {
      const foodData = [
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
      const wrapper = mount(<FoodCard data={foodData} />);
      expect(
        wrapper
          .find(".qa-name")
          .hostNodes()
          .text()
      ).toContain("Orange");
    });
  });
});
