import { createSlice } from '@reduxjs/toolkit'

interface User {
    username: string,

}


const initialState = {
    user: {

    }
}

const authSlice = createSlice({
    name: "author",
    initialState: {},
    reducers: {
        setuser(state, action) { }
        setStatus(state, action) { }
    })


export const { setuser, setStatus } = authSlice.actions
export default authSlice.reducer