import img1 from "@/assets/Frame 77.png";
import img2 from "@/assets/Frame 74.png";
import img3 from "@/assets/Frame 78.png";
import img4 from "@/assets/Frame 76.png";
import img5 from "@/assets/Frame 79.png";
import img6 from "@/assets/Frame 80.png";
import img7 from "@/assets/Frame 81.png";
import img8 from "@/assets/Frame 82.png";
import img9 from "@/assets/Frame 83.png";
import img10 from "@/assets/Frame 88.png";
import img11 from "@/assets/Frame 86.png";
import img12 from "@/assets/Frame 87.png";
import GalleryCard from "@/components/Cards/GalleryCard";

const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img10,
  },
  {
    id: 11,
    img: img11,
  },
  {
    id: 12,
    img: img12,
  },
];

function Gallery() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-40 px-[120px]">
        <div className="text-center flex flex-col space-y-5">
          <h1 className="text-4xl font-semibold">Gallery</h1>
          <p className="text-[16px] font-normal leading-6">
            Honors for notable accomplishments, recognition of excellence in a
            field, and milestones in personal or professional growth.
          </p>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center px-[120px]">
        <div className="grid grid-cols-4 gap-12">
          {images.map((image) => (
            <GalleryCard img={image.img} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
