import * as React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExampleComponent, ExampleComponentProps } from "./ExampleComponent";

export default {
    title: 'Example/ExampleComponent',
    component: ExampleComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


const Template: Story<ExampleComponentProps> = (args) => <ExampleComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "hello world ~",
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: "hello !! "
};

export const Large = Template.bind({});
Large.args = {
    title: "Welcome !! "
};
