import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../UI/FormInput";
import { setInvoiceData } from "../../redux_toolkit/slices/InvoiceSlice";
import { useDispatch } from "react-redux";
import "./InvoiceForm.css";

const InvoiceForm = () => {
  const dispatch = useDispatch();

  const intialValues = {
    name: "",
    emailid: "",
    mobileno: "",
  };

  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(setInvoiceData(formValues));
    Navigate("/invoicedetail");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // console.log(formValues);

  return (
    <div className="loginform_bg">
      <div className="form_card login_card">
        <h2>Invoice Form</h2>
        <form>
          <FormInput
            inputLabel="Name :"
            inputType="text"
            inputName="name"
            inputValue={formValues.name}
            onHandleChange={handleChange}
            customClass={"form_input"}
          />
          <FormInput
            inputLabel="Email ID :"
            inputType="email"
            inputName="emailid"
            inputValue={formValues.emailid}
            onHandleChange={handleChange}
            customClass={"form_input"}
          />
          <FormInput
            inputLabel="Mobile No :"
            inputType="number"
            inputName="mobileno"
            inputValue={formValues.mobileno}
            onHandleChange={handleChange}
            customClass={"form_input"}
          />

          <div className="form_input login_btn">
            <button className="form_btn" onClick={loginHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
