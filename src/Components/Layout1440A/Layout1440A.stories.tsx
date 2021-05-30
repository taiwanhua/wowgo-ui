// import * as React from "react";
// import { Story, Meta } from '@storybook/react/types-6-0';
// import { Layout1440A, ILayout1440AProps } from "./Layout1440A";
// import { mergeDeep } from 'immutable'
// import { WowgoUIProvider } from "../Context/Context";

// export default {
//     title: 'Layout/Layout1440A',
//     component: Layout1440A,
//     description: "sdf",
//     argTypes: {
//         theme: {
//             name: 'theme',
//             type: { name: 'function', required: false },
//             description: '用於覆寫組件樣式',
//             control: {
//                 type: 'function'
//             }
//         },
//         className: {
//             name: 'className',
//             type: { name: 'string', required: false },
//             defaultValue: '',
//             description: '可為組件置換頂層className',
//             table: {
//                 type: { summary: 'string' },
//                 defaultValue: { summary: '' },
//             },
//             control: {
//                 type: 'text'
//             }
//         },
//         classNamesAppend: {
//             name: 'classNamesAppend',
//             type: { name: 'string', required: false },
//             defaultValue: '',
//             description: '可為組件新增className',
//             table: {
//                 type: { summary: 'string' },
//                 defaultValue: { summary: '' },
//             },
//             control: {
//                 type: 'text'
//             }
//         },
//         children: {
//             name: 'children',
//             type: { name: 'React.ReactNode', required: false },
//             defaultValue: null,
//             description: '可傳入任意 ReactNode 做為子組件',
//             table: {
//                 type: { summary: 'React.ReactNode' },
//                 defaultValue: { summary: null },
//             },
//             control: {
//                 type: 'text'
//             }
//         },
//         uiStore: {

//         },
//         type: {
//             name: 'type',
//             type: { name: 'string', required: false },
//             defaultValue: 'horizontal',
//             description: `決定分隔線方向水平或垂直`,
//             table: {
//                 type: { summary: 'string' },
//                 defaultValue: { summary: 'horizontal' },
//             },
//             control: {
//                 type: 'radio',
//                 options: ['horizontal', 'vertical']
//             }
//         },
//         orientation: {
//             name: 'orientation',
//             type: { name: 'string', required: false },
//             defaultValue: 'center',
//             description: `決定文字對齊`,
//             table: {
//                 type: { summary: 'string' },
//                 defaultValue: { summary: 'center' },
//             },
//             control: {
//                 type: 'radio',
//                 options: ['left', 'right', 'center']
//             }
//         },
//         dashed: {
//             name: 'dashed',
//             type: { name: 'boolean', required: false },
//             defaultValue: false,
//             description: `決定分隔線是否為虛線`,
//             table: {
//                 type: { summary: 'boolean' },
//                 defaultValue: { summary: 'false' },
//             },
//             control: {
//                 type: 'boolean',
//             }
//         },
//     },
// } as Meta;


// const Template: Story<ILayout1440AProps> = (args) => (<WowgoUIProvider><Layout1440A  {...args} /></WowgoUIProvider>);

// export const Layout1440AOnly = Template.bind({});

// Layout1440AOnly.args = {
//     children: "Layout1440A 組件",
// };

// Layout1440AOnly.parameters = {
//     docs: {
//         source: {
//             language: "jsx",
//             code: `
// <Layout1440A>
//     Layout1440A 組件
// </Layout1440A>
// `,
//         },
//     },
// };

// export const Layout1440ACustomColor = Template.bind({});

// Layout1440ACustomColor.args = {
//     children: "Layout1440A 組件，orientation=center type=horizontal",
//     orientation: "center",
//     type: "horizontal",
//     theme: (style, uiStore, porpsFromDom, utils) => {

//         return mergeDeep(style, {
//             dividerBox: {
//                 base: {
//                     pseudos: {
//                         ...((porpsFromDom.type === "horizontal") && {
//                             "::before": {
//                                 borderTopColor: "red",
//                             },
//                             "::after": {
//                                 borderTopColor: "red",
//                             }
//                         }),
//                     }
//                 }
//             }
//         })
//     }
// };

// Layout1440ACustomColor.parameters = {
//     docs: {
//         source: {
//             language: "jsx",
//             code: `
// <Layout1440A
//     orientation={"center"}
//     type={"horizontal"}
//     theme: (style, uiStore, porpsFromDom, utils) => {
//         return mergeDeep(style, {
//             dividerBox: {
//                 base: {
//                     pseudos: {
//                         ...((porpsFromDom.type === "horizontal") && {
//                             "::before": {
//                                 borderTopColor: "red",
//                             },
//                             "::after": {
//                                 borderTopColor: "red",
//                             }
//                         }),
//                     }
//                 }
//             }
//         })
//     }
// >
//     Layout1440A 組件
// </Layout1440A>
// `,
//         },
//     },
// };

