import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  primary?: boolean;
};

const Button = ({ children, primary }: Props) => {
  return (
    <button
      className={`z-10 px-8 py-3 text-xs text-light rounded-md outline-none uppercase transition hover:bg-white hover:text-black ${
        primary ? 'bg-red' : 'bg-dark'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
