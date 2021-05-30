import * as React from "react";
import styled from "styled-components";
import { themeMaker } from "wowgo-utils";
import { IWowgoUIContext, WowgoUIContext } from "../Context/Context";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Section 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface ISectionProps extends IBaseComponentProps {
}

/**
 * Section 組件，未傳入 uiStore 時
 */
export const SectionWappered = styled.section.attrs<ISectionProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: ISectionProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

// export const SectionWappered = styled((props: ISectionProps) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }
// ).attrs<ISectionProps>((props) => ({
//    // disabled: props.disabled,
// }))`
//     ${(props: ISectionProps) => themeMaker(props, props.theme, DefaultTheme, props.uiStore)}
// `;

/**
 * Section為 一個具備基礎屬性的 div
 * @param props 使用介面 ISectionProps
 * @returns 一個具備基礎屬性的 div
 */
export const Section: React.FC<ISectionProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <SectionWappered {...{ ...props, uiStore: uistore }} />
    )
}