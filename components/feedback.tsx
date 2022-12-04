import Image from "next/image";
import Heading from "./ui/heading";

interface Props {}

const Feedback: React.FC<Props> = () => {
  return (
    <section className='py-20'>
      <Heading colored='Feedback' uncolored='Clients' />
      <div className='grid grid-cols-3 gap-5'>
        {images.map((_) => (
          <FeedbackCard key={_.src} {..._} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;

type FeedbackCardProps = {
  src: string;
  width: number;
  height: number;
};

const FeedbackCard = ({ src, height, width }: FeedbackCardProps) => {
  return (
    <div className='space-y-3 border rounded'>
      <div className='flex items-center gap-4'>
        <div className='overflow-hidden w-16 h-16 rounded-full'>
          <Image
            src={src}
            objectFit='cover'
            layout='responsive'
            alt=''
            width={width}
            height={height}
          />
        </div>
        <div>
          <p className='text-xl font-semibold'>Nash Patrik</p>
          <p className='font-medium'>CEO, Manpol</p>
        </div>
      </div>
      <p className='tracking-wide leading-7 text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
        ipsum duis laoreet maecenas. Feugiat{" "}
      </p>
    </div>
  );
};

const images = [
  require("../assets/images/customer-1.png").default,
  require("../assets/images/customer-2.png").default,
  require("../assets/images/customer-3.png").default,
];
