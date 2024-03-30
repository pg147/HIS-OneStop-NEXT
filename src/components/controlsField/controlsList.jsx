import { BellIcon, ExitIcon, GlobeIcon, HeartIcon, PersonIcon } from "@radix-ui/react-icons";

export default function ControlList() {
    return (
        <div>
            <div className="flex max-w-full h-[50px] p-3 mt-6 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <PersonIcon className="h-6 w-6 mr-4" />
                <h3 className="font-semibold">{ControlsData[0].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <GlobeIcon className="h-6 w-6 mr-4" />
                <h3 className="font-semibold">{ControlsData[1].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <HeartIcon className="h-6 w-6 mr-4" />
                <h3 className="font-semibold">{ControlsData[2].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <BellIcon className="h-6 w-6 mr-4" />
                <h3 className="font-semibold">{ControlsData[3].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <ExitIcon className="h-6 w-6 mr-4" />
                <h3 className="font-semibold">{ControlsData[4].title}</h3>
            </div>
        </div>
    );
}

const ControlsData = [
    {
        title: 'Profile',
        source: './profile.svg'
    },
    {
        title: 'Following',
        source: '../../assets/svg/profile.svg'
    },
    {
        title: 'Interested',
        source: '../../assets/svg/profile.svg'
    },
    {
        title: 'Alerts',
        source: '../../assets/svg/profile.svg'
    },
    {
        title: 'Logout',
        source: '../../assets/svg/profile.svg'
    },

]