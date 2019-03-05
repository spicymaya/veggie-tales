import React from "react";
import "@babel/polyfill";
import { mount } from "enzyme";
import SingleFood from "../src/js/components/SingleFood";
describe("SingleFood", () => {
  it("should render Avocado", function() {
    const singleFoodData = {
      id: 1,
      name: "Avocado",
      region: "Peru",
      type: "Vegetable",
      rating: 8
    };
    const wrapper = mount(<SingleFood data={singleFoodData} />);
    expect(
      wrapper
        .find(".qa-name")
        .hostNodes()
        .text()
    ).toContain("Avocado");
  });
});
