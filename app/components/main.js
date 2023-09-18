import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <section id="home">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I&apos;m <span className="text-[#6f399b]">Alexis </span>
      </h1>
      <p>
        I’m focused on building responsive front-end web applications
        integrating back-end technologies.
      </p>
      <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <a href="#" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
            <FaLinkedinIn className="text-[#6f399b] text-xl" />
          </div>
        </a>
        <a href="https://github.com/alexisflo" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
            <FaGithub className="text-[#6f399b] text-xl" />
          </div>
        </a>
        <Link href="#">
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaTwitter className="text-[#6f399b] text-xl" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Main;
