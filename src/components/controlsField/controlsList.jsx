export default function ControlList() {
    return(
        <div>
            <div className="flex max-w-full h-[50px] p-3 mt-6 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <img className="h-6 w-6 ml-6 mr-3" src={ControlsData[0].source} alt="" />
                <h3>{ControlsData[0].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <img className="h-6 w-6 ml-6 mr-3" src={ControlsData[1].source} alt="" />
                <h3>{ControlsData[1].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <img className="h-6 w-6 ml-6 mr-3" src={ControlsData[2].source} alt="" />
                <h3>{ControlsData[2].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <img className="h-6 w-6 ml-6 mr-3" src={ControlsData[3].source} alt="" />
                <h3>{ControlsData[3].title}</h3>
            </div>
            <div className="flex max-w-full h-[50px] p-3 mb-4 justify-left rounded-2xl  hover:bg-slate-300 hover:cursor-pointer">
                <img className="h-6 w-6 ml-6 mr-3" src={ControlsData[4].source} alt="" />
                <h3>{ControlsData[4].title}</h3>
            </div>
        </div>
    );
}

const ControlsData = [
    {
        title : 'Profile',
        source : './profile.svg' 
    },
    {
        title : 'Following',
        source : '../../assets/svg/profile.svg' 
    },
    {
        title : 'Interested',
        source : '../../assets/svg/profile.svg' 
    },
    {
        title : 'Alerts',
        source : '../../assets/svg/profile.svg' 
    },
    {
        title : 'Logout',
        source : '../../assets/svg/profile.svg' 
    },

]