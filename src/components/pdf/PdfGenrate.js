
import Pdf from "react-to-pdf";
import { useRef } from "react";

function PdfGenrate() {
  const ref = useRef();
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div
        ref={ref}
        style={{
          borderRadius: "5px",
          width: "600px",
          height: "400px",
          margin: "0 auto",
          // padding: "10mm",
          textAlign: "center",
        }}
      >
        <h1>Helloooooooooooooooooo</h1>
        <h2>Download pdf</h2>
      </div>
    </div>
  );
}

export default PdfGenrate;
