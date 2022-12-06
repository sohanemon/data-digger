import Link from "next/link";
import { Button } from "./ui/button";
import MainIcon from "./ui/main-icon";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const navItem = ["home", "our portfolio", "our team", "contact us"];
  return (
    <nav className='flex justify-between w-4/5 mx-auto items-center [&_*]:items-center'>
      <div>
        <MainIcon />
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
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
