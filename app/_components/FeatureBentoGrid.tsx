"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function FeatureBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full items-center justify-center  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Traditional medical consultations
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Outdated
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          AI-powered voice consultations
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Revolutionary
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Instant medical reports & insights
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Game-Changer
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Real-Time Voice Transcription",
    description: (
      <span className="text-sm">
        Advanced AI converts natural voice conversations into precise medical
        transcripts with 99% accuracy in real-time.
      </span>
    ),

    className: "md:col-span-1",
  },
  {
    title: "Intelligent Symptom Analysis",
    description: (
      <span className="text-sm">
        AI-powered algorithms detect patterns, flag potential health risks, and
        provide early warning insights.
      </span>
    ),

    className: "md:col-span-1",
  },
  {
    title: "Personalized Care Recommendations",
    description: (
      <span className="text-sm">
        Generate tailored treatment suggestions and lifestyle recommendations
        based on individual health profiles.
      </span>
    ),

    className: "md:col-span-1",
  },
  {
    title: "Emotional Intelligence & Empathy",
    description: (
      <span className="text-sm">
        AI analyzes patient emotions and communication patterns to enhance
        doctor-patient relationships and care quality.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-3",
  },
];
