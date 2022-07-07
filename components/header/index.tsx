import Image from 'next/image';
import TopPanel from './TopPanel';
import Logo from '../../public/images/logo.png';
import Link from 'next/link';
import { menu } from '../../data';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header>
      <TopPanel />
      <nav className=' justify-between max-w-screen-lg mx-auto p-3 hidden sm:flex'>
        <Link href='/'>
          <a>
            <Image src={Logo} width={190} objectFit='contain' />
          </a>
        </Link>
        <div className='flex items-center gap-1'>
          {menu.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
