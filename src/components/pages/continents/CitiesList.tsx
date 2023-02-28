import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { City } from "../../../types/city";
import { ColumnCityCards } from "./ColumnCityCards";

interface CitiesListProps {
  cities: City[];
  isTablet: boolean;
}

export function CitiesList({ cities, isTablet }: CitiesListProps) {
  const columnArray = useBreakpointValue({
    base: [1],
    md: [1, 2],
    lg: [1, 2, 3],
    xl: [1, 2, 3, 4]
  })

  return (
    <Flex
      w="full"
      px={isTablet ? "4.66%" : "9.72%"}
      mt="5rem"
      mb="4rem"
      direction="column"
    >
      <Text
        fontSize="2.25rem"
        fontWeight="500"
        color="gray.600"
      >
        Cidades +100
      </Text>

      <Flex mt="2.5rem" w="full" flexWrap="wrap">

        {!cities.length &&
          <Heading
            size="lg"
            w="70%"
            p="2rem 2.5rem"
            marginInline="auto"
            bg="gray.500"
            borderRadius={12}
            color="yellow"
            textAlign="center"
          >
            NÃO HÁ CIDADES DESTE CONTINENTE NA LISTA DAS CIDADES +100
          </Heading>
        }

        {!!cities.length &&
          columnArray.map(column =>
            <ColumnCityCards
              key={column}
              cities={cities}
              columnPositioning={column as 1 | 2 | 3 | 4}
              totalColumnsNumber={columnArray.length}
            />
          )}

      </Flex>

    </Flex>
  );
}