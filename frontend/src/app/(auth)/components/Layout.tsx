import React from "react";

const Layout = () => {
  return (
    <div className="w-[50%] h-screen bg-yellow-500">
      <div className="flex gap-[8px] pt-[20px] pl-[90px] align-items ">
        <p className="font-normal text-[24px]">Buy Me Color</p>
      </div>
      <div className="flex h-screen justify-center items-center flex-col gap-[20px]">
        <img src="./coffee.png" alt="" />
        <p className="text-[24px] font-bold">Fund your creative work</p>
        <p className="w-[400px] ">
          Accept support. Start a membership. Setup a shop. It’s easier than you
          think.
        </p>
      </div>
    </div>
  );
};

export default Layout;
