import { useEffect, useState } from 'react';

import { Continent } from '../types/continent';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { TravelTypes } from '../components/TravelTypes';


export default function Home() {
  const [continents, setContinents] = useState<Continent[]>();


  useEffect(() => {
    fetch(`/api/continents`)
      .then(response => response.json())
      .then(json => setContinents(json.continents));
  }, []);

  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <ContinentsSlide continents={continents} />

    </>


  );
}
