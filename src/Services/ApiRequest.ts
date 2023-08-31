import request from "./Services";
import toast from "react-hot-toast";

type Business = {
  [key: string]: string;
};

export const createBusinessAccount = async (
  data: Business,
  setLoading: (value: boolean) => void,
  setStatus: (value: boolean) => void
) => {
  setLoading(true);
  await request
    .post("auths/firststage", data)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        setLoading(false);
        setStatus(true);
        localStorage.setItem(
          "phoneNumber",
          JSON.stringify(res.data.message.phone_number)
        );
        return toast.success("Account created successfully");
      }
    })
    .catch((err) => {
      if (err.response.status === 409) {
        setLoading(false);
        setStatus(false);
        return toast.error("User already exists");
      }
      console.log(err);
    });
};

export const sendSmsVerification = async (
  data: Business,
  setLoading: (value: boolean) => void,
  setStatus: (value: boolean) => void
) => {
  setLoading(true);
  await request
    .post("sms/sendsms", data)
    .then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setStatus(true);
        return toast.success("Verification code sent successfully");
      }
      console.log(res);
    })
    .catch((err) => {
      if (err) {
        setLoading(false);
        setStatus(false);
        return toast.error("Error sending verification code");
      }
      console.log(err);
    });
};

export const verifyOtpCode = async (data: Business) => {

  await request
    .post("sms/verifysms", data)
    .then((res) => {
      if (res.status === 200) {
        return toast.success("Account verified successfully");
      }
      console.log(res);
    })
    .catch((err) => {
      if (err) {
        return toast.error("Error verifying code");
      }
      console.log(err);
    });
}
