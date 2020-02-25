import { createAction, handleActions } from 'redux-actions';
import { SignUpPayload } from '../../constants/types';

export const ACTION_SIGN_UP = 'ACTION_SIGN_UP';

export const signUp = createAction<SignUpPayload>(ACTION_SIGN_UP)

const defaultState = {};

const reducer = handleActions(
    {
        [ACTION_SIGN_UP]: (state, action) => state
    },
    defaultState
);

export default reducer;