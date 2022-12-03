import Image from "next/image";
import { Button } from "./ui/button";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center pb-16 pt-4'>
      <div className='space-y-6 md:pr-24'>
        <p className='text-5xl font-bold tracking-wide leading-10 text-gray-900'>
          Let’s Grow Your <br />
          Brand To The <br />
          Next Level
        </p>
        <p className='tracking-wide leading-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <Button>Hire us</Button>
      </div>
      <div>
        <div className='overflow-hidden '>
          <Image
            objectFit='cover'
            src={require("../assets/images/Frame.png").default}
            layout='responsive'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
