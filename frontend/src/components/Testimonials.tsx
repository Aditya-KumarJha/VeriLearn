"use client";
import React, { useState } from "react";
import HoverExpand from "./ui/hover-expand";

export const stories = [
  {
    id: 1,
    name: "Dr. Alisha Grant",
    role: "Online Course Instructor",
    quote:
      "VeriLearn's AI grading is a lifesaver. It handles routine assessments, giving me more time to mentor students. The blockchain credentials add real value to my certificates.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2526&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Holloway",
    role: "University Registrar",
    quote:
      "Issuing degrees on the blockchain has drastically reduced academic fraud. VeriLearn provides the security and trust our institution demands.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2532&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Corporate Trainer",
    quote:
      "We use VeriLearn to issue verifiable credentials for our internal training programs. It's streamlined how we track employee skills and certifications.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    role: "Graduating Student",
    quote:
      "Having a verifiable digital badge on my LinkedIn profile made a huge difference. Employers could instantly see the authenticity of my skills.",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2592&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "Hiring Manager",
    quote:
      "The ability to verify a candidate's credentials with a single click has made our hiring process faster and more reliable. VeriLearn is a game-changer.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Javier Rodriguez",
    role: "Blockchain Developer",
    quote:
      "The integrity of VeriLearn's system is impressive. They've built a robust platform that leverages blockchain's core strengths for a real-world use case.",
    image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2580&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Emily Carter",
    role: "Lifelong Learner",
    quote:
      "I'm constantly taking courses to upskill. VeriLearn allows me to build a trusted, verifiable portfolio of all my achievements in one place.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Ben Jacobs",
    role: "EdTech Innovator",
    quote:
      "VeriLearn is the future of academic records. It's exactly the kind of transparent and secure credentialing system the education sector needs.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function SuccessStories() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="relative p-16">
      <div className="container sm:mx-4 md:mx-auto md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Success Stories
        </h2>
        <p className="text-muted-foreground mb-4">
          Trusted by leading institutions, VeriLearn delivers secure, simple, and efficient academic credentialing.        
        </p>

        <HoverExpand
          images={stories.map((s) => s.image)}
          maxThumbnails={stories.length}
          thumbnailHeight={220}
          modalImageSize={420}
          onHover={(index) => setHoveredIndex(index)}
        />

        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground italic mb-4">
            “{stories[hoveredIndex].quote}”
          </p>
          <h3 className="text-foreground font-semibold">
            {stories[hoveredIndex].name}
          </h3>
          <span className="text-sm text-muted-foreground">
            {stories[hoveredIndex].role}
          </span>
        </div>
      </div>
    </section>
  );
}
