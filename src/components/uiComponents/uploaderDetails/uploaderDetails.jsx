import { CalendarIcon, SewingPinIcon } from "@radix-ui/react-icons";

export default function UploaderDetails(props) {
    return (
        <>
            <div className="flex max-w-full max-h-fit mb-4">
                <div className="h-[60px] w-[60px] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mr-4 rounded-xl"></div>
                <div className="grid grid-cols-1">
                    {/* <h2>{props.uploaderName}</h2> */}
                    <h2 className="font-semibold text-lg">THE RAC</h2>
                    <div className="flex">
                        <div className="flex mr-4 font-semibold text-[#8E8E8E]">
                            <SewingPinIcon className="mr-2 h-6 w-6"/>
                            {/* <h4>{props.UploaderLocation}</h4> */}
                            <h4>RCOEM, Nagpur</h4>
                        </div>
                        <div className="flex mr-4 font-semibold text-[#8E8E8E]">
                            <CalendarIcon className="mr-2 h-6 w-6"/>
                            {/* <h4>{props.UploaderDate}</h4> */}
                            <h4>30 Jun 2003</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}