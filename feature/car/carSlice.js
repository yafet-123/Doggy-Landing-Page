import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cars : ['Model X', 'Model S', 'Model Y', 'Model 3']
}

export const carSlice = createSlice({
	name:'car',
	initialState,
	reducers:{},
})

export const selectCars = state => state.car.cars

export default carSlice.reducer