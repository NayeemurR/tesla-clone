import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {} //function to manipulate state
})

export const selectCars = state => state.car.cars //returns the cars list

export default carSlice.reducer