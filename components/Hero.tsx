import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [aboutMe, helper] = useTypewriter({
    words: ['Hello stranger', 'My name is Jan Dočekal', 'Have fun exploring my website'],
    loop: 1,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 20,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <div>
        <div className="relative bottom-4 h-32 w-32 mx-auto drop-shadow-sm object-cover">
          <Image src="/myEmoji.png" alt="emoji image" fill sizes="20vw,20vw,2Ovw" />
        </div>
        <h2 className="relative bottom-2 text-gray-500">Junior JavaScript Developer</h2>
      </div>
      <div className="space-y-8 z-20">
        <h1 className="flex flex-row text-2xl md:text-3xl lg:text-4xl justify-center">
          <span className="">{aboutMe}</span>
          <Cursor cursorColor="#ca8a04" />
        </h1>
        <div className="space-x-4 lg:space-x-8">
          <Link href={''}>
            <button className="heroButton" onClick={() => console.log('Hi')}>
              About
            </button>
          </Link>
          <Link href={''}>
            <button className="heroButton">Projects</button>
          </Link>
          <Link href={''}>
            <button className="heroButton">CV</button>
          </Link>
          <Link href={''}>
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
