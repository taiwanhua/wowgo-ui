import * as React from 'react'
import { mergeDeep } from 'immutable'

/**
 * wowgo-UI 預設包含前(或)後綴 css class的函數 
 * @param suffixCls css class 後綴
 * @param customizePrefixCls 自定義 css class 前綴
 * @param combineCustomizePrefix 是否合併自定義 css class 前綴與後綴
 * @returns 包含前綴或後綴的 css class 
 * @example
 * defaultGetPrefixCls("box") // 回傳 "wowgo-box"
 * defaultGetPrefixCls("box", "prefix") // 回傳 "prefix"
 * defaultGetPrefixCls("box", "prefix", true) // 回傳 "prefix-box"
 */
export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string, combineCustomizePrefix?: boolean): string => {
    if (customizePrefixCls) return combineCustomizePrefix ? `${customizePrefixCls}-${suffixCls}` : customizePrefixCls;

    return suffixCls ? `wowgo-${suffixCls}` : 'wowgo';
};

export interface IConfigContextProps {
    defaultGetPrefixCls: (suffixCls?: string, customizePrefixCls?: string, combineCustomizePrefix?: boolean) => string;
    /* CSS 屬性參數化 */
    configConsumerTheme: IConfigConsumerTheme
    // ...
}

export interface IConfigConsumerTheme {
    [key: string]: string | number | boolean | undefined | IConfigConsumerTheme | (string | number | boolean | undefined | IConfigConsumerTheme)[];
}

export const configConsumerTheme: IConfigConsumerTheme = {
    divider: {
        borderColor: "rgba(0, 0, 0, 0.2)"
    }
}

export const ConfigContext = React.createContext<IConfigContextProps>({
    // 透過 Context 提供一些預設函數或值 ( without provider )
    defaultGetPrefixCls: defaultGetPrefixCls,
    configConsumerTheme
    // ...
});

export const ConfigConsumer = ConfigContext.Consumer;


// new provider below will replace Redux uiStore

/**
 * wowgoUI Store 初始值
 */
