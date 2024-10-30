import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}
interface IChangeProfilePayload {
  useremail: string;
  userpassword: string;
}

export interface IUserSliceState {
  user: null | IChangeProfilePayload; 
}

export const initialState: IUserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action:PayloadAction<IChangeProfilePayload>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer; 
export const { changeUser } = userSlice.actions;  
