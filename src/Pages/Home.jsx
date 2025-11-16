import HeroSection from "../Component/Hero";
import Latest from "../Component/Latest";

export default function Home() {
    return (
        <div className="bg-base-200">
            <HeroSection></HeroSection>
            <div className="py-10">
                <Latest></Latest>
            </div>
        </div>
    )
}