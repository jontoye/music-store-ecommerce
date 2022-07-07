import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  primary?: boolean;
  href: string;
};

const Button = ({ children, primary, href }: Props) => {
  return (
    <Link href={href}>
      <button
        className={`z-10 px-9 py-3 text-[10px] text-light font-bold tracking-[2px] rounded-md outline-none uppercase transition hover:bg-white hover:text-black ${
          primary ? 'bg-red' : 'bg-dark'
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
