import './domains.css'
/* eslint-disable react/prop-types */
export default function Domains() {
    return(
        <>
            <div className="exploreButton bg-black hover:bg-slate-800 flex w-[250px] h-[50px] rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[0].title}</h3>
                </div>
            </div>
            <div className="techDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[1].title}</h3>
                </div>
            </div>
            <div className="entDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[2].title}</h3>
                </div>
            </div>
            <div className="litDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[3].title}</h3>
                </div>
            </div>
            <div className="photoDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[4].title}</h3>
                </div>
            </div>
            <div className="sportsDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[5].title}</h3>
                </div>
            </div>
            <div className="socialsDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[6].title}</h3>
                </div>
            </div>
            <div className="achieveDomain flex w-[250px] h-[80px] mt-4 rounded-2xl">
                <div className="m-auto">
                    <h3 className="font-sans font-semibold text-white text-center text-xl">{DomainData[7].title}</h3>
                </div>
            </div>
        </>
    );
}

const DomainData = [
    {
        title: 'Explore',
    },
    {
        title: 'Tech',
    },
    {
        title: 'Entertainment',
    },
    {
        title: 'Literature',
    },
    {
        title: 'Photography',
    },
    {
        title: 'Sports',
    },
    {
        title: 'Socials',
    },
    {
        title: 'Achievements',
    },
]