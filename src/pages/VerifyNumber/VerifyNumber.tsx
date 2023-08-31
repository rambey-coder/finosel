import { useState, useEffect } from "react";
import { sendSmsVerification } from "../../Services/ApiRequest";
import { useNavigate } from "react-router-dom";

import style from "./VerifyNumber.module.scss";
import LogoMark from "../../../public/assets/Logomark.svg";
import Msg from "../../../public/assets/msg.svg";
import { toast } from "react-hot-toast/headless";

const VerifyNumber = () => {
  const navigate = useNavigate();
  const [verificaton_type, setVerificationType] = useState(0);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone_number, setPhoneNumber] = useState({
    user: "",
  });

  const handleCheck = (index: number) => {
    setVerificationType(index);
  };

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      const number = JSON.parse(storedPhoneNumber);
      setPhoneNumber({
        user: number,
      });
    }
  }, []);

  console.log(phone_number);

  useEffect(() => {
    if (status && !loading) {
      navigate("/otp-verification");
    }
  }, [status, loading, navigate]);

  const handleSubmit = () => {
    if (verificaton_type === 0) {
      // send sms
      sendSmsVerification(phone_number, setLoading, setStatus);
    } else {
      toast.success("Coming Soon");
      // send email
    }
  };

  return (
    <div className={style.general_container}>
      <div className={style.container}>
        <div className={style.logo_cont}>
          <img src={LogoMark} alt="" />
        </div>

        <div className={style.heading}>
          <h1>Verify Phone Number</h1>
          <p>
            We need to verify a phone number with which you can recieve OTP for
            your card transactions.
          </p>
        </div>

        <div className={style.number_container}>
          <div className={style.input_container}>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              defaultValue={phone_number.user}
              readOnly
              //   onChange={handleChange}
              required
            />
          </div>

          <div className={style.verification_type}>
            <h3>How would you like to recieve the OTP?</h3>

            <div className={style.verify}>
              <label
                htmlFor="verification_sms"
                className={
                  verificaton_type === 0 ? `${style.label_active}` : ""
                }>
                <div>
                  <img src={Msg} alt="" />
                  <p>Via SMS</p>
                </div>

                <input
                  type="radio"
                  name="verification_sms"
                  id="verification_sms"
                  onChange={() => handleCheck(0)}
                  checked={verificaton_type === 0}
                />
              </label>
              <label
                htmlFor="verification_email"
                className={
                  verificaton_type === 1 ? `${style.label_active}` : ""
                }>
                <div>
                  <img src={Msg} alt="" />
                  <p>Via Email</p>
                </div>

                <input
                  type="radio"
                  name="verification_email"
                  id="verification_email"
                  onChange={() => handleCheck(1)}
                  checked={verificaton_type == 1}
                />
              </label>
            </div>

            <button onClick={handleSubmit}>
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyNumber;
