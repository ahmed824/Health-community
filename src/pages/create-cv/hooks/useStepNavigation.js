"use client";
import { useState } from "react";

export const useStepNavigation = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const goToStep = (stepNumber) => setStep(stepNumber);

  return {
    step,
    nextStep,
    prevStep,
    goToStep,
  };
}; 