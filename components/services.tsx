import Image from "next/image";
import Heading from "./ui/heading";

interface Props {}

const Services: React.FC<Props> = () => {
  return (
    <section>
      <Heading uncolored='Provide awesome' colored='services' />
      {/* cards section */}
      {images.map((_) => (
        <Card src={_.src} />
      ))}
    </section>
  );
};

export default Services;

type CardProps = {
  src: string;
};

const Card = ({ src }: CardProps) => {
  return (
    <div>
      <div className='overflow-hidden '>
        <Image src={src} objectFit='cover' layout='responsive' alt='' />
      </div>
    </div>
  );
};

const images = [
  require("../assets/images/icons/service1.png"),
  require("../assets/images/icons/service2.png"),
  require("../assets/images/icons/service3.png"),
  require("../assets/images/icons/service4.png"),
  require("../assets/images/icons/service5.png"),
];
