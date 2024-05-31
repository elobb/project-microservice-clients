import React from "react";
import NavItems from "./NavItems";
import AuthItems from "./AuthItems";
import WidthWrapper from "../Wrapper/Wrapper";

const Header = () => {
  return (
    <div className="  py-2 bg-slate-700 ">
      <WidthWrapper>
        {" "}
        <div className=" flex justify-between items-center">
          <h3 className="text-3xl font-mono font-semibold text-slate-300">
            Logo
          </h3>
          <NavItems />
          <AuthItems />
        </div>
      </WidthWrapper>{" "}
    </div>
  );
};

export default Header;
