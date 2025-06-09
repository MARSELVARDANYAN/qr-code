import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import sty from "./qrCodeScanner.module.css";
import { SCAN_DATA } from "../../constants";

export const QrCodeScanner = () => {
  const [scaned, setScaned] = useState(null);
  const handleScan = (data) => {
    setScaned(data[0].rawValue);

    const prewData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];
    prewData.push(data[0].rawValue);
    localStorage.setItem(SCAN_DATA, JSON.stringify(prewData));
  };

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <main>
      <div className={sty.container}>
        <div>
          <h1 className={sty.title}>Show Qr-Code for scanning</h1>
        </div>
        <div>
          <Scanner
            onScan={handleScan}
            components={settings}
            allowMultiple
            styles={{ container: { width: "250px", borderRadius: "30px", boxShadow: "0 0 50px 50px rgba(227, 150, 83, 0.4)" } }}
          />
        </div>
      </div>
        <div>
          <p className={sty.scaned}>{scaned}</p>
        </div>
    </main>
  );
};
