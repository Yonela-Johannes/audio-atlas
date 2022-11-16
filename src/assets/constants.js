import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { BsFileMusic } from 'react-icons/bs';
import { GiSouthAfrica } from 'react-icons/gi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'House', value: 'HOUSE' },
];

export const links = [
  { name: 'Music', to: '/', icon: BsFileMusic },
  { name: 'South Africa', to: '/south-africa', icon: GiSouthAfrica },
];
