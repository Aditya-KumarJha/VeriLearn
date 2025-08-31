"use client";

import React from "react";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../components/ui/minimal-card";
import BadgeButton from "../components/ui/badge-button";

const useCase = () => {
  const cards = [
    {
      title: "For Educators",
      description:
        "VeriLearn's AI rubric builder and automated grading saved me hours, allowing me to focus more on teaching and less on repetitive tasks.",
      src: "/giphy/giphy-1.gif",
      alt: "An educator using a laptop",
    },
    {
      title: "For Learners",
      description:
        "Receiving a secure, blockchain-backed credential that I can easily share on my portfolio has been a game-changer for job applications.",
      src: "/giphy/giphy-2.gif",
      alt: "A student holding a digital badge",
    },
    {
      title: "For Employers",
      description:
        "Instantly verifying a candidate's credentials with VeriLearn has streamlined our hiring process and eliminated academic fraud.",
      src: "/giphy/giphy-3.gif",
      alt: "An employer reviewing a candidate's profile",
    },
  ];

  return (
    <div className="py-10">
      <div className="sm:w-[90%] md:w-[100%] lg:w-[75%] rounded-3xl shadow mx-auto">
        <div className="p-6 shadow rounded-3xl mx-auto">
          <BadgeButton>Templates</BadgeButton>

          <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-6">
            {cards.map((card, key) => (
              <MinimalCard
                key={key}
                className="w-full md:w-1/3 bg-[#2a2a2a] text-white rounded-2xl shadow-md"
              >
                <MinimalCardImage
                  className="h-[180px] w-full object-cover rounded-t-2xl"
                  src={card.src}
                  alt={card.alt}
                />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default useCase;
