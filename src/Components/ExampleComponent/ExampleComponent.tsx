import * as React from "react";
import styled from "styled-components";


// import original module declarations
// import 'styled-components';

// // and extend them!
// declare module 'styled-components' {
//     export interface DefaultTheme {
//         borderRadius: string;

//         colors: {
//             main: string;
//             secondary: string;
//         };
//     }
// }

export interface BaseProps {
    className?: string;
    disabled?: boolean;
}

export interface TitleProps extends BaseProps {
    backgroundColor?: string;
    title: string;
}

export interface TitleWithH1Props extends BaseProps {
    backgroundColor?: string;
}

const TitleWithH1 = styled.h1.attrs<TitleWithH1Props>((props) => ({ ...(props.disabled && { disabled: true }) }))`
    background-color: ${(props: TitleWithH1Props) => (props.backgroundColor ?? "#d4d4d4")};
`;


// const TitleWith = styled((props: TitleProps) => (
//     <h1 className={props.className}>
//         {props.title}
//     </h1>
// )).attrs<TitleProps>((props) => ({ ...(props.disabled && { disabled: true }) }))`
//     background-color: ${(props: TitleProps) => (props.backgroundColor ?? "#d4d4d4")};
// `;



export interface ExampleComponentProps {
    /**
     * ExampleComponentProps 的文字
     */
    title: string

    /**
     * disabled 參數
     */
    disabled?: string

    /**
     * ExampleComponentProps 的背景顏色
     */
    backgroundColor: string
}

export const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {

    return (
        <React.Fragment>
            {/* <TitleWith title={props?.title} backgroundColor={props.backgroundColor} /> */}
            <TitleWithH1 backgroundColor={props.backgroundColor} >{props?.title}</TitleWithH1>
        </React.Fragment>
    )
}