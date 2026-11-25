import { MailingListButton } from "@/components/mailing-list-button";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/get-involved.css";

export const metadata: Metadata = {
  title: "Get Involved — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <div className={"page-hero"}>
        <div className={"keffiyeh-overlay"}></div>
        <div className={"page-hero-content"}>
          <div className={"page-hero-eyebrow"}>
            Join · Act · Donate · Travel
          </div>
          <h1>Get Involved</h1>
          <p>
            Whether you are a seasoned clinician, a graduate student, or a
            department chair — there is a place for you in this network. Here is
            how to take action.
          </p>
        </div>
      </div>
      <div className={"breadcrumb"}>
        <Link href={"/"} className={"cursor-pointer"}>
          Home
        </Link>
        <span>›</span>
        {"Get Involved\n"}
      </div>
      <div className={"gi-page"}>
        <section id={"join"} className={"gi-section"}>
          <div className={"gi-section-header"}>
            <div>
              <h2>Join the Network</h2>
              <p>Free, open to all mental health professionals and students.</p>
            </div>
          </div>
          <div className={"join-grid"}>
            <div className={"join-left"}>
              <p>
                The USA-Palestine Mental Health Network is a 100% volunteer-led
                professional network open to all U.S.-based mental health
                workers who share our anti-Zionist perspective and our mission
                for justice in Palestine. Membership is free.
              </p>
              <p>
                As a member you will receive our monthly network updates,
                invitations to reading circles and webinars, access to clinical
                resources, and the opportunity to connect with over 170 Outreach
                Representatives across the country.
              </p>
              <div className={"who-list"}>
                <div className={"who-item"}>
                  {
                    " Licensed psychologists, social workers, counselors, and psychiatrists"
                  }
                </div>
                <div className={"who-item"}>
                  {" Graduate students and trainees in mental health fields"}
                </div>
                <div className={"who-item"}>
                  {" Faculty and department chairs in mental health programs"}
                </div>
                <div className={"who-item"}>
                  {" International colleagues aligned with our mission"}
                </div>
              </div>
              <p>
                If you know mental health workers who share our perspective,
                invite them to consider joining. The network grows through peer
                invitation and shared values.
              </p>
            </div>
            <div className={"join-form-card"}>
              <div className={"jfc-header"}>
                <h3>Join Our Network</h3>
                <p>
                  Get network updates, events, and resources delivered to your
                  inbox.
                </p>
              </div>
              <div className={"jfc-body"}>
                <div className={"form-field"}>
                  <label htmlFor={"join-first-name"}>First Name</label>
                  <input
                    type={"text"}
                    placeholder={"Your first name"}
                    id={"join-first-name"}
                  />
                </div>
                <div className={"form-field"}>
                  <label htmlFor={"join-last-name"}>Last Name</label>
                  <input
                    type={"text"}
                    placeholder={"Your last name"}
                    id={"join-last-name"}
                  />
                </div>
                <div className={"form-field"}>
                  <label htmlFor={"join-email-address"}>Email Address</label>
                  <input
                    type={"email"}
                    placeholder={"your@email.com"}
                    id={"join-email-address"}
                  />
                </div>
                <div className={"form-field"}>
                  <label htmlFor={"join-profession"}>Profession</label>
                  <select className={"cursor-pointer"} id={"join-profession"}>
                    <option value={""}>Select your profession</option>
                    <option>Psychologist</option>
                    <option>Social Worker</option>
                    <option>Counselor / Therapist</option>
                    <option>Psychiatrist</option>
                    <option>Graduate Student</option>
                    <option>Faculty / Academic</option>
                    <option>Other Mental Health Professional</option>
                  </select>
                </div>
                <div className={"form-field"}>
                  <label htmlFor={"join-state"}>State</label>
                  <input
                    type={"text"}
                    placeholder={"Your state"}
                    id={"join-state"}
                  />
                </div>
                <MailingListButton className={"form-submit cursor-pointer"}>
                  {"\n            Join the Network\n          "}
                </MailingListButton>
                <p className={"form-note"}>
                  Free membership. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id={"reading-circles"} className={"gi-section"}>
          <div className={"gi-section-header"}>
            <div>
              <h2>Reading Circles</h2>
              <p>
                Six-session facilitated reading groups on key texts in
                Palestinian mental health.
              </p>
            </div>
          </div>
          <p
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: "16px",
              color: "var(--text-mid)",
              lineHeight: "1.8",
              marginBottom: "28px",
            }}
          >
            USAPALMHN hosts ongoing reading circles for network members and
            Outreach Representatives. Each circle runs for six sessions and is
            facilitated by trained volunteers from the network. Reading circles
            deepen clinical and political understanding of the issues at the
            heart of our work.
          </p>
          <div className={"rc-grid"}>
            <div className={"rc-card"}>
              <div className={"rc-status rcs-active"}>Active — 2026</div>
              <h3>Incarcerated Childhood and the Politics of Unchilding</h3>
              <p>
                Explores the systematic deprivation of childhood for Palestinian
                youth under occupation and its psychological consequences.
              </p>
            </div>
            <div className={"rc-card"}>
              <div className={"rc-status rcs-completed"}>
                Completed — Early 2026
              </div>
              <h3>Psychoanalysis Under Occupation</h3>
              <p>
                The practice of psychoanalysis and psychotherapy in the context
                of Israeli occupation — clinical, ethical, and political
                dimensions.
              </p>
            </div>
            <div className={"rc-card"}>
              <div className={"rc-status rcs-completed"}>
                Completed — Early 2026
              </div>
              <h3>Boycott, Divestment, and Sanctions</h3>
              <p>
                A foundational text on the BDS movement and its implications for
                professional organizations in mental health and civil society.
              </p>
            </div>
          </div>
        </section>
        <section id={"delegations"} className={"gi-section"}>
          <div className={"gi-section-header"}>
            <div>
              <h2>Travel to Palestine — Mental Health Study Delegations</h2>
              <p>
                A unique opportunity for U.S. mental health professionals to
                witness conditions firsthand.
              </p>
            </div>
          </div>
          <div className={"delegation-card"}>
            <div>
              <h3>Spring 2027 Mental Health Study Delegation</h3>
              <p>
                The USA-Palestine Mental Health Network presents a unique 10-day
                study delegation to occupied Palestine, facilitated by a
                professional company with experience providing alternative tours
                to the Occupied Palestinian Territory. The delegation provides a
                rare opportunity to learn directly from Palestinian colleagues
                about the mental health impact of occupation.
              </p>
              <p>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  You will learn about:
                </strong>
              </p>
              <ul
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "14px",
                  lineHeight: "2",
                  paddingLeft: "20px",
                  marginBottom: "24px",
                  fontFamily: "'Source Serif 4',serif",
                }}
              >
                <li>The mental health impact of occupation on everyday life</li>
                <li>
                  Trauma within families and how it affects women and children
                </li>
                <li>
                  Violence against children, including imprisonment and
                  intergenerational trauma
                </li>
                <li>
                  Perspectives on the mental health crisis from Palestinian
                  professional colleagues
                </li>
              </ul>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={"mailto:info@usapalmhn.org"}
                  className={"btn-white cursor-pointer"}
                >
                  Send Statement of Interest
                </a>
              </div>
            </div>
            <div className={"del-details"}>
              <div className={"del-detail"}>
                <div className={"del-detail-text"}>
                  <strong>Dates</strong>
                  <span>10 days in March or April 2027</span>
                </div>
              </div>
              <div className={"del-detail"}>
                <div className={"del-detail-text"}>
                  <strong>Locations</strong>
                  <span>
                    Bethlehem, Nazareth, Jerusalem, Hebron, Ramallah, Nablus,
                    Jaffa, Haifa
                  </span>
                </div>
              </div>
              <div className={"del-detail"}>
                <div className={"del-detail-text"}>
                  <strong>Accommodation</strong>
                  <span>
                    Hotels in Bethlehem and Nazareth with daily travel by
                    private coach
                  </span>
                </div>
              </div>
              <div className={"del-detail"}>
                <div className={"del-detail-text"}>
                  <strong>Applications</strong>
                  <span>
                    Available in 2026. Space is limited — send statement of
                    interest now.
                  </span>
                </div>
              </div>
              <div className={"del-detail"}>
                <div className={"del-detail-text"}>
                  <strong>2027 Eyewitness Palestine Delegation</strong>
                  <span>
                    A USAPALMHN delegation via Eyewitness Palestine is also
                    planned for 2027.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={"how-to-help"} className={"gi-section"}>
          <div className={"gi-section-header"}>
            <div>
              <h2>How to Help Right Now</h2>
              <p>
                Actions you can take today to advance justice for Palestine.
              </p>
            </div>
          </div>
          <div className={"help-steps"}>
            <div className={"help-step"}>
              <div className={"help-step-num"}>1</div>
              <h3>Sign the Pledge</h3>
              <p>
                Add your name to the Mental Health Workers Pledge for Palestine
                — a public, professional commitment to naming and opposing
                structural violence.
              </p>
              <a
                href={
                  "https://usapalmhn.org/portfolio-item/mental-health-workers-pledge-for-palestine/"
                }
                target={"_blank"}
                className={"btn-red-sm cursor-pointer"}
              >
                Sign Now
              </a>
            </div>
            <div className={"help-step"}>
              <div className={"help-step-num"}>2</div>
              <h3>Donate</h3>
              <p>
                Support the network&apos;s 100% volunteer-led work —
                delegations, events, campaigns, and resources all depend on
                community funding.
              </p>
              <a
                href={"https://givebutter.com/USAPALMHN"}
                target={"_blank"}
                className={"btn-olive-sm cursor-pointer"}
              >
                Donate Now
              </a>
            </div>
            <div className={"help-step"}>
              <div className={"help-step-num"}>3</div>
              <h3>Join Hill Days</h3>
              <p>
                Join USAPALMHN Outreach Representatives and Doctors Against
                Genocide on monthly Capitol Hill advocacy days.
              </p>
              <a
                href={"https://doctorsagainstgenocide.org/"}
                target={"_blank"}
                className={"btn-navy-sm cursor-pointer"}
              >
                DAG Hill Day
              </a>
            </div>
            <div className={"help-step"}>
              <div className={"help-step-num"}>4</div>
              <h3>Follow &amp; Share</h3>
              <p>
                Follow us on social media and share our content with colleagues,
                students, and professional networks. Every share expands our
                reach.
              </p>
              <a
                href={"https://www.instagram.com/us_pmhn/"}
                target={"_blank"}
                className={"btn-olive-sm cursor-pointer"}
              >
                @us_pmhn
              </a>
            </div>
            <div className={"help-step"}>
              <div className={"help-step-num"}>5</div>
              <h3>Drop NASW</h3>
              <p>
                Join the Drop NASW campaign by Social Work for Palestine, in
                response to NASW&apos;s endorsement of the Israeli Union of
                Social Workers.
              </p>
              <Link href={"#"} className={"btn-red-sm cursor-pointer"}>
                Learn More
              </Link>
            </div>
            <div className={"help-step"}>
              <div className={"help-step-num"}>6</div>
              <h3>Bring It to Your Institution</h3>
              <p>
                Start a university chapter, bring a USAPALMHN speaker to your
                department, or propose a reading circle at your workplace or
                training program.
              </p>
              <a
                href={"mailto:sc@usapalmhn.org"}
                className={"btn-navy-sm cursor-pointer"}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
            <div
              className={"gi-section-header"}
              style={{ marginBottom: "20px" }}
            >
              <div>
                <h2>Follow Us</h2>
                <p>Stay connected and spread the word.</p>
              </div>
            </div>
            <div className={"social-grid"}>
              <a
                href={"https://www.instagram.com/us_pmhn/"}
                target={"_blank"}
                className={"social-card cursor-pointer"}
              >
                <div>
                  <h4>Instagram</h4>
                  <p>@us_pmhn</p>
                </div>
              </a>
              <a
                href={"https://twitter.com/UsaPalMhn"}
                target={"_blank"}
                className={"social-card cursor-pointer"}
              >
                <div>
                  <h4>Twitter / X</h4>
                  <p>@UsaPalMhn</p>
                </div>
              </a>
              <a
                href={
                  "https://www.facebook.com/USA-Palestine-Mental-Health-Network-794365367408972"
                }
                target={"_blank"}
                className={"social-card cursor-pointer"}
              >
                <div>
                  <h4>Facebook</h4>
                  <p>USA Palestine Mental Health Network</p>
                </div>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
            <div className={"natakallam-card"}>
              <div>
                <h3>Learn Arabic — Support NaTakallam</h3>
                <p>
                  NaTakallam is a social enterprise that connects refugees and
                  displaced people for remote work opportunities in the language
                  sector. Several people across the network have been learning
                  Arabic through their program. We encourage you to consider
                  their offerings as a way to both learn the language and
                  directly support displaced communities.
                </p>
                <a
                  href={"https://natakallam.com/"}
                  target={"_blank"}
                  className={"btn-olive-sm cursor-pointer"}
                >
                  Explore NaTakallam
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
