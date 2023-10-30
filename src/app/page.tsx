import Title from "@/components/ui/title";
import ContactButtons from "@/components/ui/contactButtons";
import { ButtonTextBackground } from "@/components/ui/buttonTextBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center gap-2">
          <Title size="h1">Hugo</Title>
          <ContactButtons />
        </div>
      </div>

      <div className="flex flex-1 gap-9 w-full">
        <div className="flex flex-1">
          <ButtonTextBackground
            className="shadow overflow-hidden"
            size="fill"
            rounded="3xl"
          >
            Skills
          </ButtonTextBackground>
        </div>
        <div className="flex flex-1">
          <ButtonTextBackground
            className="shadow overflow-hidden"
            size="fill"
            rounded="3xl"
          >
            Experiences
          </ButtonTextBackground>
        </div>
        <div className="flex flex-1">
          <ButtonTextBackground
            className="shadow overflow-hidden"
            size="fill"
            rounded="3xl"
          >
            Projects
          </ButtonTextBackground>
        </div>
      </div>
    </main>
  );
}
