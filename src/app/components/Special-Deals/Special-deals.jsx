import Image from "next/image";

const SpecialDeals = () => {
  return (
    <div className=" relative pt-[28px] sm:pt-[36px] md:pt-[48px] lg:pt-[0] flex justify-between items-center gap-[80px] overflow-x-scroll  xl:overflow-hidden no-scrollbar">
      <Image
        src="assets/images/triangle.svg"
        width={65}
        height={169}
        alt="trip-advisor"
        className=" hidden md:block lg:block absolute left-[-8%]"
      />
      <Image
        src="assets/images/trip-advisor.svg"
        width={211}
        height={32}
        alt="trip-advisor"
      />
      <Image
        src="assets/images/expedia.svg"
        width={113}
        height={32}
        alt="trip-advisor"
      />
      <Image
        src="assets/images/booking.svg"
        width={188}
        height={32}
        alt="trip-advisor"
      />
      <Image
        src="assets/images/airbnb.svg"
        width={102}
        height={32}
        alt="trip-advisor"
      />
      <Image
        src="assets/images/orbitz.svg"
        width={173}
        height={32}
        alt="trip-advisor"
      />
    </div>
  );
};

export default SpecialDeals;
