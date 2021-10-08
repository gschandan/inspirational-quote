import { Img } from "@chakra-ui/image";
// import logoPNG from "../assets/logo_black_v2.png";
import logoSVG from "../assets/Logo.svg";
import React from "react";

const Logo = () => {
	return <Img src={logoSVG} alt="epigram logo" mt="10" />;
};

export default Logo;
