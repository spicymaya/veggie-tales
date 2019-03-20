import React from "react";
import "@babel/polyfill";
import { mount } from "enzyme";
import NewFoodForm from "../src/js/components/NewFoodForm";
describe("NewFoodForm", () => {
  beforeEach(function() {
    this.handleChange = jasmine.createSpy("handleChange");
    this.handleSubmit = jasmine.createSpy("handleSubmit");
    this.formControls = {
      id: 1,
      name: "Avocado",
      region: "Peru",
      type: "Vegetable"
    };
    this.rating = 8;
    this.wrapper = mount(
      <NewFoodForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        formControls={this.formControls}
        rating={this.rating}
      />
    );
  });
  it("Should render food form with correct values", function() {
    expect(
      this.wrapper
        .find(".qa-name")
        .hostNodes()
        .props().value
    ).toContain("Avocado");
    expect(
      this.wrapper
        .find(".qa-region")
        .hostNodes()
        .props().value
    ).toContain("Peru");
    expect(
      this.wrapper
        .find(".qa-type")
        .hostNodes()
        .props().value
    ).toContain("Vegetable");
  });
  it("Should call handleChange onChange", function() {
    for (var i = 0; i < this.wrapper.find("Input").length; i++) {
      this.wrapper
        .find("Input")
        .at(i)
        .simulate("change");

      expect(this.handleChange).toHaveBeenCalled();
    }
  });
  it("Should call handleSubmit on submit", function() {
    this.wrapper.find("Form").simulate("submit");
    expect(this.handleSubmit).toHaveBeenCalled();
  });
});
