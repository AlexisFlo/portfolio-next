import Link from 'next/link';

const Main = () => {
  return (
    <section id='home'>
      <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
      </p>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">hey, I&apos;m <span className='text-[#6f399b]'>Alexis </span></h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos necessitatibus corrupti expedita quod assumenda autem, illum in aut? Sit quam accusamus nobis vel eos quod asperiores. Aliquid tenetur reiciendis praesentium.</p>
      <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              </div>
            </a>
            <a
              href='https://github.com/alexisflo'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              </div>
            </a>
            <Link href='#'>
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              </div>
            </Link>
            <Link href=''>
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              </div>
            </Link>
      </div>
    </section>
  );
};

export default Main;