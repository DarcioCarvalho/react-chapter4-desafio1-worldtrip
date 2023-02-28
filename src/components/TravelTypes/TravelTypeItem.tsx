import { ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface TravelTypeItemProps {
  imageTravelType?: ReactNode;
  label: string;
}

export function TravelTypeItem({ imageTravelType, label }: TravelTypeItemProps) {
  const isMobilePlus = !imageTravelType;

  if (isMobilePlus)
    return (
      <Flex direction="row" alignItems="center" >
        <Box w="0.5rem" h="0.5rem" bgColor="yellow" borderRadius="full" />
        <Text ml="0.5rem" color="gray.600" fontSize="1.125rem" fontWeight="500">{label}</Text>
      </Flex>
    )

  return (
    <Flex direction="column" w="9.875rem" alignItems="center" >
      {imageTravelType}
      <Text mt="1.5rem" color="gray.600" fontSize="1.5rem" fontWeight="600" textAlign="center">{label}</Text>
    </Flex>
  );
}