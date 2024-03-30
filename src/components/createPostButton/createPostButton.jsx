import { Card } from "../ui/card"
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import "./createPostButton.css"

export default function CreatePost() {
    return(
       <>
            <Card className="flex items-center justify-between shadow-none text-lg rounded-3xl bg-[#f5f5f5] border-2 border-[#D9D9D9] p-3 h-[70px] w-[700px]">
                <img alt="" width={48} height={48} className="rounded-2xl mr-0 bg-slate-700" />
                <input type="text" placeholder="Create a post" className="createPostHolder h-11 rounded-2xl p-4"/>
                <Button className = "addPostButton h-12 w-12 rounded-2xl"> 
                    <PlusIcon className="h-8 w-8"/>
                </Button>
            </Card>
       </>
    )
}
