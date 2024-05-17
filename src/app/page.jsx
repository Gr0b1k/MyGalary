import Autors from "@/components/Autors/Autors";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Paints from "@/components/Paints/Paints";


export default function Home() {
  return (
    <>
      <Hero />
      <Paints />
      <Autors />
      <Contacts />
      <Footer />
    </>
  );
}