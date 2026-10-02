import HeroSlider from "@/components/HeroSlider";
import NewsPanel from "@/components/NewsPanel";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import BlogCards from "@/components/BlogCards";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <NewsPanel />
      <Services />
      <BlogCards />
      <FAQ />
      <ContactForm />
    </div>
  );
}