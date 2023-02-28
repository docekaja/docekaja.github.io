import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex flex-row justify-between max-w-7xl mx-auto z-20">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/jan-docekal"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCWmvGh9o4ojguH_pvELGTTQ"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/docekaja"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center cursor-pointer">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Contact me
        </p>
      </div>
    </header>
  );
}
