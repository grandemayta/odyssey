/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from "react";
import type { Story } from "@storybook/react";
import { TextInput, TextInputProps } from "../../../../odyssey-react/src";
import TextInputMdx from "./TextInput.mdx";

export default {
  title: `Components/TextInput`,
  component: TextInput,
  parameters: {
    docs: {
      page: TextInputMdx,
    },
  },
  args: {
    label: "Destination",
    required: true,
    optionalLabel: "Optional",
  },
  argTypes: {
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    defaultValue: { control: "text" },
    hint: { control: "text" },
    optionalLabel: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    id: { control: "text" },
    name: { control: "text" },
    error: { control: "text" },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    prefix: { control: "text" },
    suffix: { control: "text" },
  },
};

const Template: Story<TextInputProps> = (props) => <TextInput {...props} />;

export const Text = Template.bind({});
Text.args = {};

export const Optional = Template.bind({});
Optional.args = {
  required: false,
  optionalLabel: "Optional",
};

export const KitchenSink = Template.bind({});
KitchenSink.args = {
  hint: "This is a hint",
  optionalLabel: "Optional",
  error: "This is an error",
  required: false,
};

export const Search = Template.bind({});
Search.args = {
  defaultValue: "Search Planets",
  type: "search",
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: "Phone Number",
  type: "tel",
  prefix: "+1",
};

export const Suffix = Template.bind({});
Suffix.args = {
  label: "Time til destination",
  type: "text",
  suffix: "minutes",
};
