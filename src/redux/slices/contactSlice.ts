import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactType } from "../../utils/types";

const initialState: contactType[] = [];

const contactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactType>) => {
      state.push(action.payload);
    },
    editContact:(state,action:PayloadAction<contactType>)=>{
      const index = state.findIndex((obj)=>obj.id===action.payload.id);
      state.splice(index,1,action.payload);
     
    },
    deleteContact:(state,action:PayloadAction<string>)=>{
      const index = state.findIndex((obj)=>obj.id===action.payload);
      state.splice(index,1);
    }
  },
});

export const { addContact,editContact,deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
