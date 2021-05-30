import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Footer 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IFooterProps extends IBaseComponentProps {
}

/**
 * Footer 組件，未傳入 uiStore 時
 */
export const FooterWappered = styled.footer.attrs<IFooterProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IFooterProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

// export const FooterWappered = styled((props: IFooterProps) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }
// ).attrs<IFooterProps>((props) => ({
//    // disabled: props.disabled,
// }))`
//     ${(props: IFooterProps) => themeMaker(props, props.theme, DefaultTheme, props.uiStore)}
// `;

/**
 * Footer為 一個具備基礎屬性的 div
 * @param props 使用介面 IFooterProps
 * @returns 一個具備基礎屬性的 div
 */
export const Footer: React.FC<IFooterProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <FooterWappered {...{ ...props, uiStore: uistore }} />
    )
}