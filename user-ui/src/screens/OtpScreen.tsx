"use client";
import { Button, Input } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import { ACTIVATE_USER } from "@/graphql/actions/register.action";
import toast from "react-hot-toast";

const formSchema = z.object({
  otp: z.number(),
});

type OtpSchema = z.infer<typeof formSchema>;

// Define the props interface
interface ComponentProps {
  setAuthType: Dispatch<SetStateAction<string>>;
}

const OtpScreen: React.FC<ComponentProps> = ({ setAuthType }) => {
  const [userOtpMutation, { loading, error, data }] =
    useMutation(ACTIVATE_USER);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OtpSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (d: OtpSchema) => {
    try {
      const response = await userOtpMutation({
        variables: {
          activationToken: localStorage.getItem("activationToken"),
          activationCode: "" + d.otp,
        },
      });
      console.log(response.data.activationDto);

      reset();
      toast.success("verify sucess");
      setAuthType("login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-5 p-4">
      <p className="text-xl">Verify your account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5  ">
          <div>
            <Input
              {...register("otp", { valueAsNumber: true })}
              type="text"
              size="sm"
              label="Otp"
            />
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
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
            {isSubmitting ? "Verifing in..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OtpScreen;
