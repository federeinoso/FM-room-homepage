import ImgAbout1 from "../../assets/images/image-about-dark.jpg";
import ImgAbout2 from "../../assets/images/image-about-light.jpg";

const MainHome = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-7 h-full">
      <img
        src={ImgAbout1}
        alt=""
        className="object-cover lg:col-span-2 w-full h-fit"
      />
      <section className="px-7 py-10 lg:col-span-3 grid place-content-center lg:px-20 h-fit">
        <h2 className="uppercase font-bold tracking-[0.5rem] text-sm mb-3">
          About our furniture
        </h2>
        <p className="text-gray-400 text-sm">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </section>
      <img
        src={ImgAbout2}
        alt=""
        className="object-cover lg:col-span-2 w-full h-fit"
      />
    </main>
  );
};

export default MainHome;
