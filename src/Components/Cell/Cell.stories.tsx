import * as React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Cell, ICellProps } from "./Cell";
import { WowgoUiProvider } from "../../Store/Store";

export default {
    title: 'Container/Cell',
    component: Cell,
    description: "sdf",
    argTypes: {
        theme: {
            name: 'theme',
            type: { name: 'function', required: false },
            description: '用於覆寫組件樣式',
            control: {
                type: 'function'
            }
        },
        className: {
            name: 'className',
            type: { name: 'string', required: false },
            defaultValue: '',
            description: '可為組件新增className',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: {
                type: 'text'
            }
        },
        children: {
            name: 'children',
            type: { name: 'React.ReactNode', required: false },
            defaultValue: null,
            description: '可傳入任意 ReactNode 做為子組件',
            table: {
                type: { summary: 'React.ReactNode' },
                defaultValue: { summary: null },
            },
            control: {
                type: 'text'
            }
        },
        uiStore: {

        }
    },
} as Meta;


const Template: Story<ICellProps> = (args) => (<WowgoUiProvider><Cell  {...args} /></WowgoUiProvider>);

export const CellWithBorder = Template.bind({});
CellWithBorder.args = {
    children: "這是一個 Cell 組件，並覆寫其邊框線顏色為1像數的黑色實線",
    theme: (style, uiStore, porpsFromDom, utils) => {
        return {
            base: {
                css: {
                    ...style.base.css,
                    border: "1px solid black"
                }
            },
            breakpoints: {

            }
        }
    }

};

CellWithBorder.parameters = {
    docs: {
        source: {
            language: "jsx",
            code: `
<Cell theme={(style, uiStore, porpsFromDom, utils) => {
        return {
            base: {
                css: {
                    ...style.base.css,
                    border: "1px solid black"
                }
            }
        }
    }}
>
    這是一個 Cell 組件，並覆寫其邊框線顏色為1像數的黑色實線
</Cell>
`,
        },
    },
};

