const AwardCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-start bg-white px-10 py-10 space-y-2">
      <div className="text-[#744E6C] text-xl leading-[30px] font-semibold">
        <h1 className="">{title}</h1>
      </div>
      <div className="text-[#25272D] font-normal text-base leading-[24px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
