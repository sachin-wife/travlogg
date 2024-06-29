import Image from "next/image";

const TravelPoint = () => {
  const travelPoint = [
    {
      title: "500+",
      subtitle: "Holiday Package",
    },
    {
      title: "100",
      subtitle: "Luxury Hotel",
    },
    {
      title: "7",
      subtitle: "Premium Airline",
    },
    {
      title: "2k+",
      subtitle: "Happy Customer ",
    },
  ];

  return (
    <div className="pt-[64px] flex flex-col lg:flex-row gap-4">
      {/* Left */}
      <div className="relative w-full md:w-[50%] lg:w-[75%]">
        <Image
          src="/assets/images/travel-point.svg"
          alt="Travel-Point Banner"
          width={100}
          height={100}
          className="w-[65%] md:w-[96%]"
        />
        <button
          className="flex items-center px-4 py-2 md:p-buttonPadding gap-1 md:gap-4 shadow-lg rounded-buttonRadius absolute top-[20%] md:top-[4rem] lg:top-[8rem]
           right-[4%]  md:right-[-14%]  lg:right-0 font-bold text-[16px] lg:text-[18px] lg:text-[23px] bg-white
        "
        >
          <Image
            src="/assets/images/discount-price.svg"
            alt="discounted-price"
            width={40}
            height={40}
          />
          Discounted Price
        </button>
      </div>
      {/* Right */}
      <div className="w-full md:w-9/12 lg:w-1/2 ">
        <h3 className="text-pinkShade text-[18px] text-center md:text-left lg:text-[23px] uppercase font-bold leading-7">
          Travel Point
        </h3>
        <h2 className="leading-8 pt-2 text-center md:text-left  text-2xl  md:text-2xl  md:text-[44px] md:leading-[52px] font-bold">
          We helping you find <br className="md:hidden lg:block" /> your dream
          location
        </h2>
        <p className="pt-3 md:pt-7 text-center md:text-left text-gray-300 md:text-lg font-normal lg:text-left sm:text-left">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div class="grid grid-cols-2 gap-9 pt-[64px] pb-6">
          {travelPoint.map((card, idx) => {
            return (
              <div
                className="p-8 text-center border-2 rounded-[32px]"
                key={idx}
              >
                <h1 className="text-orangeShade text-[35px] font-bold">
                  {card.title}
                </h1>
                <h4 className="text-lg">{card.subtitle}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
