import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isSameWeek } from "date-fns";
import service from "../../service/service";

const initialState = {
  scheduleData: [],
  cartData: JSON.parse(localStorage.getItem("cart")) || [],
  isLoading: false,
};

export const fetchScheduleData = createAsyncThunk(
  "app/fetchScheduleData",
  async () => {
    return await service.ScheduleData();
  }
);

export const AppSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      // check if there are more than 3 schedules within a week

      let maxScheduleCount = 0;
      if (state.cartData.length > 2) {
        for (let i = 0; i < state.cartData.length; i++) {
          if (
            isSameWeek(
              new Date(state.cartData[i].date),
              new Date(action.payload.date)
            )
          )
            maxScheduleCount++;
        }
      }
      if (maxScheduleCount >= 3)
        alert("You can only book maximum 3 classes per week");
      else {
        // check if item already present in cart

        const isItemInCart = state.cartData.find(
          (data) =>
            data.name === action.payload.name &&
            data.date === action.payload.date
        );
        if (isItemInCart) {
          alert("This Schedule is already in your cart");
        } else {
          state.cartData.push(action.payload);
          localStorage.setItem("cart", JSON.stringify(state.cartData));
          // Reduce the availableSeats count

          const updatedScheduleData = state.scheduleData.map((schedule) => {
            if (schedule.date === action.payload.date) {
              return { ...schedule, availableSeats: --schedule.availableSeats };
            }
            return schedule;
          });
          state.scheduleData = updatedScheduleData;
        }
      }
    },
    removeCartItem: (state, action) => {
      let filteredData = state.cartData.filter(
        (item) => item.date != action.payload.date
      );
      state.cartData = filteredData;
      localStorage.setItem("cart", JSON.stringify(state.cartData));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScheduleData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchScheduleData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.scheduleData = action.payload;
      });
  },
});

export default AppSlice.reducer;
export const { setCartItem, removeCartItem } = AppSlice.actions;
