// const EventCard = ({
//   color,
//   title,
//   description,
// }: {
//   color: string;
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="flex items-center space-x-5 mr-10">
//       <div
//         style={{ backgroundColor: color }}
//         className={"h-24 w-2 rounded-xl overflow-hidden -mt-1"}
//       ></div>
//       <div className="flex flex-col">
//         <div className="text-primary text-xl leading-[30px] font-semibold">
//           <h1 className="">{title}</h1>
//         </div>
//         <div className="text-secondary font-normal text-sm text-balance leading-[24px]">
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

const EventCard = ({
  color,
  title,
  description,
}: {
  color: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center space-x-5 -mt-1 overflow-hidden relative">
      <div
        style={{ backgroundColor: color }}
        className="h-24 w-2 rounded-xl -mt-1"
      ></div>
      <div className="flex flex-col">
        <h1 className="text-primary text-xl leading-[30px] font-semibold">
          {title}
        </h1>
        <p className="text-secondary font-normal text-sm text-balance leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
