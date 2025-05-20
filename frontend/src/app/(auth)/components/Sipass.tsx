"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export const Sipass = () => {
  // const { user, setUser } = useState("");

  return (
    <div>
      <Button className="w-[100px] bg-gray-950 text-stone-50" variant="outline">
        Sign-up
      </Button>
      <div>
        <p>Welcome back</p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter email here" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="enter password here"
          />
        </div>
        <Button
          className="w-[300px] bg-gray-950 text-stone-50"
          variant="outline"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
