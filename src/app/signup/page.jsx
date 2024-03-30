"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import brandlogo from "../../../src/assets/brandlogo.png";
import { useState } from "react";
import * as React from "react";
import Router from "next/router";
const apiURL = "https://auth-api-his-one-stop-muskanjais30.onrender.com/user";

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

export default function Signup() {
  // console.log("KKK");
  const [position, setPosition] = useState("bottom");
  const [college, setCollege] = useState("");
  const [studentFirstname, setStudentFirstname] = useState("");
  const [studentLastname, setStudentLastname] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubEmail, setClubEmail] = useState("");
  const [clubPassword, setClubPassword] = useState("");
  const [city, setCity] = useState("");

  const handleStudentSignup = async (e) => {
    e.preventDefault();
    try {
      // console.log("IN");
      // console.log(`${apiURL}/signup-Student`);
      const response = await fetch(`${apiURL}/signup-Student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: studentFirstname,
          lastName: studentLastname,
          email: studentEmail,
          password: studentPassword,
        }),
      }).catch((error) => {
        console.error("Error fetching:", error);
      });
  
      // console.log("AFTER");
      if (response.ok) {
        console.log("Signup Successful!");
        Router.push('/interface')
      } else {
        console.log("Unsuccessful Signup");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleClubSignup = async (e) => {
    e.preventDefault();
    try {
      console.log("IN");
      // console.log(clubName,clubEmail,city,college,clubPassword);
      const response = await fetch(`${apiURL}/signup-Club`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clubName: clubName,
          collegeUni: college,
          email: clubEmail,
          city: city,
          password: clubPassword,
        }),
      });
      console.log("AFTER");
      if (response.ok) {
        console.log("Signup Successful!");
        
      }
      else {
        console.log("Unsuccessful Signup");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-4xl px-6">
        <div className="flex flex-col items-start">
          <div className="relative ">
          <Image
              src={brandlogo}
              alt="Brand Logo"
              // layout="fill"
              height={600}
              width={600}
            />          </div>
        </div>
        <div className="w-px h-100 bg-gray-300" />
        <div className="ml-6 p-8  shadow-lg max-h-[35rem] w-[24rem] rounded-xl bg-gray-100">
          <div className="mb-8 flex space-x-4">
            <Tabs defaultValue="student" className="w-[300px] rounded-3xl">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger
                  value="student"
                  className={`rounded-xl ${
                    position === "student"
                      ? " text-white bg-black"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => setPosition("student")}
                >
                  Student
                </TabsTrigger>
                <TabsTrigger
                  value="club"
                  className={`rounded-xl ${
                    position === "club"
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
                          placeholder="First name"
                          type="text"
                          className="text-black font-semibold rounded-xl"
                          onChange={(e) => setStudentFirstname(e.target.value)}
                        />
                        <Input
                          placeholder="Last name"
                          type="text"
                          className="text-black font-semibold rounded-xl "
                          onChange={(e) => setStudentLastname(e.target.value)}
                        />
                      </div>
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
                          <div className="text-sm">
                            <Link
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              href="/login"
                            >
                              Already have an account?
                            </Link>
                          </div>
                        </div>
                        <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700" onClick={handleStudentSignup}>
                          Sign up
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
                          placeholder="Club name"
                          type="text"
                          className="rounded-xl font-semibold"
                          onChange={(e) => setClubName(e.target.value)}
                        />
                      </div>

                      <div className="flex space-x-4">
                        <Input
                          placeholder="Email"
                          type="email"
                          className="rounded-xl font-semibold"
                          onChange={(e) => setClubEmail(e.target.value)}
                        />
                      </div>

                      <div className="flex space-x-4">
                        <Select onValueChange={(value) => setCollege(value)}>
                          <SelectTrigger className="rounded-xl cursor-pointer font-semibold text-gray-500">
                            <SelectValue placeholder="College or University" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rcoem">RCOEM</SelectItem>
                            <SelectItem value="vnit">VNIT</SelectItem>
                            <SelectItem value="ycce">YCCE</SelectItem>
                            
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex space-x-4">
                      <Select onValueChange={(value) => setCity(value)}>
                      <SelectTrigger className="rounded-xl cursor-pointer text-gray-500 font-semibold">
                      <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="nagpur">Nagpur</SelectItem>
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      </SelectContent>
                      </Select>
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
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <Link
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              href="/login"
                            >
                              Already have an account?
                            </Link>
                          </div>
                        </div>
                        <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700" onClick={handleClubSignup} >
                          Sign up
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
