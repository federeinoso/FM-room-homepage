import IconArrowShop from "../icons/iconArrowShop";

const MainArtileHome = ({ hero }) => {
  return (
    <>
      <img
        src={window.innerWidth < 500 ? `${hero.imgMobile}` : `${hero.img}`}
        alt={hero.title}
        className="object-cover col-start-1 col-end-4 h-fit row-start-1 row-end-3 lg:col-start-1 lg:col-end-5  lg:row-start-1 lg:row-end-3 w-full"
      />
      <article className="py-10 px-7 col-start-1 col-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-20 flex flex-col justify-center">
        <h1 className="font-medium text-3xl lg:text-5xl mb-4">{hero.title}</h1>
        <p className="text-gray-400 mb-6 text-sm">{hero.description}</p>
        <button className="flex items-center hover:text-gray-500 fill-black hover:fill-gray-500">
          <span className="font-medium self-start  uppercase tracking-[.75rem] mr-5">
            Show now
          </span>
          <IconArrowShop />
        </button>
      </article>
    </>
  );
};

export default MainArtileHome;
