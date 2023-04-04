import React from "react";
import { TextArea } from "components";

export default {
  title: "rashi_s_application1/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder5",
  variant: "OutlineGray301",
  size: "sm",
  placeholder: "placeholder",
};
