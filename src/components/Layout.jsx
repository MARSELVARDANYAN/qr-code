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
      {/* // <QrCodeGenerator />
            // <QrCodeScaner /> */}
      <div style={{display: "flex", justifyContent: "center"}}>
        <Routes>
          <Route path="/" element={<QrCodeGenerator />} />
          <Route path="/generate" element={<QrCodeGenerator />} />
          <Route path="/scanner" element={<QrCodeScanner />} />
          <Route path="/history-generator" element={<GenerateHistory />} />
          <Route path="/history-scanner" element={<ScanHistory />} />
        </Routes>
      </div>
    </>
  );
};
