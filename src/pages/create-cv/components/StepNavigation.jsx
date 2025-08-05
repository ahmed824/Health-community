import React from "react";

const StepNavigation = ({
  onPrev,
  onNext,
  onCancel,
  onSubmit,
  isLastStep,
  isFirstStep,
  isGenerating,
  isFormValid,
}) => {
  const handleSubmit = () => {
    if (isLastStep && isFormValid) {
      onSubmit();
    }
  };

  return (
    <div className="flex border-t border-[#B7D3D1] pt-12 justify-between mt-12 items-center">
      <button
        onClick={onPrev}
        disabled={isFirstStep}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
          isFirstStep
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#076A60] text-white hover:bg-[#05543e]"
        }`}
      >
        previous
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-0 py-2 font-bold text-primary mr-8 hover:underline bg-transparent border-none shadow-none focus:outline-none"
          style={{ background: "none" }}
        >
          Cancel
        </button>
        {!isLastStep ? (
          <button
            onClick={onNext}
            disabled={isLastStep}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              isLastStep
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#076A60] text-white hover:bg-[#05543e]"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 rounded-full font-medium transition-all duration-200 bg-[#076A60] text-white hover:bg-[#05543e]"
            disabled={isGenerating || !isFormValid}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(StepNavigation);
