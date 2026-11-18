import { SitePage } from "@/components/site-page";
import { HeroCarousel } from "@/components/hero-carousel";
import { AnimatedNumber, YearsActive } from "@/components/animated-number";
import Link from "next/link";
import type { Metadata } from "next";
import "./styles/pages/index.css";

export const metadata: Metadata = {
  title: "USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <SitePage page="/">
      <HeroCarousel
        id={"hero"}
        slidesStyle={{ minHeight: "75vh" }}
        slides={[
          <div key="slide-0" className={"hero-slide active"} id={"slide-0"}>
            <div className={"hero-eyebrow"}>
              USA Palestine Mental Health Network · usapalmhn.org
            </div>
            <h1 className={"hero-headline"}>
              Centering Palestinian Mental Health in U.S. Clinical Practice
            </h1>
            <p className={"hero-sub"}>
              A national network of clinicians committed to culturally competent
              care, advocacy, and solidarity with Palestinian communities.
            </p>
            <div className={"hero-ctas"}>
              <Link
                href={"/get-involved/#join"}
                className={"btn-white cursor-pointer"}
              >
                Join the Network
              </Link>
              <Link
                href={"/resources/"}
                className={"btn-red-outline cursor-pointer"}
              >
                Clinical Resources
              </Link>
            </div>
          </div>,
          <div key="slide-1" className={"hero-slide"} id={"slide-1"}>
            <div className={"hero-eyebrow"}>
              Professional Advocacy · Justice-Centered Practice
            </div>
            <h1 className={"hero-headline"}>Solidarity Is a Clinical Act</h1>
            <p className={"hero-sub"}>
              From curriculum integration to public statements, our members lead
              the profession in recognizing the mental health dimensions of
              displacement and occupation.
            </p>
            <div className={"hero-ctas"}>
              <Link
                href={"/about/#mission"}
                className={"btn-white cursor-pointer"}
              >
                Our Mission
              </Link>
              <Link
                href={"/get-involved/"}
                className={"btn-red-outline cursor-pointer"}
              >
                Get Involved
              </Link>
            </div>
          </div>,
          <div key="slide-2" className={"hero-slide"} id={"slide-2"}>
            <div className={"hero-eyebrow"}>
              Clinical Ethics · Professional Responsibility
            </div>
            <h1 className={"hero-headline"}>
              Breaking the Silence — When Clinicians Speak Up
            </h1>
            <p className={"hero-sub"}>
              Mental health professionals have an ethical duty to name
              injustice. Our network provides the frameworks, resources, and
              community to do so with integrity.
            </p>
            <div className={"hero-ctas"}>
              <Link href={"/voices/"} className={"btn-white cursor-pointer"}>
                Clinician Voices
              </Link>
            </div>
          </div>,
        ]}
        stats={
          <div className={"hero-stat-bar"}>
            <span>Founded 2016</span>
            <span>500+ Members</span>
            <span>50 States</span>
            <span>100% Volunteer-Led</span>
          </div>
        }
      />
      <section id={"impact"}>
        <div className={"impact-grid"}>
          <div className={"impact-item"}>
            <AnimatedNumber target={500} suffix={"+"} />
            <div className={"impact-label"}>Network Members</div>
            <div className={"impact-line il-green"}></div>
          </div>
          <div className={"impact-item"}>
            <YearsActive />
            <div className={"impact-label"}>Years Active</div>
            <div className={"impact-line il-red"}></div>
          </div>
          <div className={"impact-item"}>
            <AnimatedNumber target={50} suffix={""} />
            <div className={"impact-label"}>States Represented</div>
            <div className={"impact-line il-blue"}></div>
          </div>
          <div className={"impact-item"}>
            <AnimatedNumber target={100} suffix={"+"} />
            <div className={"impact-label"}>Clinical Resources</div>
            <div className={"impact-line il-green"}></div>
          </div>
        </div>
      </section>
      <section id={"mission"}>
        <div className={"section-header-left"}>
          <div className={"section-label"}>Our Pillars</div>
          <h2 className={"section-title"}>
            Two Commitments That Define Our Work
          </h2>
          <p className={"section-sub"}>
            Founded by clinicians — bringing rigor, ethics, and solidarity to
            mental health advocacy.
          </p>
        </div>
        <div className={"mission-grid"}>
          <div className={"mission-card mc-red"}>
            <h3>Solidarity &amp; Advocacy</h3>
            <p>
              We sign public statements, submit ethics commentaries, and stand
              alongside Palestinian communities — because silence is never a
              neutral clinical stance.
            </p>
          </div>
          <div className={"mission-card mc-green"}>
            <h3>Education &amp; Training</h3>
            <p>
              We develop curriculum on settler-colonial trauma, forced
              displacement, and intergenerational grief for graduate programs,
              CEUs, and clinical supervision.
            </p>
          </div>
        </div>
      </section>
      <section id={"about"}>
        <div className={"about-grid"}>
          <div className={"about-left"}>
            <div className={"section-label"}>About the Network</div>
            <h2 className={"section-title"}>
              A Network Born from Necessity and Conscience
            </h2>
            <p>
              In 2016, a group of U.S.-based psychologists, social workers,
              counselors, and psychiatrists came together around a shared
              recognition: Palestinian mental health was an underserved, often
              silenced dimension of both clinical practice and professional
              advocacy.
            </p>
            <p>
              Today, USA Palestine Mental Health Network (USAPALMHN) is a 100%
              volunteer-led professional network operating in all 50 states. We
              do not seek institutional neutrality — we seek clinical accuracy,
              which requires us to name the structural conditions that produce
              psychological harm.
            </p>
            <Link href={"/about/"} className={"btn-olive cursor-pointer"}>
              More About the Network
            </Link>
          </div>
          <div className={"about-right"}>
            <div className={"about-right-texture"}></div>
            <div className={"about-right-content"}>
              <h3>Grounded in Ethics. Rooted in Justice.</h3>
              <p>
                Our members are licensed clinicians across psychology, social
                work, counseling, and psychiatry — all contributing pro bono to
                this shared mission.
              </p>
              <div className={"about-stats"}>
                <div className={"about-stat"}>
                  <strong>2016</strong>
                  <span>Founded</span>
                </div>
                <div className={"about-stat"}>
                  <strong>US-Wide</strong>
                  <span>Coverage</span>
                </div>
                <div className={"about-stat"}>
                  <strong>100%</strong>
                  <span>Volunteer-Led</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"updates"}
        style={{ background: "var(--cream)", padding: "90px 60px" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div className={"section-header-left"}>
            <div className={"section-label"}>From the Network</div>
            <h2 className={"section-title"}>Network Updates</h2>
            <p className={"section-sub"}>
              Monthly dispatches from USA-PalMHN to our Outreach
              Representatives.
            </p>
          </div>
          <div className={"news-grid"}>
            <div className={"news-card nc-green"}>
              <div className={"news-card-body"}>
                <span className={"news-badge nb-green"}>April 2026</span>
                <div className={"news-date"}>Sent April 15, 2026</div>
                <h3>
                  One Thousand White Coats, Balata Health Center &amp; More
                </h3>
                <p>
                  DAG Hill Day advocacy, Café Palestine music therapy programme,
                  "We Besiege Our Siege with Madness" webinar fundraiser for
                  Balata Health Center, Eyewitness Palestine 25th anniversary
                  benefit, and Drop NASW campaign update.
                </p>
                <Link
                  href={"/updates/"}
                  className={"link-arrow cursor-pointer"}
                >
                  Read Full Update →
                </Link>
              </div>
            </div>
            <div className={"news-card nc-red"}>
              <div className={"news-card-body"}>
                <span className={"news-badge nb-red"}>March 2026</span>
                <div className={"news-date"}>Sent March 12, 2026</div>
                <h3>
                  “Health Under Siege,” Reading Circles &amp; UK-PalMHN Events
                </h3>
                <p>
                  Recap of the "Exiled but Not Erased" film series ($1,735
                  raised for Badil), JVP "Health Under Siege" webinar
                  co-sponsorship, Drop NASW campaign, and rescheduled "Besiege
                  Your Siege with Madness" event.
                </p>
                <Link
                  href={"/updates/"}
                  className={"link-arrow cursor-pointer"}
                >
                  Read Full Update →
                </Link>
              </div>
            </div>
            <div className={"news-card nc-blue"}>
              <div className={"news-card-body"}>
                <span className={"news-badge nb-blue"}>February 2026</span>
                <div className={"news-date"}>Sent February 10, 2026</div>
                <h3>
                  Film Series Launch, Do No Harm Campaign &amp; Reading Circles
                </h3>
                <p>
                  "Exiled but Not Erased" film series with Badil Resource
                  Center, Do No Harm campaign against the Henri Parens
                  Symposium, five active reading circles, and Expel the IUSW
                  campaign via Social Work for Palestine.
                </p>
                <Link
                  href={"/updates/"}
                  className={"link-arrow cursor-pointer"}
                >
                  Read Full Update →
                </Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href={"/updates/"} className={"btn-olive cursor-pointer"}>
              View All Updates
            </Link>
          </div>
        </div>
      </section>
      <section id={"voices"}>
        <div className={"voices-header"}>
          <div className={"section-label"}>Voices on Mental Health</div>
          <h2 className={"section-title"} style={{ color: "white" }}>
            From Clinicians in the Network
          </h2>
          <p className={"section-sub"}>
            What it means to practice in solidarity.
          </p>
        </div>
        <div className={"voices-grid"}>
          <div className={"voice-card"}>
            <blockquote>
              "My Palestinian clients don&apos;t need me to pretend that
              what&apos;s happening to their families is a &apos;political
              controversy.&apos; They need me to be clinically honest about what
              structural violence does to the psyche."
            </blockquote>
            <div className={"voice-cite"}>
              <div className={"voice-avatar"}>SR</div>
              <cite>
                <strong>Dr. Sara Rahim, PhD</strong>
                {" Clinical Psychologist, Chicago, IL"}
              </cite>
            </div>
          </div>
          <div className={"voice-card"}>
            <blockquote>
              "Joining this network gave me language for what I was already
              feeling — that our professional code of ethics doesn&apos;t end at
              the therapy room door. Justice is a clinical value."
            </blockquote>
            <div className={"voice-cite"}>
              <div className={"voice-avatar"}>MN</div>
              <cite>
                <strong>Marcus Nasser, LCSW</strong>
                {" Therapist & Supervisor, New York, NY"}
              </cite>
            </div>
          </div>
          <div className={"voice-card"}>
            <blockquote>
              "We are trained to recognize moral injury, vicarious trauma, and
              collective grief. What we are witnessing in Gaza meets every
              clinical criterion. Our silence is its own symptom."
            </blockquote>
            <div className={"voice-cite"}>
              <div className={"voice-avatar"}>LA</div>
              <cite>
                <strong>Dr. Layla Abboud, PsyD</strong>
                {" Professor & Clinician, Los Angeles, CA"}
              </cite>
            </div>
          </div>
          <div className={"voice-card"}>
            <blockquote>
              "I train social work students to identify systems of oppression.
              The inability to name what is happening in Palestine in our
              classrooms is itself a clinical ethics problem."
            </blockquote>
            <div className={"voice-cite"}>
              <div className={"voice-avatar"}>TK</div>
              <cite>
                <strong>Prof. Tariq Khalil, MSW</strong>
                {" Social Work Faculty, Boston, MA"}
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section id={"resources"}>
        <div className={"section-header-left"}>
          <div className={"section-label"}>Member Resources</div>
          <h2 className={"section-title"}>
            Clinical Tools for Justice-Centered Practice
          </h2>
          <p className={"section-sub"}>
            Evidence-informed resources developed by and for mental health
            professionals.
          </p>
        </div>
        <div className={"resources-grid"}>
          <div className={"resource-card"}>
            <div className={"resource-bar rb-green"}></div>
            <div className={"resource-body"}>
              <h3>
                Culturally-Informed Assessment: Working with Palestinian Clients
              </h3>
              <p>
                A comprehensive guide covering cultural formulation, language
                considerations, and trauma-informed assessment frameworks for
                Palestinian-heritage clients.
              </p>
              <Link
                href={"/get-involved/#join"}
                className={"link-arrow cursor-pointer"}
              >
                Join to access →
              </Link>
            </div>
          </div>
          <div className={"resource-card"}>
            <div className={"resource-bar rb-red"}></div>
            <div className={"resource-body"}>
              <h3>Navigating Countertransference Around Political Conflict</h3>
              <p>
                A practitioner guide and supervisory framework for managing
                personal reactions to geopolitical trauma narratives in the
                clinical setting.
              </p>
              <Link
                href={"/get-involved/#join"}
                className={"link-arrow cursor-pointer"}
              >
                Join to access →
              </Link>
            </div>
          </div>
          <div className={"resource-card"}>
            <div className={"resource-bar rb-blue"}></div>
            <div className={"resource-body"}>
              <h3>
                Collective Grief and Diasporic Mourning: A Curriculum Module
              </h3>
              <p>
                A 90-minute CEU-eligible curriculum module on collective grief,
                ambiguous loss, and intergenerational trauma in displaced
                populations.
              </p>
              <Link
                href={"/get-involved/#join"}
                className={"link-arrow cursor-pointer"}
              >
                Join to access →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
