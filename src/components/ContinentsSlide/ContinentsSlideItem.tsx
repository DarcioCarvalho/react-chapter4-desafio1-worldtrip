import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentsSlideItemProps {
  imageURL: string;
  title: string;
  subTitle: string;
  continentId: string;
}

export function ContinentsSlideItem({ imageURL, title, subTitle, continentId }: ContinentsSlideItemProps) {
  return (
    <Link href={`/continents/${continentId}`}>
      <Flex
        h="full"
        bgImg={imageURL}
        bgSize="cover"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text
            fontSize={{ base: "1.5rem", sm: "3rem" }}
            fontWeight="700"
            color="gray.50"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "0.875rem", sm: "1.5rem" }}
            fontWeight="700"
            color="gray.100"
          >
            {subTitle}
          </Text>
        </Flex>

      </Flex>
    </Link>
  );
}