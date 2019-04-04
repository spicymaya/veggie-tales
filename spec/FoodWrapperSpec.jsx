import React from "react";
import "@babel/polyfill";
import { mount } from "enzyme";
import FoodWrapper from "../src/js/components/FoodWrapper";

describe("FoodWrapper component. Testing search input", () => {
  fit("Search input should update the results shown", function() {
    const foodData = [
      {
        id: 3,
        name: "Orange",
        region: "Russia",
        type: "fruit",
        rating: 7,
        image_url:
          "https://xzdl43v0mdf2m45tz2aj7kkv35-wpengine.netdna-ssl.com/wp-content/uploads/2010/10/orange-780x400.jpg",
        created_at: null,
        updated_at: "2019-03-31T15:09:07.008Z",
        user_id: null
      },
      {
        id: 5,
        name: "Pineapple",
        region: "Brazil",
        type: "fruit",
        rating: 8,
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
        created_at: null,
        updated_at: "2019-03-21T20:57:44.800Z",
        user_id: null
      },
      {
        id: 7,
        name: "Pineapple",
        region: "Brazil",
        type: "fruit",
        rating: 7,
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
        created_at: null,
        updated_at: "2019-03-21T15:50:51.831Z",
        user_id: null
      }
    ];
    const wrapper = mount(<FoodWrapper />);
    wrapper.update();
    console.log(wrapper.html());
    // wrapper
    //   .find(".qa-input")
    //   .hostNodes()
    //   .simulate("change");

    // expect(this.handleSearchChange).toHaveBeenCalled();
  });
});
