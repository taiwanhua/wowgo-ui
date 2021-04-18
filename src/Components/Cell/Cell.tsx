import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Cell 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface ICellProps extends IBaseComponentProps {
}

/**
 * Cell 組件，未傳入 uiStore 時
 */
export const CellWappered = styled.div.attrs<ICellProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: ICellProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

/**
 * Cell為 一個具備下列與其他基礎屬性的 div。
 * * flex-grow: "0"
 * * max-width: "none",
 * * flex-basis: "auto"
 * * min-width: "0"
 * @param props 使用介面 ICellProps
 * @returns Cell組件
 */
export const Cell: React.FC<ICellProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <CellWappered {...{ ...props, uiStore: uistore }} />
    )
}