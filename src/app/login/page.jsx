"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import brandlogo from "../../../src/assets/brandlogo.png";
import { useState } from "react";
import * as React from "react";
import { useRouter } from 'next/router';
const apiURL = "http://localhost:5000/user";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  const [position, setPosition] = useState("bottom");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [clubPassword, setClubPassword] = useState("");
  const [clubEmail, setClubEmail] = useState("");

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/login-Student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: studentEmail,
          password: studentPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful. Token:", data.token);
        const router = useRouter();
        router.push('/interface');

      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleClubLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/login-Club`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: clubEmail,
          password: clubPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful. Token:", data.token);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-4xl px-6">
        <div className="flex flex-col items-start">
          <div className="relative">
            <Image
              src={brandlogo}
              alt="Brand Logo"
              height={600}
              width={600}
            />
          </div>
        </div>
        <div className="w-px h-100 bg-gray-300" />
        <div className="ml-6 p-8 shadow-lg max-h-[35rem] w-[24rem] rounded-xl bg-gray-100">
          <div className="mb-8 flex space-x-4">
            <Tabs defaultValue="student" className="w-[300px] rounded-3xl">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger
                  value="student"
                  className={`rounded-xl ${position === "student"
                      ? " text-white bg-black"
                      : "bg-transparent text-black"
                    }`}
                  onClick={() => setPosition("student")}
                >
                  Student
                </TabsTrigger>
                <TabsTrigger
                  value="club"
                  className={`rounded-xl ${position === "club"
                      ? " text-white bg-black"
                      : "bg-transparent text-black"
                    }`}
                  onClick={() => setPosition("club")}
                >
                  Club
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <Card className="bg-transparent border-none">
                  <CardContent>
                    <form className="flex flex-col space-y-6 mt-3">
                      <div className="flex space-x-4">
                        <Input
                          placeholder="Email"
                          type="email"
                          className="text-black font-semibold rounded-xl "
                          onChange={(e) => setStudentEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Input
                          placeholder="Password"
                          type="password"
                          className="text-black font-semibold rounded-xl"
                          onChange={(e) => setStudentPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm"></div>
                        </div>
                        <Button
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700"
                          onClick={handleStudentLogin}
                        >
                          Log in
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="club">
                <Card className="bg-transparent border-none">
                  <CardContent>
                    <form className="flex flex-col space-y-6 mt-3">
                      <div className="flex space-x-4">
                        <Input
                          placeholder="Email"
                          type="email"
                          className="rounded-xl font-semibold"
                          onChange={(e) => setClubEmail(e.target.value)}
                        />
                      </div>

                      <div className="flex space-x-4 font-semibold">
                        <Input
                          placeholder="Password"
                          type="password"
                          className="rounded-xl "
                          onChange={(e) => setClubPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between"></div>
                        <Button
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700"
                          onClick={handleClubLogin}
                        >
                          Log in
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
