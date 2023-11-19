import { Header, Hero, Unlock, What, Why } from "./components";
import { SmoothScrollProvider } from "./context/scrollContext";

export default function Home() {
  return (
    <main className="bg-[url('/bg-pattern.svg')] bg-contain bg-no-repeat">
      <SmoothScrollProvider options={{ smooth: true }}>
        <Header />
        <Hero />
        <Unlock />
        <What />
        <div className="h-[120vh] md:h-screen w-full"></div>
        <Why />
      </SmoothScrollProvider>
    </main>
  );
}
