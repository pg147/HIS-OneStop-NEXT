export default function UploaderDetails(props) {
    return (
        <>
            <div className="flex max-w-full max-h-fit">
                <img src="" alt="" className="bg-black h-15 w-15" />
                <div className="grid grid-cols-1">
                    {/* <h2>{props.uploaderName}</h2> */}
                    <h2>THE RAC</h2>
                    <div className="flex">
                        <div className="flex mr-4">
                            <img src="" alt="" className="bg-slate-500 mr-4" />
                            {/* <h4>{props.UploaderLocation}</h4> */}
                            <h4>RCOEM, Nagpur</h4>
                        </div>
                        <div className="flex mr-4">
                            <img src="" alt="" className="bg-slate-500 mr-4" />
                            {/* <h4>{props.UploaderDate}</h4> */}
                            <h4>30 Jun 2003</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}