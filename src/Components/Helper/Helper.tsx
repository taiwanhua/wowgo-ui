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
 export const occupy = (suffixCls?: string, customizePrefixCls?: string, combineCustomizePrefix?: boolean): string => {
    if (customizePrefixCls) return combineCustomizePrefix ? `${customizePrefixCls}-${suffixCls}` : customizePrefixCls;

    return suffixCls ? `wowgo-${suffixCls}` : 'wowgo';
};