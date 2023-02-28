import { Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  imageURL: string;
  city: string;
  country: string;
  countryCode: string;
}

export function CityCard({ imageURL, city, country, countryCode }: CityCardProps) {
  return (
    <Flex
      w="16rem"
      min-h="17.4375rem"
      height="fit-content"
      pb="1.5625rem"
      direction="column"
      bgColor="white"
      borderRadius="0.25rem"
      border="1px solid rgba(255, 186, 8, 0.5)"
    >
      <Image w="full" alt={city} src={imageURL} />

      <Flex>

        <Flex ml="1.5rem" w="11.125rem" direction="column">
          <Text
            mt="1.125rem"
            fontFamily="Barlow"
            fontSize="1.25rem"
            fontWeight="600"
            color="gray.600"
          >
            {city}
          </Text>

          <Text
            mt="0.75rem"
            fontFamily="Barlow"
            fontSize="1rem"
            fontWeight="500"
            color="gray.300"
          >
            {country}
          </Text>
        </Flex>

        <Image
          boxSize="1.875rem"
          mt="2.375rem"
          alt={country}
          src={`https://flagcdn.com/h80/${countryCode}.png`}
          borderRadius="full"
          objectFit="cover"
        />
      </Flex>

    </Flex>
  );
}