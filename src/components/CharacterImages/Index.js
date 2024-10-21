// Importar imágenes de la tripulación Mugiwara
import luffy from "../../Imagenes/ImagMugi/Luffy.png";
import zoro from "../../Imagenes/ImagMugi/Zoro.png";
import nami from "../../Imagenes/ImagMugi/nami.png";
import usopp from "../../Imagenes/ImagMugi/Sogeking.png";
import sanji from "../../Imagenes/ImagMugi/sanji.png";
import chopper from "../../Imagenes/ImagMugi/Chopper.png";
import robin from "../../Imagenes/ImagMugi/Nico.png";
import franky from "../../Imagenes/ImagMugi/Franosuke.png";
import brook from "../../Imagenes/ImagMugi/Brook.png";
import jinbe from "../../Imagenes/ImagMugi/Jinbe.png";

// Importar imágenes de la tripulación Heart
import law from "../../Imagenes/ImagHeart/Law.png";
import bepo from "../../Imagenes/ImagHeart/Bepo.png";
import jeanBart from "../../Imagenes/ImagHeart/JeanBart.png";
import shachi from "../../Imagenes/ImagHeart/Shachi.png";
import penguin from "../../Imagenes/ImagHeart/Penguin.png";

// Importar imágenes de la tripulación Kid
import kid from "../../Imagenes/ImagKid/Kid.png";
import killer from "../../Imagenes/ImagKid/Killer.png";
import wire from "../../Imagenes/ImagKid/Wire.png";
import heat from "../../Imagenes/ImagKid/Heat.png";

// Corrección en la estructura del objeto, para llamar a las imágenes en un mismo componente
const characterImages = {
  mugiwara: {
    "Monkey D Luffy": luffy,
    "Roronoa Zoro": zoro,
    "Nami": nami,
    "Usopp": usopp,
    "Sanji": sanji,
    "Tony-Tony Chopper": chopper,
    "Nico Robin": robin,
    "Franky": franky,
    "Brook": brook,
    "Jinbe": jinbe,
  },
  heart: {
    "Trafalgar D. Water Law": law,
    "Bepo": bepo,
    "Jean Bart": jeanBart,
    "Shachi": shachi,
    "Penguin": penguin,
  },
  kid: {
    "Eustass Kidd": kid,
    "Killer": killer,
    "Heat": heat,
    "Wire": wire,
  },
};

export default characterImages;