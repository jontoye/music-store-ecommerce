type Props = {
  title: string;
};

const Line = () => {
  return <div className='w-full h-[0.5px] bg-dark' />;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className='flex items-center mb-8'>
      <Line />
      <div className='text-xl font-libre-baskerville font-bold px-5 min-w-fit'>{title}</div>
      <Line />
    </div>
  );
};

export default SectionHeader;
