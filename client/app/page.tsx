import { CustomTable } from "@/components/table";
import { CustomSelect } from "@/components/select";
import { Fragment } from "react";

export default function Home() {
  return (
    <main className="mx-24">
      <CustomSelect />
      <CustomTable />
    </main>
  );
}
