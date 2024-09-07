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
    <div className="rounded-2xl bg-white border mx-auto max-w-[400px] my-20 drop-shadow-xl">
      <div className="flex flex-col space-y-5 justify-center items-center py-5">
        <div className="bg-[#E8E3E9] rounded-lg">
          <img src={imgLink} alt="card_img" />
        </div>
        <h1 className="font-medium text-xl leading-[30px] text-center">
          {title}
        </h1>
        <div className="px-5 flex text-center text-base leading-[24px]">
          {description}
        </div>
        <button className="bg-[#744E6C] text-white px-5 py-3 rounded-full uppercase">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
