import Image from "next/image";
import Link from "next/link";
import MainIcon from "../../components/ui/main-icon";

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <main className='grid place-content-center'>
      <div>
        <div className='flex justify-center py-12'>
          <MainIcon />
        </div>
        <section className='flex flex-col items-center px-14 border border-gray-400 rounded py-32'>
          <p className='text-xl font-bold mb-4'>Login With</p>
          <button className='flex items-center w-80 rounded-full border-gray-400 border p-1 '>
            <div className='overflow-hidden h-8 w-8'>
              <Image
                src={require("../../assets/images/icons/google.png")}
                objectFit='cover'
                layout='responsive'
                alt=''
              />
            </div>
            <p className='text-base font-medium grow text-center'>
              Continue with Google
            </p>
          </button>
          <p className='font-medium text-center mt-3'>
            Don’t have an account?
            <Link href={"/register"} className='text-blue-600'>
              {" "}
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Page;
