import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#47585B", //Dark/Headings and Text  // "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#999999", //Dark/Info // "#9699B0",
      "200": "#B3B5C6",
      "100": "#DADADA", //Light/Info // "#D1D2DC", 
      "50": "#F5F8FA" // Light/Headings and Text   //"#EEEEF2"  
    },
    black: "#000000", //Dark/Black
    yellow: "#FFBA08" //Highlight
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }

  }
})