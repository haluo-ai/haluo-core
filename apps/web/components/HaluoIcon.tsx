import Image from 'next/image';
import HaluoLogoIcon from '@/public/icons/haluoicon.webp';
import HaluoLogoText from '@/public/icons/texticon.png';

export default function HaluoLogo({
  height,
  gap,
}: {
  height: number;
  gap: string;
}) {
  return (
    <span style={{ gap }} className="flex items-center">
      <Image src={HaluoLogoIcon} height={height} alt="Haluo AI" />
      <Image src={HaluoLogoText} height={(height * 2) / 3} alt="Haluo AI" />
    </span>
  );
}