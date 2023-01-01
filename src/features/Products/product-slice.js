import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_Url = "http://localhost:1500/api/";

export const getProducts = createAsyncThunk(
    "products/fetchProducts",
    async() => {
        const categories = ["pc&laptops", "smartphones"];
        const items = {};
        for (let category of categories) {
            const resp = await axios.get(`${Base_Url}${category}`);
            items[category] = resp.data;
        }
        return items;
    },
);

export const upDateProduct = createAsyncThunk(
    "products/updateProduct",
    async(data) => {
        await axios.put(`${Base_Url}${data.category}`, data);

        return data;
    },
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async({ id, category }) => {
        await axios.delete(`${Base_Url}${category}/${id}`);

        return { id, category };
    },
);

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct",
    async(data) => {
        let insertedDate;
        if (data.category === "pc&laptops")
            insertedDate = {
                ...data,
                ram: +data.ram,
                price: +data.price,
                "keyboard&mouse": +data["keyboard&mouse"],
            };
        else
            insertedDate = {
                ...data,
                ram: +data.ram,
                price: +data.price,
                screensize: +data.screensize,
                voiceAssistant: +data["voiceAssistant"],
                memory: +data.memory,
            };
        try {
            await axios.post(`${Base_Url}${data.category}`, insertedDate);
            return data;
        } catch (error) {
            throw error.message;
        }
    },
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {},
        status: "idle",
        error: null,
        type: null,
        errorMessage: "",
    },
    reducers: {
        // orderProcuctsByPriceAsc(state) {
        //     state.products = state.products.sort((a, b) => a.Price - b.Price);
        // },
        // orderProcuctsByPriceDes(state) {
        //     state.products = state.products.sort((a, b) => b.Price - a.Price);
        // },
    },
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
                state.errorMessage = "Can't fetch data retry later please!";
            });
        builder
            .addCase(upDateProduct.pending, (state) => {
                state.status = "loading";
                state.type = "updating";
                state.error = null;
            })
            .addCase(upDateProduct.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.type = null;
                state.products[payload.category] = state.products[payload.category].map(
                    (product) => {
                        if (product.ProId === +payload.id) return payload;
                        return product;
                    },
                );
            })
            .addCase(upDateProduct.rejected, (state, action) => {
                state.status = "rejected";
                state.type = null;
                state.error = action.error.message;
                state.errorMessage = "Can't update product retry later please!";
            });
        builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.products[payload.category] = state.products[
                payload.category
            ].filter((product) => product.id !== payload.id);

            state.status = "success";
            state.type = null;
        });
        builder
            .addCase(addNewProduct.pending, (state) => {
                state.status = "loading";
                state.type = "Adding";
                state.error = null;
            })
            .addCase(addNewProduct.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.type = null;
                state.products[payload.category].push(payload);
            })
            .addCase(addNewProduct.rejected, (state, action) => {
                state.status = "rejected";
                state.type = null;
                state.error = action.error.message;
                state.errorMessage = "Can't Add product, retry later please!";
            });
    },
});

export const { orderProcuctsByPriceAsc, orderProcuctsByPriceDes } =
productsSlice.actions;

export default productsSlice.reducer;