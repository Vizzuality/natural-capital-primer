"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Shape1 from "@/svgs/404-shape-1.svg";
import Shape2 from "@/svgs/home-shape-2.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/assets/home-background-mobile.png)] bg-[length:auto_50%] bg-[right_bottom_40px] bg-no-repeat pb-10 md:bg-[length:auto_70%] lg:bg-[url(/assets/404-background.png)] lg:bg-right-bottom lg:pb-20 xl:bg-[length:auto_80%]">
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
            className="absolute -left-14 -top-5 opacity-90 lg:-left-56"
          >
            <Shape1 className="max-w-[250px] md:max-w-[400px] lg:max-w-full" />
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
            className="absolute -top-9 left-5 max-w-[70vw] mix-blend-multiply lg:top-0"
          >
            <Shape2 className="max-w-[250px] md:max-w-[350px] lg:max-w-full" />
          </motion.div>
        </div>
        <div className="relative z-10">
          <Header logo="white" />
        </div>
        <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-y-10 p-6 pb-0 lg:gap-y-24 lg:px-20 lg:pt-36">
          <div className="flex max-w-[540px] flex-col items-start gap-y-6 lg:max-w-[1020px] lg:gap-y-10">
            <h1 className="text-[52px] font-medium leading-none lg:text-6xl">
              Welcome to the Natural Capital Primer
            </h1>
            <p className="lg:text-2xl">
              A science-based resource that explains the concept of natural capital and how business
              and society depend on it.
            </p>
          </div>
          <div className="flex items-end gap-x-10">
            <Link
              href="https://www.latrobe.edu.au/"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white"
            >
              <Image
                src="/assets/la-trobe-university.png"
                alt="La Trobe University"
                width={180}
                height={48}
                className="w-[111px] mix-blend-darken lg:w-[180px]"
              />
            </Link>
            <Link href="https://macdochfoundation.org/" rel="noopener noreferrer" target="_blank">
              <Image
                src="/assets/macdoch-foundation.png"
                alt="Macdoch Foundation"
                width={154}
                height={68}
                className="w-[98px] lg:w-[154px]"
              />
            </Link>
          </div>
        </main>
      </div>
      <main className="flex flex-col items-center justify-between p-24">Hello world</main>
      <Footer />
    </>
  );
}
