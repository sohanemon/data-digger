import Head from "next/head";
import Feedback from "../components/feedback";
import Hero from "../components/hero";
import OurWorks from "../components/our-works";
import Partners from "../components/partners";
import Services from "../components/services";
import SubmitForm from "../components/submit-form";

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
        {/* done: service */}
        <Services />
        {/* done: our works */}
      </div>
      <OurWorks />
      <div className='w-4/5 mx-auto'>
        {/* todo: client feedback */}
        <Feedback />
      </div>

      {/* done: submit form */}
      <SubmitForm />
      {/* todo: footer */}
    </main>
  );
};

export default Page;
