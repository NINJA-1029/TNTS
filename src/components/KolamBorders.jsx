import React from "react";

export function KolamBorders() {
  return (
    <>
      {/* Top Left Corner Kolam Motif */}
      <div className="kolam-corner top-left-kolam" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <g stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none">
            <path d="M 0 0 L 100 0 L 0 100 Z" fill="none" />
            <path d="M 10 10 L 80 10 Q 45 45 10 80 Z" />
            <circle cx="25" cy="25" r="4" fill="rgba(255, 255, 255, 0.6)" />
            <circle cx="45" cy="15" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="15" cy="45" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <path d="M 20 20 Q 50 10 60 20 Q 50 50 20 60 Q 10 50 20 20 Z" />
          </g>
        </svg>
      </div>

      {/* Top Right Corner Kolam Motif */}
      <div className="kolam-corner top-right-kolam" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <g stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none">
            <path d="M 100 0 L 0 0 L 100 100 Z" fill="none" />
            <path d="M 90 10 L 20 10 Q 55 45 90 80 Z" />
            <circle cx="75" cy="25" r="4" fill="rgba(255, 255, 255, 0.6)" />
            <circle cx="55" cy="15" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="85" cy="45" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <path d="M 80 20 Q 50 10 40 20 Q 50 50 80 60 Q 90 50 80 20 Z" />
          </g>
        </svg>
      </div>

      {/* Left Kolam Side Margin Pattern */}
      <div className="kolam-border left-kolam" aria-hidden="true">
        <svg viewBox="0 0 100 800" width="100%" height="100%" preserveAspectRatio="none">
          <g stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" fill="none">
            <pattern id="kolam-pattern-left" width="100" height="200" patternUnits="userSpaceOnUse">
              <path d="M 50 10 C 20 10, 10 30, 10 50 C 10 70, 20 90, 50 90 C 80 90, 90 70, 90 50 C 90 30, 80 10, 50 10 Z" />
              <circle cx="50" cy="50" r="5" fill="rgba(255, 255, 255, 0.5)" stroke="none" />
              <circle cx="25" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="75" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="25" cy="75" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="75" cy="75" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <path d="M 25 25 Q 50 0 75 25 Q 100 50 75 75 Q 50 100 25 75 Q 0 50 25 25 Z" />
              <path d="M 50 110 L 10 150 L 50 190 L 90 150 Z" />
              <circle cx="50" cy="150" r="7" stroke="rgba(255, 255, 255, 0.5)" />
            </pattern>
            <rect width="100" height="800" fill="url(#kolam-pattern-left)" />
          </g>
        </svg>
      </div>

      {/* Right Kolam Side Margin Pattern */}
      <div className="kolam-border right-kolam" aria-hidden="true">
        <svg viewBox="0 0 100 800" width="100%" height="100%" preserveAspectRatio="none">
          <g stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" fill="none">
            <pattern id="kolam-pattern-right" width="100" height="200" patternUnits="userSpaceOnUse">
              <path d="M 50 10 C 20 10, 10 30, 10 50 C 10 70, 20 90, 50 90 C 80 90, 90 70, 90 50 C 90 30, 80 10, 50 10 Z" />
              <circle cx="50" cy="50" r="5" fill="rgba(255, 255, 255, 0.5)" stroke="none" />
              <circle cx="25" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="75" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="25" cy="75" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <circle cx="75" cy="75" r="3" fill="rgba(255, 255, 255, 0.4)" stroke="none" />
              <path d="M 25 25 Q 50 0 75 25 Q 100 50 75 75 Q 50 100 25 75 Q 0 50 25 25 Z" />
              <path d="M 50 110 L 10 150 L 50 190 L 90 150 Z" />
              <circle cx="50" cy="150" r="7" stroke="rgba(255, 255, 255, 0.5)" />
            </pattern>
            <rect width="100" height="800" fill="url(#kolam-pattern-right)" />
          </g>
        </svg>
      </div>
    </>
  );
}

