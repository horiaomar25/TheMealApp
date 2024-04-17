"use client";
import Navigation from "./explore/Navigation";
import HeroSection from "./home/HeroSection";
import LastestPicks from "./home/LastestPicks";



export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />

      <LastestPicks />
    </>
  );
}
