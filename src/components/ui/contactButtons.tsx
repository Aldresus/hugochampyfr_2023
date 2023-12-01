import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactButtonsProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ContactButtons({
  className,
  ...props
}: ContactButtonsProps) {
  return (
    <div className={cn("flex gap-1 justify-center", className)} {...props}>
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
