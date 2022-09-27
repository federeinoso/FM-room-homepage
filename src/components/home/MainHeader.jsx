import { useState } from "react";
import MainArticle from "../home/MainArticle";

import IconPrev from "../icons/IconPrev";
import IconNext from "../icons/IconNext";

import ImagHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import ImagHero2 from "../../assets/images/desktop-image-hero-2.jpg";
import ImagHero3 from "../../assets/images/desktop-image-hero-3.jpg";

const ARTICLES_HERO = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: ImagHero1,
    id: 1,
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: ImagHero2,
    id: 2,
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: ImagHero3,
    id: 2,
  },
];

const MainHeader = () => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    setIndex(index - 1);
    if (index == 0) {
      setIndex(ARTICLES_HERO.length - 1);
    }
  };
  const handleClickNext = () => {
    setIndex(index + 1);

    if (index === ARTICLES_HERO.length - 1) {
      setIndex(0);
    }
  };
  return (
    <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
      <MainArticle hero={ARTICLES_HERO[index]} />
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg-row-end-3 text-white flex bg-black ">
        <button
          className="w-full hover:fill-gray-700 hover:bg-gray-700"
          onClick={handleClickPrev}
        >
          <IconPrev className="mx-auto pointer-events-none" />
        </button>
        <button
          className="w-full hover:fill-gray-700 hover:bg-gray-700"
          onClick={handleClickNext}
        >
          <IconNext className="mx-auto pointer-events-none" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
