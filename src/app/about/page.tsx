import Image from "next/image"
import Header from "../components/header"
import DownHeader from "../components/downHeader"
import View from "../components/viewproduct"
import Footer from "../components/footer"
import FeatureFF from "../components/featureSection"
import FeatureSecond from "../components/featureSection2"
import Signup from "../components/signUp"
import BrandSection from "../components/brandSection"

export default function About() {
    return (
        <>
        <Header/>
        <DownHeader/>
        <View/>
        <FeatureFF/>
        <FeatureSecond/>
        <BrandSection/>
        <Signup/>
        <Footer/>
        </>

    )

}