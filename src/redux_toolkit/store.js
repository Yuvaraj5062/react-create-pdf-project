import { configureStore } from "@reduxjs/toolkit";
import InvoiceDataReducer from "./slices/InvoiceSlice";

const store = configureStore({
  reducer: {
    invoiceData: InvoiceDataReducer,
  },
});

export default store;
