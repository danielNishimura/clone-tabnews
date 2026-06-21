import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

export const Primary = () =>
  React.createElement(Button, { onClick: () => alert("clicked") }, "Click me");
