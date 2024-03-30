import { Card } from "../ui/card";
import ControlList from "./controlsList";

export default function ControlBar() {
    return (
        <>
            <Card className='w-[250px] h-[720px] fixed right-8 p-4 rounded-3xl shadow-none border-2 border-[#D9D9D9] bg-[#f5f5f5]'>
                <div className="max-w-full flex max-h-fit mt-6 mb-7 text-center">
                    <div className="w-[100px] h-[100px] m-auto">
                        <div className="coverPic h-[100px] w-[100px] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full"></div>
                        <h3 className="mt-2 font-medium text-xl">The RAC</h3>
                    </div>
                </div>
                <div className="relative top-8 max-h-fit max-w-full mt-6">
                    <ControlList/>
                </div>
            </Card>
        </>
    );
}