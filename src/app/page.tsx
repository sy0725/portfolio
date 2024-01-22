import React from "react";
import "@/style/globals.css";
import Header from "@/components/Header/Header";
import Hello from "@/components/TextAnimation/Hello";
function page() {
  return (
    <div>
      <Header/>
      <Hello/>
    </div>
  );
}

export default page;