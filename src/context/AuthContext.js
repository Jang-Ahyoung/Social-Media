import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
// 1. 초기화 설정
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
};

// 2. context 내보내기
export const AuthContext = createContext(INITIAL_STATE);

// 2. 래핑하기 
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >{children}</AuthContext.Provider>
    )
}