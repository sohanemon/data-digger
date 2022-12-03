import Head from "next/head";
import Hero from "../components/hero";
import Partners from "../components/partners";
import Services from "../components/services";

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <main>
      {/* done: hero */}
      <div
        className='bg-red-200'
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)" }}
      >
        <Hero />
      </div>
      <div className='w-4/5 mx-auto'>
        {/* done: partners */}
        <Partners />
        {/* todo: service */}
        <Services />
        {/* todo: our works */}
        {/* todo: client feedback */}
        {/* todo: submit form */}
      </div>
      {/* todo: footer */}
    </main>
  );
};

export default Page;
