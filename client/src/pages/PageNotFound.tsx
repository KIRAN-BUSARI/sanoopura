export default function PageNotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-5xl font-bold">
        <span className="text-slate-700 text-7xl flex justify-center animate-pulse">
          404
        </span>
        <h1 className="text-orange-400 flex">
          Page Not Found <span className="animate-bounce ml-5">🧐</span>
        </h1>
      </div>
    </div>
  );
}
