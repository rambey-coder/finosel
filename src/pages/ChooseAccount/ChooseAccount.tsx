import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./ChooseAccount.module.scss";
import LogoMark from "../../../public/assets/Logomark.svg";
import Personal from "../../../public/assets/Union.svg";
import Business from "../../../public/assets/store.svg";

const ChooseAccount = () => {
  const navigate = useNavigate();
  const [businessAccount, setBusinessAccount] = useState(false);
  const [click, setClick] = useState<number>(0);

  const handleClick = (index: number) => {
    setClick(index);
    if (index === 1) {
      setBusinessAccount(true);
    }
  };

  const handleContinue = () => {
    if (businessAccount) {
      navigate("/business-account");
    }
  };

  return (
    <div className={style.general_container}>
      <div className={style.container}>
        <div className={style.logo_cont}>
          <img src={LogoMark} alt="" />
        </div>

        <h1>Create Account</h1>

        <div className={style.account_type}>
          <div
            className={
              click === 0
                ? `${style.account} ${style.account_active}`
                : `${style.account}`
            }
            onClick={() => handleClick(0)}>
            <img src={Personal} alt="" />
            <h3>Personal Account</h3>
            <p>Duis cillum nisi</p>
          </div>

          <div
            className={
              click === 1
                ? `${style.account} ${style.account_active}`
                : `${style.account}`
            }
            onClick={() => handleClick(1)}>
            <img src={Business} alt="" />
            <h3>Personal Account</h3>
            <p>Duis cillum nisi</p>
          </div>
        </div>

        <button type="button" onClick={handleContinue}>
          Continue
        </button>
        <p className={style.txt}>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default ChooseAccount;
