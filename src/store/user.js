import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseJwt } from "../helper/parceJWT";
import { BASE_URL } from "../helper/api";

const initialState = {
  loading: false,
  error: false,
  user: {
    data: null,
    isAuth: false,
    register: false,
    access: null,
    user_id: null,
    edit_profile: false,
    role: "user" | "admin",
  },
  alert: {
    status: false,
    message: "",
  },
  change_password: {
    success: false,
    status: false,
    error: false,
  },
  edit_profile: {
    error: null,
    status: false,
  },
};

export const getUserData = createAsyncThunk(
  "user/getDate",
  async function (user_id) {
    try {
      const res = await fetch(
        `${BASE_URL}/users/${user_id}/`,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const registration = createAsyncThunk(
  "user/registration",
  async function ({ register, isRejectedWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/users/register/`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-type": "application/json",
            "X-CSRFToken":
              "3JnWjGY0Sr2TD6JxezCyWErqCiI3klVgCo0YBuQWTCcEmPKwH524vLhOKjGYurfw",
          },
          body: JSON.stringify(register),
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async function ({ sign, isRejectedWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/users/login/`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken":
              "yDlVS6NhH1vo9uD9YDayJ3uMwl0FA9Xu7iYXaUFdIcF9SdE8r9A4iakaEmYAKfhK",
          },
          body: JSON.stringify(sign),
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const initialize = createAsyncThunk(
  "user/initialize",
  async function (_, { isRejectedWithValue }) {
    const refresh = localStorage.getItem("refresh");
    if (!refresh) {
      return;
    }
    try {
      const res = await fetch(
        `${BASE_URL}/refresh/`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": " application/json",
            "X-CSRFToken":
              "obdUwxxpypaZBHNyk56KbGJKkTj8FWf9XQQWOlplzAkKkqOxNBwgKNz8sUh3P2zp",
          },
          body: JSON.stringify({ refresh: refresh }),
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/edit_profile",
  async function ({ id, edit_list }, { isRejectedWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/users/${id}/`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken":
              "EAuxVjiJLrXrLZ7J7tnI7eFeurri0d1Gdf7zd7aFMC7cuI8IAZNeGlvCCspdajlW",
          },
          body: JSON.stringify(edit_list),
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const deleteProfile = createAsyncThunk(
  "user/deleteProfile",
  async function (user_id, { isRejectedWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/users/${user_id}/`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            "X-CSRFToken":
              "EAuxVjiJLrXrLZ7J7tnI7eFeurri0d1Gdf7zd7aFMC7cuI8IAZNeGlvCCspdajlW",
          },
        }
      );
      if (!res.ok) {
        throw Error(res.status);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      return isRejectedWithValue(e);
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async function ({ token, change_form }, { isRejectedValue }) {
    try {
      const res = await fetch(`${BASE_URL}/users/change-password/`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken":
            "Ni7bKhT7RPY0WWLBoUPp79a8BNJhKkLpmXKd25L3S08LFFMARqfVGg0wJOHcUq5F",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(change_form),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      return isRejectedValue(e);
    }
  }
);

const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("refresh");
      state.user.data = null;
      state.user.isAuth = false;
      state.user.user_id = null;
      state.user.access = null;
      document.location.reload();
    },
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.user.data = action.payload;
    },
    [registration.pending]: (state) => {
      state.loading = true;
    },
    [registration.fulfilled]: (state, action) => {
      const { register } = action.meta.arg;
      const { success } = action.payload;
      if (success === true) {
        state.user.register = true;
      }
      state.loading = false;
    },
    [registration.rejected]: (state) => {
      state.error = true;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const { sign } = action.meta.arg;
      const { success } = action.payload;
      const { user_data } = action.payload;
      const { refresh_token, access_token } = action.payload;
      if (success === true) {
        state.user.isAuth = true;
        state.user.role = "admin";
        state.user.access = access_token;
        state.user.user_id = user_data.id;
        state.user.data = user_data;
        localStorage.setItem("refresh", refresh_token);
        state.alert.status = true;
        state.alert.message = "login muafaqiyatli amalga oshirildi";
      }
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.error = true;
      state.error = state.alert.status;
      state.alert.message = "forma hato toldirildi";
    },
    [initialize.pending]: (state) => {
      state.loading = true;
    },
    [initialize.fulfilled]: (state, action) => {
      if (action.payload.access.length > 0) {
        state.user.role = "admin";
        state.user.access = action.payload.access;
        console.log(state.user.access);
        state.user.isAuth = true;
        state.user.data = parseJwt(state.user.access);
        state.user.user_id = state.user.data.user_id;
      } else {
        state.user.isAuth = false;
      }
      state.loading = false;
    },
    [initialize.rejected]: (state) => {
      state.error = true;
    },
    [editProfile.pending]: (state) => {
      state.loading = true;
    },
    [editProfile.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.user.edit_profile.status = true;
      }
      state.loading = false;
    },
    [editProfile.rejected]: (state) => {
      state.user.edit_profile.status = false;
    },
    [deleteProfile.pending]: (state) => {
      state.loading = true;
    },
    [deleteProfile.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.user.isAuth = false;
        state.user.user = null;
        state.user.user_id = null;
        state.user.access = null;
        state.user.loading = false;
      }
    },
    [changePassword.pending]: (state) => {
      state.loading = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.alert.status = true;
      state.alert.message = action.payload.message;
      state.change_password.status = true;
      state.loading = false;
    },
    [changePassword.rejected]: (state) => {
      state.change_password.error = true;
      state.error = state.change_password.error;
      if (state.error) {
        state.alert.status = false;
      }
      state.alert.message = "Forma hato toldirildi";
    },
  },
});

export const { logout } = User.actions;
export default User.reducer;
