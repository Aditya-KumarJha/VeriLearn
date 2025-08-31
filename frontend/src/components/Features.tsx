"use client";

import { BrainCircuit, Box, Award, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <BrainCircuit />,
      title: "AI-Powered Grading",
      desc: "Get instant, unbiased feedback with our advanced AI grading system.",
    },
    {
      icon: <Box />,
      title: "Blockchain Credentials",
      desc: "Secure, tamper-proof academic records issued directly on the blockchain.",
    },
    {
      icon: <Award />,
      title: "Shareable Digital Badges",
      desc: "Receive verifiable digital badges to share on portfolios & social media.",
    },
    {
      icon: <Globe />,
      title: "Instant Verification",
      desc: "Confirm credential authenticity instantly through our public portal.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Why VeriLearn?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-6 p-6 rounded-2xl border transition-all duration-300 
                       bg-white/50 border-gray-200 
                       dark:bg-zinc-800/80 dark:border-zinc-700
                       hover:shadow-xl hover:-translate-y-2 hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10
                       hover:border-blue-300 dark:hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div
                className="text-blue-600 dark:text-blue-400 text-2xl bg-blue-100 dark:bg-zinc-900 p-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12"
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

