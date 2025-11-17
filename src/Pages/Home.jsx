import AboutTheBookHaven from "../Component/AboutTheBookHaven";
import HeroSection from "../Component/Hero";
import Latest from "../Component/Latest";
import TopBooks from "../Component/TopBooks";

export default function Home() {
    return (
        <div className="bg-base-200">
            <HeroSection></HeroSection>
            <div className="py-10">
                <Latest></Latest>
            </div>
            <div>
                <TopBooks></TopBooks>
            </div>
            <div className="md:pt-15">
                <AboutTheBookHaven></AboutTheBookHaven>
            </div>
        </div>
    )
}