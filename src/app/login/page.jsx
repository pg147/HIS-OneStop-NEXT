"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import brandlogo from "../../../src/assets/brandlogo.png";
import { useState } from "react";
import * as React from "react";

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
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-4xl px-6">
        <div className="flex flex-col items-start">
          <div className="relative">
            <Image
              src={brandlogo}
              alt="Brand Logo"
              // layout="fill"
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
                          placeholder="Email"
                          type="email"
                          className="text-black font-semibold rounded-xl "
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Input
                          placeholder="Password"
                          type="password"
                          className="text-black font-semibold rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm"></div>
                        </div>
                        <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700">
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
                        />
                      </div>

                      <div className="flex space-x-4 font-semibold">
                        <Input
                          placeholder="Password"
                          type="password"
                          className="rounded-xl "
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between"></div>
                        <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-700">
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
