import Image from "next/image";

interface Props {}

const Partners: React.FC<Props> = () => {
  return (
    <section className='flex items-center gap-20 flex-wrap [&_div]:w-36 my-20    '>
      {images.map((_) => (
        <div key={_.default} className=''>
          <Image objectFit='cover' src={_} layout='responsive' alt='' />
        </div>
      ))}
    </section>
  );
};

export default Partners;

const images = [
  require("../assets/images/logos/slack.png"),
  require("../assets/images/logos/uber.png"),
  require("../assets/images/logos/netflix.png"),
  require("../assets/images/logos/google.png"),
  require("../assets/images/logos/airbnb.png"),
];
