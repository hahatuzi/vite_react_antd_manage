import {createSlice} from '@/reduxjs/toolkit'

const userStore = createSlice({
  name:'user',
  initialState:{
    token:localStorage.getItem('token_key') || ''
  },
  // 同步修改方法
  reducer:{
    setToken(state, action){
      state.token = action.payload
      localStorage.setItem('token_key', action.payload)
    }
  }
})
const Login = (form) => {
  return async (dispatch) => {
    // const res = await request('/login',form)
    // 提交同步action进行token存储
    dispatch(setToken('eu89re=='))
  }
}

const {setToken} = userStore.actions
const userReducer = userStore.reducer

export {Login, setToken}
export default userReducer