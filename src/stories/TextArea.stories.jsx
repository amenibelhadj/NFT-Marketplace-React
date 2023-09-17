import React from "react";
import { TextArea } from "components";

export default {
  title: "nft_marketplace/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
