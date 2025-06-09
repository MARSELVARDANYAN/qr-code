import {SCAN_DATA} from '../../constants'
import { QRCodeSVG } from "qrcode.react";
import style from "./scanHistory.module.css";

export const ScanHistory = () => {

    const data = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];

    return (
        <div className={style.container}>
            {data.map((item, index) => (
                <div className={style.item} key={index}> <p className={style.text}>{item}</p>
                <QRCodeSVG value={item} size={100} />
                </div>
            ))}
        </div>
    );
};