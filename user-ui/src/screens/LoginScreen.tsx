"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof formSchema>;

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-5 p-4">
      <p className="text-xl">Log in to your account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5  ">
          <div>
            <Input
              {...register("email")}
              type="email"
              size="sm"
              label="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("password")}
              type="password"
              size="sm"
              label="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button
            type="submit"
            radius="sm"
            size="md"
            className="font-semibold"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
