import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuth: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    plus(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
// const counterReducer = (state = { counter: 0 ,showCounter: true}, action) => {
//   if (action.type === "INCREMENT")
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   if (action.type === "DECREMENT")
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//     if (action.type === "PLUS")
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//     if (action.type === "TOGGLE")
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };

//     return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// const store = createStore(counterReducer);
export default store;
