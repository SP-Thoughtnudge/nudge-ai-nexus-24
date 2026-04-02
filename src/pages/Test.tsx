
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SolutionSlide from "@/components/demo-deck/solution-slide";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <SolutionSlide />
      </main>
      <Footer />
    </div>
  );
};

export default Test;
