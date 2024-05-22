import { ComponentProps } from "react";

import dynamic from "next/dynamic";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
}

export const LazySvg = async ({ name, ...props }: LazySvgProps) => {

  const Svg = dynamic(() => import(`../../../node_modules/cryptocurrency-icons/svg/color/${name}.svg`));

  return <Svg {...props} />
};