import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b border-zinc-600" >
      <div className="flex items-center gap-32">
        <img src="src\assets\refokus_logo.png" className="h-[16px]" />
        <div className="flex items-center justify-center gap-20">
            {["Home", "Work", "Culture", "", "News"].map((ele, index) => (
                <div className="flex items-center gap-1" key={index}>
                {index === 1 && (<span style={{ boxShadow: "0 0 0.45em #00FF19" }} className=" inline-block h-2 w-2 bg-green-500 rounded-full"></span>)}
                {ele.length === 0 ? (<span className="w-[1px] h-8 bg-zinc-600"></span>) : (<a href="#">{ele}</a>)}
            </div>
            ))}
        </div>
      </div>
      <Button text={"Start a Project"} width="40"/>
    </div>
  );
};

export default Navbar;
