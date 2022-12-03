import Image from "next/image";
import Heading from "./ui/heading";

interface Props {}

const Services: React.FC<Props> = () => {
  return (
    <section>
      <Heading uncolored='Provide awesome' colored='services' />
      {/* cards section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-16'>
        {images.map((_: CardProps) => (
          <Card key={_.name} name={_.name} details={_.details} src={_.src} />
        ))}
      </div>
    </section>
  );
};

export default Services;

type CardProps = {
  src: string;
  name: string;
  details: string;
};

const Card = ({ src, details, name }: CardProps) => {
  return (
    <div className='hover:shadow-2xl  rounded-2xl flex items-center flex-col p-7 gap-4'>
      <div className='overflow-hidden w-20'>
        <Image src={src} objectFit='cover' layout='responsive' alt='' />
      </div>
      <p className='text-xl font-bold leading-none text-center text-gray-800'>
        {name}
      </p>
      <p className='leading-7 text-center text-black text-opacity-70'>
        {details}
      </p>
    </div>
  );
};

const images: CardProps[] = [
  {
    name: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    src: require("../assets/images/icons/service1.png").default as string,
  },
  {
    name: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    src: require("../assets/images/icons/service2.png").default as string,
  },
  {
    name: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    src: require("../assets/images/icons/service3.png").default as string,
  },
  {
    name: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    src: require("../assets/images/icons/service4.png").default as string,
  },
  {
    name: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    src: require("../assets/images/icons/service5.png").default as string,
  },
];
