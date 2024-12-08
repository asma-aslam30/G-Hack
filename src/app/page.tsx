import Image from "next/image";
import Header from "../app/components/header"
import Footer from "./components/footer"
import HeroSection from "./components/heroSection"
import RelatedProducts from "./components/relatedProducts"
import BrandSection from "./components/brandSection"
import ShoppingCart from "./components/shoppingCard"
import DownHeader from "./components/downHeader";
import BrandBuilt from "./components/brandbuilt"
import FeatureFF from "./components/featureSection"
import FeatureSecond from "./components/featureSection2";
import Signup from "./components/signUp"
import HeroSec from "./components/herosec";
export default function Home() {
  return (
     <>

     <Header/>
     <HeroSec/>
     <HeroSection/>
     <RelatedProducts/>
     <BrandSection/>
     <ShoppingCart/>
     <DownHeader/>
     <BrandBuilt/>
     <FeatureFF/>
     <FeatureSecond/>
     <Signup/>
     <Footer/>
     
     </>
  );
}
