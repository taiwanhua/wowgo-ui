import * as React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Palettes, IPalettesProps } from "./Palettes";
import { WowgoUiProvider } from "../../Store/Store";

export default {
    title: 'Tools/Palettes',
    component: Palettes,
    description: "sdf",
    argTypes: {
        mainColor: {
            name: 'mainColor',
            type: { name: 'color', required: true },
            defaultValue: '#1890ff',
            description: '用於產生色板的主色',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '#1890ff' },
            },
            control: {
                type: 'color'
            }
        },
        backgroundColor: {
            name: 'backgroundColor',
            type: { name: 'color', required: true },
            defaultValue: '#141414',
            description: '用於產生色板的背景色',
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: '#141414' },
            },
            control: {
                type: 'color'
            }
        }
    },
} as Meta;


const Template: Story<IPalettesProps> = (args) => (<WowgoUiProvider><Palettes  {...args} /></WowgoUiProvider>);

export const PalettesWithBorder = Template.bind({});
PalettesWithBorder.args = {
    // children: "這是一個 Palettes 組件，並覆寫其邊框線顏色為1像數的黑色實線",
    // theme: (style, uiStore, porpsFromDom, utils) => {
    //     return {
    //         base: {
    //             css: {
    //                 ...style.base.css,
    //                 border: "1px solid black"
    //             }
    //         },
    //         breakpoints: {

    //         }
    //     }
    // }

};

PalettesWithBorder.parameters = {
    docs: {
        source: {
            language: "jsx",
            code: `
<Palettes 
    mainColor={"#1890ff"}
    backgroundColor={"#141414"}
/>
`,
        },
    },
};

