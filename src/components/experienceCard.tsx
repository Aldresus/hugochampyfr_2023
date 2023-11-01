import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Experience } from "@/data/experiences";
import { ButtonTextBackground } from "@/components/ui/buttonTextBackground";
interface ExperienceCardProps extends Experience {
  className?: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const { date, name, outcome, place, desc, technologies, className } = props;

  // const truc = (
  //   <Card className={cn(className)}>
  //     <CardHeader className="flex flex-row">
  //       <CardTitle>{name}</CardTitle>
  //       <div className="flex items-center space-x-2">
  //         <span
  //           className="text-sm lg:text-lg text-blue-50 font-medium"
  //           hidden={!place}
  //         >
  //           {place}
  //         </span>
  //         <span className="text-sm lg:text-lg text-gray-500" hidden={!place}>
  //           |
  //         </span>
  //         <span className="text-sm lg:text-lg text-gray-500">{date}</span>
  //       </div>
  //     </CardHeader>
  //     <CardContent>
  //       <div className="flex flex-col gap-3">
  //         <p className="text-sm lg:text-md">{desc}</p>
  //         <div>
  //           <Title size="h5">Outcomes:</Title>
  //           {/*<div className="text-lg font-semibold" hidden={!outcome}></div>*/}
  //           <div className="text-md" hidden={!outcome}>
  //             {outcome}
  //           </div>
  //         </div>
  //       </div>
  //     </CardContent>
  //     <CardContent>
  //       <Title size="h5">Techs:</Title>
  //       {/*<span className="text-lg font-medium" hidden={!technologies}></span>*/}
  //       <div className="flex flex-wrap gap-2" hidden={!technologies}>
  //         {technologies?.map((technology) => (
  //           <Badge key={technology}>{technology}</Badge>
  //         ))}
  //       </div>
  //     </CardContent>
  //   </Card>
  // );

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center space-x-2">
          <span className="lg:text-lg font-medium" hidden={!place}>
            {place}
          </span>
          <span className="lg:text-lg text-gray-500" hidden={!place}>
            |
          </span>
          <span className="lg:text-lg text-gray-500">{date}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">{desc}</CardContent>
      <CardFooter className="flex justify-end h-1/3">
        <ButtonTextBackground size="fill" className="flex-1">
          Learn more
        </ButtonTextBackground>
      </CardFooter>
    </Card>
  );
}
