import React, { useState } from "react";

export default function CustomSwiperNav({
  prevRef,
  nextRef,
  swiper,
  leftButtonClassName = "",
  rightButtonClassName = "",
  wrapperClassName = "",
  leftButtonBg,
  rightButtonBg,
  leftButtonBorder,
  rightButtonBorder,
  leftButtonHoverBg,
  rightButtonHoverBg,
  leftButtonArrowColor,
  rightButtonArrowColor,
  leftButtonHoverArrowColor,
  rightButtonHoverArrowColor,
  leftButtonPosition = "absolute left-0 top-1/2 -translate-y-1/2", // default position
  rightButtonPosition = "absolute right-0 top-1/2 -translate-y-1/2", // default position
}) {
  // Handlers for Swiper API
  const handlePrev = () => {
    if (swiper && swiper.slidePrev) swiper.slidePrev();
  };
  const handleNext = () => {
    if (swiper && swiper.slideNext) swiper.slideNext();
  };

  // Hover state for each button
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  // Styles for buttons
  const leftButtonStyle = {
    background: leftHover && leftButtonHoverBg ? leftButtonHoverBg : leftButtonBg,
    border: leftButtonBorder,
  };
  const rightButtonStyle = {
    background: rightHover && rightButtonHoverBg ? rightButtonHoverBg : rightButtonBg,
    border: rightButtonBorder,
  };

  return (
    <div  >
      <button
        ref={prevRef}
        className={`${leftButtonPosition} z-10 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center shadow-[0_0_35px_0_rgba(7,106,96,0.07)] transition ${leftButtonClassName}`}
        aria-label="Previous"
        type="button"
        onClick={swiper ? handlePrev : undefined}
        style={leftButtonStyle}
        onMouseEnter={() => setLeftHover(true)}
        onMouseLeave={() => setLeftHover(false)}
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.120351 3.70489L3.62545 0.132087C3.6634 0.0912857 3.70905 0.0585817 3.75971 0.0359066C3.81037 0.0132314 3.86501 0.00104409 3.92041 6.41931e-05C3.97581 -0.000915706 4.03084 0.00933173 4.08226 0.0302014C4.13367 0.051071 4.18043 0.0821399 4.21977 0.121574C4.2591 0.161008 4.29023 0.208008 4.3113 0.259799C4.33237 0.31159 4.34296 0.367122 4.34244 0.423118C4.34192 0.479113 4.33031 0.534436 4.30829 0.585822C4.28627 0.637207 4.25429 0.683613 4.21423 0.722299L1.40951 3.58079H11.5852C11.6952 3.58079 11.8007 3.62495 11.8785 3.70357C11.9563 3.78219 12 3.88882 12 4C12 4.11118 11.9563 4.21781 11.8785 4.29643C11.8007 4.37505 11.6952 4.41921 11.5852 4.41921H1.40991L4.21463 7.2777C4.25469 7.31639 4.28667 7.36279 4.30869 7.41418C4.33071 7.46556 4.34232 7.52089 4.34284 7.57688C4.34336 7.63288 4.33277 7.68841 4.3117 7.7402C4.29063 7.79199 4.2595 7.83899 4.22017 7.87843C4.18083 7.91786 4.13407 7.94893 4.08266 7.9698C4.03124 7.99067 3.97621 8.00092 3.92081 7.99994C3.86541 7.99896 3.81077 7.98677 3.76011 7.96409C3.70945 7.94142 3.6638 7.90872 3.62585 7.86791L0.120351 4.29511C0.0432625 4.21665 0 4.11057 0 4C0 3.88943 0.0432625 3.78335 0.120351 3.70489Z"
            fill={leftHover && leftButtonHoverArrowColor ? leftButtonHoverArrowColor : leftButtonArrowColor}
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        className={`${rightButtonPosition} z-10 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center shadow-[0_0_35px_0_rgba(7,106,96,0.07)] transition rotate-180 ${rightButtonClassName}`}
        aria-label="Next"
        type="button"
        onClick={swiper ? handleNext : undefined}
        style={rightButtonStyle}
        onMouseEnter={() => setRightHover(true)}
        onMouseLeave={() => setRightHover(false)}
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.120351 3.70489L3.62545 0.132087C3.6634 0.0912857 3.70905 0.0585817 3.75971 0.0359066C3.81037 0.0132314 3.86501 0.00104409 3.92041 6.41931e-05C3.97581 -0.000915706 4.03084 0.00933173 4.08226 0.0302014C4.13367 0.051071 4.18043 0.0821399 4.21977 0.121574C4.2591 0.161008 4.29023 0.208008 4.3113 0.259799C4.33237 0.31159 4.34296 0.367122 4.34244 0.423118C4.34192 0.479113 4.33031 0.534436 4.30829 0.585822C4.28627 0.637207 4.25429 0.683613 4.21423 0.722299L1.40951 3.58079H11.5852C11.6952 3.58079 11.8007 3.62495 11.8785 3.70357C11.9563 3.78219 12 3.88882 12 4C12 4.11118 11.9563 4.21781 11.8785 4.29643C11.8007 4.37505 11.6952 4.41921 11.5852 4.41921H1.40991L4.21463 7.2777C4.25469 7.31639 4.28667 7.36279 4.30869 7.41418C4.33071 7.46556 4.34232 7.52089 4.34284 7.57688C4.34336 7.63288 4.33277 7.68841 4.3117 7.7402C4.29063 7.79199 4.2595 7.83899 4.22017 7.87843C4.18083 7.91786 4.13407 7.94893 4.08266 7.9698C4.03124 7.99067 3.97621 8.00092 3.92081 7.99994C3.86541 7.99896 3.81077 7.98677 3.76011 7.96409C3.70945 7.94142 3.6638 7.90872 3.62585 7.86791L0.120351 4.29511C0.0432625 4.21665 0 4.11057 0 4C0 3.88943 0.0432625 3.78335 0.120351 3.70489Z"
            fill={rightHover && rightButtonHoverArrowColor ? rightButtonHoverArrowColor : rightButtonArrowColor}
          />
        </svg>
      </button>
    </div>
  );
}