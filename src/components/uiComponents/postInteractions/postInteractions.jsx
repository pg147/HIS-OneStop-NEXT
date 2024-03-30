import { Card } from "@/components/ui/card";
import { ChatBubbleIcon, HeartIcon, Share1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import UploaderDetails from "../uploaderDetails/uploaderDetails";

export default function PostInteractionBar() {
    return (
        <>
            <Card className="flex justify-evenly rounded-2x max-w-full px-4 py-2">
                <Button variant="ghost" className="rounded-xl">
                    <HeartIcon className="mr-2 h-4 w-4" /> Like
                </Button>
                <Button variant="ghost" className="rounded-xl">
                    <ChatBubbleIcon className="mr-2 h-4 w-4" /> Comment
                </Button>
                <Button variant="ghost" className="rounded-xl">
                    <Share1Icon className="mr-2 h-4 w-4" /> Share
                </Button>
            </Card>
        </>
    );
}