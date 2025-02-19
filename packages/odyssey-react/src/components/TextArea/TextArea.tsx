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

import React, { forwardRef, useCallback } from "react";
import type {
  ComponentPropsWithRef,
  FocusEventHandler,
  ChangeEvent,
} from "react";
import { withTheme } from "@okta/odyssey-react-theme";
import { useOid, useOmit, useCx } from "../../utils";
import { Field } from "../Field";
import type { CommonFieldProps } from "../Field/types";
import styles from "./TextArea.module.scss";
import { theme } from "./TextArea.theme";

export interface TextAreaProps
  extends CommonFieldProps,
    Omit<
      ComponentPropsWithRef<"textarea">,
      "style" | "className" | "color" | "onChange"
    > {
  /**
   * The underlying textarea element id attribute. Automatically generated if not provided
   */
  id?: string;

  /**
   * The underlying textarea element name attribute
   */
  name?: string;

  /**
   * The underlying textarea element disabled attribute
   * @default false
   */
  disabled?: boolean;

  /**
   * The underlying textarea element resize attribute
   * @default "both"
   */
  resize?: "both" | "horizontal" | "vertical" | "none";

  /**
   * The underlying textarea element readonly attribute
   * @default false
   */
  readonly?: boolean;

  /**
   * The underlying textarea element placeholder attribute
   */
  placeholder?: string;

  /**
   * The textarea element value for controlled components
   */
  value?: string;

  /**
   * The initial textarea element value for uncontrolled components
   */
  defaultValue?: string;

  /**
   * Callback executed when the textarea fires a blur event
   * @param {Object} event the event object
   */
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;

  /**
   * Callback executed when the textarea fires a change event
   * @param {Object} event the event object
   * @param {string} value the string value of the textarea
   */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;

  /**
   * Callback executed when the textarea fires a focus event
   * @param {Object} event the event object
   */
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
}

/**
 * TextArea allows users to edit and input data.
 */
export const TextArea = withTheme(
  theme,
  styles
)(
  forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const {
      defaultValue,
      disabled = false,
      resize = "both",
      id,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      readonly = false,
      required,
      value,
      error,
      hint,
      label,
      optionalLabel,
      ...rest
    } = props;

    const componentClass = useCx(styles.root, styles[`${resize}Resize`]);

    const oid = useOid(id);
    const omitProps = useOmit(rest);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event, event.target.value);
      },
      [onChange]
    );

    const ariaDescribedBy = useCx(
      hint && `${oid}-hint`,
      typeof error !== "undefined" && `${oid}-error`
    );

    return (
      <Field
        inputId={oid}
        error={error}
        hint={hint}
        label={label}
        optionalLabel={optionalLabel}
        required={required}
      >
        <textarea
          {...omitProps}
          aria-describedby={ariaDescribedBy}
          className={componentClass}
          disabled={disabled}
          id={oid}
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readonly}
          ref={ref}
          required={required}
          defaultValue={defaultValue}
          value={value}
        />
      </Field>
    );
  })
);

TextArea.displayName = "TextArea";
