import { Button, Input } from "@nextui-org/react";
import React from "react";

const RegisterScreen = () => {
  return (
    <div className=" space-y-5  p-4">
      <p className="text-xl">Register your account</p>
      <div className="space-y-5  overflow-hidden">
        <Input type="text" size="sm" label="User name" />
        <Input type="email" size="sm" label="Email" />
        <Input type="password" size="sm" label="Password" />
      </div>
      <Button radius="sm" size="md" className="font-semibold" color="primary">
        Register
      </Button>
    </div>
  );
};

export default RegisterScreen;
