import Title from "@/components/ui/title";
import ContactButtons from "@/components/ui/contactButtons";
import { ButtonTextBackground } from "@/components/ui/buttonTextBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 lg:p-24">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center gap-2">
          <Title size="h1">Projects</Title>
          <ContactButtons />
        </div>
      </div>

      <div className="flex flex-1 gap-3 lg:gap-9 w-full flex-col lg:flex-row">
        une fois jai fait un bot en python qui souhaitait les anniversaires mais
        jai perdu le code source
      </div>
    </main>
  );
}
