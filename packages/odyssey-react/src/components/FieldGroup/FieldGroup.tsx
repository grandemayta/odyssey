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
import type { FunctionComponent, ReactNode, ReactElement } from "react";
import { withTheme } from "@okta/odyssey-react-theme";
import { Box } from "../Box";
import { Text } from "../Text";
import { useOmit } from "../../utils";
import styles from "./FieldGroup.module.scss";
import { theme } from "./FieldGroup.theme";

export interface FieldGroupProps {
  /**
   * Content to be rendered within the FieldGroup.
   */
  children: ReactElement | ReactElement[];

  /**
   * The legend of the FieldGroup.
   */
  legend?: string;

  /**
   * A short description of the FieldGroup.
   */
  desc?: string;
}

interface PropsError {
  children: ReactNode;
}

type Statics = {
  Error: typeof FieldGroupError;
};

export const FieldGroup: FunctionComponent<FieldGroupProps> & Statics =
  withTheme(
    theme,
    styles
  )(
    Object.assign(
      (props: FieldGroupProps) => {
        const { children, legend, desc, ...rest } = props;

        const omitProps = useOmit(rest);

        return (
          <Box as="fieldset" {...omitProps} className={styles.root}>
            {legend && <legend className={styles.legend}>{legend}</legend>}
            {desc && <Text as="p">{desc}</Text>}
            {children}
          </Box>
        );
      },
      {
        Error: FieldGroupError,
      }
    )
  );

function FieldGroupError({ children }: PropsError) {
  return <section className={styles.error}>{children}</section>;
}

FieldGroup.displayName = "FieldGroup";
FieldGroupError.displayName = "FieldGroupError";
