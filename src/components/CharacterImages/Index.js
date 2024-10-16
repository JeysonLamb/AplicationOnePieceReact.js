//Imagenes CREW MUGIWARAS 

import img from "../../Imagenes/ImagMugi/Luffy.png";
import img1 from "../../Imagenes/ImagMugi/Zoro.png";
import img2 from "../../Imagenes/ImagMugi/nami.png";
import img3 from "../../Imagenes/ImagMugi/Sogeking.png";
import img4 from "../../Imagenes/ImagMugi/sanji.png";
import img5 from "../../Imagenes/ImagMugi/Chopper.png";
import img6 from "../../Imagenes/ImagMugi/Nico.png";
import img7 from "../../Imagenes/ImagMugi/Franosuke.png";
import img8 from "../../Imagenes/ImagMugi/Brook.png";
import img9 from "../../Imagenes/ImagMugi/Jinbe.png";

//Imagenes CREW HEART 
import $img from "../../Imagenes/ImagHeart/Law.png";
import $img1 from "../../Imagenes/ImagHeart/Bepo.png";
import $img2 from "../../Imagenes/ImagHeart/JeanBart.png";
import $img3 from "../../Imagenes/ImagHeart/Shachi.png";
import $img4 from "../../Imagenes/ImagHeart/Penguin.png";

import image from "../../Imagenes/ImagKid/Kid.png";
import image1 from "../../Imagenes/ImagKid/Killer.png";
import image2 from "../../Imagenes/ImagKid/Wire.png";
import image3 from "../../Imagenes/ImagKid/Heat.png";



// Corrección en la estructura del objeto, para llamar a las imagenes en un mismo componente
const characterImagesMugiwara = {
  mugiwara: {
    "Monkey D Luffy": img,
    "Roronoa Zoro": img1,
    "Nami": img2,
    "Usopp": img3,
    "Sanji": img4,
    "Tony-Tony Chopper": img5,
    "Nico Robin": img6,
    "Franky": img7,
    "Brook": img8,
    "Jinbe": img9,
  },
  heart: {
    "Trafalgar D. Water Law": $img,
    "Bepo": $img1,
    "Jean Bart": $img2,
    "Shachi": $img3,
    "Penguin": $img4,
  },
  kid: {
    "Eustass Kidd": image,
    "Killer":image1,
    "Heat":image2,
    "Wire":image3
  }
};

export default characterImagesMugiwara;
