export enum WowgoUIActionTypes {
    WOWGOUI_REWRITE = 'WOWGOUI_REWRITE',
    WOWGOUI_RESET = 'WOWGOUI_RESET',
}

/** IWowgoUIActionRewrite 覆寫 WowgoUI Store 的 Action 介面 */
export interface IWowgoUIActionRewrite {
    /** action type : WOWGOUI_REWRITE 覆寫 WowgoUI Store 的 Action */
    type: WowgoUIActionTypes.WOWGOUI_REWRITE;
    /** 新的 store */
    rewrite: any;
}

/** IWowgoUIActionReset 重置為初始 WowgoUI Store 的 Action 介面 */
export interface IWowgoUIActionReset {
    /** action type : WOWGOUI_RESET 重置為初始 WowgoUI Store 的 Action */
    type: WowgoUIActionTypes.WOWGOUI_RESET;
}

export type IWowgoUIActions = IWowgoUIActionRewrite | IWowgoUIActionReset;
