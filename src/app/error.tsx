"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import Shape1 from "@/svgs/500-shape-1.svg";
import Shape2 from "@/svgs/500-shape-2.svg";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Something went wrong",
  description:
    "A science-based resource that explains the concept of natural capital and how business and society depend on it.",
};

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[url(/assets/500-background.png)] bg-[length:auto_25%] bg-right-top bg-no-repeat md:bg-[length:auto_35%] 2xl:bg-[length:auto_55%]">
      <div className="absolute bottom-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
          <motion.div
            initial={{ translateX: "-100px", translateY: 0 }}
            animate={{ translateX: 0, translateY: "100px" }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-[20%] left-0 opacity-90 xl:-left-[calc((100vw_-_1280px)_/_2)] xl:bottom-0"
          >
            <Shape1 className="max-w-[250px] md:max-w-[400px] xl:max-w-full" />
          </motion.div>
          <motion.div
            initial={{ translateX: 0, translateY: "30px" }}
            animate={{ translateX: "-220px", translateY: 0 }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-[20%] left-5 mix-blend-multiply lg:left-[20%] xl:left-0 xl:top-[calc(100%_-_30vh)]"
          >
            <Shape2 className="w-[250px] xl:h-[150%] xl:w-[150%]" />
          </motion.div>
        </div>
      </div>
      <div className="relative z-10">
        <Header />
      </div>
      <main className="relative z-10 flex flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center gap-y-6 xl:gap-y-4">
          <div className="text-5xl leading-none xl:text-[200px] xl:leading-[200px]">Whoops!</div>
          <h1 className="text-2xl xl:text-4xl">Something went wrong</h1>
          <p>Please, try to load this page again later.</p>
          <Button size="sm" asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
