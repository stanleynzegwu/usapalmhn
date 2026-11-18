import { SitePage } from "@/components/site-page";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/about.css";

export const metadata: Metadata = {
  title: "About — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <SitePage page="/about/">
      <div className={"page-hero"}>
        <div className={"keffiyeh-overlay"}></div>
        <div className={"page-hero-content"}>
          <div className={"page-hero-eyebrow"}>
            Founded 2016 · 100% Volunteer-Led · All 50 States
          </div>
          <h1>About USAPALMHN</h1>
          <p>
            Mental health workers in the USA who have come together to support
            the people of Palestine in their struggle to achieve justice — and
            to name the structural conditions that produce psychological harm.
          </p>
        </div>
      </div>
      <div className={"breadcrumb"}>
        <Link href={"/"} className={"cursor-pointer"}>
          Home
        </Link>
        <span>›</span>
        {"About\n"}
      </div>
      <div className={"about-page"}>
        <section id={"mission"} className={"about-section"}>
          <div className={"mission-block"}>
            <h2>Our Mission</h2>
            <p>
              We are mental health workers in the USA who have come together to
              support the people of Palestine in their struggle to achieve
              justice. As human beings, we deplore the military, economic and
              social oppression, and human rights violations imposed on the
              Palestinian people through the Israeli occupation.
            </p>
            <p>
              Beyond this, as mental health professionals, we identify the
              occupation as the specific cause of great harm to the well-being
              and mental health of the Palestinian people. We believe that the
              mental health community, both locally and globally, must do more
              to address the deep links between our professional ethical
              responsibilities, public health, and human rights.
            </p>
            <p>
              To accomplish this goal, we work in conjunction with other
              national and international organizations to provide information
              informing public debate about Palestine/Israel. The Network
              sponsors English-language delegations of mental health workers to
              East Jerusalem and the West Bank, as well as speaking tours, film
              screenings, scholarly articles, and media presentations. We lead
              campaigns supporting open discussion of Palestine/Israel within
              mental health organizations around the world.
            </p>
          </div>
          <div className={"about-section-header"}>
            <div>
              <h2>Our Aims</h2>
              <p>Five aims guide our work as a network.</p>
            </div>
          </div>
          <ul className={"aims-list"}>
            <li>
              <div className={"aims-num"}>1</div>
              <p>
                To contribute to raising the level of understanding and the
                breadth of discussion regarding Palestine; to articulate
                concerns with international law, with universal human rights,
                and with social, political, ideological, military, and public
                health realities that impact the Palestinian people.
              </p>
            </li>
            <li>
              <div className={"aims-num"}>2</div>
              <p>
                To link these concerns with the ethical standards of our
                professions as mental health workers and to bring these concerns
                to the attention of professional organizations, of health care
                service providers, and of the public.
              </p>
            </li>
            <li>
              <div className={"aims-num"}>3</div>
              <p>
                To foster solidarity through personal and professional
                relationships with our colleagues in Palestine and, while
                relying upon their leadership, to develop an agenda for
                constructive change based on their experiences in the
                Palestinian context.
              </p>
            </li>
            <li>
              <div className={"aims-num"}>4</div>
              <p>
                As consistent with our individual situations, to consider direct
                action such as arranging public meetings, letter-writing
                campaigns, working with human rights organizations, initiating
                public advocacy programs, and responding to the Palestinian call
                for boycott, divestment, and sanctions (BDS).
              </p>
            </li>
            <li>
              <div className={"aims-num"}>5</div>
              <p>
                To dedicate our expertise as professionals — regarding trauma,
                family cohesion, racism, equity in health care, the ideological
                roots of oppression, the impact of oppression on all involved
                parties, and the process of reconciliation between communities —
                to the service of advancing human rights in Palestine.
              </p>
            </li>
          </ul>
        </section>
        <section id={"advisory-council"} className={"about-section"}>
          <div className={"about-section-header"}>
            <div>
              <h2>Advisory Council</h2>
              <p>
                Clinicians, scholars and advocates who guide the network’s work.
              </p>
            </div>
          </div>
          <div
            className={"statement-block"}
            style={{ borderLeftColor: "var(--olive)" }}
          >
            <h3>Our Advisory Council</h3>
            <p>
              The USA-Palestine Mental Health Network works closely with the
              members of our Advisory Council — clinicians, scholars and
              advocates in Palestine, the United States and the United Kingdom
              who guide our clinical, ethical and advocacy work.
            </p>
          </div>
          <div className={"council-grid"}>
            <div className={"council-card"}>
              <h3>Sam Bahour</h3>
              <div className={"council-credentials"}>Business consultant</div>
              <p>
                Co-founder and Emeritus Member of Americans for a Vibrant
                Palestinian Economy, Independent Director at Arab Islamic Bank
                PLC, and a board member at Just Vision.
              </p>
              <span className={"council-location"}>
                Al-Bireh / Ramallah, Palestine
              </span>
            </div>
            <div className={"council-card"}>
              <h3>Rita Giacaman</h3>
              <div className={"council-credentials"}>PharmD, MPhil</div>
              <p>
                Professor of public health at the Institute of Community and
                Public Health, Birzeit University.
              </p>
              <span className={"council-location"}>
                Occupied Palestinian territory
              </span>
            </div>
            <div className={"council-card"}>
              <h3>Yasser Abu-Jamei</h3>
              <div className={"council-credentials"}>MD, Psychiatrist</div>
              <p>
                General Director of the Gaza Community Mental Health Centre
                since 2014. MSc in Clinical Neuropsychiatry, University of
                Birmingham.
              </p>
              <span className={"council-location"}>Gaza, Palestine</span>
            </div>
            <div className={"council-card"}>
              <h3>Martin Kemp</h3>
              <div className={"council-credentials"}>PhD, Psychoanalyst</div>
              <p>
                In private practice in London and founder of the UK-Palestine
                Mental Health Network in 2014.
              </p>
              <span className={"council-location"}>London, United Kingdom</span>
            </div>
            <div className={"council-card"}>
              <h3>Lynne Layton</h3>
              <div className={"council-credentials"}>PhD</div>
              <p>
                Assistant Clinical Professor of Psychology, Part-Time, in the
                Department of Psychiatry at Harvard Medical School, and a past
                president of the American Psychological Association&apos;s
                Section IX.
              </p>
              <span className={"council-location"}>Boston, Massachusetts</span>
            </div>
            <div className={"council-card"}>
              <h3>Sami Owaida</h3>
              <div className={"council-credentials"}>
                MD, Child Psychiatrist
              </div>
              <p>
                Child psychiatrist trained at the Gaza Community Mental Health
                Programme.
              </p>
              <span className={"council-location"}>Gaza, Palestine</span>
            </div>
            <div className={"council-card"}>
              <h3>Alice Rothchild</h3>
              <div className={"council-credentials"}>MD</div>
              <p>
                Physician, author and filmmaker. Former Assistant Professor of
                Obstetrics and Gynecology at Harvard Medical School, and active
                in Jewish Voice for Peace.
              </p>
              <span className={"council-location"}>Seattle, Washington</span>
            </div>
          </div>
        </section>
        <section id={"affiliates"} className={"about-section"}>
          <div className={"about-section-header"}>
            <div>
              <h2>Affiliate Organizations &amp; Partner Networks</h2>
              <p>The global movement we are part of.</p>
            </div>
          </div>
          <div className={"affiliates-grid"}>
            <div className={"affiliate-card"}>
              <h3>Palestine Global Mental Health Network</h3>
              <p>
                USAPALMHN took its initial inspiration from our Palestinian
                colleagues who founded the PGMHN. The global anchor of all our
                sister networks.
              </p>
              <a
                href={"https://www.pgmhn.org/"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit PGMHN →
              </a>
            </div>
            <div className={"affiliate-card"}>
              <h3>UK-Palestine Mental Health Network</h3>
              <p>
                A sister organization and close collaborator. Co-hosts the Café
                Palestine webinar series and supports our "Don&apos;t Go"
                campaigns.
              </p>
              <a
                href={"https://ukpalmhn.com/"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit UK-PalMHN →
              </a>
            </div>
            <div className={"affiliate-card"}>
              <h3>Ireland-Palestine Mental Health Network</h3>
              <p>
                Irish mental health professionals in solidarity with Palestine,
                coordinating with the global network of sister organizations.
              </p>
              <a
                href={"https://ipmhn.com/"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit Ireland-PalMHN →
              </a>
            </div>
            <div className={"affiliate-card"}>
              <h3>France-Palestine Mental Health Network</h3>
              <p>
                French mental health professionals coordinating with the
                international Palestine mental health solidarity movement.
              </p>
              <a
                href={"https://www.facebook.com/frpalmhn/"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit France-PalMHN →
              </a>
            </div>
            <div className={"affiliate-card"}>
              <h3>US Campaign for Palestinian Rights (USCPR)</h3>
              <p>
                USAPALMHN is an affiliate member of USCPR — the umbrella
                organization coordinating U.S.-based advocacy for Palestinian
                rights.
              </p>
              <a
                href={"https://uscpr.org/"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit USCPR →
              </a>
            </div>
            <div className={"affiliate-card"}>
              <h3>Jewish Voice for Peace — Health Advisory Council</h3>
              <p>
                A close partner organization. Co-sponsors health-focused
                advocacy and the "Health Under Siege" webinar series with
                USAPALMHN.
              </p>
              <a
                href={
                  "https://jewishvoiceforpeace.org/stories/health-advisory-council/"
                }
                target={"_blank"}
                className={"cursor-pointer"}
              >
                Visit JVP Health →
              </a>
            </div>
          </div>
        </section>
        <section id={"antisemitism"} className={"about-section"}>
          <div className={"about-section-header"}>
            <div>
              <h2>Statement on Anti-Semitism</h2>
              <p>
                Our position on the distinction between anti-Zionism and
                antisemitism.
              </p>
            </div>
          </div>
          <div className={"statement-block"}>
            <h3>Our Statement on Anti-Semitism</h3>
            <p>
              USAPALMHN unequivocally opposes antisemitism and all forms of
              racism and ethnic hatred. We invite all readers to read our full
              statement, which clarifies the distinction between opposition to
              Zionism as a political ideology and antisemitism as a form of
              racial and ethnic hatred directed at Jewish people.
            </p>
          </div>
          <Link
            href={"/statement-on-anti-semitism/"}
            className={"btn-olive cursor-pointer"}
          >
            Read the Full Statement
          </Link>
        </section>
        <section id={"contact"} className={"about-section"}>
          <div className={"about-section-header"}>
            <div>
              <h2>Contact Us</h2>
              <p>How to reach the network.</p>
            </div>
          </div>
          <div className={"contact-grid"}>
            <div className={"contact-card"}>
              <h3>General Inquiries</h3>
              <p>
                For general questions, suggestions, resources, upcoming events,
                or information about the network.
              </p>
              <a
                href={"mailto:info@usapalmhn.org"}
                className={"email cursor-pointer"}
              >
                info@usapalmhn.org
              </a>
            </div>
            <div className={"contact-card"}>
              <h3>Social Media</h3>
              <p>
                Follow us on Instagram at @us_pmhn. Questions or suggestions
                about social media content are welcome.
              </p>
              <a
                href={"https://www.instagram.com/us_pmhn/"}
                target={"_blank"}
                className={"email cursor-pointer"}
              >
                @us_pmhn on Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </SitePage>
  );
}
