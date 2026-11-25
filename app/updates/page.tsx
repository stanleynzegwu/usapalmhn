import { UpdatesList } from "@/components/updates-list";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/updates.css";

export const metadata: Metadata = {
  title: "Updates — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <div className={"page-hero"}>
        <div className={"keffiyeh-overlay"}></div>
        <div className={"page-hero-content"}>
          <div className={"page-hero-eyebrow"}>
            Webinars · Campaigns · Reading Circles
          </div>
          <h1>Network Updates</h1>
          <p>
            Monthly dispatches from the network — events we are hosting,
            campaigns we are running, and what our partner networks in the UK,
            Ireland and Australia have under way.
          </p>
        </div>
      </div>
      <div className={"breadcrumb"}>
        <Link href={"/"} className={"cursor-pointer"}>
          Home
        </Link>
        <span>›</span>
        {"Updates\n"}
      </div>
      <div className={"upd-page"}>
        <UpdatesList />
        <noscript>
          <p className={"upd-empty"}>
            {"This page needs JavaScript to list the updates. Please\n      "}
            <Link href={"/about/#contact"} className={"cursor-pointer"}>
              get in touch
            </Link>
            {" and we will send them to you directly."}
          </p>
        </noscript>
      </div>
    </>
  );
}
