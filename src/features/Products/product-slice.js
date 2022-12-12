import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_Url = "http://localhost:1500/api/products";

export const getProducts = createAsyncThunk(
    "products/fetchProducts",
    async() => {
        const resp = await axios.get(Base_Url);

        return resp.data;
    }
);

export const upDateProduct = createAsyncThunk(
    "products/updateProduct",
    async(data) => {
        await axios.put(Base_Url, data);
        return data;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async(id) => {
        await axios.delete(`${Base_Url}/${id}`);
        return id;
    }
);

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct",
    async(data) => {
        try {
            await axios.post(Base_Url, data);
            return data;
        } catch (error) {
            throw error.message;
        }
    }
);
const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle",
        type: null,
        error: null,
    },
    reducers: {
        orderProcuctsByPriceAsc(state) {
            state.products = state.products.sort((a, b) => a.Price - b.Price);
        },
        orderProcuctsByPriceDes(state) {
            state.products = state.products.sort((a, b) => b.Price - a.Price);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "loading";
                state.type = "fetching";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.type = null;
                state.products = [...action.payload];
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "rejected";
                state.type = null;
                state.error = action.error.message;
            });
        builder
            .addCase(upDateProduct.pending, (state) => {
                state.status = "loading";
                state.type = "updating";
            })
            .addCase(upDateProduct.fulfilled, (state, action) => {
                state.status = "success";
                state.type = null;
                state.products = state.products.map((product) => {
                    if (product.ProId === +action.payload.ProId) return action.payload;
                    return product;
                });
            })
            .addCase(upDateProduct.rejected, (state, action) => {
                state.status = "rejected";
                state.type = null;
                state.error = action.error.message;
            });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const uptadetProducts = state.products.filter(
                (product) => product.ProId !== action.payload
            );
            state.products = uptadetProducts;
            state.status = "success";
            state.type = null;
        });
        builder
            .addCase(addNewProduct.pending, (state) => {
                state.status = "loading";
                state.type = "Adding";
            })
            .addCase(addNewProduct.fulfilled, (state, action) => {
                state.status = "success";
                state.type = null;
                state.products = [...state.products, action.payload];
            })
            .addCase(addNewProduct.rejected, (state, action) => {
                state.status = "rejected";
                state.type = null;
                state.error = action.error.message;
            });
    },
});

export const { orderProcuctsByPriceAsc, orderProcuctsByPriceDes } =
productsSlice.actions;

export default productsSlice.reducer;