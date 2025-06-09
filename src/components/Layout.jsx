import { QrCodeGenerator } from "./generate/QrCodeGenerator";
import { QrCodeScanner } from "./scan/QrCodeScanner";
import { Navigation } from "./navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from "./generateHistory/GenerateHistory";
import { ScanHistory } from "./scanHistory/ScanHistory";

export const Layout = () => {
  return (
    <>
      <Navigation />

      <div style={{display: "flex", justifyContent: "center"}}>
        <Routes>
          <Route path="qr-code/" element={<QrCodeGenerator />} />
          <Route path="qr-code/generate" element={<QrCodeGenerator />} />
          <Route path="qr-code/scanner" element={<QrCodeScanner />} />
          <Route path="qr-code/history-generator" element={<GenerateHistory />} />
          <Route path="qr-code/history-scanner" element={<ScanHistory />} />
        </Routes>
      </div>
    </>
  );
};
