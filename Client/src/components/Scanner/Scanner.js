import React, {useEffect} from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./Scanner.css"

function Scanner({setScan}) {
  const [data, setData] = React.useState("Scan...");
  const [torchOn, setTorchOn] = React.useState(false);
  const [camErr, setCamErr] = React.useState(false);

  useEffect (() => {
    if(data!=="Scan..."){
    const jso = JSON.stringify(data);
      localStorage.setItem("scan", jso);}
    }, [data])

  

  useEffect (() => {
    if(data!=="Scan..."){
    const jso = JSON.stringify(data);
      localStorage.setItem("scan", jso);}
    }, [data])

  const handleScan = () => {
    setScan(false)
  }
  return (
    <>
    <div className="backshadow3" onClick={handleScan}>
    <div className="custom-modal3" onClick={(e) => e.stopPropagation()} >
    <p>{camErr}</p>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else if(err) setData("Not Found");
          else setData("Scan...");}}

          onError={(error) => {
            if (error){
             setCamErr("ERROR")
            }
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