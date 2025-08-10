export type Campaign = {
  id: string;
  title: string;
  schedule: string;
  image: string;
  blurb: string;
};

export const campaigns: Campaign[] = [
  {
    id: 'acroterra',
    title: 'Acroterra',
    schedule: 'Biweekly • Mondays • 7:00 PM CST • Online',
    image: '/acroterra.png',
    blurb:
      'Acroterra is a world forged by gods, scarred by the War of Eternal Night, and alive with magic, danger, and discovery. From Zoria’s welcoming cities and floating forests, to Neucrela’s warring empires and undead wastelands, to Avrela’s god-touched wilds, the land is shaped by ancient rivalries and divine influence. Here, dragons walk among mortals, lost magic sleeps beneath the earth, and every hero’s choice can shift the balance between order and chaos.',
  },
  {
    id: 'drakkenheim',
    title: 'Dungeons of Drakkenheim',
    schedule: 'Biweekly • Wednesdays • 4:30 PM CST • In Person',
    image: '/drakkenheim.png',
    blurb:
      'Fifteen years ago, a meteor blast devastated Drakkenheim, transforming it into a haunted, magic-infused ruin. Now, the city lies in ruins—where warped creatures roam and rival factions vie for control of its unstable power. It\'s a dark fantasy sandbox brimming with eldritch mystery, deadly politics, and untold riches—where every step through crumbling streets could alter the fate of a broken world.',
  },
];
