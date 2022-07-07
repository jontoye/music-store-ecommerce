import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { NavLink } from '../../types';

type Props = {
  item: NavLink;
};

const NavItem = ({ item }: Props) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div
      className='flex items-center  pr-7 py-3 gap-1 link-underline hover:text-red transition-all cursor-pointer relative'
      onMouseEnter={toggleSubMenu}
      onMouseLeave={toggleSubMenu}
    >
      {item.title}
      {item.sublinks && <FontAwesomeIcon icon={faChevronDown} size='xs' transform={{ y: 4 }} />}
      {isSubMenuOpen && item.sublinks && (
        <div className='flex flex-col z-10 absolute w-52 p-6 mt-10 top-2 text-light bg-dark animate-slideUp'>
          {item.sublinks.map((sublink) => (
            <Link href={`/product-category/${sublink}`} key={sublink}>
              <a className='block hover:text-red hover:animate-slideRight transition-all py-1'>
                {sublink}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
