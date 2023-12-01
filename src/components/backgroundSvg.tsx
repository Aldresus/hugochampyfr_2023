import { Fragment, SVGProps } from "react";

export default function BackgroundSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <Fragment>
      <svg
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        {...props}
      >
        <clipPath id="svgPath">
          {/*<path*/}
          {/*  transform="translate(0, 960) scale(2)"*/}
          {/*  d="M0 -270C37.8 -268.4 75.7 -266.9 103.3 -249.4C131 -232 148.4 -198.7 173.2 -173.2C198.1 -147.8 230.2 -130.1 247.6 -102.6C265 -75 267.5 -37.5 270 0L0 0Z"*/}
          {/*  stroke="#000000"*/}
          {/*  strokeWidth="1.5794"*/}
          {/*></path>*/}
          {/*/!*<g transform="translate(960, 0)">*!/*/}
          {/*<path*/}
          {/*  transform="translate(1920, 0) scale(2)"*/}
          {/*  d="M0 378C-41.4 356.6 -82.7 335.3 -133.2 321.5C-183.6 307.7 -243.1 301.6 -267.3 267.3C-291.5 233 -280.3 170.5 -292.9 121.3C-305.4 72.1 -341.7 36 -378 0L0 0Z"*/}
          {/*  stroke="#000000"*/}
          {/*  strokeWidth="1.5794"*/}
          {/*></path>*/}

          <path
            transform="translate(1790, 0) scale(2)"
            d="M0 470C-43.6 404.1 -87.3 338.3 -182.5 316.1C-277.7 293.9 -424.5 315.4 -467.7 270C-510.8 224.6 -450.4 112.3 -390 0L0 0Z"
            fill="#FBAE3C"
          ></path>

          <path
            transform="translate(0, 960) scale(1)"
            d="M0 -387C55.6 -356.3 111.3 -325.5 174.5 -302.2C237.7 -279 308.5 -263.1 370.7 -214C432.8 -164.9 486.4 -82.4 540 0L0 0Z"
            fill="#FBAE3C"
          ></path>

          {/*</g>*/}
        </clipPath>
      </svg>
      <div
        className="w-full h-full bg-accent-foreground bg-opacity-10 backdrop-filter backdrop-blur-sm "
        style={{ clipPath: "url(#svgPath)" }}
      ></div>
    </Fragment>
  );
}
