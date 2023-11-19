import { Header, Hero, Unlock, What } from "./components";
import { SmoothScrollProvider } from "./context/scrollContext";

export default function Home() {
  return (
    <main className="bg-[url('/bg-pattern.svg')] bg-contain bg-no-repeat">
      <SmoothScrollProvider options={{ smooth: true }}>
        <Header />
        <Hero />
        <Unlock />
        <What />
        <div className="h-screen w-full section" data-color="#fff"></div>
      </SmoothScrollProvider>
    </main>
  );
}
