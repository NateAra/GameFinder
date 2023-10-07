import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"50px"} borderRadius={"1g"} />
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
