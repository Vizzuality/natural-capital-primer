"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import Shape1 from "@/svgs/404-shape-1.svg";
import Shape2 from "@/svgs/404-shape-2.svg";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "A science-based resource that explains the concept of natural capital and how business and society depend on it.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/assets/404-background.png)] bg-[length:auto_45%] bg-right-bottom bg-no-repeat xl:bg-[length:auto_70%]">
      <div className="absolute left-1/2 w-full max-w-7xl -translate-x-1/2">
        <motion.div
          initial={{ translateX: 0, translateY: 0 }}
          animate={{ translateX: "100px", translateY: "20px" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -left-14 -top-5 opacity-90 xl:-left-56"
        >
          <Shape1 className="max-w-[250px] md:max-w-[400px] xl:max-w-full" />
        </motion.div>
        <motion.div
          initial={{ translateX: 0, translateY: 0 }}
          animate={{ translateX: "-220px", translateY: "-30px" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-9 left-5 max-w-[70vw] mix-blend-multiply xl:top-0"
        >
          <Shape2 className="max-w-[250px] md:max-w-[350px] xl:max-w-full" />
        </motion.div>
      </div>
      <div className="relative z-10">
        <Header logo="white" />
      </div>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center gap-y-6 xl:gap-y-4">
          <div className="text-[160px] leading-[160px] xl:text-[200px] xl:leading-[200px]">404</div>
          <h1 className="text-2xl xl:text-4xl">Page not found</h1>
          <p>It looks like the links is broken or the page has been removed.</p>
          <Button size="sm" asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
