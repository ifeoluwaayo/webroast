import { Header, Hero, Unlock } from "./components";
import { SmoothScrollProvider } from "./context/scrollContext";

export default function Home() {
  return (
    <main className="bg-[url('/bg-pattern.svg')] bg-contain bg-no-repeat">
      <SmoothScrollProvider options={{ smooth: true }}>
        <Header />
        <Hero />
        <Unlock />
      </SmoothScrollProvider>
    </main>
  );
}
