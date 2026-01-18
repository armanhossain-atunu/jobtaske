import Achievements from "@/Components/Home/Achievements";
import Banner from "@/Components/Home/Banner";
import BrandingSection from "@/Components/Home/Branding";
import FAQWithImage from "@/Components/Home/FAQ";
import Features from "@/Components/Home/Features";
import Services from "@/Components/Home/Services";
import Testimonials from "@/Components/Home/Testimonials";


export default function Home() {
  return (
    <div className="space-y-10">
      <section>
      <Banner></Banner>
      </section>
      <section><Services></Services></section>
      <section>
        <Features></Features>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section> 
        <BrandingSection></BrandingSection>
      </section>
      <section>
        <FAQWithImage></FAQWithImage>
      </section>
      <section>
        <Achievements></Achievements>
      </section>
    </div>
  );
}
