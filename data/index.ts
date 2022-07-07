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
