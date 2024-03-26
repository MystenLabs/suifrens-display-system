import { SVGProps } from "react";

export type WildLeftEarProps = {
  earShape: "wild";
  outerEarProps?: SVGProps<SVGPathElement>;
  innerEarProps?: SVGProps<SVGPathElement>;
};

export function WildLeftEar({
  outerEarProps,
  innerEarProps,
}: WildLeftEarProps) {
  return (
    <g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 746.1,619.15)">
      <g transform="matrix(1, 0, 0, 1, 0, 0)">
        <g>
          <path
            {...outerEarProps}
            d="M26.7-12.4C21-12.6,16-11.3,11.7-8.5C-2.2,1.1-12.2,14.9-18.2,33c-1.5,4.5-1.5,9.3-0.1,14.4
                                        c1.4,5,4.2,9.6,8.2,13.8C6,78.4,24.5,93.1,45.2,105c2.8,1.6,5.6,2.7,8.3,3.4l51.6-66.1c-1.8-3-4-5.9-6.8-8.6
                                        c-16.3-15.3-34.6-29-55-41.1C38-10.5,32.5-12.2,26.7-12.4 M66,35.9c4,3.1,6.2,7.2,6.8,12.2c0.6,5-0.7,9.5-3.8,13.4l-6.3,7.8
                                        c-3.1,4-7.1,6.2-12.1,6.8c-5,0.6-9.5-0.7-13.5-3.8L15.5,55.2C11.6,52.1,9.4,48,8.8,43c-0.6-5,0.6-9.4,3.8-13.4l6.2-7.8
                                        c3.1-3.9,7.2-6.2,12.1-6.8c5-0.6,9.5,0.7,13.4,3.8L66,35.9z"
          />
          <path
            {...innerEarProps}
            d="M72.8,48.1c-0.6-5-2.8-9.1-6.8-12.2L44.3,18.8c-3.9-3.1-8.4-4.4-13.4-3.8c-5,0.6-9,2.9-12.1,6.8l-6.2,7.8
                                        C9.4,33.6,8.2,38,8.8,43c0.6,5,2.8,9.1,6.7,12.2l21.6,17.1c4,3.1,8.5,4.4,13.5,3.8c5-0.6,9-2.9,12.1-6.8l6.3-7.8
                                        C72.1,57.5,73.4,53.1,72.8,48.1z"
          />
        </g>
        <g>
          <path
            d="M53.6,113.5c-0.4,0-0.8,0-1.2-0.1c-3.2-0.8-6.5-2.1-9.7-3.9C21.6,97.2,2.7,82.1-13.7,64.6c-4.6-4.8-7.7-10.1-9.4-15.9
                                    c0,0,0,0,0-0.1c-1.7-6.1-1.6-11.9,0.2-17.3c6.4-19,17.1-33.8,31.9-44c0,0,0.1,0,0.1-0.1c5.1-3.4,11.1-5,17.8-4.8c0,0,0.1,0,0.1,0
                                    c6.6,0.3,12.9,2.2,18.9,5.7c0,0,0,0,0,0c20.6,12.3,39.4,26.4,55.9,41.8c0,0,0,0,0,0c3.1,3,5.7,6.3,7.7,9.7
                                    c1.4,2.4,0.6,5.4-1.8,6.8c-2.4,1.4-5.4,0.6-6.8-1.8c-1.5-2.6-3.5-5.1-6-7.5C79,22.4,60.8,8.8,40.8-3.1c-4.6-2.7-9.4-4.1-14.3-4.4
                                    c-4.6-0.1-8.5,0.9-12,3.1c-12.9,8.9-22.3,22-28,38.9c-1.2,3.5-1.2,7.3,0,11.5c1.2,4.2,3.6,8.1,7,11.7c0,0,0,0,0,0
                                    C9.3,74.6,27.5,89,47.7,100.7c2.4,1.3,4.7,2.3,7,2.9c2.7,0.6,4.3,3.3,3.7,6C57.9,111.9,55.8,113.5,53.6,113.5z M48.4,81.3
                                    c-5.2,0-10-1.7-14.3-5.1L12.5,59.1c-5-3.9-7.9-9.2-8.6-15.5c-0.8-6.3,0.9-12,4.8-17.1c0,0,0,0,0,0l6.2-7.8c4-5,9.2-7.9,15.5-8.7
                                    c0,0,0,0,0,0c6.4-0.7,12.1,0.9,17.1,4.8L69.1,32c5,4,7.9,9.2,8.7,15.6c0.8,6.3-0.9,12.1-4.8,17l-6.2,7.8c-3.9,5-9.1,8-15.5,8.7
                                    C50.3,81.2,49.3,81.3,48.4,81.3z M16.5,32.7c-2.3,2.9-3.2,6.1-2.7,9.7c0,0,0,0,0,0c0.4,3.7,2,6.6,4.9,8.8l21.7,17.1
                                    c2.9,2.3,6.1,3.2,9.8,2.8c3.6-0.4,6.5-2.1,8.8-5c0,0,0,0,0,0l6.3-7.9c2.3-2.8,3.1-6,2.7-9.6c-0.4-3.7-2-6.6-4.9-8.9L41.3,22.7
                                    c-2.9-2.3-6.1-3.2-9.8-2.8c-3.6,0.4-6.5,2.1-8.8,4.9L16.5,32.7z"
          />
        </g>
      </g>
    </g>
  );
}
