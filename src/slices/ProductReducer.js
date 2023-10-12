import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  ProductList: [],
  selectedProduct: {},
  isLoading: false,
  error: "",
};
const BASE_URL = "http://localhost:8000/Product";
//Get
export const getProductFromServer = createAsyncThunk(
  "tasks/getProductFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("Response", jsonResponse);
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No Products found" });
    }
  }
);

export const ApproveProductStatus = createAsyncThunk(
  "tasks/ApproveProductStatus",
  async ({ productId, status }, { getState, dispatch }) => {
    try {
      console.log("Received productId:", productId);

      const product = getState().Product.ProductList.find(
        (item) => item.id === productId
      );

      console.log("Found product:", product);

      if (product) {
        const updatedProduct = {
          ...product,
          status: status,
        };

        console.log("Inside if");
        console.log("Updated product status:", updatedProduct.status);

        await fetch(BASE_URL + "/" + productId, {
          method: "PUT",
          body: JSON.stringify(updatedProduct),
          headers: {
            "Content-Type": "application/json",
          },
        });

        dispatch({
          type: "tasks/productStatusUpdated",
          payload: updatedProduct,
        });
        console.log("Updated product:", updatedProduct);

        return updatedProduct;
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      console.error("Error in ApproveProductStatus:", error);
      throw error;
    }
  }
);

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,

  reducers: {
    productStatusUpdated: (state, action) => {
      const index = state.ProductList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.ProductList[index] = action.payload;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.ProductList = action.payload;
        console.log("ProductList", state.ProductList);
      })
      .addCase(getProductFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.ProductList = [];
      });
  },
});

export default ProductSlice.reducer;
