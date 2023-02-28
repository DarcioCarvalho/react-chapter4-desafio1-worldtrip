import { request } from "http";
import { createServer, hasMany, Model } from "miragejs";
import { africaCities, africaCitiesEnglish } from "./dataCities/africaCities";
import { asiaCities, asiaCitiesEnglish } from "./dataCities/asiaCities";
import { europeCities, europeCitiesEnglish, europeCitiesOld, getEuropeCities } from "./dataCities/europeCities";
import { northAmericaCities, northAmericaCitiesEnglish } from "./dataCities/northAmericaCities";
import { oceaniaCities, oceaniaCitiesEnglish } from "./dataCities/oceaniaCities";
import { southAmericaCities, southAmericaCitiesEnglish } from "./dataCities/southAmericaCities";

export function makeServer({ environment = 'test' }) {
  let server = createServer({
    environment,

    models: {
      continent: Model
    },

    seeds(server) {
      server.create(
        'continent',
        {
          id: 1,
          name: 'EUROPA',
          subtitle: 'O continente mais antigo',
          imageURLSlide: '/assets/europe.png',
          imageURLBanner: '/assets/europeBanner.png',
          description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          countriesAmount: 50,
          languagesAmount: 60,
          citiesMoreHundredAmount: 30,
          citiesMoreHundred: europeCities,
          citiesMoreHundredEnglish: europeCitiesEnglish
        }
      );

      server.create(
        'continent',
        {
          id: 2,
          name: 'AMÉRICA DO NORTE',
          subtitle: 'Um continente tecnológico',
          imageURLSlide: '/assets/northAmerica.png',
          imageURLBanner: '/assets/north-america-banner.png',
          description: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Esse continente é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala.',
          countriesAmount: 3,
          languagesAmount: 6,
          citiesMoreHundredAmount: 10,
          citiesMoreHundred: northAmericaCities,
          citiesMoreHundredEnglish: northAmericaCitiesEnglish
        }
      );

      server.create(
        'continent',
        {
          id: 3,
          name: 'AMÉRICA CENTRAL',
          subtitle: 'Um continente de belezas tropicais',
          imageURLSlide: '/assets/central-america.png',
          imageURLBanner: '/assets/central-america-banner.png',
          description: 'A América Central é uma região da América limitado ao norte pela Península de Iucatã, no México e ao sul pela Colômbia, limitado a Oeste com o Oceano Pacífico e a Leste com o Oceano Atlântico.',
          countriesAmount: 20,
          languagesAmount: 4,
          citiesMoreHundredAmount: 0,
          citiesMoreHundred: [],
        }
      );

      server.create(
        'continent',
        {
          id: 4,
          name: 'AMÉRICA DO SUL',
          subtitle: 'O continente com a maior floresta tropical mundial',
          imageURLSlide: '/assets/southAmerica.png',
          imageURLBanner: '/assets/south-america-banner.png',
          description: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17.819.100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
          countriesAmount: 12,
          languagesAmount: 9,
          citiesMoreHundredAmount: 3,
          citiesMoreHundred: southAmericaCities,
          citiesMoreHundredEnglish: southAmericaCitiesEnglish
        }
      );

      server.create(
        'continent',
        {
          id: 5,
          name: 'ÁFRICA',
          subtitle: 'O continente com o maior deserto do mundo',
          imageURLSlide: '/assets/africa.png',
          imageURLBanner: '/assets/africa-banner.png',
          description: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005[1]), representando cerca de um sétimo da população mundial, e 54 países independentes.',
          countriesAmount: 54,
          languagesAmount: 3000,
          citiesMoreHundredAmount: 4,
          citiesMoreHundred: africaCities,
          citiesMoreHundredEnglish: africaCitiesEnglish
        }
      );

      server.create(
        'continent',
        {
          id: 6,
          name: 'ASIA',
          subtitle: 'O maior continente da terra',
          imageURLSlide: '/assets/asia.png',
          imageURLBanner: '/assets/asia-banner.png',
          description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
          countriesAmount: 50,
          languagesAmount: 2300,
          citiesMoreHundredAmount: 50,
          citiesMoreHundred: asiaCities,
          citiesMoreHundredEnglish: asiaCitiesEnglish
        }
      );

      server.create(
        'continent',
        {
          id: 7,
          name: 'OCEANIA',
          subtitle: 'Continente formado por mais de 10 mil ilhas',
          imageURLSlide: '/assets/oceania.png',
          imageURLBanner: '/assets/oceania-banner.png',
          description: 'Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d\'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.',
          countriesAmount: 16,
          languagesAmount: 18,
          citiesMoreHundredAmount: 3,
          citiesMoreHundred: oceaniaCities,
          citiesMoreHundredEnglish: oceaniaCitiesEnglish
        }
      );

    },

    routes() {
      this.namespace = 'api'

      this.get('/continents', (schema) => {
        return schema.continents.all();
      })

      this.get('/continents/:id', (schema, request) => {
        const id = request.params.id;
        return schema.continents.find(id);
      })


      this.passthrough('https://api.pexels.com/v1/**');

      // For call of Nextjs Dynamic Route 
      this.namespace = "";
      this.passthrough();
    }
  });

  return server;
}

