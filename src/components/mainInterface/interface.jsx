import { DomainsBar } from "../domainsField/domainsField";
import GridList from "../gridList/gridList";
import ControlBar from "../controlsField/controlsBar";

export default function Interface() {
    return (
        <>
            <div className="flex p-8">
                <DomainsBar />
                <GridList />
                <ControlBar />
            </div>
        </>
    );
}