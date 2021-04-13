import { IWowgoUIActions, WowgoUIActionTypes } from './Actions'

export function wowgoUI(state = initialState, action: IWowgoUIActions) {

    switch (action.type) {
        case WowgoUIActionTypes.WOWGOUI_REWRITE:
            return {
                ...action.rewrite
            };
        case WowgoUIActionTypes.WOWGOUI_RESET:
            return initialState;
        default:
            return state;
    }
}

/**
 * wowgoUI Store 初始值
 */
export const initialState: IinitialState = {
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
export interface IinitialState {
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
    spacing: {
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
    defineTheme: {
        [key: string]: any;
    },
    /** 斷點 */
    breakpoint: {
        /** 預設斷點 */
        default: {
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
 * 佔位用test reducer
 * @param state 
 * @param action 
 * @returns 
 */
export function test(state = {}, action: any) {

    switch (action.type) {
        default:
            return state;
    }
}