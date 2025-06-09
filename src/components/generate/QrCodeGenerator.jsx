import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import style from "./qrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

export const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    setResult("");
  };

  const handleClick = () => {
    const prewData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
    prewData.push(text);
    localStorage.setItem(GENERATE_DATA, JSON.stringify(prewData));
    setResult(text);
    setText("");
  };

  return (
    <main>
      <div className={style.container}>
        <input
          className={style.input}
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleChange}
        />
        <button className={style.button} onClick={handleClick}>
          Generate
        </button>
        {result !== "" && <QRCodeSVG value={result} size={300} />}
      </div>
    </main>
  );
};
