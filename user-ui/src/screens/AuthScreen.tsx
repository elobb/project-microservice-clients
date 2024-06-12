import React, { Dispatch, SetStateAction, useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import OtpScreen from "./OtpScreen";
// Define the props interface
interface ComponentProps {
  authModal: boolean;
  setAuthModal: Dispatch<SetStateAction<boolean>>;
}

const AuthSereen: React.FC<ComponentProps> = ({ authModal, setAuthModal }) => {
  const [authType, setAuthType] = useState<string>("login");

  return (
    <div className="fixed flex z-40  justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div
        onClick={() => setAuthModal(false)}
        className="absolute w-full h-full  z-30"
      />

      <div className="z-40  w-[80%]  md:w-[40%] h-fit mt-[10%] p-4 bg-gray-900 rounded-lg text-white   border border-gray-700">
        <div className="cursor-pointer ms-auto text-blue-500 w-fit text-sm ">
          {authType !== "verify" && (
            <>
              {" "}
              {authType == "login" ? (
                <p onClick={() => setAuthType("register")}>
                  Dont have an account ?
                </p>
              ) : (
                <p onClick={() => setAuthType("login")}>Have an account ?</p>
              )}
            </>
          )}
        </div>
        {authType == "login" && <LoginScreen />}
        {authType == "register" && <RegisterScreen setAuthType={setAuthType} />}
        {authType == "verify" && <OtpScreen setAuthType={setAuthType} />}
      </div>
    </div>
  );
};

export default AuthSereen;
