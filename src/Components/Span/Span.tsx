import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Span 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface ISpanProps extends IBaseComponentProps {
}

/**
 * Span 組件，未傳入 uiStore 時
 */
export const SpanWappered = styled.span.attrs<ISpanProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: ISpanProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

/**
 * Span為 一個具備基礎屬性的 div
 * @param props 使用介面 ISpanProps
 * @returns 一個具備基礎屬性的 div
 */
export const Span: React.FC<ISpanProps> = (props) => {

    // const uistore = useWowgoSelector<any, any>((state) => state.wowgoUI)
    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <SpanWappered {...{ ...props, uiStore: uistore }} />
    )
}