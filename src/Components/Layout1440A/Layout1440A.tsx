// import styled from "styled-components";
import classNames from 'classnames';
import * as React from 'react';
import { IcssTaggedTemplateObject, themeMakerWithDomKey } from "wowgo-utils";
import { ICompositeComponentProps } from "../Interface/Interface";
import { Span, Box, Row } from "../";
import { theme } from './Theme';
import { ConfigConsumer, IConfigContextProps, IinitialUiStore, IWowgoUIContext, WowgoUIContext } from '../Context/Context';


//---------------------暫不提供本組件----------------------------

/**
 * Layout1440A 組件的 props 介面，已繼承介面 ICompositeComponentProps<ILayout1440AThemeWithKey>
 */
export interface ILayout1440AProps extends ICompositeComponentProps<ILayout1440AThemeWithKey> {
    type?: 'horizontal' | 'vertical';
    orientation?: 'left' | 'right' | 'center';
    dashed?: boolean;
}

/**
 * Layout1440A 組件內 具有 DomKey 的 IcssTaggedTemplateObject 介面物件
 */
export interface ILayout1440AThemeWithKey {
    dividerBox?: IcssTaggedTemplateObject;
    dividerSpan?: IcssTaggedTemplateObject;
    [key: string]: IcssTaggedTemplateObject | undefined;
}

/**
 * Layout1440AContextProps 介面
 */
export interface Layout1440AContextProps {
    siderHook: {
        addSider: (id: string) => void;
        removeSider: (id: string) => void;
    };
}
/**
 * Layout1440AContext is React.Context of Layout Component
 */
export const Layout1440AContext = React.createContext<Layout1440AContextProps>({
    siderHook: {
        addSider: () => null,
        removeSider: () => null,
    },
});

/**
 * Layout1440A 為可夾帶說明文字的分隔線組件
 * @param props 使用介面 ILayout1440AProps
 * @returns 一個可夾帶說明文字的分隔線組件
 */
export const Layout1440A: React.FC<ILayout1440AProps> = (props) => {

    const { uiStore: uistore } = React.useContext<IWowgoUIContext>(WowgoUIContext)

    return (
        <ConfigConsumer>
            {({ defaultGetPrefixCls, configConsumerTheme }: IConfigContextProps) => {
                const {
                    prefixCls: customizePrefixCls,
                    type = 'horizontal',
                    orientation = 'center',
                    dashed,
                    className,
                    classNamesAppend,
                    children,
                    ...restProps
                } = props;

                const prefixCls = defaultGetPrefixCls('divider', customizePrefixCls);
                const orientationPrefix = orientation.length > 0 ? `-${orientation}` : orientation;
                const hasChildren = !!children;
                const classString = classNames(
                    prefixCls,
                    `${prefixCls}-${type}`,
                    {
                        [`${prefixCls}-with-text`]: hasChildren,
                        [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
                        [`${prefixCls}-dashed`]: !!dashed,
                    },
                    classNamesAppend,
                );

                return (
                    <>
                        <Row
                            {...restProps}
                            className={`${props.className} ${classString} wowgo-divider-box`}
                            theme={themeMakerWithDomKey<ILayout1440AThemeWithKey, IcssTaggedTemplateObject, IinitialUiStore>(props, props.theme, theme({ ...props, hasChildren, uiStore: uistore }), uistore, "dividerBox")}
                        >

                        </Row>
                        <Box
                            {...restProps}
                            className={`${props.className} ${classString} wowgo-divider-box`}
                            theme={themeMakerWithDomKey<ILayout1440AThemeWithKey, IcssTaggedTemplateObject, IinitialUiStore>(props, props.theme, theme({ ...props, hasChildren, uiStore: uistore }), uistore, "dividerBox")}
                        >
                            {props.children &&
                                <Span
                                    className={`${props.className} ${prefixCls}-inner-text wowgo-dividerSpan`}
                                    theme={themeMakerWithDomKey<ILayout1440AThemeWithKey, IcssTaggedTemplateObject, IinitialUiStore>(props, props.theme, theme({ ...props, hasChildren, uiStore: uistore }), uistore, "dividerSpan")}
                                >
                                    {props.children}
                                </Span>
                            }
                        </Box>
                    </>
                );
            }}
        </ConfigConsumer>
    )
}