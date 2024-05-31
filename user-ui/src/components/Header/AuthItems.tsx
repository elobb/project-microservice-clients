"use client";
import AuthSereen from "@/screens/AuthScreen";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";

const AuthItems = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  return (
    <>
      {isLogged ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              className="ring-2 cursor-pointer ring-offset-transparent ring-blue-500"
              src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/372753587_1799597653818213_4956657777576159270_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRBuidhe84tzYGhpVCgompExFCVblDqXETEUJVuUOpcWqZwMzeuZT8v4W7N867da98aH5CccqYkX5O1fTNG2HX&_nc_ohc=5dWOvx1Xer4Q7kNvgHgUDaf&_nc_ht=scontent.fcgp3-2.fna&oh=00_AYAoc-3x5uOmBAKMj8Y7CtS-dwyW1JUsFPTqk4sIY2u05Q&oe=665FB16A"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">My Profile</DropdownItem>
            <DropdownItem key="new">Apply for seller account</DropdownItem>
            <DropdownItem key="new" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <CircleUserRound
            size={24}
            onClick={() => setAuthModal(!authModal)}
            className=" me-4  cursor-pointer text-gray-300"
          />
          {authModal && (
            <AuthSereen authModal={authModal} setAuthModal={setAuthModal} />
          )}
        </>
      )}
    </>
  );
};

export default AuthItems;
