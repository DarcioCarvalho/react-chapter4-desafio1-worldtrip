import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Airplane } from "./images/Airplane";

export function Banner() {

  const isLaptop = useBreakpointValue({
    base: true,
    lg: false
  });

  const isMobilePlus = useBreakpointValue({
    base: true,
    sm: false
  });

  return (
    <Flex h={isMobilePlus ? "10.1875rem" : "23.01rem"} >
      <Flex
        w="full"
        justifyContent={{ base: '', md: 'space-around' }}
        pl={{ base: '1rem', md: '' }}
        bgImg="/assets/Background.svg"
        bgRepeat="no-repeat"
      >

        <Flex direction="column">
          <Text
            mt={isMobilePlus ? "1.75rem" : "5rem"}
            color="gray.50"
            fontSize={{ base: '1.25rem', md: '2.25rem' }}
            fontWeight="500"
          >
            5 Continentes,<br />infinitas possibilidades.
          </Text>

          <Text
            w={{ base: '20.8125rem', md: '32.75rem' }}
            mt={isMobilePlus ? "0.5rem" : "1.25rem"}
            color="gray.100"
            fontSize={{ base: '0.875rem', md: '1.25rem' }}
            fontWeight="400"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>


        {!isMobilePlus &&
          <Flex mt="4.75rem" >
            <Airplane size={isLaptop ? 'md' : 'lg'} />
          </Flex>
        }

      </Flex>
    </Flex>
  );
}