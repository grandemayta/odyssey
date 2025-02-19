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
import { render, screen } from "@testing-library/react";
import { Heading } from ".";

const heading = "heading";
const headingText = "This is a heading.";

describe("Heading", () => {
  it("render the heading", () => {
    render(<Heading children={headingText} />);

    const headingElement = screen.getByRole(heading);
    expect(headingElement).toBeVisible();
    expect(headingElement.tagName).toBe("H1");
  });

  it("changes the semantic tag based on the level prop", () => {
    render(<Heading level="3" children={headingText} />);

    expect(screen.getByRole(heading).tagName).toBe("H3");
  });

  it("changes the visual appearance based on the visualLevel prop", () => {
    render(<Heading level="3" visualLevel="6" children={headingText} />);
    const component = screen.getByRole(heading);

    expect(component.tagName).toBe("H3");
    expect(component.classList).toContain("level6");
  });

  it("enforces types for polymorphic rest props", () => {
    // @ts-expect-error heading element does not have href attribute
    <Heading href="/foo/bar.baz" children={headingText} />;
  });

  it("invokes ref with expected args after render", () => {
    const ref = jest.fn();

    render(<Heading ref={ref} children={headingText} />);

    expect(ref).toHaveBeenCalledTimes(1);
    expect(ref).toHaveBeenLastCalledWith(screen.getByRole(heading));
  });

  a11yCheck(() => render(<Heading level="1" children={headingText} />));
});
