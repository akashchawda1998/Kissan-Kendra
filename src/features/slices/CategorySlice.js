import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/ApiClient';

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await apiClient.get('/products/categories?parent=0&per_page=100');
  return response.data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: { data: [], loading: false },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
