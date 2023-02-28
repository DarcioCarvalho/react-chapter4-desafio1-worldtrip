import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Continent } from "../../types/continent";
import { Banner } from "./components/Banner";
import { CitiesList } from "./components/CitiesList";
import { ContinentData } from "./components/ContinentData";


export default function Continents() {
  const router = useRouter();
  const { slug } = router.query;
  const [continent, setContinent] = useState<Continent>();

  const isMobilePlus = useBreakpointValue({
    base: true,
    sm: false
  });

  const isTablet = useBreakpointValue({
    base: true,
    lg: false
  });


  useEffect(() => {
    slug &&
      fetch(`/api/continents/${slug}`)
        .then(response => response.json())
        .then(json => setContinent(json.continent));
  }, [slug]);

  return (
    <Flex
      direction="column"
      bgColor="gray.50"
      alignItems="center"
    >
      <Header withBackButton isMobilePlus={isMobilePlus} />

      {continent && (
        <>
          <Banner
            imageURL={continent.imageURLBanner}
            title={continent.name}
            isMobilePlus={isMobilePlus}
          />

          <ContinentData
            description={continent.description}
            countriesAmount={continent.countriesAmount}
            languagesAmount={continent.languagesAmount}
            citiesMoreHundredAmount={continent.citiesMoreHundredAmount}
            isTablet={isTablet}
          />

          <CitiesList
            cities={continent.citiesMoreHundred}
            isTablet={isTablet}
          />
        </>
      )}

    </Flex>
  );
}
