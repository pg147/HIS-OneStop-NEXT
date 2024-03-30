import ControlBar from "@/components/controlsField/controlsBar";
import { DomainsBar } from "@/components/domainsField/domainsField";
import SearchBar from "@/components/searchField/searchField";

export default function Home() {
  return (
    <div className="flex justify-between p-8">
      <DomainsBar />
      <SearchBar />
      <ControlBar />
    </div>
  );
}
