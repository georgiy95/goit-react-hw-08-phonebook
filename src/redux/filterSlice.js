import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/operations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contactsList: [],
    filter: '',
    isLoading: false,
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //get user contacts
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
        return state;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsList = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      // addContacts
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsList.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //delete contact
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsList = state.contactsList.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addFilter } = filterSlice.actions;

//Selectors
export const selectContactsList = state => state.filter.contactsList;
export const getFilterValue = state => state.filter.filter;
