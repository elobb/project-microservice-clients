"use client";
import { Button, Input } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/graphql/actions/register.action";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, "User name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.number(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginSchema = z.infer<typeof formSchema>;

// Define the props interface
interface ComponentProps {
  setAuthType: Dispatch<SetStateAction<string>>;
}

const RegisterScreen: React.FC<ComponentProps> = ({ setAuthType }) => {
  const [registerUserMutation, { loading, error, data }] =
    useMutation(REGISTER_USER);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await registerUserMutation({ variables: data });
      console.log(response.data);
      localStorage.setItem(
        "activationToken",
        response.data.register.activation_token
      );
      reset();
      toast.success(response.data.register.message);
      setAuthType("verify");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="space-y-5 p-4">
      <p className="text-xl">Register your account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5  ">
          <div>
            <Input
              {...register("name")}
              type="text"
              size="sm"
              label="User name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("phone_number", { valueAsNumber: true })}
              type="number"
              size="sm"
              label="Phone Number"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>
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
            disabled={loading}
          >
            {loading ? "Register in..." : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
