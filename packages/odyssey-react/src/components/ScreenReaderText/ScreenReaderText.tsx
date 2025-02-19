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
import type {
  ComponentPropsWithRef,
  FunctionComponent,
  ReactNode,
} from "react";
import { withTheme } from "@okta/odyssey-react-theme";
import { useOmit } from "../../utils";
import { theme } from "./ScreenReaderText.theme";
import styles from "./ScreenReaderText.module.scss";

export interface ScreenReaderTextProps
  extends Omit<ComponentPropsWithRef<"span">, "style" | "className"> {
  /**
   * Visibly hidden / SR-only text
   */
  children: ReactNode;

  /**
   * The underlying parent semantic HTML element.
   * @default span
   */
  as?: "span" | "em" | "strong";
}

/**
 * Render messages that are only visible to screen readers for a11y.
 */
export const ScreenReaderText: FunctionComponent<ScreenReaderTextProps> =
  withTheme(
    theme,
    styles
  )((props) => {
    const { children, as: Tag = "span", ...rest } = props;
    const omitProps = useOmit(rest);

    return (
      <Tag {...omitProps} className={styles.root}>
        {children}
      </Tag>
    );
  });

ScreenReaderText.displayName = "ScreenReaderText";
