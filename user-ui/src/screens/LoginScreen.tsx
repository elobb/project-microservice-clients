import { Button, Checkbox, Input } from "@nextui-org/react";
import React from "react";

const LoginScreen = () => {
  return (
    <div className=" space-y-5  p-4">
      <p className="text-xl">Log in your account</p>
      <div className="space-y-5  overflow-hidden">
        <Input type="email" size="sm" label="Email" />
        <Input type="password" size="sm" label="Password" />
      </div>
      <Button radius="sm" size="md" className="font-semibold" color="primary">
        Login
      </Button>
    </div>
  );
};

export default LoginScreen;
