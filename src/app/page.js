import ControlBar from "@/components/controlsField/controlsBar";
import { DomainsBar } from "@/components/domainsField/domainsField";
import SearchBar from "@/components/searchField/searchField";
import Signup from "@/app/signup/page";
import CreatePost from "@/components/createPostButton/createPostButton";
import GridList from "@/components/gridList/gridList";

export default function Home() {
  return (
    <div className="flex justify-between p-8">
      {/* <Signup /> */}
      <DomainsBar />
      <GridList/>
      <ControlBar />
    </div>
  );
}
