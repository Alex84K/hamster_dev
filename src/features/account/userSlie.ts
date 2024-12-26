import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import { Auth, User } from "./type";


const initialState: Auth = {
    auth: false,
    user: {} as User
}

export const accountSlice = createAppSlice({
    name: "account",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: create => ({
        login: create.reducer((state, action: PayloadAction<User>) => {
            if (action.payload.username === 'admin' && action.payload.password === 'admin')
                state.auth = true,
                    state.user.username = action.payload.username
        }),
        logout: create.reducer((state) => {
                    state = initialState
        }),
    }),
    selectors: {
        selectUser: account => account.user,
        selectAuth: account => account.auth,
    },
})

// Action creators are generated for each case reducer function.
export const { login, logout } = accountSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectUser, selectAuth } = accountSlice.selectors