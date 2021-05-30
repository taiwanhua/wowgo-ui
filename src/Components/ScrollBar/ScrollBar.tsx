// import styled from "styled-components";
import classNames from 'classnames';
import * as React from 'react';
import { IcssTaggedTemplateObject } from "wowgo-utils";
import { ICompositeComponentProps } from "../Interface/Interface";
import { positionValues, Scrollbars } from "react-custom-scrollbars";

/**
 * ScrollBar 組件的 props 介面，已繼承介面 ICompositeComponentProps<IScrollBarThemeWithKey>
 */
export interface IScrollBarProps extends ICompositeComponentProps<IScrollBarThemeWithKey> {
    /** 滾動時滾動軸的動畫速度曲線 */
    animationType?: 'easeInOutQuad' | 'easeInCubic' | 'inOutQuintic';
    /** 滾動事件 */
    onScroll?: React.UIEventHandler<any>;
    /** 滾動事件(動畫) */
    onScrollFrame?: (values: positionValues) => void;
    /** 滾動開始時事件 */
    onScrollStart?: () => void;
    /** 滾動停止時事件 */
    onScrollStop?: () => void;
    /** positionValues 變化時事件 */
    onUpdate?: (values: positionValues) => void;
    /** 要渲染的內容組件 */
    renderView?: React.FunctionComponent<any>;
    /** 要客製的水平滾動軌道 */
    renderTrackHorizontal?: React.FunctionComponent<any>;
    /** 要客製的垂直滾動軌道 */
    renderTrackVertical?: React.FunctionComponent<any>;
    /** 要客製的水平滾動條 */
    renderThumbHorizontal?: React.FunctionComponent<any>;
    /** 要客製的垂直滾動條 */
    renderThumbVertical?: React.FunctionComponent<any>;
    /** */
    // tagName?: string;
    /** 當內容組件無溢出的時候，是否要隱藏滾動軌道，預設false */
    hideTracksWhenNotNeeded?: boolean;
    /** autoHide 為 true 時，滾動軌道除了滾動時可見，其他時候將自動隱藏 */
    autoHide?: boolean;
    /** 隱藏滾動軌道延遲時間 (預設1000ms) */
    autoHideTimeout?: number;
    /** 隱藏滾動軌道動畫時長 (200ms) */
    autoHideDuration?: number;
    /** 設置滾動條大小為固定 px */
    thumbSize?: number;
    /** 設置滾動條最小 px */
    thumbMinSize?: number;
    /** 如果應用程序同時在客戶端和服務器上運行，請設置 true 以確保客戶端和服務器上的初始標記相同，預設為false */
    universal?: boolean;
    /** 是否啟用自動高度 */
    autoHeight?: boolean;
    /** 最小自動高度 */
    autoHeightMin?: number | string;
    /** 最大自動高度 */
    autoHeightMax?: number | string;
    /** 滾動視窗寬度、高度等樣式*/
    style?: React.CSSProperties;
}

/**
 * ScrollBar 組件內 具有 DomKey 的 IcssTaggedTemplateObject 介面物件
 */
export interface IScrollBarThemeWithKey {
    [key: string]: IcssTaggedTemplateObject | undefined;
}

/**
 * ScrollBar 滾動條組件
 * @param props 使用介面 IScrollBarProps
 * @returns 滾動條組件與其傳入的子組件
 * @example
 * 若有需要支援宜動設備請記得設定 :
 * <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
 */
export class ScrollBar extends React.Component<IScrollBarProps, {}> {

    refs: {
        [string: string]: any;
        scrollbars: Scrollbars;
    }

