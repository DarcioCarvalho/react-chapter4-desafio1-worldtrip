import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
  imageURL: string;
  title: string;
  isMobilePlus?: boolean;
}

export function Banner({ imageURL, title, isMobilePlus = false }: BannerProps) {
  return (
    <Flex
      mb={isMobilePlus ? "1.5rem" : "3rem"}
      w="full"
      h={isMobilePlus ? "150px" : "500px"}
      bgImg={imageURL}
      bgRepeat="round"
    >
      <Text
        mt={!isMobilePlus && "23.0625rem"}
        ml={!isMobilePlus && "8.75rem"}
        marginBlock={isMobilePlus && "auto"}
        marginInline={isMobilePlus && "auto"}
        fontSize="3rem"
        fontWeight="600"
        color="gray.50"
      >
        {title}
      </Text>
    </Flex>

  );
}