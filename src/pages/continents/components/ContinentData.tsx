import { Flex, Text } from "@chakra-ui/react";
import { CityInfoCard } from "./CityInfoCard";

interface ContinentDataProps {
  description: string;
  countriesAmount: number;
  languagesAmount: number;
  citiesMoreHundredAmount: number;
  isTablet?: boolean;
}

export function ContinentData({ description, countriesAmount, languagesAmount, citiesMoreHundredAmount, isTablet = false }: ContinentDataProps) {
  return (
    <Flex
      direction={isTablet ? "column" : "row"}
      w="full"
      px={isTablet ? "4.66%" : "9.72%"}
      justifyContent="space-between"
      gap={{ base: "1rem", md: "2.5rem", lg: "0" }}
    >
      <Text
        w={!isTablet && "51.72%"}
        fontSize={{ base: "0.875rem", sm: "1.1875rem", lg: "1.5rem" }}
        fontWeight="400"
        color="gray.600"
        textAlign="justify"
      >
        {description}
      </Text>

      <Flex w={!isTablet && "42.24%"} justifyContent="space-between">

        <CityInfoCard
          title="países"
          data={countriesAmount}
        />

        <CityInfoCard
          title="línguas"
          data={languagesAmount}
        />

        <CityInfoCard
          title="cidades +100"
          data={citiesMoreHundredAmount}
          tooltipLabel="São as cidades do continente que estão entre as 100 cidades mais visitadas do mundo"
        />

      </Flex>

    </Flex>
  );
}