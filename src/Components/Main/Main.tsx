import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Main 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IMainProps extends IBaseComponentProps {
}

/**
 * Main 組件，未傳入 uiStore 時
 */
export const MainWappered = styled.main.attrs<IMainProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IMainProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

// export const MainWappered = styled((props: IMainProps) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }
// ).attrs<IMainProps>((props) => ({
//    // disabled: props.disabled,
// }))`
//     ${(props: IMainProps) => themeMaker(props, props.theme, DefaultTheme, props.uiStore)}
// `;

/**
 * Main為 一個具備基礎屬性的 div
 * @param props 使用介面 IMainProps
 * @returns 一個具備基礎屬性的 div
 */
export const Main: React.FC<IMainProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <MainWappered {...{ ...props, uiStore: uistore }} />
    )
}