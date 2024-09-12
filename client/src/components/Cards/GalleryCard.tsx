function GalleryCard({ img }: { img: string }) {
  return (
    <div className="h-[276px] w-[276px] rounded-[14px]">
      <img src={img} alt="galleryImg" height="100%" width="100%" />
    </div>
  );
}

export default GalleryCard;
