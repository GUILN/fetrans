import Image from "next/image";

const CardBadge = ({ text }: { text: string }) => (
  <div className="bg-secondary text-primary text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
    <span>{text}</span>
  </div>
);
const Card = ({
  imageSrc,
  imgSpan,
  author,
  alt,
  timeToPrepare,
}: {
  imageSrc: string;
  imgSpan: string;
  author: string;
  alt: string;
  timeToPrepare: string;
}) => (
  <div className="bg-white rounded overflow-hidden shadow-md relative m-2">
    <Image
      src={imageSrc}
      width={300}
      height={300}
      alt={alt}
      className="w-full h-32 sm:h-48 object-cover"
    />
    <div className="m-4">
      <span className="font-bold">{imgSpan}</span>
      <span className="block text-gray-500 text-sm">{`Recipe by ${author}`}</span>
    </div>
    <CardBadge text={timeToPrepare} />
  </div>
);

export default Card;
