import { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { BackButtonIcon } from "./BackButtonIcon";
import { Logo } from "./Logo";

interface HeaderProps {
  withBackButton?: boolean;
  isMobilePlus?: boolean;
}

export function Header({ withBackButton = false, isMobilePlus = false }: HeaderProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Flex
      w="full"
      h={{ base: "3.125rem", sm: "6.25rem" }}
      alignItems="center"
      justifyContent={withBackButton ? "space-between" : "center"}
      px={{ base: "1rem", sm: "8.75rem" }}
    >

      {withBackButton &&
        <Flex w="11.25rem" alignItems="center">
          <Link href={"/"} >
            <IconButton
              aria-label="Voltar para Página Principal"
              icon={<BackButtonIcon isMouseOver={isMouseOver} size={isMobilePlus ? 8 : 18} />}
              bgColor="transparent"
              _hover={{ "bgColor": "transparent" }}
              _focus={{ "bgColor": "transparent" }}
              onMouseOver={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
            />
          </Link>
        </Flex>
      }

      <Logo isMobilePlus={isMobilePlus} />

      {withBackButton && <Flex w="11.25rem" />}
    </Flex>
  );
}