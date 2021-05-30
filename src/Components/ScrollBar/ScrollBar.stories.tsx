import * as React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { ScrollBar, IScrollBarProps } from "./ScrollBar";
import { WowgoUIProvider } from "../Context/Context";
import { Box } from "../";

export default {
    title: 'Layout/ScrollBar',
    component: ScrollBar,
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
            description: '可為組件置換頂層className',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: {
                type: 'text'
            }
        },
        classNamesAppend: {
            name: 'classNamesAppend',
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

        },
        animationType: {
            name: 'animationType',
            type: { name: 'string', required: false },
            defaultValue: 'easeInOutQuad',
            description: `滾動時滾動軸的動畫速度曲線`,
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'easeInOutQuad' },
            },
            control: {
                type: 'radio',
                options: ['easeInOutQuad', 'easeInCubic', 'inOutQuintic']
            }
        },
    },
} as Meta;


const Template: Story<IScrollBarProps> = (args) => {
    const ref = React.useRef<ScrollBar>(null);
    return (
        <WowgoUIProvider>
            <Box style={{ width: "200px", height: "200px" }}>
                <ScrollBar
                    {...args}
                    ref={ref}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Box style={{ width: "1000px", height: "1000px", userSelect: 'none', padding: "20px" }}>
                        這是一個高度1000px、<br />
                        寬度1000px的組件，<br />
                        被置於高度200px、<br />
                        寬度200px的Box組件中，<br />
                        其中使用 ScrollBar <br />
                        組件來覆寫滾動條，<br />
                        並且一併展示如何操作滾動條。<br />
                        <button
                            style={{ position: "absolute", top: "0px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToBottom();
                            }}
                        >
                            toBottom
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "100px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToTop();
                            }}
                        >
                            toTop
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "50px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToRight();
                            }}
                        >
                            toRight
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "50px", right: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToLeft();
                            }}
                        >
                            toLeft
                        </button>
                    </Box>
                </ScrollBar>
            </Box>
            <button
                onClick={() => {
                    ref.current?.scrollLeft(500);
                }}
            >
                toLeft 500
            </button>
            <button
                onClick={() => {
                    ref.current?.scrollTop(500);
                }}
            >
                toTop 500
            </button>
        </WowgoUIProvider>
    )
};

export const ScrollBarOnly = Template.bind({});

ScrollBarOnly.args = {
};

ScrollBarOnly.parameters = {
    docs: {
        source: {
            language: "jsx",
            code: `
const YourComponent = () => {

    const ref = React.useRef<ScrollBar>(null);

    return (
        <>
            <Box style={{ width: "200px", height: "200px" }}>
                <ScrollBar
                    ref={ref}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Box style={{ width: "1000px", height: "1000px", userSelect: 'none', padding: "20px" }}>
                        這是一個高度1000px、<br />
                        寬度1000px的組件，<br />
                        被置於高度200px、<br />
                        寬度200px的Box組件中，<br />
                        其中使用 ScrollBar <br />
                        組件來覆寫滾動條，<br />
                        並且一併展示如何操作滾動條。<br />
                        <button
                            style={{ position: "absolute", top: "0px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToBottom();
                            }}
                        >
                            toBottom
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "100px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToTop();
                            }}
                        >
                            toTop
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "50px", left: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToRight();
                            }}
                        >
                            toRight
                        </button>
                        <button
                            style={{ position: "absolute", bottom: "50px", right: "0px" }}
                            onClick={() => {
                                ref.current?.scrollToLeft();
                            }}
                        >
                            toLeft
                        </button>
                    </Box>
                </ScrollBar>
            </Box>
            <button
                onClick={() => {
                    ref.current?.scrollLeft(500);
                }}
            >
                toLeft 500
            </button>
            <button
                onClick={() => {
                    ref.current?.scrollTop(500);
                }}
            >
                toTop 500
            </button>
        </>
    )
}
`,
        },
    },
};

export const ScrollBarCustomColor = Template.bind({});

ScrollBarCustomColor.args = {
    children: "ScrollBar 內子組件",
    renderThumbHorizontal: ({ style, ...props }) => {
        const thumbStyle = {
            cursor: "pointer",
            borderRadius: "4px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    },
    renderThumbVertical: ({ style, ...props }) => {
        const thumbStyle = {
            cursor: "pointer",
            borderRadius: "4px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }
};

ScrollBarCustomColor.parameters = {
    docs: {
        source: {
            language: "jsx",
            code: `
const YourComponent = () => {

    const ref = React.useRef<ScrollBar>(null);

    <ScrollBar
        ref={ref}
        style={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "100%",
            width: "100%",
        }}
        renderThumbHorizontal={({ style, ...props }) => {
            const thumbStyle = {
                cursor: "pointer",
                borderRadius: "4px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            };
            return (
                <div
                    style={{ ...style, ...thumbStyle }}
                    {...props} />
            );
        }}
        renderThumbVertical={({ style, ...props }) => {
            const thumbStyle = {
                cursor: "pointer",
                borderRadius: "4px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            };
            return (
                <div
                    style={{ ...style, ...thumbStyle }}
                    {...props} />
            );
        }}
    >
        {children}
    </ScrollBar>
}
`,
        },
    },
};

