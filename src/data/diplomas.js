// Import a reference to the image itself
import EYImagen from "../assets/diplomas/ey/certificadoey.webp";
import PUCImane from "../assets/diplomas/Hackaton_PUC.png";

const TAGS = {
    HACKATON: {
      name: "Hackaton",
    },
    CITT: {
      name: "CITT",
    },
    PonteficiaCatólicadeChile: {
      name: "Universidad Católica de Chile",
    },
  };
  
  export const DIPLOMAS = [
    {
      title: "Hackaton FinXperience 2023 - EY",
      image: EYImagen,
      tags: [TAGS.HACKATON, TAGS.CITT],
    },
    {
      title: "Hackaton Innavacion Y Futuro 2024 - Ponteficia Católica de Chile",
      image: PUCImane,
      tags: [TAGS.HACKATON, TAGS.PonteficiaCatólicadeChile],
    },
  ];