import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from 'services/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      //logout
      .addCase(logOut.pending, (state, _) => {
        state.isLoading = true;
        return state;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, _) => {
        state.isLoading = false;
      })
      //login
      .addCase(login.pending, (state, _) => {
        state.isLoading = true;
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //registration
      .addCase(register.pending, (state, _) => {
        state.isLoading = true;
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })
      //is refreshing page
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

//Selectors
export const getContactsValue = state => state.contacts.user;
export const getLoadingValue = state => state.contacts.isLoading;
export const selectIsLoggedIn = state => state.contacts.isLoggedIn;
export const selectIsRefreshing = state => state.contacts.isRefreshing;
export const selectToken = state => state.contacts.token;
