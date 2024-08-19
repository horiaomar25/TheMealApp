"use client";
import NewNav from "@/components/Navigation";
import HeroSection from "../components/HeroSection";
import LatestPicks from "../components/LastestPicks";


export default function Home() {
  return (
    <>
     <NewNav/>
      <HeroSection />
      <LatestPicks/>
    </>
  );
}
