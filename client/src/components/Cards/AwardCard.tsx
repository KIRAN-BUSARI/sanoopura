const AwardCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-start bg-white p-5 sm:p-8 space-y-2">
      <div className="text-secondary text-xl leading-[30px] font-semibold">
        <h1 className="">{title}</h1>
      </div>
      <div className="text-primary1 font-normal text-base leading-[24px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
