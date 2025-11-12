"use client";
import Image from "next/image";
import { Button, Card } from "@/components/ui";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#0C8FC0] to-[#2641B2] p-8 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="relative flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="" 
              alt="Learn and Earn"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </motion.div>

          <div className="absolute top-10 -left-6 bg-[#007bff] text-white text-sm px-4 py-1 rounded-full shadow-md">
            Education Video
          </div>
          <div className="absolute top-24 -left-10 bg-[#00b894] text-white text-sm px-4 py-1 rounded-full shadow-md">
            #1st Indonesia
          </div>
          <div className="absolute bottom-10 left-8 bg-[#f39c12] text-white text-sm px-4 py-1 rounded-full shadow-md">
            Discount Voucher
          </div>
        </div>

        <div className="text-center lg:text-left max-w-xl">
          <motion.h1
            className="text-6xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn <span className="text-[#FDB64E]">&</span> Earn
          </motion.h1>
          <p className="text-lg mb-6 text-gray-100">
            The more you learn, the more you earn.<br />
            Every click brings you closer to amazing prizes. Enter & Win Today!
          </p>
          <Button className="bg-[#FDB64E] text-gray-900 font-semibold text-lg px-6 py-3 rounded-xl hover:bg-[#f6a821] transition">
            Join Now
          </Button>
        </div>
      </div>
    </main>
  );
}
