import React from "react";
import "@babel/polyfill";
import { mount, shallow } from "enzyme";
import * as fetch from "../lib/fetch.js";
import SingleFood from "../src/js/components/SingleFood";
describe("SingleFood", () => {
  // beforeEach(function() {
  //   this.wrapper = mount(<SingleFood match={{ params: { id: 1 } }} />);
  // });
  it("should render Avocado", function(done) {
    const singleFoodData = {
      id: 1,
      name: "Avocado",
      region: "Peru",
      type: "Vegetable",
      rating: 8,
      image_url: null,
      created_at: null,
      updated_at: null
    };
    const spy = spyOn(fetch, "getSingleFood").and.returnValue(
      Promise.resolve(singleFoodData)
    );
    const wrapper = mount(<SingleFood match={{ params: { id: 1 } }} />);
    fetch.getSingleFood().then(function(result) {
      expect(result).toEqual(singleFoodData);
      done();
      console.log("result", result);
    });
    // console.log(wrapper.state());
    expect(spy).toHaveBeenCalled();

    // console.log(
    //   wrapper
    //     .find(".qa-name")
    //     .hostNodes()
    //     .html()
    // );
    // expect(
    //   wrapper
    //     .find(".qa-name")
    //     .hostNodes()
    //     .text()
    // ).toContain("Avocado");
  });
});
