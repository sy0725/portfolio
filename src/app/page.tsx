import "@/style/globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Hello from "@/components/Hello/Hello";
import Profile from "@/components/About/Profile";
import Me from "@/components/About/Me";
import Skill from "@/components/Skill/Skill";
function page() {
  return (
    <div>
      <Header/>
      <Hello/>
      <Profile/>
      <Me/>
      <Skill/>
    </div>
  );
}

export default page;