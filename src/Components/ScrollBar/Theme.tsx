import { IScrollBarProps, IScrollBarThemeWithKey } from "./ScrollBar";

export const theme = (props: IScrollBarProps): IScrollBarThemeWithKey => {

    return {
        dividerBox: {
            base: {
                css: {
                    boxSizing: "border-box",
                    position: "relative",       //控制position屬性: static、relative、fixed、"absolute"|"sticky"|"、inheri、initia"|
                    width: "auto",
                    minWidth: '0',//修復滾動條 x 方向
                    height: "auto",
                    lineHeight: "normal",
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    backgroundPosition: "0% 0%",
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto auto",
                    cursor: "auto",
                    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
                    whiteSpace: "normal",
                    textAlign: 'initial',
                    fontSize: "medium",
                    color: '#000',

                    borderTop: `1px solid ${props.uiStore.component.divider.borderColor}`,

                    ...(!!props.dashed && {
                        background: "none",
                        borderColor: props.uiStore.component.divider.borderColor,
                        borderStyle: "dashed",
                        borderWidth: "1px 0 0",
                    }),
                    ...(props.type === "horizontal" && {
                        display: "flex",
                        clear: "both",
                        width: "100%",
                        minWidth: "100%",
                        margin: "24px 0",
                    }),
                    ...(props.type === "vertical" && {
                        top: "-0.06em",
                        display: "inline-block",
                        height: "0.9em",
                        margin: "0 8px",
                        verticalAlign: "middle",
                        borderTop: 0,
                        borderLeft: `1px solid ${props.uiStore.component.divider.borderColor}`,
                    }),
                    ...(props.hasChildren && {
                        display: "flex",
                        margin: "16px 0",
                        color: `rgba(0, 0, 0, 0.85)`,
                        fontWeight: 500,
                        fontSize: `16px`,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        borderTop: 0,
                        borderTopColor: props.uiStore.component.divider.borderColor,
                        borderTopWidth: "0px"
                    }),
                },
                pseudos: {
                    ...((props.hasChildren && (props.type === "horizontal")) && {
                        "::before": {
                            top: "50%",
                            width: "50%",
                            borderTop: `1px solid transparent`,
                            // Chrome not accept `inherit` in `border-top`
                            borderTopColor: "inherit",
                            borderBottom: 0,
                            transform: `translateY(50%)`,
                            content: `''`,
                            ...(props.orientation === "left" && {
                                top: "50%",
                                width: "5%"
                            }),
                            ...(props.orientation === "right" && {
                                top: "50%",
                                width: "95%"
                            }),
                            ...(!!props.dashed && {
                                borderStyle: `dashed none none`
                            })
                        },
                        "::after": {
                            top: "50%",
                            width: "50%",
                            borderTop: `1px solid transparent`,
                            // Chrome not accept `inherit` in `border-top`
                            borderTopColor: "inherit",
                            borderBottom: 0,
                            transform: `translateY(50%)`,
                            content: `''`,
                            ...(props.orientation === "left" && {
                                top: "50%",
                                width: "95%"
                            }),
                            ...(props.orientation === "right" && {
                                top: "50%",
                                width: "5%"
                            }),
                            ...(!!props.dashed && {
                                borderStyle: `dashed none none`
                            })
                        }
                    }),
                    ...(((props.type === "vertical") && !!props.dashed) && {
                        "::before": {
                            top: "50%",
                            width: "50%",
                            borderTop: `1px solid transparent`,
                            // Chrome not accept `inherit` in `border-top`
                            borderTopColor: "inherit",
                            borderBottom: 0,
                            transform: `translateY(50%)`,
                            content: `''`,
                            borderStyle: `dashed none none`
                        },
                        "::after": {
                            top: "50%",
                            width: "50%",
                            borderTop: `1px solid transparent`,
                            // Chrome not accept `inherit` in `border-top`
                            borderTopColor: "inherit",
                            borderBottom: 0,
                            transform: `translateY(50%)`,
                            content: `''`,
                            borderStyle: `dashed none none`
                        }
                    })
                },
                selectors: {

                },
            },
        },
        dividerSpan: {
            base: {
                css: {
                    boxSizing: "border-box",
                    position: "relative",       //控制position屬性: static、relative、fixed、"absolute"|"sticky"|"、inheri、initia"|
                    width: "auto",
                    height: "auto",
                    lineHeight: "normal",
                    cursor: "auto",
                    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
                    // whiteSpace: "normal",
                    textAlign: 'initial',
                    fontSize: "medium",
                    color: '#000',
                    //#endregion
                    display: "inline-block",
                    padding: "0 1em"
                },
            },
        }

    }
}
