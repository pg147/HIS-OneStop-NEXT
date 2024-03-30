import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function DomainSelectModal () {
    return(
        <>
            <Card className = "p-4 max-w-fit max-h-fit border rounded-2xl">
                <div className= "mb-3">
                    <h3 className="font-medium">Choose a domain for your post : </h3>
                </div>
                <div className="flex flex-row">
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Tech</Badge>
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Entertainment</Badge>
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Sports</Badge>
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Literature</Badge>
                </div>
                <div className="mt-4 flex flex-row">
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Photography</Badge>
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Social</Badge>
                    <Badge className = "secondary mr-3 rounded-2xl h-9 text-md px-4 w-fit">Achievements</Badge>
                </div>
            </Card>
        </>
    );
}