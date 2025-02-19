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

import React, { cloneElement, forwardRef } from "react";
import type { ReactElement, ComponentPropsWithRef } from "react";
import { withTheme } from "@okta/odyssey-react-theme";
import { useCx, useOid, useOmit } from "../../utils";
import { Box } from "../Box";
import styles from "./Tooltip.module.scss";
import { theme } from "./Tooltip.theme";

export interface TooltipProps
  extends Omit<
    ComponentPropsWithRef<"aside">,
    "style" | "className" | "role" | "color"
  > {
  /**
   * Content to be rendered that needs a tooltip label
   */
  children: ReactElement;

  /**
   * The position the tooltip will be displayed
   * @default top
   */
  position?: "top" | "end" | "bottom" | "start";

  /**
   * The tooltip content itself
   */
  label: string;
}

/**
 * A transient element that provides additional context for an element when it receives hover or focus.
 */
export const Tooltip = withTheme(
  theme,
  styles
)(
  forwardRef<HTMLElement, TooltipProps>((props, ref) => {
    const { children, id, label, position = "top", ...rest } = props;

    const oid = useOid(id);
    const omitProps = useOmit(rest);
    const tooltipClasses = useCx(styles.root, styles[`${position}Position`]);
    const clone = cloneElement(children, { "aria-describedby": oid });

    return (
      <span className={styles.hasTooltip}>
        {clone}
        <Box
          as="aside"
          {...omitProps}
          ref={ref}
          id={oid}
          className={tooltipClasses}
          role="tooltip"
          color={false}
          fontSize={false}
          fontWeight={false}
          lineHeight={false}
        >
          {label}
        </Box>
      </span>
    );
  })
);

Tooltip.displayName = "Tooltip";
