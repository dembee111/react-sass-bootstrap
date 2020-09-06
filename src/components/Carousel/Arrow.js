import React from "react";
export default function Arrow(props) {
  let className = props.type === "next" ? "nextArrow " : "prevArrow";
  className += " arrow d-none d-md-block";
  const char =
    props.type === "next" ? (
      <span>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.147461"
            y="0.419922"
            width="45"
            height="45"
            fill="white"
            fill-opacity="0.8"
          />
          <path
            d="M16.9497 12.5149L28.3457 22.9199L16.9497 33.3249"
            stroke="black"
          />
        </svg>
      </span>
    ) : (
      <span>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.147461"
            y="0.419922"
            width="45"
            height="45"
            fill="white"
            fill-opacity="0.8"
          />
          <path
            d="M28.3457 12.5149L16.9497 22.9199L28.3457 33.3249"
            stroke="black"
          />
        </svg>
      </span>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
