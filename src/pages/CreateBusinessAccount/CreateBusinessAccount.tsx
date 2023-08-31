import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CreateBusinessAccount.module.scss";
import LogoMark from "../../../public/assets/Logomark.svg";
import { createBusinessAccount } from "../../Services/ApiRequest";

const CreateBusinessAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    phone_number: "",
    email: "",
    industry: "",
    name: "",
    password: "",
    account_type: "",
    log: "",
    lat: "",
    city: "",
    placeid: "",
    state: "",
    regid: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    createBusinessAccount(formData, setLoading, setStatus);
  };

  useEffect(() => {
    if (status && !loading) {
      navigate("/verify-number");
    }
  }, [status, loading, navigate]);

  return (
    <div className={style.general_container}>
      <div className={style.container}>
        <div className={style.logo_cont}>
          <img src={LogoMark} alt="" />
        </div>

        <div className={style.heading}>
          <h1>Create a Business Account</h1>
          <p>Use your personal information</p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className={style.input_container}>
            <label htmlFor="name">Business Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} />
          </div>

          <div className={style.input_container}>
            <label htmlFor="email">Business Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" onChange={handleChange} />
          </div>

          <div className={style.input_container}>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="log">Longitude</label>
            <input
              type="text"
              name="log"
              id="log"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="lat">Lattitude</label>
            <input
              type="text"
              name="lat"
              id="lat"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              name="industry"
              id="industry"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="placeid">Place Id</label>
            <input
              type="text"
              name="placeid"
              id="placeid"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="regid">Reg Id</label>
            <input
              type="text"
              name="regid"
              id="regid"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="account_type">Account Type</label>
            <input
              type="text"
              name="account_type"
              id="account_type"
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.input_container}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>

          <button disabled={loading === true}>
            {loading ? `Loading..` : `Continue`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBusinessAccount;
