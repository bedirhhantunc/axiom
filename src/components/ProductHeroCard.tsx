"use client";

import Lottie from "lottie-react";
import dnaHelixAnimation from "../../public/animations/dnahelix.json";

export default function ProductHeroCard() {
  return (
    <div className="relative hidden lg:block">
      <div className="relative w-full aspect-square max-w-lg mx-auto">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
          {/* Animation - Büyütülmüş ve ortalanmış */}
          <div className="flex-1 flex items-center justify-center w-full">
            <Lottie
              animationData={dnaHelixAnimation}
              loop={true}
              className="w-full max-w-[380px] scale-110"
            />
          </div>
          {/* Text - Aşağıda ve büyütülmüş */}
          <div className="text-center pb-4">
            <p className="text-3xl font-bold text-white mb-2">Axiom AI</p>
            <p className="text-white text-lg">Yapay Zeka Destekli</p>
          </div>
        </div>
      </div>
    </div>
  );
}
