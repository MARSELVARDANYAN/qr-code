import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import style from "./generateHistory.module.css";


export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
    return (
        <div className={style.container}> 
            {data.map((item, index) => (
                <div className={style.item} key={index}><p className={style.text}>{index + 1 + ".  " + item}</p>
                <QRCodeSVG value={item} size={100} />
                </div>
            ))}
        </div>
    );
};