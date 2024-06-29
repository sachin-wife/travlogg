import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Services from "./components/Services/Services";
import SpecialDeals from "./components/Special-Deals/Special-deals";
import TravelPoint from "./components/Travel-point/TravelPoint";

import "./globals.css";

export default function Home() {
  return (
    <main className=" p-4 md:p-8 xl:px-dpad lg:py-8 flex justify-center relative">
      <div className="radial-gradient"></div>
      <div className="max-w-fullW">
        <Header />
        <Banner />
        <SpecialDeals />
        <Services />
        <TravelPoint />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
