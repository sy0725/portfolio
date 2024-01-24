'use client'

import "@/style/globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Hello from "@/components/Hello/Hello";
import Profile from "@/components/About/Profile";
import Me from "@/components/About/Me";
import Skill from "@/components/Skill/Skill";
import ThemeProvider from "@/components/Common/ThemeProvider";

function page() {
  return (
    <>
    <ThemeProvider>
      <Header/>
      <section id='/'>
      <Hello/>
      </section>
      <section id='about'>
      <Profile />
      <Me />
      </section>
      <section id='skill'>
      <Skill/>
      </section>
      </ThemeProvider>
    </>
  );
}

export default page;