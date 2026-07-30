import React from "react";
import kolamBorderImg from "../assets/kolam-border.png";

export function KolamBorders() {
  return (
    <>
      {/* Left Kolam Side Border - uniform vertical pattern */}
      <div className="kolam-border left-kolam" aria-hidden="true">
        <img
          src={kolamBorderImg}
          alt=""
          className="kolam-border-img"
        />
      </div>

      {/* Right Kolam Side Border - uniform vertical pattern */}
      <div className="kolam-border right-kolam" aria-hidden="true">
        <img
          src={kolamBorderImg}
          alt=""
          className="kolam-border-img mirrored"
        />
      </div>
    </>
  );
}
