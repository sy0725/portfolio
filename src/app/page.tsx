'use client'

import "@/style/globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Hello from "@/components/Hello/Hello";
import Profile from "@/components/About/Profile";
import Me from "@/components/About/Me";
import Skill from "@/components/Skill/Skill";
import DownBottom from "@/components/Common/DownBottom";
function page() {
  return (
    <>
      <Header/>
      <section id='/'>
      <Hello/>
      </section>
      <section id='about'>
      <Profile />
      </section>
      <Me />
      <Skill/>
    </>
  );
}

export default page;