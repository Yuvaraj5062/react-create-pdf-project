import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import "./invoiceDetails.css";

const InvoiceDetails = () => {
  const Navigate = useNavigate();
  const invoiceData = useSelector((state) => state.invoiceData.invoiceData);
  // console.log(invoiceData);

  const GeneratePDF = (event) => {
    event.preventDefault();
    const input = document.getElementById("pdf_data");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Invoice.pdf");
    });
  };

  const BackBtnHandler = (event) => {
    event.preventDefault();
    Navigate("/")
  }

  return (
    <>
      <div id="pdf_data" className="pdf_data">
        <table>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Mobile No.</th>
          </tr>
          <tr>
            <td>{invoiceData.name}</td>
            <td>{invoiceData.emailid}</td>
            <td>{invoiceData.mobileno}</td>
          </tr>
        </table>
      </div>
      <div className="invoice_btn_grp">
        <button className="invoice_btn_1" onClick={GeneratePDF}>Download PDF</button>
        <button className="invoice_btn_2" onClick={BackBtnHandler}>Back</button>
      </div>
    </>
  );
};

export default InvoiceDetails;
