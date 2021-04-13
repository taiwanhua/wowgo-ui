
import { IcssTaggedTemplateObject } from "wowgo-utils";

export const theme: IcssTaggedTemplateObject = {
    base: {
        css: {
            //#region Flex設置
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            flexDirection: "row",//控制子組件排列方向: row、row-reverse、column、column-reverse
            justifyContent: "flex-start",  //控制子組件在水平方向上的對齊: flex-start、center、flex-end、space-between、space-around、space-evenly
            alignItems: "flex-start",   //控制子組件在垂直方向上的對齊: flex-start、center、flex-end、stretch、baseline
            //#endregion
            //#region 定位
            position: "relative",       //控制position屬性: static、relative、fixed、absolute、sticky、inherit、initial
            //#endregion
            //#region 寬高
            height: "auto",
            minWidth: '0',//修復滾動條 x 方向
            //#endregion
            //#region 背景
            backgroundColor: "transparent",
            backgroundImage: "none",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "repeat",
            backgroundSize: "auto auto",
            //#endregion
            //#region 游標
            cursor: "auto",
            //#endregion
            //#region 字體
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
            whiteSpace: "normal",
            textAlign: 'initial',
            fontSize: "medium",
            color: '#000'
            //#endregion
        },
    },
}
