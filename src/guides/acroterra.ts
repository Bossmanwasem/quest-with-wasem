// quest-with-wasem/src/guides/acroterra.ts
export type GuidePanel = {
  title: string;
  body?: string;
  items?: Array<{ title: string; subtitle?: string; body?: string }>;
};

export type AcroterraGuide = {
  heroNote?: string;
  panels: GuidePanel[];
};

export const acroterraGuide: AcroterraGuide = {
  heroNote:
    "A world forged by gods, scarred by the War of Eternal Night, and alive with magic, danger, and discovery.",
  panels: [
    {
      title: "Overview",
      items: [
        {
          title: "Welcome to Acroterra",
          body:
            "Townsman Kevin’s travelogue invites newcomers to a land of heroes, villains, monsters, and magic—told from Myrefall (Zoria).",
        },
        {
          title: "The Continents",
          body:
            "Zoria (melting-pot & peace), Neucrela (human empires, conflict with undead & dragonfolk), Avrela (god-touched wilds with high tensions).",
        },
      ],
    },
    {
      title: "History at a Glance",
      items: [
        {
          title: "Creation",
          body:
            "Seirá, Thilves, and Asili shaped the world; Eros nurtured arcane power; Valess & Qiren birthed life and beasts; Zodis & Bruhl balanced death; Remis, Storvind set cycles & seasons.",
        },
        {
          title: "War of Eternal Night",
          body:
            "Thoss rose toward godhood, splitting deities into Order vs. Chaos. Battles raged for centuries—mostly in Zoria—until the first half-dragon ended the war and Thoss ascended as deity of Undeath.",
        },
        {
          title: "Undead & Silver",
          body:
            "Silver is rare and critical for warding undead; the Silvered Wastes of Neucrela hold abundant (guarded) deposits.",
        },
      ],
    },
    {
      title: "Deities (Selections)",
      items: [
        { title: "Order", body: "Seirá (Order), Qiren (Intelligent Beasts & Romance), Soltis (Change/Travel), Valess (Life), Zodis (Grave), Lys (Light), Eros (Arcane)." },
        { title: "Chaos", body: "Thoss (Undead & Undying), Bruhl (Death), Thilves (Depths & Monsters), Metzqoatl (Moon/Stars/Serpents), Storvind (Tempest), Areus (Trickery), Asteraoth (Fiends & Hells)." },
        { title: "Neutral", body: "Kora (War), Iremia (Peace), Remis (Twilight), Xalenas (Forge), Safíneia (Knowledge), Asili (Nature)." },
      ],
    },
    {
      title: "Zoria: Features",
      items: [
        { title: "Tangled Forest & Life Tree", body: "A floating forest mass above Lake Zoria; entrance rumored at the lake bottom." },
        { title: "Mount Twilight", body: "Obsidian/ash massif; rumored home of Aran, Lady of the Red; battlefield relics still found." },
        { title: "Youth Tree", body: "Enchanted cherry tree protected by the Cherryhart clan." },
      ],
    },
    {
      title: "Zoria: Cities (Vale/Timber Hollow/Skyfrost)",
      items: [
        { title: "Myrefall", subtitle: "Vale", body: "War-icon city; Myth-Gifted family; origin of Ian’s Traveling Tavern." },
        { title: "Pearlhorn", subtitle: "Vale", body: "Everlit Lighthouse of Lys guides sailors through Storvind’s storms." },
        { title: "Moonbell", subtitle: "Timber Hollow", body: "Home to Zoria’s Grand Library and famed shops." },
        { title: "Red Hollow", subtitle: "Timber Hollow", body: "Scarred Woods still crackle with old magic; whispers of the dead." },
        { title: "Frost Port", subtitle: "Skyfrost", body: "Trade hub; Xalenas-blessed forge renowned for metalwork." },
      ],
    },
    {
      title: "Neucrela (South Continent)",
      items: [
        { title: "Elsan Empire", body: "Human-dominated power; expansionist, militarized; keeps ‘The Row’ for nonhumans." },
        { title: "The Silvered Wastes", body: "Undead homeland & silver jackpot; allied with Dragons End; holds back the Empire." },
        { title: "Dragons End & Shattered Isles", body: "Dragonkin & allies; land shattered by dragon feuds; neutral ground at the Isles." },
      ],
    },
    {
      title: "Avrela (East Continent)",
      items: [
        { title: "God-Touched Sites", body: "Kora’s Blade Isles; Sunken Isles radiance; many places marked by divine events." },
        { title: "Whitewater", body: "Surface/underwater city; naval sentinel; prosperity tied to Storvind." },
        { title: "Frothy Canal", body: "Only north-flowing river in Acroterra—against the continental pattern." },
      ],
    },
    {
      title: "Player Options (Table Rules & Homebrew)",
      items: [
        { title: "Races/Lineages", body: "Dragonkin (half-dragons), Aasimar, Dhampir/Hexblood/Reborn, and many more per setting guidance." },
        { title: "Classes", body: "Witch v5.7 (Nexica), MCDM Illrigger, Benjamin’s Pugilist, plus Grim Hollow options." },
        { title: "Tone & Safety", body: "Session-0 tools, lines & veils; milestone leveling; potions as bonus action (customizable to your table)." },
      ],
    },
    {
      title: "Quick Facts",
      items: [
        { title: "Vampiric Origins", body: "First Order (Poison, Mercy, Magna, Phoenix) created during the war; Wildvale is a hidden undead city." },
        { title: "Zoria Today", body: "Year 264 AS; peace holds—barely—as mischief stirs again." },
      ],
    },
  ],
};
