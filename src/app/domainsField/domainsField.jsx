import { Card } from "../../components/ui/card";
import Domains from "../../components/uiComponents/domains/domains";

export function DomainsBar() {
  return (
    <>
      <Card className="max-w-fit max-h-fit fixed p-4 rounded-3xl shadow-none border-2 border-[#D9D9D9] bg-[#f5f5f5]">
        <Domains />
      </Card>
    </>
  );
}
