import * as React from 'react';
import { /* gcs, */ WowgoProvider, createWowgoStore, /*useWowgoSelector, useWowgoDispatch,*/ combineReducers } from 'wowgo-state-react';
import { wowgoUI, test } from './Reducers'

const combinedReducer = combineReducers({
    wowgoUI,
    test
})

const Stroe = createWowgoStore(combinedReducer)

interface WowgoUiProviderProps {
    /**
     * 需要使用本Context的所有子組件
     */
    children?: React.ReactNode;
}

export const WowgoUiProvider: React.FC<WowgoUiProviderProps> = (props) => {
    // console.log(props)
    return (
        <WowgoProvider store={Stroe}>
            {props.children}
        </WowgoProvider>
    )
}