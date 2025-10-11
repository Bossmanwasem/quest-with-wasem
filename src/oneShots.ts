export type OneShot = {
  id: string;
  title: string;
  system: string;
  level: string;
  image: string;
  blurb: string;
  vttUrl: string;
};

export const oneShots: OneShot[] = [
  {
    id: 'sablewood-messenger',
    title: 'Sablewood Messenger',
    system: 'Daggerheart',
    level: 'Level 1 • Premade party • Nov 7, 2025',
    image: '/Mountains.png',
    blurb:
      "Marlowe Fairwind has hired a hardy band to escort a sealed crate to the Whitefire Arcanist in the village of Hush. The Sablewood seethes with hybrid beasts, whispering trees, and broken pacts eager to claim the prize. Keep the cargo safe alongside Marlowe Fairwind the Loreborne Elf Sorcerer, Barnacle the Underborne Ribbet Rogue, Garrick Reed the Highborne Human Warrior, Khari Nix the Ridgeborne Giant Guardian, and Varian Soto the Wildborne Katari Ranger.",
    vttUrl: 'https://play.questwithwasem.com',
  },
];
