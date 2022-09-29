import { createSlice } from "@reduxjs/toolkit";

const defaultInvoiceData = {
  invoiceData: {},
};

const InvoiceSlice = createSlice({
  name: "invoiceData",
  initialState: defaultInvoiceData,
  reducers: {
    setInvoiceData: (state, { payload }) => {
      state.invoiceData = { ...payload };
    },
  },
});

export const { setInvoiceData } = InvoiceSlice.actions;
export default InvoiceSlice.reducer;
