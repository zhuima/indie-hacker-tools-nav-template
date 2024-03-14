import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { Gpts } from "@/app/types/gpts";
import GptsDetail from "@/app/components/GptsDetail";
import Image from "next/image";
import extensionSrc from "@/public/extension.png";
import { findByUuid } from "@/app/models/gpts";

async function getData(uuid: string) {
  if (!uuid) {
    return;
  }

  const gpts = await findByUuid(uuid);

  return gpts;
}

export default async ({ params }: { params: { uuid: string } }) => {
  const data = await getData(params.uuid);

  console.log("data", data);
  return (
    <section className="relatve">
x x
      <div className="mx-auto w-full max-w-7xl px-5 py-2">
        {data && <GptsDetail gpts={data} />}
      </div>
    </section>
  );
};
