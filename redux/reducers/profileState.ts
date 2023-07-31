import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProfileStateProps } from '../interfaces';

const initialState: ProfileStateProps = {
  name: "",
  email: "",
  phone: "",
  password: "",
  termsAndService: 0
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<String>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<String>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<String>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<String>) => {
      state.password = action.payload;
    },
    setTermsAndService: (state, action: PayloadAction<Number>) => {
      state.termsAndService = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setEmail, setPhone, setPassword, setTermsAndService } = profileSlice.actions
export default profileSlice.reducer