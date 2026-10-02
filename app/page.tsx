import HeroSlider from "@/components/HeroSlider";
import NewsPanel from "@/components/NewsPanel";
import BlogCards from "@/components/BlogCards";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSlider />
      <NewsPanel />
      <BlogCards />
      <Services />
      <FAQ />
      <ContactForm />
    </main>
  );
}