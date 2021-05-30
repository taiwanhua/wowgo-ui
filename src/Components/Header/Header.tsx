import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Header 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IHeaderProps extends IBaseComponentProps {
}

/**
 * Header 組件，未傳入 uiStore 時
 */
export const HeaderWappered = styled.header.attrs<IHeaderProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IHeaderProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

// export const HeaderWappered = styled((props: IHeaderProps) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }
// ).attrs<IHeaderProps>((props) => ({
//    // disabled: props.disabled,
// }))`
//     ${(props: IHeaderProps) => themeMaker(props, props.theme, DefaultTheme, props.uiStore)}
// `;

/**
 * Header為 一個具備基礎屬性的 div
 * @param props 使用介面 IHeaderProps
 * @returns 一個具備基礎屬性的 div
 */
export const Header: React.FC<IHeaderProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <HeaderWappered {...{ ...props, uiStore: uistore }} />
    )
}