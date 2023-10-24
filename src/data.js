import tab1 from "./assets/icon1.png";
import tab2 from "./assets/icon2.png";
import tab3 from "./assets/icon3.png";
import tab4 from "./assets/icon4.png";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

const data = {
  famousPersonalities: {
    name: "Famous Personalities",
    description: "Explore the lives of renowned figures in Greek history.",
    image: img1,
    tabIcon: tab1,
    examples: [
      {
        name: "Alexander the Great",
        description:
          "One of history's greatest military strategists and the king of Macedonia who conquered a vast empire.",
      },
      {
        name: "Socrates",
        description:
          "An ancient Greek philosopher known for his contributions to ethics and the Socratic method.",
      },
    ],
  },
  gods: {
    name: "Gods",
    description:
      "Learn about the divine beings of Greek mythology and their stories.",
    image: img2,
    tabIcon: tab2,
    examples: [
      {
        name: "Zeus",
        description:
          "The king of the gods in Greek mythology, known for his thunderbolt and role as ruler of Mount Olympus.",
      },
      {
        name: "Athena",
        description:
          "The goddess of wisdom, courage, and warfare, often associated with the city of Athens.",
      },
    ],
  },
  mythicalCreatures: {
    name: "Mythical Creatures",
    description:
      "Discover the fascinating world of mythical beings in Greek lore.",
    image: img3,
    tabIcon: tab3,
    examples: [
      {
        name: "Pegasus",
        description:
          "The famous winged horse in Greek mythology, known for its beauty and grace.",
      },
      {
        name: "Centaurs",
        description:
          "Mythical creatures with the upper body of a human and the lower body of a horse.",
      },
    ],
  },
  places: {
    name: "Places",
    description: "Journey to historical sites and locations of ancient Greece.",
    image: img4,
    tabIcon: tab4,
    examples: [
      {
        name: "Acropolis of Athens",
        description:
          "A prominent hill in Athens known for its historical and architectural significance.",
      },
      {
        name: "Delphi",
        description:
          "An ancient sanctuary and oracle site in Greece, regarded as the center of the world in Greek mythology.",
      },
    ],
  },
};

export default data;
