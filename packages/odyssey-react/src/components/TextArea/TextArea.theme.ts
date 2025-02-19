/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ThemeReducer } from "@okta/odyssey-react-theme";

export const theme: ThemeReducer = (theme) => ({
  // Border
  BorderRadius: theme.BorderRadiusBase,
  BorderStyle: theme.BorderStyleBase,
  BorderWidth: theme.BorderWidthBase,

  // Color
  BackgroundColor: theme.ColorBackgroundBase,
  BorderColor: theme.ColorBorderUi,
  BoxShadowColor: theme.ColorBackgroundPrimaryLight,
  TextColor: theme.ColorTextBody,

  // Font
  FontFamily: theme.FontFamilyBase,
  FontSize: theme.FontSizeBody,
  LineHeight: theme.FontLineHeightBody,

  // Sizing
  MaxWidth: theme.FontLineLengthMax,
  MinHeight: theme.SpaceScale6,
  MinWidth: theme.SpaceScale3,

  // Space
  MarginBlockEnd: 0,
  MarginBlockStart: theme.SpaceScale0,
  MarginInline: 0,
  PaddingBlockEnd: theme.SpaceScale2,
  PaddingBlockStart: theme.SpaceScale2,
  PaddingInline: theme.SpaceScale2,

  // Placeholder
  PlaceholderTextColor: theme.ColorTextSub,

  // Focus
  HoverFocusBorderColor: theme.ColorPrimaryBase,
  FocusOutlineColor: theme.FocusOutlineColorPrimary,
  FocusOutlineOffset: theme.FocusOutlineOffsetTight,
  FocusOutlineStyle: theme.FocusOutlineStyle,
  FocusOutlineWidth: theme.FocusOutlineWidthTight,

  // Disabled
  DisabledBackgroundColor: theme.ColorBackgroundDisabled,
  DisabledBorderColor: theme.ColorBorderDisabled,
  DisabledTextColor: theme.ColorTextBody,

  // Invalid
  InvalidBorderColor: theme.ColorBorderDangerBase,
  InvalidFocusOutlineColor: theme.FocusOutlineColorDanger,

  // Transition
  TransitionDuration: theme.TransitionDurationBase,
  TransitionTimingFunction: theme.TransitionTimingBase,
});
