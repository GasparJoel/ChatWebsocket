import Victory from "@/assets/victory.svg";
import Background from "@/assets/login2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { apiClient } from "@/lib/api-client";
import { SIGNUP_ROUTE } from "@/utils/constants";

export const Auth = () => {
  const RegisterUser = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState(RegisterUser);

  // Función para actualizar el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Validar campos de registro
  const validateSignup = () => {
    if (!user.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!user.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords and confirm password should be the same");
      return false;
    }
    return true;
  };

  // Manejar registro
  const handleSignup = async () => {
    if (validateSignup()) {
      try {
        const response = await apiClient.post(SIGNUP_ROUTE, {
          email: user.email,
          password: user.password,
        });
        toast.success("Signup successful!");
        console.log(response);
      } catch (error) {
        toast.error("Signup failed, please try again");
        console.error(error);
      }
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div
        className="h-[80vh] bg-white border-2 border-white 
        text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] 
        rounded-3xl grid xl:grid-cols-2"
      >
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Victory emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app!
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="flex justify-center border-b-2 bg-transparent rounded-none w-full">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90
                  rounded-none w-full text-center data-[state=active]:text-black 
                  data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 
                  transition-all duration-300"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90
                  rounded-none w-full text-center data-[state=active]:text-black 
                  data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 
                  transition-all duration-300"
                >
                  Signup
                </TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  className="rounded-full p-6"
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  className="rounded-full p-6"
                  value={user.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <Button className="rounded-full p-6">Login</Button>
              </TabsContent>

              {/* Signup Form */}
              <TabsContent className="flex flex-col gap-5 mt-10" value="signup">
                <Input
                  className="rounded-full p-6"
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  className="rounded-full p-6"
                  value={user.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <Input
                  className="rounded-full p-6"
                  value={user.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
                <Button
                  onClick={handleSignup}
                  className="rounded-full p-6"
                >
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="Background login" className="h-[700px]" />
        </div>
      </div>
    </div>
  );
};
