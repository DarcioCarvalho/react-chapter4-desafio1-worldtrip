import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Building } from "../images/Building";
import { Cocktail } from "../images/Cocktail";
import { Earth } from "../images/Earth";
import { Museum } from "../images/Museum";
import { Surf } from "../images/Surf";

import { TravelTypeItem } from "./TravelTypeItem";
import { TravelTypeItemMobilePlus } from "./TravelTypeItemMobilePlus";

export function TravelTypes() {
  const isMobilePlus = useBreakpointValue({
    base: true,
    sm: false
  });

  if (isMobilePlus)
    return (
      <Flex direction="column" mt="2.25rem" px="3.125rem" gap="1.6875rem">
        <TravelTypeItemMobilePlus labels={["vida noturna", "praia"]} />
        <TravelTypeItemMobilePlus labels={["moderno", "clássico"]} />
        <TravelTypeItemMobilePlus labels={["e mais..."]} />
      </Flex>
    );


  return (
    <Flex justifyContent="space-evenly" >
      <TravelTypeItem imageTravelType={<Cocktail />} label="vida noturna" />
      <TravelTypeItem imageTravelType={<Surf />} label="praia" />
      <TravelTypeItem imageTravelType={<Building />} label="moderno" />
      <TravelTypeItem imageTravelType={<Museum />} label="clássico" />
      <TravelTypeItem imageTravelType={<Earth />} label="e mais..." />
    </Flex>
  );
}