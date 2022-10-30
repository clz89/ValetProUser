import React, {useEffect} from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./Scanner.css"

function Scanner({setScan}) {
  const [data, setData] = React.useState("Not Found");
  const [torchOn, setTorchOn] = React.useState(false);

  useEffect (() => {
    const jso = JSON.stringify(data);
      localStorage.setItem("scan", jso);
    })

  const handleScan = () => {
    setScan(false)
  }
  return (
    <>
    <div className="backshadow3" onClick={handleScan}>
    <div className="custom-modal3" onClick={(e) => e.stopPropagation()} >
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
      </div>
      </div>
    </>
  );
}

export default Scanner;