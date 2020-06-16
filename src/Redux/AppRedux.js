import {createActions, handleActions} from 'redux-actions'

const type ={
    TOGGLE_DARK_THEM: 'TOGGLE_DARK_THEM',
}

export const { toggleDarkTheme } = createActions(type.TOGGLE_DARK_THEM)

export const action = {
    toggleDarkTheme,
}

const defaultState = {
    isDarkTheme: false,
}

export const reducer = handleActions(
    {
        [toggleDarkTheme]: (state) =>({
            ...state,
            isDarkTheme: !state.isDarkTheme,
        })
    },
    defaultState
)