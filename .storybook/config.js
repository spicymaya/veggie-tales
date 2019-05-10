import { configure, setAddon, addDecorator } from "@storybook/react";
// import { JSXAddon } from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";

// setAddon(JSXAddon);
addDecorator(withInfo);

const req = require.context("../src", true, /.stories.js$|jsx/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