    constructor(props: IScrollBarProps) {
        super(props);
        this.easeInOutQuad = this.easeInOutQuad.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.scrollToLeft = this.scrollToLeft.bind(this);
        this.scrollToRight = this.scrollToRight.bind(this);
        this.getScrollLeft = this.getScrollLeft.bind(this);
        this.getScrollTop = this.getScrollTop.bind(this);
        this.getScrollWidth = this.getScrollWidth.bind(this);
        this.getScrollHeight = this.getScrollHeight.bind(this);
        this.getClientWidth = this.getClientWidth.bind(this);
        this.getClientHeight = this.getClientHeight.bind(this);
        this.getValues = this.getValues.bind(this);
        this.refs = { scrollbars: {} as Scrollbars };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    scrollTop(top: number, callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollTop = scrollbars.getScrollTop();
        let [start, change, currentTime, increment, duration] = [scrollTop, (top - scrollTop), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollTop(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    scrollLeft(left: number, callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollLeft = scrollbars.getScrollLeft();
        let [start, change, currentTime, increment, duration] = [scrollLeft, (left - scrollLeft), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollLeft(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    scrollToTop(callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollTop = scrollbars.getScrollTop();
        let [start, change, currentTime, increment, duration] = [scrollTop, (0 - scrollTop), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollTop(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    scrollToBottom(callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollTop = scrollbars.getScrollTop();
        const ScrollHeight = scrollbars.getScrollHeight();
        let [start, change, currentTime, increment, duration] = [scrollTop, (ScrollHeight - scrollTop), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollTop(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    scrollToLeft(callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollLeft = scrollbars.getScrollLeft();
        let [start, change, currentTime, increment, duration] = [scrollLeft, (0 - scrollLeft), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollLeft(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    scrollToRight(callback?: () => void): void {

        const { animationType = 'easeInOutQuad' } = this.props;
        const { scrollbars } = this.refs;
        const functionByanimationType = (this as any)[`${animationType}`];
        const scrollLeft = scrollbars.getScrollLeft();
        const scrollWidth = scrollbars.getScrollWidth();
        let [start, change, currentTime, increment, duration] = [scrollLeft, (scrollWidth - scrollLeft), 0, 20, 500]

        let animateScroll = function () {
            // 增加當前時間
            currentTime += increment;

            // 使用所選的動畫函數計算新的滾動軸位置
            let scrollNewPosition = functionByanimationType(currentTime, start, change, duration);

            // 移動位置
            scrollbars.scrollLeft(scrollNewPosition)

            // 執行動畫，除非動畫結束
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    // 動畫結束時執行的回調函數
                    callback();
                }
            }
        };
        animateScroll();
    }

    getScrollLeft(): number {
        return this.refs.scrollbars.getScrollLeft();
    }

    getScrollTop(): number {
        return this.refs.scrollbars.getScrollTop();
    }

    getScrollWidth(): number {
        return this.refs.scrollbars.getScrollHeight();
    }

    getScrollHeight(): number {
        return this.refs.scrollbars.getScrollHeight();
    }

    getClientWidth(): number {
        return this.refs.scrollbars.getClientWidth();
    }

    getClientHeight(): number {
        return this.refs.scrollbars.getClientWidth();
    }

    getValues(): positionValues {
        return this.refs.scrollbars.getValues();
    }

    /**
     * 動畫函數 easeInOutQuad
     * @param currentTime 當前時間
     * @param start 開始時間
     * @param change 改變時間
     * @param duration 過渡時間
     * @returns 當前滾動條應該被設定的值
     */
    easeInOutQuad(currentTime: number, start: number, change: number, duration: number): number {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime--;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }

    /**
     * 動畫函數 easeInCubic
     * @param currentTime 當前時間
     * @param start 開始時間
     * @param change 改變時間
     * @param duration 過渡時間
     * @returns 當前滾動條應該被設定的值
     */
    easeInCubic(currentTime: number, start: number, change: number, duration: number): number {
        let tc = (currentTime /= duration) * currentTime * currentTime;
        return start + change * (tc);
    };

    /**
     * 動畫函數 inOutQuintic
     * @param currentTime 當前時間
     * @param start 開始時間
     * @param change 改變時間
     * @param duration 過渡時間
     * @returns 當前滾動條應該被設定的值
     */
    inOutQuintic(currentTime: number, start: number, change: number, duration: number): number {
        let ts = (currentTime /= duration) * currentTime,
            tc = ts * currentTime;
        return start + change * (6 * tc * ts + -15 * ts * ts + 10 * tc);
    };

    render() {
        const {
            onScroll,
            onScrollFrame,
            onScrollStart,
            onScrollStop,
            onUpdate,
            renderView,
            renderTrackHorizontal,
            renderTrackVertical,
            renderThumbHorizontal,
            renderThumbVertical,
            tagName,
            hideTracksWhenNotNeeded,
            autoHide,
            autoHideTimeout,
            autoHideDuration,
            thumbSize,
            thumbMinSize,
            universal,
            autoHeight,
            autoHeightMin,
            autoHeightMax,
            style,
            children,
            className,
            classNamesAppend
        } = this.props;

        const classString = classNames(
            className,
            classNamesAppend
        );

        return <Scrollbars
            className={classString}
            onScroll={onScroll && ((event) => { onScroll(event); })}
            onScrollFrame={onScrollFrame && ((value) => { onScrollFrame(value); })}
            onScrollStart={onScrollStart && (() => { onScrollStart(); })}
            onScrollStop={onScrollStop && (() => { onScrollStop(); })}
            onUpdate={onUpdate && ((value) => { onUpdate(value); })}
            renderView={renderView}
            renderTrackHorizontal={renderTrackHorizontal}
            renderTrackVertical={renderTrackVertical}
            renderThumbHorizontal={renderThumbHorizontal}
            renderThumbVertical={renderThumbVertical}
            tagName={tagName}
            hideTracksWhenNotNeeded={hideTracksWhenNotNeeded}
            autoHide={autoHide}
            autoHideTimeout={autoHideTimeout}
            autoHideDuration={autoHideDuration}
            thumbSize={thumbSize}
            thumbMinSize={thumbMinSize}
            universal={universal}
            autoHeight={autoHeight}
            autoHeightMin={autoHeightMin}
            autoHeightMax={autoHeightMax}
            style={style}
            ref="scrollbars"
        >
            {children}
        </Scrollbars>
    }
}