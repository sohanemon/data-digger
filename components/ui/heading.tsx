interface Props {
  uncolored: string;
  colored: string;
}

const Heading: React.FC<Props> = ({ uncolored, colored }) => {
  return (
    <>
      <p className='text-4xl text-gray-800 font-semibold leading-10 text-center'>
        {uncolored} <span className='text-red-500'>{colored}</span>
      </p>
    </>
  );
};

export default Heading;
