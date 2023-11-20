import {
  Header,
  Hero,
  Payment,
  Unlock,
  What,
  Why,
  FAQ,
  Footer,
} from "./components";
import { SmoothScrollProvider } from "./context/scrollContext";

export default function Home() {
  return (
    <main className="bg-[url('/bg-pattern.svg')] bg-contain bg-no-repeat">
      <SmoothScrollProvider options={{ smooth: true }}>
        <Header />
        <Hero />
        <Unlock />
        <What />
        {/* <div className="h-[140vh] md:h-screen w-full"></div> */}
        <Why />
        <Payment />
        <FAQ />
        <Footer />
      </SmoothScrollProvider>
    </main>
  );
}
