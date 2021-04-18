import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Box 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IBoxProps extends IBaseComponentProps {
}

/**
 * Box 組件，未傳入 uiStore 時
 */
export const BoxWappered = styled.div.attrs<IBoxProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IBoxProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

// export const BoxWappered = styled((props: IBoxProps) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }
// ).attrs<IBoxProps>((props) => ({
//    // disabled: props.disabled,
// }))`
//     ${(props: IBoxProps) => themeMaker(props, props.theme, DefaultTheme, props.uiStore)}
// `;

/**
 * Box為 一個具備基礎屬性的 div
 * @param props 使用介面 IBoxProps
 * @returns 一個具備基礎屬性的 div
 */
export const Box: React.FC<IBoxProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <BoxWappered {...{ ...props, uiStore: uistore }} />
    )
}