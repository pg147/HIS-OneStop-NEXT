import { Card } from "../ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import ControlList from "./controlsList";

export default function ControlBar() {
    return (
        <>
            <Card className='w-[250px] h-[720px] p-4 rounded-3xl shadow-none border-2 border-[#D9D9D9] bg-[#f5f5f5]'>
                <div className="max-w-full flex max-h-fit mt-6 mb-7 text-center">
                    <div className="w-[100px] h-[100px] m-auto">
                        {/* <Avatar>
                            <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar> */}
                        <h3 className="mt-2 font-medium text-xl">Munuko</h3>
                    </div>
                </div>

                <div className="max-h-fit max-w-full mt-6">
                    <ControlList/>
                </div>
            </Card>
        </>
    );
}