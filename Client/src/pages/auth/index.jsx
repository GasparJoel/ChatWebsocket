import Victory from "@/assets/victory.svg";
import Background from "@/assets/login2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Auth = () => {
  const RegisterUser = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setuser] = useState(RegisterUser);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value, // Actualiza solo el campo correspondiente
    }));
    console.log(user.email)
  };

  return (
    <div className="h-[100vh] w-[100vh] flex items-center justify-center">
      <div
        className="h-[80vh] bg-white border-2 border-white 
      text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] 
       rounded-3xl grid xl:grid-cols-2 "
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
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  className="rounded-full p-6"
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLogin}
                />

                <Input
                  className="rounded-full p-6"
                  value={user.password}
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleLogin}
                />
                <Button className="rounded-full p-6">Login </Button>
              </TabsContent>

              <TabsContent className="flex flex-col gap-5 mt-10"  value="signup">
             
              <Input
                  className="rounded-full p-6"
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="Email"
              
                />

                <Input
                  className="rounded-full p-6"
                  value={user.password}
                  type="password"
                  name="password"
                  placeholder="password"
                 
                />

              <Input
                  className="rounded-full p-6"
                  value={user.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmpassword"
            
                />

                <Button className="rounded-full p-6">Login </Button>
                <p>Signup form goes here</p>
              </TabsContent>


            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
