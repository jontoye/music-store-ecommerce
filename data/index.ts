import { NavLink, ImgUrl, Category } from '../types';

export const menu: NavLink[] = [
  {
    title: 'Band & Orchestra',
    sublinks: [
      'Bags and Cases',
      'Instruments',
      'Mouthpieces',
      'Orchestral Strings',
      'Upright Basses',
    ],
  },
  {
    title: 'Recording',
    sublinks: [
      'Audio Interfaces',
      'Audio Workstations',
      'MIDI Controlelrs',
      'MIDI Interfaces',
      'Software',
    ],
  },
  {
    title: 'DJ & Karaoke',
    sublinks: ['Accessories', 'Controllers', 'Headphones', 'Mixers', 'Turntables'],
  },
  {
    title: 'Sale',
  },
  {
    title: 'Search',
  },
];

export const bannerImgs: ImgUrl[] = [
  {
    id: 1,
    url: 'https://i.imgur.com/G4IB0wn.jpg',
  },
  {
    id: 2,
    url: 'https://i.imgur.com/fPArVOS.jpg',
  },
  {
    id: 3,
    url: 'https://i.imgur.com/30lG1RP.jpg',
  },
];

export const categories: Category[] = [
  {
    name: 'Accessories',
    image: 'https://i.imgur.com/i5d6Yyo.jpg',
    slug: 'accessories',
  },
  {
    name: 'Drums & Percussion',
    image: 'https://i.imgur.com/MzFjjTO.jpg',
    slug: 'drums-percussion',
  },
  {
    name: 'Guitars',
    image: 'https://i.imgur.com/vgTmpDX.jpg',
    slug: 'guitars',
  },
  {
    name: 'Keyboards & Pianos',
    image: 'https://i.imgur.com/DbPPKqg.jpg',
    slug: 'keyboards-pianos',
  },
  {
    name: 'Band & Orchestra',
    image: 'https://i.imgur.com/b75yHi1.jpg',
    slug: 'band-orchestra',
  },
  {
    name: 'DJ & Karaoke',
    image: 'https://i.imgur.com/juQmM9k.jpg',
    slug: 'dj-karaoke',
  },
  {
    name: 'Bass Guitars',
    image: 'https://i.imgur.com/PZCPUPC.jpg',
    slug: 'bass-guitars',
  },
  {
    name: 'Recording',
    image: 'https://i.imgur.com/D3PdJLY.jpg',
    slug: 'recording',
  },
];
