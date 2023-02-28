import { Flex } from "@chakra-ui/react";

import { City } from "../../../types/city";
import { CityCard } from "./CityCard";

interface ColumnCityCardsProps {
  cities: City[];
  columnPositioning: 1 | 2 | 3 | 4;
  totalColumnsNumber: number;
}

export function ColumnCityCards({ cities, columnPositioning, totalColumnsNumber }: ColumnCityCardsProps) {
  const maxWidth = `${100 / totalColumnsNumber}%`;
  return (
    <Flex
      flexDirection="column"
      flex={maxWidth}
      maxW={maxWidth}
      gap={6}
      alignItems={(columnPositioning === 1 && totalColumnsNumber > 1) ? "start" :
        (columnPositioning === totalColumnsNumber && totalColumnsNumber > 1) ? "end" : "center"}
    >
      {cities.map((city, indexCity) =>
        ((indexCity) % totalColumnsNumber === (columnPositioning - 1)) &&
        <CityCard
          key={city.name}
          imageURL={city.imageURL}
          city={city.name}
          country={city.country}
          countryCode={city.countryCode}
        />
      )}
    </Flex>
  );
}