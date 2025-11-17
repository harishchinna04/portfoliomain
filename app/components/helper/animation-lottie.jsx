"use client";

import dynamic from "next/dynamic";

// Load lottie-react ONLY on the client to avoid `document is not defined`
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  if (!animationPath) return null; // safety check

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;
