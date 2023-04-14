import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../helper/api";

export const getProductDetail = createAsyncThunk(
	"detail/getProductDetail",
	async (product) => {
		try {
			const res = await fetch(
				`${BASE_URL}/products/${product}/`,
				{
					accept: 'application/json',
					'X-CSRFToken':
						'gYNAg9rJvfjhuUst3vXNuFv71FQXxOqJPDqCyXjFwqt2dDtsw1nj3Mlv9GOSHUKZ'
				}
			)
			if (!res.ok) {
				throw Error(res.statusText)
			}
			const data = await res.json()
			return data
		} catch (e) {
			console.log(e)
		}
	}
)

const productDetail = createSlice({
	name: "detail",
	initialState: {
		loading: false,
		product: [],
		pending: false
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductDetail.pending, (state) => {
				state.loading = true
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.product = action.payload
				state.pending = true
				state.loading = false
			})
	}
})

export default productDetail.reducer