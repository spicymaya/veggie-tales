import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import OhMyStars from "./OhMyStars.tsx";

const stories = storiesOf("OhMyStars - star rating component", module);
stories.addDecorator(withKnobs);
stories.add("no edit", () => (
  <OhMyStars
    number={number("rating", 7)}
    isEditable={boolean("isEditable", false)}
  />
));

stories.add("edit", () => <OhMyStars number="3" isEditable={true} />);
