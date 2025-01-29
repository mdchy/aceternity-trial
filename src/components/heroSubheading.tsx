"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Future-proofing startups with next-gen innovation.`;
 
export default function HeroSubheading() {
    return <TextGenerateEffect words={words} />;
  }