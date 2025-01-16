import Logo from "@/assets/image/logo/Logo.svg?react";
import { IconProps } from "@/type/icons/icons.type";

const LogoIcons = ({ width, height, fill, className }: IconProps) => {
  return (
    <Logo className={className} width={width} height={height} fill={fill} />
  );
};

export default LogoIcons;
