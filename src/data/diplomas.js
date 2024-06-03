// Import a reference to the image itself
import EYImagen from "./../../public/diplomas/ey/certificadoey.webp"

const TAGS = {
    HACKATON: {
      name: "Hackaton",
    },
    CITT: {
      name: "CITT",
    },
  };
  
  export const DIPLOMAS = [
    {
      title: "Hackaton FinXperience 2023 - EY",
      image: EYImagen,
      tags: [TAGS.HACKATON, TAGS.CITT],
    }, 
  ];