import * as React from "react";
import { shallow } from "enzyme";
import { ExampleComponent } from "./ExampleComponent";
it("Renders without crashing", () => {
    const wrapper = shallow(<ExampleComponent title={"Test"} backgroundColor={"red"} />);
    expect(wrapper).toMatchSnapshot();
});