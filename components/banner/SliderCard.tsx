import Button from '../button';

type Props = {
  img: string;
};

export const SliderCard = ({ img }: Props) => {
  return (
    <div
      className='flex flex-col justify-evenly items-center h-96'
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='text-light text-center w-full xs:w-1/2'>
        <h1 className='text-2xl md:text-5xl font-bold mb-4 font-libre-baskerville'>
          Musical Equipment & Accessories
        </h1>
        <p className='text-sm px-5 sm:px-20'>
          Here youll find a huge range of musical equipment from the world{''}s best brands
        </p>
      </div>
      <div className='w-96 flex justify-evenly'>
        <Button primary>Shop Now</Button>
        <Button>View Items</Button>
      </div>
    </div>
  );
};
