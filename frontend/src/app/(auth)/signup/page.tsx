import React from "react";
import { Signup } from "../components/Signup";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex w-[50%] items-center justify-center">
      <div className="flex items-center justify-self-end">
        <Button
          className="w-[90px] bg-gray-200 text-stone-950 hover:bg-gray-950 hover:text-white
          "
          variant="outline"
        >
          Login
        </Button>
      </div>
      <Signup />
    </div>
  );
};

export default page;
