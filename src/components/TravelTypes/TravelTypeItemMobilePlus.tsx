import { Flex } from "@chakra-ui/react";

import { TravelTypeItem } from "./TravelTypeItem";

interface TravelTypeItemMobilePlusProps {
  labels: string[];
}

export function TravelTypeItemMobilePlus({ labels }: TravelTypeItemMobilePlusProps) {
  const hasTwoTravelType = labels.length === 2;

  return (
    <Flex justifyContent={hasTwoTravelType ? "space-between" : "center"}>
      {labels.map(label =>
        <TravelTypeItem key={label} label={label} />
      )}
    </Flex>
  );
}