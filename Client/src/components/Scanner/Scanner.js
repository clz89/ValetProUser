import React, {useEffect} from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./Scanner.css"

function Scanner({setSubCar, setScan}) {
  const [data, setData] = React.useState("Scan...");
  const [torchOn, setTorchOn] = React.useState(false);
  const [camErr, setCamErr] = React.useState(false);


  useEffect (() => {
    if(data!=="Scan..."){
      const scan2 = {ticket:data, type:"ON", price:"$44"}
    const jso = JSON.stringify(scan2);
      localStorage.setItem("scan", jso);
    setSubCar(true)
    setScan(false)
    }
    }, [data])

  const handleScan = () => {
    setScan(false)
  }

  const handleSwitch = () => {
    setSubCar(true) 
    setScan(false)
  }
  return (
    <>
    <div className="backshadow3" onClick={handleScan}>
    <div className="custom-modal3" onClick={(e) => e.stopPropagation()} >
    <div className="scanbdiv">
    <button className="scanbtn" onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}</button>
      <p>{camErr}</p>
      <button className="scanbtn" onClick={handleSwitch}>Switch to Form</button>
      </div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Scan...");}}

          onError={(error) => {
            if (error){
             setCamErr("ERROR")
            }
            }}
      />
      <p>{data}</p>
     
      </div>
      </div>
    </>
  );
}

export default Scanner;