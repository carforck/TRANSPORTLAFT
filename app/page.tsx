import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { ValueStatement } from "@/components/sections/ValueStatement";
import { Systems } from "@/components/sections/Systems";
import { Methodology } from "@/components/sections/Methodology";
import { Industries } from "@/components/sections/Industries";
import { Risks } from "@/components/sections/Risks";
import { Plans } from "@/components/sections/Plans";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <ValueStatement />
      <Systems />
      <Methodology />
      <Industries />
      <Risks />
      <Plans />
      <Contact />
      <Footer />
    </main>
  );
}
