interface Props {
  uncolored: string;
  colored: string;
  alt?: string;
}

const Heading: React.FC<Props> = ({ uncolored, colored, alt }) => {
  return (
    <>
      <p
        className={`text-4xl ${
          alt || "text-gray-800"
        } font-semibold leading-10 text-center`}
      >
        {uncolored} <span className='text-red-500'>{colored}</span>
      </p>
    </>
  );
};

export default Heading;
