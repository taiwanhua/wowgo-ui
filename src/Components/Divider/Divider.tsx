// import styled from "styled-components";
import classNames from 'classnames';
import { useWowgoSelector } from "wowgo-state-react";
import { IcssTaggedTemplateObject, themeMakerWithDomKey } from "wowgo-utils";
import { ICompositeComponentProps } from "../Interface/Interface";
import { Span, Box } from "../";
import { theme } from './Theme';
import { ConfigConsumer, IConfigContextProps } from '../Context/Context';

/**
 * Divider 組件的 props 介面，已繼承介面 ICompositeComponentProps<IDividerThemeWithKey>
 */
export interface IDividerProps extends ICompositeComponentProps<IDividerThemeWithKey> {
    type?: 'horizontal' | 'vertical';
    orientation?: 'left' | 'right' | 'center';
    dashed?: boolean;
}

/**
 * Divider 組件內 具有 DomKey 的 IcssTaggedTemplateObject 介面物件
 */
export interface IDividerThemeWithKey {
    dividerBox?: IcssTaggedTemplateObject;
    dividerSpan?: IcssTaggedTemplateObject;
    [key: string]: IcssTaggedTemplateObject | undefined;
}

/**
 * Divider 為可夾帶說明文字的分隔線組件
 * @param props 使用介面 IDividerProps
 * @returns 一個可夾帶說明文字的分隔線組件
 */
export const Divider: React.FC<IDividerProps> = (props) => {

    const uistore = useWowgoSelector<any, object>((state) => state.wowgoUI)

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
                    <Box
                        {...restProps}
                        className={`${props.className} ${classString} wowgo-divider-box`}
                        theme={themeMakerWithDomKey<IDividerThemeWithKey, IcssTaggedTemplateObject>(props, props.theme, theme({ ...props, hasChildren, configConsumerTheme }), uistore, "dividerBox")}
                    >
                        {props.children &&
                            <Span
                                className={`${props.className} ${prefixCls}-inner-text wowgo-dividerSpan`}
                                theme={themeMakerWithDomKey<IDividerThemeWithKey, IcssTaggedTemplateObject>(props, props.theme, theme({ ...props, hasChildren, configConsumerTheme }), uistore, "dividerSpan")}
                            >
                                {props.children}
                            </Span>
                        }
                    </Box>
                );
            }}
        </ConfigConsumer>
    )
}