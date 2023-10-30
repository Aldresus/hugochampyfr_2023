import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactButtons() {
  return (
    <div className="flex gap-1 justify-center">
      <Button variant="ghost" size="icon">
        <Github />
      </Button>
      <Button variant="ghost" size="icon">
        <Linkedin />
      </Button>
      <Button variant="ghost" size="icon">
        <Mail />
      </Button>
    </div>
  );
}
