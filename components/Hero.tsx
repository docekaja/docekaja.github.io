import { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import HeroSquare from './HeroSquare';
import Image from 'next/image';

type Props = {};

export default function Hero({}: Props) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const [helloW, helper1] = useTypewriter({
    words: ['Hello World,'],
    loop: 1,
    typeSpeed: 80,
    onLoopDone: () => setTimeout(() => setDescriptionVisible(true), 200),
  });

  const [aboutMe, helper2] = useTypewriter({
    words: [
      'my name is Jan Dočekal.',
      'welcome to my personal page.',
      'scroll down to see more of my work.',
    ],
    loop: 1,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 20,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <HeroSquare />
      <div className="relative h-36 w-36 mx-auto drop-shadow-sm object-cover">
        <Image
          src="/myEmoji.png"
          alt="emoji image"
          fill
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </div>
      <h1 className="flex flex-row">
        <div className="flex flex-col gap-3">
          <span className="text-5xl ">{helloW}</span>
          <div>
            {descriptionVisible && <span>{aboutMe}</span>}
            {!descriptionVisible && <Cursor cursorColor="#ca8a04" />}
            {descriptionVisible && <Cursor cursorColor="#ca8a04" />}
          </div>
        </div>
      </h1>
    </div>
  );
}
