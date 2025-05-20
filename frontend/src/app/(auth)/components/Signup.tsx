import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
export const Signup = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-[9px]">
          <div className="p-[10px]">
            <p className="text-[24px] font-bold">Create Your Account</p>
            <p className="text-[14px] text-gray-500">
              Choose a username for your page
            </p>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 p-[10px]">
            <Label htmlFor="Username">Username</Label>
            <Input
              type="Username"
              id="Username"
              placeholder="Enter username here"
            />
          </div>
          <div className="p-[10px]">
            <Button
              className="w-[300px] bg-gray-950 text-stone-50 hover:bg-gray-400"
              variant="outline"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
