import styles from "./QrCodeComponent.module.scss";
import qrCodeImage from "../assets/image-qr-code.png";

const QrCodeComponent = () => {
  return (
    <div className={styles.component}>
      <img src={qrCodeImage} alt="qr code" />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QrCodeComponent;
