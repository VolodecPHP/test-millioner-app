export type OptionBgIconProps = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
};

export const OptionBgBigIcon = (props: OptionBgIconProps) => {
  return (
    <svg
      width='100%'
      height='100%'
      preserveAspectRatio='none'
      viewBox='0 0 389 72'
      fill='none'
      {...props.svgProps}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M33.0117 0.5H355.988C359.607 0.500098 363.015 2.20331 365.187 5.09766L388.374 36L365.187 66.9023C363.015 69.7967 359.607 71.4999 355.988 71.5H33.0117C29.3931 71.4999 25.9854 69.7967 23.8135 66.9023L0.625 36L23.8135 5.09766C25.9854 2.20331 29.3931 0.5001 33.0117 0.5Z'
        fill='white'
        stroke='#D0D0D8'
        {...props.pathProps}
      />
    </svg>
  );
};
