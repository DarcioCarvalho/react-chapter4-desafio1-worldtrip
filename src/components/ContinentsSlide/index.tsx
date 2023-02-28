import { Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ContinentsSlide.module.scss';
import { ContinentsSlideItem } from "./ContinentsSlideItem";
import { Continent } from "../../types/continent";

interface ContinentsSlideProps {
  continents: Continent[];
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {

  const isMobilePlus = useBreakpointValue({
    base: true,
    sm: false
  });

  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      <Flex w="5.625rem" mt="5rem" >
        <Divider border="2px" borderColor="gray.600" />
      </Flex>

      <Text
        mt="3.25rem"
        color="gray.600"
        fontSize="2.25rem"
        fontWeight="500"
        textAlign="center"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

      <Flex
        mt="3.25rem"
        mb="2.5rem"
        w="100vw"
        maxW="77.5rem"
        h={isMobilePlus ? "73vh" : "28.125rem"}
        alignItems="center"
      >

        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          cssMode
          navigation
          pagination
          mousewheel
          keyboard
          spaceBetween={50}
          slidesPerView={1}
        >

          {continents && continents.map(continent =>
            <SwiperSlide key={continent.id} >
              <ContinentsSlideItem
                imageURL={continent.imageURLSlide}
                title={continent.name}
                subTitle={continent.subtitle}
                continentId={continent.id}
              />
            </SwiperSlide>
          )}

        </Swiper>
      </Flex>

    </Flex>

  );

}