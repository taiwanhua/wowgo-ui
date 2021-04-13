import styled from "styled-components";
import { useWowgoSelector } from "wowgo-state-react";
import { themeMaker } from "wowgo-utils";
import { IBaseComponentProps } from "../Interface/Interface";
import { theme } from './Theme'

/**
 * Row 組件的 props 介面，已繼承介面 IBaseComponentProps, IDivHTMLAttr
 */
export interface IRowProps extends IBaseComponentProps {
}

/**
 * Row 組件，未傳入 uiStore 時
 */
export const RowWappered = styled.div.attrs<IRowProps>((props) => ({
    // disabled: props.disabled,
}))`
    ${(props: IRowProps) => themeMaker(props, props.theme, theme, props.uiStore)}
`;

/**
 * Row為 一個具備下列與其他基礎屬性的 div，推薦與Cell組件搭配使用。
 * * display: "flex"
 * * flex-direction: "row"
 * * justify-content: "flex-start" 
 * * align-items: "flex-start" 
 * @param props 使用介面 IRowProps
 * @returns Row組件，推薦與Cell組件搭配使用。
 */
export const Row: React.FC<IRowProps> = (props) => {

    const uistore = useWowgoSelector<any, any>((state) => state.wowgoUI)

    return (
        <RowWappered {...{ ...props, uiStore: uistore }} />
    )
}