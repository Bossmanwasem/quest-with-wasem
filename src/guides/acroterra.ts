// quest-with-wasem/src/guides/acroterra.ts
export type GuidePanel = {
  title: string;
  body?: string; // use for a single block of text
  items?: Array<{ title?: string; subtitle?: string; body: string }>;
};

export type AcroterraGuide = {
  heroNote?: string;
  panels: GuidePanel[];
};

// All text below is quoted verbatim from your PDF.
export const acroterraGuide: AcroterraGuide = {
  heroNote:
    "A world forged by gods, scarred by the War of Eternal Night, and alive with magic, danger, and discovery.",
  panels: [
    {
      title: "Welcome to Acroterra",
      items: [
        {
          body:
            "HELLO THERE! MY NAME IS KEVIN. I’M A TOWNS guardsman in the city of Myrefall on Zoria and this is my guide to our world, my own experience if you will. Lady Vexx and Lord Mythgifted have sent me on numerous trips with all sorts of adventurous folk like you so take a seat, grab some warm milk, some cake and listen to how fascinating this world is and all the friends I have made! We have heroes, villains, monsters, and magic.",
        },
      ],
    },
    {
      title: "The Creation of Acroterra",
      items: [
        {
          body:
            "SEIRÁ, THILVES AND ASILI TOGETHER CREATED THE planet known as Acroterra. As they forged the planet, other greater beings took a great interest. Eros took great interest in the magical font that now surrounded the planet. As that was being forged Valess began creating life with Qiren creating beasts and Valess creating the first race of a ‘civilized’ society known as humans. With the creation of life, came the ritual of death and that introduces the brother duo of Zodis and Bruhl to the world to keep balance in living and the dead. The world could not always be light, so thus the creation of night and day and that transition in the world brought Remis into the world. Thus with the cycles of day and night came fierce storms of untapped power so The star of Storvind brought a balance of seasons and",
        },
      ],
    },
    {
      title: "Undead & Silver",
      items: [
        {
          body:
            "In Acroterra it’s important to keep in mind that due to the war, and shear mass amount of undead they had to fight at that time, silver is extremely rare in most parts. Many struggle to find the silver they need to ward off the undead creatures created by Thoss that still threaten the world today. The one place that silver is abundant is not accessible by the general public and is heavily guarded by these undead.",
        },
      ],
    },
    {
      title: "Continents at a Glance",
      items: [
        {
          title: "Neucrela",
          body:
            "Neucrela is a land of law and order after the war the human empires expanded killing, enslaving and deporting any who were not human. Neucrela is also in a constant state of civil war. They struggle fighting off the remaining hordes of undead from Thoss’s army in the silvered wastes, a terrible unforgiving land untouched by the humans where the undead reign. The Silvered Wastes is allied with Dragons End and they are pushing back against the human Empire. When one empire rules an area this big there’s bound to be flaws and corruption.",
        },
        {
          title: "Avrela",
          body:
            "Avrela isn’t the kind place that Zoria is, nor the war struck land that Neucrela is. It’s unique in the way that the races do live together, but you can cut that tension with a knife.",
        },
        {
          title: "Zoria",
          body:
            "Known for its welcoming atmosphere, Zoria is what you would call a melting pot of cultures and races.The land has been at peace since the war, following after the deities and remaining at peace with one another despite being scarred from the war forever.",
        },
      ],
    },
    {
      title: "Zoria — Defining Features",
      items: [
        {
          title: "The Tangled Forest & the Life Tree",
          body:
            "264 years ago the Tangled Forest detached from the continent of Zoria, rising 52,800 feet in the air and is now a floating mass of land. There are beautiful waterfalls flowing from the mass down into what is now Lake Zoria below. The Tangled Forest was always home to what is called The Life Tree. This life tree kept the clans of elves in the Tangled Forest youthful, and extended their lives. Rumors are that ancient magic aided in the Tangled Forest separating, as the clans in the forest didn’t want the Undead to poison the Life Tree. It is said the only entrance to the Tangled Forest is the crossing at the bottom of Lake Zoria.",
        },
        {
          title: "Lake Zoria",
          body:
            "This lake was created after The Tangled Forest separated from the continent. Beautiful waterfalls from The Tangled Forest flow into this gorgeous lake. The locathah protects the crossing that resides in the depths of the lake. The crossing at the bottom of the lake is rumored to be able to take you anywhere in Zoria you may want to go. Including those defended by magical means.",
        },
        {
          title: "Mount Twilight",
          body:
            "Rumored home to the oldest of the ancient dragons, Aran, Lady of the Red. The land mass is made up of pure obsidian and volcanic ash. The only inhabitants are the ancient dragon and fire Genasi tribes. The last active eruption took place during the final battle of the War of Eternal Night killing many in The Order and in Chaos alike. Their petrified and charred remains are still being found today.",
        },
        {
          title: "The Youth Tree",
          body:
            "Deep inside one of the forests of Zoria resides an enchanted cherry tree. Planted by a halfling from a leaf from the Life Tree from the Tangled Forest. This halfing, Halile Cherryhart, buried the leaf with the stem of a cherry deep in the forest where her clan resides. After she buried the leaf and stem she performed a ritual. As it grew she noticed that those around the clan began to live much longer lives. She ended up telling her Clan Elders what she had done and what was happening. From then forward the Cherryhart Clan has protected the tree, patrolling the edge of the forest and the tree at all times.",
        },
      ],
    },
    {
      title: "Neucrela — The Neverending War",
      items: [
        {
          body:
            "The Elsan Empire is in a constant state of war with Dragons End and The Silvered Wastes. The empire has sent many armies of their enslaved creatures to fight their battles, only to have them never return. Are they dead? Have they been freed by Dragons End? The Elsan Empire may never know.",
        },
      ],
    },
    {
      title: "Avrela — Touched by the Gods",
      items: [
        {
          title: "Koras Blade",
          body:
            "The Isles in the center of Averla are formed of fragments Koras Blade, when she attempted to slice the continent in half. The isles are known to have mystical properties. Many Orcs venture to these isles to show patronage to their creator.",
        },
        {
          title: "The Sunken Isles",
          body:
            "These Isles were once a part of the land mass of Avrela. They seperated and were shattered by a blast of radiance from Eros. For an unknown reason, there is a portion of the year that these Isles are dark all day and all night.",
        },
        {
          title: "Culture & Geography",
          body:
            "The land of Averla is vastly different from Zoria and Neucrela. While there aren’t any outright race wars going on, it also isn’t as inclusive and welcoming as Zoria. There is a lot of racial tension on this continent. Elvenkin and Dwarvenkin being one of the strongest tensions.",
        },
      ],
    },
    {
      title: "Deities — Samples",
      items: [
        {
          title: "Seirá (Order)",
          body:
            "Seirá was the Leader of The Order in the War of Eternal Night. Her followers lead the war on their side. Very set in her ways, and the way of Order, she was adamantly against Thoss becoming a Deity. As war broke out Seirá made sure to gather her closest allies to form an alliance against Thoss and his potential allies and followers. Seirá had hoped it wouldn’t come to war, but unfortunately it did. Too many lives were lost in her opinion. Especially when The Order came out on the losing end of the war. At the end of the war Seirá admitted defeat, and agreed to peace with the other Deities.",
        },
        {
          title: "Thilves (Depths, Seas & Monsters)",
          body:
            "Also one of Thoss’ biggest allies, he provided the side of Chaos with many monsters and beasts of burden. He taught Thoss how to summon creatures of the Abyss to fight under his rule. As payment for this, Thilves requested as many drowned souls as possible. Bruhl was happy to assist with this, as was Thoss. During the War of Eternal Night, most of the deaths coming from Chaos were in fact, drownings.",
        },
        {
          title: "Iremia (Peace)",
          body:
            "Much like Kora, as they are lovers, Irmeia remained neutral in the War of Eternal Night, yet sent followers to both sides, begging for peace. She rarely takes a form in the material plane, and more so comes as an overwhelming feeling of calm and peace. Trying her best to ease tense situations and keep the peace between the deities and their followers. As of late Iremia feels something is off and fears yet another war might rise again.",
        },
      ],
    },
  ],
};
