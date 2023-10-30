import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="flex gap-1 justify-center">
      <Link href={"https://github.com/aldresus"} target="_blank">
        <Button variant="ghost" size="icon">
          <Github />
        </Button>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/hugo-champy-a7a64a228/"}
        target="_blank"
      >
        <Button variant="ghost" size="icon">
          <Linkedin />
        </Button>
      </Link>
      <Link href={"mailto:hugochampy@viacesi.fr"} target="_blank">
        <Button variant="ghost" size="icon">
          <Mail />
        </Button>
      </Link>
    </div>
  );
}
