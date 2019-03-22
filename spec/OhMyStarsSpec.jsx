import React from "react";
import "@babel/polyfill";
import { mount } from "enzyme";
import OhMyStars from "../src/js/components/OhMyStars";

describe("OhMyStars", () => {
  beforeEach(function() {
    this.rating = 2;
    this.starUpdate = jasmine.createSpy("starUpdate");
    this.canEdit = true;
    this.wrapper = mount(
      <OhMyStars
        number={this.rating}
        onStarClick={this.starUpdate}
        isEditable={this.canEdit}
      />
    );
  });
  it("Should render the correct number of solid stars", function() {
    expect(this.wrapper.find(".qa-solid-star").length).toEqual(2);
  });

  it("Should highlight hovered stars on MouseOver", function() {
    this.wrapper
      .find(".qa-star")
      .at(2)
      .simulate("mouseover");

    expect(this.wrapper.find(".qa-solid-star").length).toEqual(3);
  });

  it("Should remove highlight from stars on MouseOut if the star wasn't clicked", function() {
    expect(this.wrapper.find(".qa-solid-star").length).toEqual(2);
    this.wrapper
      .find(".qa-star")
      .at(2)
      .simulate("mouseover");

    expect(this.wrapper.find(".qa-solid-star").length).toEqual(3);
    this.wrapper
      .find(".qa-star")
      .at(2)
      .simulate("mouseout");
    expect(this.wrapper.find(".qa-solid-star").length).toEqual(2);
  });

  it("Should call the callback function and pass the index of clicked star", function() {
    this.wrapper
      .find(".qa-star")
      .at(2)
      .simulate("click");
    expect(this.starUpdate).toHaveBeenCalledWith(3);
  });

  it("Should disable mouse and click events if edit mode is false", function() {
    const wrapper = mount(
      <OhMyStars
        number={this.rating}
        onStarClick={this.starUpdate}
        isEditable={false}
      />
    );
    expect(wrapper.find(".qa-solid-star").length).toEqual(2);

    wrapper
      .find(".qa-star")
      .at(2)
      .simulate("mouseover");

    expect(wrapper.find(".qa-solid-star").length).toEqual(2);

    wrapper
      .find(".qa-star")
      .at(2)
      .simulate("mouseout");
    expect(wrapper.find(".qa-solid-star").length).toEqual(2);

    wrapper
      .find(".qa-star")
      .at(2)
      .simulate("click");
    expect(this.starUpdate).not.toHaveBeenCalledWith(3);
  });
});
