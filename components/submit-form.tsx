import { Button } from "./ui/button";

interface Props {}

const SubmitForm: React.FC<Props> = () => {
  return (
    <div className='bg-red-200 '>
      <div className='grid grid-cols-2 w-4/5 mx-auto gap-32 items-center py-16'>
        {/* left side */}
        <div className='pr-20'>
          <p className='text-4xl font-semibold leading-10 text-gray-800 mb-8'>
            Let us handle your project, professionally.
          </p>
          <p className='text-sm font-light leading-normal text-black/70'>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
        {/* right side */}
        <div className='flex justify-center items-center flex-col gap-4'>
          {" "}
          <input
            type='text'
            placeholder='Your name'
            className='h-12 rounded-md p-6 focus:outline-red-500 w-full outline-1 outline outline-transparent '
          />
          <input
            type='text'
            placeholder='Your email address'
            className='h-12 rounded-md p-6 focus:outline-red-500 w-full outline-1 outline outline-transparent '
          />
          <textarea
            placeholder='Your message'
            className='rounded-md p-6 focus:outline-red-500 w-full outline-1 outline outline-transparent '
          />
          <div className='mr-auto '>
            <Button>Send</Button>
          </div>
        </div>
      </div>
      <p className='text-gray-600/70 font-mono text-center pb-12'>
        Copyright sohanemon {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default SubmitForm;
