import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import InvoiceForm from "./components/pages/InvoiceForm";
import InvoiceDetail from "./components/pages/InvoiceDetails";
import UserInfo from "./components/pagination/UserInfo";
import "./App.css";
import PdfGenrate from "./components/pdf/PdfGenrate";

function App() {
  return (
    <>
    {/* pdf using jspdf lib */}
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<InvoiceForm />}></Route>
        <Route path="/invoicedetail" element={<InvoiceDetail />}></Route>
        <Route path="/userinfo" element={<UserInfo/>}></Route>
      </Routes> */}
      <PdfGenrate />
    </>
  );
}

export default App;
