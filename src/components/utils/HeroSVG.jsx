"use client";

export default function HeroSVG() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full animate-float"
        viewBox="0 0 500 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.1 }}
            />
          </linearGradient>
        </defs>

        <circle
          cx="250"
          cy="200"
          r="80"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        ></circle>
        <circle
          cx="250"
          cy="200"
          r="120"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="5,5"
        ></circle>

        <circle cx="250" cy="200" r="15" fill="#3b82f6"></circle>
        <circle cx="180" cy="150" r="10" fill="#3b82f6" opacity="0.8"></circle>
        <circle cx="320" cy="150" r="10" fill="#3b82f6" opacity="0.8"></circle>
        <circle cx="180" cy="250" r="10" fill="#3b82f6" opacity="0.8"></circle>
        <circle cx="320" cy="250" r="10" fill="#3b82f6" opacity="0.8"></circle>

        <line
          x1="250"
          y1="200"
          x2="180"
          y2="150"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.6"
        ></line>
        <line
          x1="250"
          y1="200"
          x2="320"
          y2="150"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.6"
        ></line>
        <line
          x1="250"
          y1="200"
          x2="180"
          y2="250"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.6"
        ></line>
        <line
          x1="250"
          y1="200"
          x2="320"
          y2="250"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.6"
        ></line>

        <circle
          cx="250"
          cy="200"
          r="40"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          opacity="0.5"
        >
          <animate
            attributeName="r"
            values="40;70;40"
            dur="4s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="opacity"
            values="0.5;0.2;0.5"
            dur="4s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
