import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: ['Hello World', 'My name is Jan Dočekal', 'Welcome to my personal page'],
    loop: 1,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 20,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#128DAC" />
      </h1>
    </div>
  );
}
