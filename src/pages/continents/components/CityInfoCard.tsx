import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Text, Tooltip } from "@chakra-ui/react";

interface CityInfoCardProps {
  data: number;
  title: string;
  tooltipLabel?: string;
}

export function CityInfoCard({ data, title, tooltipLabel = "" }: CityInfoCardProps) {
  return (
    <Flex>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Text
          fontSize={{ base: "1.5rem", sm: "1.875rem", lg: "2.425rem", xl: "3rem" }}
          fontWeight="600"
          color="yellow"
        >
          {data}
        </Text>

        <Flex gap="0.3125rem" alignItems="baseline">
          <Text
            fontSize={{ base: "1.125rem", sm: "1.21675rem", lg: "1.30625rem", xl: "1.5rem" }}
            fontWeight="600"
            color="gray.600"
            textAlign="justify"
          >
            {title}
          </Text>

        </Flex>

      </Flex>

      {
        tooltipLabel &&
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex w="full" h={{ base: "36px", sm: "45px", lg: "58.19px", xl: "72px" }} bg="transparent" />

          <Tooltip
            hasArrow
            label={tooltipLabel}
            bg="rgba(153, 153, 153, 0.3)"
            color="black"
            placement="bottom-start"
          >
            <InfoOutlineIcon ml="0.3125rem" color="rgba(153, 153, 153, 0.5)" />
          </Tooltip>
        </Flex>
      }
    </Flex>

  );
}