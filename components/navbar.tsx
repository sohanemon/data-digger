import Link from "next/link";
import { Button } from "./ui/button";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const navItem = ["home", "our portfolio", "our team", "contact us"];
  return (
    <nav className='flex justify-between w-4/5 mx-auto items-center [&_*]:items-center'>
      <div>
        <h1 className='text-lg leading-tight text-black font-semibold text-opacity-90'>
          CREATIVE <br />
          AGENCY
        </h1>
      </div>
      <div className='flex gap-7'>
        <ul className='flex gap-10'>
          {navItem.map((_) => (
            <Link
              href={"/"}
              className='text-sm leading-3 text-gray-700 uppercase font-semibold'
              key={_}
            >
              {_}
            </Link>
          ))}
        </ul>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
