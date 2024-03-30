import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import './searchField.css';

export default function SearchBar() {
    return(
        <>
            <div className="flex max-w-full align-middle justify-items-center justify-center">
                <Card className = "flex items-center justify-between shadow-none text-lg rounded-3xl bg-[#f5f5f5] border-2 border-[#D9D9D9] pl-6 pr-3 h-[70px] w-[700px]">
                    <input className="searchHolder" type="text" placeholder="Search for domains, posts, clubs.." />
                    <Button className = "h-12 w-12 rounded-2xl"> 
                        <MagnifyingGlassIcon className="h-8 w-8"/>
                    </Button>
                </Card>
            </div>
        </>
    );
} 