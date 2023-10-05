import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={Logo} boxSize={"50px"} borderRadius={"1g"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
