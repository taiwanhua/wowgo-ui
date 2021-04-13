import * as React from 'react';
import styled from "styled-components";
import { useWowgoSelector } from "wowgo-state-react";
import { generate, themeMaker } from "wowgo-utils";
import { Row, Cell, IBaseComponentProps } from "../";
import { Box } from "../Box/Box";
import { theme } from './Theme'

/**
 * Palettes 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IPalettesProps extends IBaseComponentProps {
    mainColor: string;
    backgroundColor?: string;
}

export const PalettesWappered = styled((props: IPalettesProps) => {

    const stringCopy = React.useCallback(
        (content: string) => {
            const el = document.createElement('textarea');
            el.value = content;
            //console.log(el.value)
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert(content + "顏色已複製到剪貼簿")
        },
        []
    )

    return (
        <>
            <Box className={props.className} >
                {/** default */}
                <Row
                    theme={(style, uiStore, porpsFromDom, utils) => {
                        return {
                            base: {
                                css: {
                                    ...style.base.css,
                                    padding: "16px"
                                }
                            }
                        }
                    }}
                >
                    {/* {props.children} */}
                    {generate(props.mainColor).map((color, index, arr) => {
                        return (
                            <Cell
                                theme={(style, uiStore, porpsFromDom, utils) => {
                                    return {
                                        base: {
                                            css: {
                                                ...style.base.css,
                                                backgroundColor: color,
                                                height: "32px",
                                                maxWidth: `${(1 / arr.length) * 100}%`,
                                                flexBasis: `${(1 / arr.length) * 100}%`,
                                                color: index < 5 ? "rgba(0,0,0,0.85)" : "#fff",
                                                textAlign: "center",
                                                padding: "4px",
                                                cursor: "pointer"
                                            }
                                        }
                                    }
                                }}
                                onClick={() => {
                                    stringCopy(color)
                                }}
                            >
                                顏色{index + 1}
                            </Cell>
                        )
                    })}
                </Row>

                {/** dark */}
                <Row
                    theme={(style, uiStore, porpsFromDom, utils) => {
                        return {
                            base: {
                                css: {
                                    ...style.base.css,
                                    padding: "16px",
                                    backgroundColor: props.backgroundColor ?? "transparent"
                                }
                            }
                        }
                    }}
                >
                    {/* {props.children} */}
                    {generate(props.mainColor,
                        {
                            theme: 'dark',
                            backgroundColor: props.backgroundColor
                        }
                    ).map((color, index, arr) => {
                        return (
                            <Cell
                                theme={(style, uiStore, porpsFromDom, utils) => {
                                    return {
                                        base: {
                                            css: {
                                                ...style.base.css,
                                                backgroundColor: color,
                                                height: "32px",
                                                maxWidth: `${(1 / arr.length) * 100}%`,
                                                flexBasis: `${(1 / arr.length) * 100}%`,
                                                color: index < 5 ? "#fff" : "rgba(0,0,0,0.85)",
                                                textAlign: "center",
                                                padding: "4px",
                                                cursor: "pointer"
                                            }
                                        }
                                    }
                                }}
                                onClick={() => {
                                    stringCopy(color)
                                }}
                            >
                                顏色{index + 1}
                            </Cell>
                        )
                    })}
                </Row>
            </Box>
        </>
    )
}
).attrs<IPalettesProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IPalettesProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

/**
 * Palettes為 一個具備基礎屬性的 div
 * @param props 使用介面 IPalettesProps
 * @returns 一個具備基礎屬性的 div
 */
export const Palettes: React.FC<IPalettesProps> = (props) => {

    const uistore = useWowgoSelector<any, any>((state) => state.wowgoUI)

    return (
        <PalettesWappered {...{ ...props, uiStore: uistore }} />
    )
}