export const initialUiStore: IinitialUiStore = {
    component: {
        divider: {
            borderColor: "rgba(0,0,0,0.2)"
        },
    },
    fontFamily: {
        default: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`
    },
    fontSize: {
        s: "14px",
        sm: "16px",
        m: "24px",
        ml: "38px",
        l: "46px"
    },
    lineHeight: {
        s: "22px",
        sm: "24px",
        m: "32px",
        ml: "46px",
        l: "54px"
    },
    fontWeight: {
        s: 400,
        m: 500,
        l: 600,
    },
    colors: {
        default: {
            default_1: "#e6f7ff",
            default_2: "#bae7ff",
            default_3: "#91d5ff",
            default_4: "#69c0ff",
            default_5: "#40a9ff",
            default_6: "#1890ff",
            default_7: "#096dd9",
            default_8: "#0050b3",
            default_9: "#003a8c",
            default_10: "#002766"
        },
        neutral: {
            neutral_1: "#ffffff",
            neutral_2: "#fafafa",
            neutral_3: "#f5f5f5",
            neutral_4: "#f0f0f0",
            neutral_5: "#d9d9d9",
            neutral_6: "#bfbfbf",
            neutral_7: "#8c8c8c",
            neutral_8: "#595959",
            neutral_9: "#434343",
            neutral_10: "#262626",
            neutral_11: "#1f1f1f",
            neutral_12: "#141414",
            neutral_13: "#000000"
        },
    },
    size: {},
    text: {},
    spacing: {
        times4px: (spacing: number) => `${spacing * 4}px`,
        times8px: (spacing: number) => `${spacing * 8}px`,
    },
    defineTheme: {},
    breakpoint: {
        default: {
            mobileS: `(min-width: 320px)`,
            mobileM: `(min-width: 375px)`,
            mobileL: `(min-width: 425px)`,
            tablet: `(min-width: 768px)`,
            laptop: `(min-width: 1024px)`,
            laptopL: `(min-width: 1440px)`,
            desktop: `(min-width: 1920px)`,
            desktopL: `(min-width: 2560px)`,
        },
    }
}

/**
 * wowgoUI Store 初始值介面
 */
export interface IinitialUiStore {
    /** 組件使用樣式參數，已存在的key*/
    component?: {
        /** Divider 組件 */
        divider?: {
            borderColor?: string;
            [key: string]: any;
        },

    };
    /** 字體 */
    fontFamily?: {
        /** 預設使用字體 */
        default?: string | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`
        [key: string]: any;
    };
    /** 字體大小 
     *  - 推薦使用 fontSize(大小) 對應 lineHeight(行高)
     *  - 大小 | 12 | 14 | 16 | 20 | 24 | 30 | 38 | 46 | 56 | 68 |
     *  - 行高 | 20 | 22 | 24 | 28 | 32 | 38 | 46 | 54 | 64 | 76 |
    */
    fontSize?: {
        s?: string | "14px" | "0.875rem";
        sm?: string | "16px" | "1rem";
        m?: string | "24px" | "1.5rem";
        ml?: string | "38px" | "2.375rem";
        l?: string | "46px" | "2.875rem";
        [key: string]: any;
    };
    /** 字體行高 
     *  - 推薦使用 fontSize(大小) 對應 lineHeight(行高)
     *  - 大小 | 12 | 14 | 16 | 20 | 24 | 30 | 38 | 46 | 56 | 68 |
     *  - 行高 | 20 | 22 | 24 | 28 | 32 | 38 | 46 | 54 | 64 | 76 |
    */
    lineHeight?: {
        s?: string | "22px" | "1.375rem";
        sm?: string | "24px" | "1.5rem";
        m?: string | "32px" | "2rem";
        ml?: string | "46px" | "2.875rem";
        l?: string | "54px" | "3.375rem";
        [key: string]: any;
    };
    /** 字體粗度 */
    fontWeight?: {
        s?: string | number | 400;
        m?: string | number | 500;
        l?: string | number | 600;
        [key: string]: any;
    };
    /** 顏色相關 */
    colors?: {
        /** 預設色板 */
        default?: {
            default_1?: string | "#e6f7ff";
            default_2?: string | "#bae7ff";
            default_3?: string | "#91d5ff";
            default_4?: string | "#69c0ff";
            default_5?: string | "#40a9ff";
            default_6?: string | "#1890ff";
            default_7?: string | "#096dd9";
            default_8?: string | "#0050b3";
            default_9?: string | "#003a8c";
            default_10?: string | "#002766";
        },
        /** 中性色板 */
        neutral?: {
            neutral_1?: string | "#ffffff";
            neutral_2?: string | "#fafafa";
            neutral_3?: string | "#f5f5f5";
            neutral_4?: string | "#f0f0f0";
            neutral_5?: string | "#d9d9d9";
            neutral_6?: string | "#bfbfbf";
            neutral_7?: string | "#8c8c8c";
            neutral_8?: string | "#595959";
            neutral_9?: string | "#434343";
            neutral_10?: string | "#262626";
            neutral_11?: string | "#1f1f1f";
            neutral_12?: string | "#141414";
            neutral_13?: string | "#000000";
        };
        [key: string]: any;
    };
    /** 寬度或高度描述 */
    size?: {
        [key: string]: any;
    };
    /** 文字描述 */
    text?: {
        [key: string]: any;
    };
    /** 間距 */
    spacing?: {
        s?: string | "4px" | "0.25rem";
        sm?: string | "8px" | "0.5rem";
        m?: string | "16px" | "1rem";
        ml?: string | "24px" | "1.5rem";
        l?: string | "32px" | "2rem";
        times4px?: (spacing: number) => string;
        times8px?: (spacing: number) => string;
        [key: string]: any;
    },
    /** 自定義樣式 */
    defineTheme?: {
        [key: string]: any;
    },
    /** 斷點 */
    breakpoint?: {
        /** 預設斷點 */
        default?: {
            mobileS?: string | `(min-width: 320px)`;
            mobileM?: string | `(min-width: 375px)`;
            mobileL?: string | `(min-width: 425px)`;
            tablet?: string | `(min-width: 768px)`;
            laptop?: string | `(min-width: 1024px)`;
            laptopL?: string | `(min-width: 1440px)`;
            desktop?: string | `(min-width: 1920px)`;
            desktopL?: string | `(min-width: 2560px)`;
            [key: string]: any;
        },
        [key: string]: any;
    }
    [key: string]: any;
}

/**
 * WowgoUIContext 介面
 */
export interface IWowgoUIContext {
    uiStore: IinitialUiStore
}

/** wowgoUI Context */
export const WowgoUIContext = React.createContext<IWowgoUIContext>({ uiStore: initialUiStore });

/**
 * WowgoUIProvider 介面
 */
export interface IWowgoUIProvider {
    /** 子節點 */
    children: React.ReactNode
    /** 傳入後將可以在覆寫樣式時取用 uiStore */
    uiStore?: IinitialUiStore
}

/**
 * WowgoUIProvider
 * @param props 使用介面 IWowgoUIProvider
 * @returns WowgoUIContext.Provider
 * @example
 * // 在根組件外以 WowgoUIProvider 包裹，以使用 uiStore
 * // 預覆寫樣式、或儲存樣式變數則傳入 uiStore (其繼承自 IinitialUiStore)
 * 
 * 
 * ReactDOM.render(
 *   <WowgoUIProvider uiStore={{...}}>
 *     <App />
 *   </WowgoUIProvider>,
 *   document.getElementById('root')
 * );
 * 
 */
export const WowgoUIProvider: React.FC<IWowgoUIProvider> = (props) => {

    const { children, uiStore: customStore } = props;

    const mergeOrNotStore = React.useMemo(() => {
        return (customStore === undefined) ? initialUiStore : mergeDeep(initialUiStore, customStore);
    }, [customStore]);

    return <WowgoUIContext.Provider value={{ uiStore: mergeOrNotStore }}>{children}</WowgoUIContext.Provider>;
}
