import { useState } from "react";
import { verifyOtpCode } from "../../Services/ApiRequest";

import style from "./OtpVerification.module.scss";
import LogoMark from "../../../public/assets/Logomark.svg";
import OtpInput from "react-otp-input";

const OtpVerification = () => {
  const [otp, setOtp] = useState({
    code: "",
  });

  const handleOtp = (otpValue: string) => {
    setOtp({ code: otpValue });

    if (otpValue.length === 4) {
      // verify otp
      verifyOtpCode(otp);
    }
  };

  return (
    <div className={style.general_container}>
      <div className={style.container}>
        <div className={style.logo_cont}>
          <img src={LogoMark} alt="" />
        </div>

        <div className={style.heading}>
          <h1>Enter OTP</h1>
          <p>Enter the OTP sent to your phone number ending with 5678</p>
        </div>

        <div className={style.otp}>
          <OtpInput
            value={otp.code}
            onChange={handleOtp}
            shouldAutoFocus={true}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "0.5px solid #D9D9D9",
              borderRadius: "0px 11px 11px 11px",
              width: "54px",
              height: "54px",
              fontSize: "14px",
              color: "#273B4A",
              fontWeight: "400",
              caretColor: "#D6AA1B",
              outline: "none",
              backgroundColor: "#F5F5F5",
            }}
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default OtpVerification;
