import { Route, Routes } from "react-router-dom";
import ChooseAccount from "./pages/ChooseAccount/ChooseAccount";
import CreateBusinessAccount from "./pages/CreateBusinessAccount/CreateBusinessAccount";
import VerifyNumber from "./pages/VerifyNumber/VerifyNumber";
import { Toaster } from "react-hot-toast";
import OtpVerification from "./pages/OtpVerification/OtpVerification";

const MainRoutes = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<ChooseAccount />} />
        <Route path="/business-account" element={<CreateBusinessAccount />} />
        <Route path="/verify-number" element={<VerifyNumber />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
