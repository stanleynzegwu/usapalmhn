import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/donate.css";

export const metadata: Metadata = {
  title: "Donate — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <div className={"page-hero"}>
        <div className={"keffiyeh-overlay"}></div>
        <div className={"page-hero-content"}>
          <div className={"page-hero-eyebrow"}>Support Our Work</div>
          <h1>Make a Donation</h1>
          <p>
            USAPALMHN is a 100% volunteer-led advocacy and educational
            organization. Your donation directly supports our operations,
            campaigns, reading circles, events, and advocacy work.
          </p>
        </div>
      </div>
      <div className={"breadcrumb"}>
        <Link href={"/"} className={"cursor-pointer"}>
          Home
        </Link>
        <span>›</span>
        {"Donate\n"}
      </div>
      <div className={"donate-page"}>
        <div id={"donate-now"} className={"donate-primary"}>
          <h2>Support the USA-Palestine Mental Health Network</h2>
          <p>
            All donations are tax-deductible. USAPALMHN is a fiscally-sponsored
            project of Empowerment Works, a registered 501(c)(3) non-profit
            organization.
          </p>
          <a
            href={"https://givebutter.com/USAPALMHN"}
            target={"_blank"}
            className={"givebutter-btn cursor-pointer"}
          >
            Donate via Givebutter
          </a>
          <div className={"givebutter-note"}>
            Secure donations processed through Givebutter · Fiscally sponsored
            by Empowerment Works 501(c)(3)
          </div>
        </div>
        <div className={"tax-block"}>
          <h3>Tax Deductibility</h3>
          <p>
            {
              "USA-Palestine Mental Health Network is a fiscally-sponsored project of "
            }
            <strong>Empowerment Works</strong>
            {", a registered 501(c)(3) non-profit organization. "}
            <strong>All donations are fully tax-deductible.</strong>
            {
              " You will receive a receipt for your records upon completing your donation through Givebutter."
            }
          </p>
        </div>
        <div className={"policy-block"}>
          <h3>How Your Donation Is Used</h3>
          <p>
            All donations are used to cover the costs of USAPALMHN&apos;s
            operations — including our advocacy campaigns, reading circles,
            webinars, delegations, and educational resources. We are a
            volunteer-run organization with no paid staff.
          </p>
          <p style={{ marginTop: "14px" }}>
            {
              "Please note that USAPALMHN does not provide direct humanitarian aid, funding for mental health programs in Palestine, or financial support to other non-governmental organizations. Our "
            }
            <Link
              href={"/resources/#organizations"}
              style={{ color: "var(--olive)", fontWeight: "600" }}
              className={"cursor-pointer"}
            >
              Resources page
            </Link>
            {
              " lists a number of organizations providing direct aid to Palestine."
            }
          </p>
        </div>
        <div className={"section-divider"}>
          <span>Other Ways to Give</span>
        </div>
        <div className={"other-ways"}>
          <div className={"other-way-card"}>
            <h3>Support the Balata Health Center</h3>
            <p>
              The Balata Health Center in Nablus has been unable to provide
              services for months due to lack of funds. USAPALMHN regularly
              raises money for the center through our events and webinars.
            </p>
            <Link
              href={"/get-involved/#donate"}
              className={"btn-olive-sm cursor-pointer"}
            >
              Learn More
            </Link>
          </div>
          <div className={"other-way-card"}>
            <h3>Support Badil Resource Center</h3>
            <p>
              Badil is a resource center for Palestinian residency and refugee
              rights. They produce documented reports with evidence and data
              supporting discourse about Palestinian rights.
            </p>
            <a
              href={"https://www.badil.org/"}
              target={"_blank"}
              className={"btn-olive-sm cursor-pointer"}
            >
              Visit Badil
            </a>
          </div>
          <div className={"other-way-card"}>
            <h3>Support Eyewitness Palestine</h3>
            <p>
              Eyewitness Palestine organizes delegations that help Americans
              witness conditions firsthand. Your donation helps fund future
              delegations, including the USAPALMHN delegation planned for 2027.
            </p>
            <a
              href={"https://www.eyewitnesspalestine.org/"}
              target={"_blank"}
              className={"btn-olive-sm cursor-pointer"}
            >
              Visit Eyewitness Palestine
            </a>
          </div>
          <div className={"other-way-card"}>
            <h3>Join the Network</h3>
            <p>
              Membership is free. Join over 170 Outreach Representatives across
              the USA — receive monthly updates, access to reading circles, and
              invitations to events and advocacy days.
            </p>
            <Link
              href={"/get-involved/#join"}
              className={"btn-olive-sm cursor-pointer"}
            >
              Join Now
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "48px" }}>
          <div className={"policy-block"}>
            <h3>Gift Acceptance Policy</h3>
            <p>
              USA-Palestine Mental Health Network accepts donations from
              individuals and institutions sharing our commitment to full
              equality, human rights, and compliance with international law. We
              reserve the right to decline gifts from individuals or
              institutions that advocate viewpoints that contradict our
              fundamental values — particularly viewpoints based in racism,
              Islamophobia, or antisemitism.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
