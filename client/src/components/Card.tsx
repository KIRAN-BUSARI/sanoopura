const Card = ({
  imgLink,
  title,
  description,
  buttonText,
}: {
  imgLink: string;
  title: string;
  description: string;
  buttonText?: string;
}) => {
  return (
    <div className="rounded-2xl bg-white border max-w-[400px] drop-shadow-xl h-[600px] flex justify-center items-center p-5">
      <div className="flex flex-col space-y-5">
        <div className="bg-[#E8E3E9] rounded-lg">
          <img src={imgLink} alt="card_img" />
        </div>
        <h1 className="font-medium text-xl leading-[30px] text-center">
          {title}
        </h1>
        <div className="flex text-center text-base leading-[24px] min-h-[168px]">
          {description}
        </div>
        <button className="bg-secondary text-white px-5 py-3 rounded-full uppercase">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
