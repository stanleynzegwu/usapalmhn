import {
  ScrollSpyLink,
  ScrollSpyProvider,
  ScrollSpySection,
} from "@/components/scroll-spy";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/voices.css";

export const metadata: Metadata = {
  title: "Voices on Mental Health — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <ScrollSpyProvider>
        <div className={"page-hero"}>
          <div className={"keffiyeh-overlay"}></div>
          <div className={"page-hero-content"}>
            <div className={"page-hero-eyebrow"}>
              Testimony · Witness · Solidarity
            </div>
            <h1>Voices on Mental Health</h1>
            <p>
              First-person accounts, clinical reflections, statements, and
              testimonies from Palestinians, clinicians, and advocates — bearing
              witness to the psychological dimensions of occupation and
              resistance.
            </p>
          </div>
        </div>
        <div className={"breadcrumb"}>
          <Link href={"/"} className={"cursor-pointer"}>
            Home
          </Link>
          <span>›</span>
          {"\n  Voices on Mental Health\n"}
        </div>
        <div className={"voices-page-layout"}>
          <aside className={"voices-sidebar"} data-scrollspy={""}>
            <div className={"voices-sidebar-header"}>Voices Library</div>
            <ScrollSpyLink
              href={"#about-voices"}
              className={"active cursor-pointer"}
            >
              {" About"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#gaza"} className={"cursor-pointer"}>
              {" Voices on Gaza"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#west-bank"} className={"cursor-pointer"}>
              {" West Bank"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#diaspora"} className={"cursor-pointer"}>
              {" Diaspora"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#may-2021"} className={"cursor-pointer"}>
              {" May 2021"}
            </ScrollSpyLink>
            <ScrollSpyLink
              href={"#psychoanalytic"}
              className={"cursor-pointer"}
            >
              {" Psychoanalytic Activist"}
            </ScrollSpyLink>
            <ScrollSpyLink
              href={"#we-are-not-numbers"}
              className={"cursor-pointer"}
            >
              {" We Are Not Numbers"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#pledge"} className={"cursor-pointer"}>
              {" MH Workers Pledge"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#statements"} className={"cursor-pointer"}>
              {" Statements"}
            </ScrollSpyLink>
          </aside>
          <main className={"voices-content"}>
            <ScrollSpySection id={"about-voices"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>About Voices on Mental Health</h2>
                  <p>
                    Why these testimonies matter for clinical practice and
                    professional ethics.
                  </p>
                </div>
              </div>
              <div className={"featured-quote"}>
                <blockquote>
                  "We are trained to recognize moral injury, vicarious trauma,
                  and collective grief. What we are witnessing meets every
                  clinical criterion. Our silence is its own symptom."
                </blockquote>
                <div className={"fq-cite"}>
                  <div className={"fq-avatar"}>LA</div>
                  <cite>
                    <strong>Dr. Layla Abboud, PsyD</strong>Professor &amp;
                    Clinician, Los Angeles, CA
                  </cite>
                </div>
              </div>
              <div className={"statement-item"}>
                <div className={"si-body"}>
                  <h4>About Voices on Mental Health</h4>
                  <p>
                    An introduction to this section — why USAPALMHN collects and
                    publishes first-person testimonies, and how clinicians can
                    use them to inform culturally competent, justice-oriented
                    practice.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/about-voices-on-mental-health/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Read Introduction →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"gaza"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Voices on Gaza</h2>
                  <p>
                    First-person testimonies from journalists, writers, and
                    civilians in Gaza documenting the psychological reality of
                    siege and bombardment.
                  </p>
                </div>
              </div>
              <div className={"voices-grid-3"}>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>December 2024</div>
                    <h3>Even the Longest Winters End</h3>
                    <p>
                      "I hold onto hope the way you hold a candle in the wind —
                      carefully, desperately, because the darkness is too heavy
                      otherwise."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/even-the-longest-winters-end-december-2024/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>SH</div>
                      <div className={"va-author-info"}>
                        <strong>Sara Hegy</strong>Journalist, displaced to
                        Nuseirat refugee camp
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>November 2024</div>
                    <h3>There Is Always Hope</h3>
                    <p>
                      "As a writer, I strive to convey the stories of my people
                      in a unique way — because our stories deserve to be told."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/there-is-always-hope/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>SA</div>
                      <div className={"va-author-info"}>
                        <strong>Shahd Ahmad Alnaami</strong>Student, Islamic
                        University of Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>January 2024</div>
                    <h3>Reflections from a Journalist in Gaza</h3>
                    <p>
                      "On February 19, I am going to turn 23. I&apos;m anxious
                      that the day will come and the war will still be ongoing —
                      but I&apos;m not entirely sure I will live long enough to
                      see it."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/reflections-from-a-journalist-in-gaza-january-2024/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>GJ</div>
                      <div className={"va-author-info"}>
                        <strong>Anonymous</strong>Journalist, Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-dark"}>In Memoriam</span>
                    <div className={"va-date"}>October 14, 2023</div>
                    <h3>In Memoriam: Yousef Mahar Dawas</h3>
                    <p>
                      A tribute to Yousef Mahar Dawas, killed on October 14,
                      2023 — shared through We Are Not Numbers and members of
                      the network.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/in-memoriam-yousef-mahar-dawas/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>WN</div>
                      <div className={"va-author-info"}>
                        <strong>We Are Not Numbers</strong>Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>October 26, 2023</div>
                    <h3>A Voice from a Young Journalist in Gaza</h3>
                    <p>
                      An audio recording received by a member of the network
                      from a young journalist documenting conditions in Gaza in
                      the early weeks of the bombardment.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/a-voice-from-a-young-journalist-in-gaza-october-26-2023/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>GJ</div>
                      <div className={"va-author-info"}>
                        <strong>Anonymous</strong>Journalist, Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>2023</div>
                    <h3>Close Calls with Death</h3>
                    <p>
                      "It was just before midnight on 10 October. I was in the
                      living room with my family. We were worried about the
                      explosions we were hearing. Israel&apos;s warplanes were
                      flying above us..."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/close-calls-with-death/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>GV</div>
                      <div className={"va-author-info"}>
                        <strong>Gaza Resident</strong>Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Gaza</span>
                    <div className={"va-date"}>2023</div>
                    <h3>
                      A Romance, a Birthplace Destroyed: Memories of Gaza&apos;s
                      Ahli Hospital
                    </h3>
                    <p>
                      Over 80 years ago, Hammam Farah&apos;s grandparents met at
                      al-Ahli Arab Hospital. Years later, Farah himself was born
                      there. Now it is rubble.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>HF</div>
                      <div className={"va-author-info"}>
                        <strong>Hammam Farah</strong>Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-red"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-red"}>Children</span>
                    <div className={"va-date"}>2023</div>
                    <h3>
                      Under Siege &amp; Under Bombs: Children&apos;s Mental
                      Health in Gaza
                    </h3>
                    <p>
                      A clinical and testimonial account of the devastating
                      psychological impact of prolonged siege, bombardment, and
                      displacement on Gaza&apos;s children.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/under-siege-childrens-mental-health-in-gaza/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-red"}>CL</div>
                      <div className={"va-author-info"}>
                        <strong>Clinical Account</strong>Gaza
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-blue"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-blue"}>Letters</span>
                    <div className={"va-date"}>2018–present</div>
                    <h3>Letters from Gaza by Hanan Abubasheer</h3>
                    <p>
                      A collection of letters written from Gaza over several
                      years — documenting life, loss, survival, and resistance
                      under blockade.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/a-letter-from-gaza-june-2018-by-hanan-bashir/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-blue"}>HA</div>
                      <div className={"va-author-info"}>
                        <strong>Hanan Abubasheer</strong>Gaza
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "28px" }}>
                <a
                  href={"https://usapalmhn.org/voices-on-gaza/"}
                  target={"_blank"}
                  className={"btn-olive cursor-pointer"}
                >
                  View All Gaza Voices
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"west-bank"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Voices from the West Bank</h2>
                  <p>
                    Testimonies from clinicians, educators, and community
                    members living under occupation in the West Bank.
                  </p>
                </div>
              </div>
              <div className={"voices-grid-2"}>
                <div className={"voice-article"}>
                  <div className={"va-accent va-green"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-green"}>West Bank</span>
                    <div className={"va-date"}>2024</div>
                    <h3>
                      "All That&apos;s Left of You" — Not Just a Film, But an
                      Experience Worth Watching
                    </h3>
                    <p>
                      "The film speaks directly to those of us born in refugee
                      camps, who grew up in narrow alleys and inherited memory
                      without having lived the first moment of the Nakba
                      itself."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-green"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-green"}>West Bank</span>
                    <div className={"va-date"}>2023</div>
                    <h3>Nakba 2023</h3>
                    <p>
                      "More than 2,300 people — children, women, elderly men,
                      and young men — were arrested in the last month, and 90%
                      ended up in administrative detention with no charges
                      against them."
                    </p>
                    <a
                      href={"https://usapalmhn.org/portfolio-item/nakba-2023/"}
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-green"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-green"}>West Bank</span>
                    <div className={"va-date"}>October 16, 2023</div>
                    <h3>Update from Palestine — October 16, 2023</h3>
                    <p>
                      "The situation here gets worse and worse. We are under
                      complete lockdown in the West Bank. There is lack of food,
                      the internet keeps cutting off. Above all, settlers are
                      attacking us."
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/update-from-palestine-october-16-2023/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-green"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-green"}>Clinical</span>
                    <div className={"va-date"}>2023</div>
                    <h3>
                      Resistance as a Path to Healing: The Quest for Mental
                      Health in Palestine
                    </h3>
                    <p>
                      A Palestinian psychologist reflects on attending a mental
                      health conference where a lecture titled "An Israeli in
                      the Psychotherapy Room" sparks a reckoning with occupation
                      and clinical identity.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                  </div>
                </div>
                <div className={"voice-article"}>
                  <div className={"va-accent va-green"}></div>
                  <div className={"va-body"}>
                    <span className={"va-tag vt-green"}>West Bank</span>
                    <div className={"va-date"}>2023</div>
                    <h3>Once upon a Time in Palestine</h3>
                    <p>
                      Saed Zboun, an Arabic teacher and advocate, reflects on
                      the cultural and psychological life of Aida refugee camp,
                      Bethlehem, and the meaning of memory under occupation.
                    </p>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/once-upon-a-time-in-palestine/"
                      }
                      target={"_blank"}
                      className={"link-arrow cursor-pointer"}
                    >
                      Read →
                    </a>
                    <div className={"va-author"}>
                      <div className={"va-avatar av-green"}>SZ</div>
                      <div className={"va-author-info"}>
                        <strong>Saed Zboun</strong>Bethlehem University / Aida
                        Camp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "28px" }}>
                <a
                  href={"https://usapalmhn.org/voices-from-the-west-bank/"}
                  target={"_blank"}
                  className={"btn-olive cursor-pointer"}
                >
                  View All West Bank Voices
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"diaspora"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Voices from the Diaspora</h2>
                  <p>
                    Palestinian clinicians, scholars, and community members
                    speaking from the diaspora about identity, grief, and
                    solidarity.
                  </p>
                </div>
              </div>
              <div className={"statement-item blue"}>
                <div className={"si-body"}>
                  <h4>Voices from the Diaspora — Full Collection</h4>
                  <p>
                    Reflections and essays from Palestinians living outside
                    Palestine — on inherited trauma, professional advocacy, dual
                    belonging, and the experience of watching from a distance
                    while family and homeland are under siege.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/voices-from-the-diaspora/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Explore the Collection →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"may-2021"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>May 2021 Assault on Palestine</h2>
                  <p>
                    Testimonies and clinical responses collected during the May
                    2021 escalation in Palestine.
                  </p>
                </div>
              </div>
              <div className={"statement-item red"}>
                <div className={"si-body"}>
                  <div className={"si-tag red"}>2021</div>
                  <h4>May 2021 Assault on Palestine — Archive</h4>
                  <p>
                    A collection of testimonies, clinical reflections, and
                    network responses gathered during and after the May 2021
                    assault.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/may-2021-assault-on-palestine/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    View Archive →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"psychoanalytic"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Psychoanalytic Activist</h2>
                  <p>
                    At the intersection of clinical theory and political
                    responsibility.
                  </p>
                </div>
              </div>
              <div className={"activist-card"}>
                <h3>The Psychoanalytic Activist</h3>
                <p>
                  A curated series exploring the ethical and theoretical
                  dimensions of practicing psychoanalysis in solidarity with
                  oppressed communities. Contributors engage with questions of
                  countertransference, neutrality, moral injury, and the
                  clinician&apos;s role in bearing witness to structural
                  violence.
                </p>
                <a
                  href={
                    "https://usapalmhn.org/portfolio-item/psychoanalytic-activist/"
                  }
                  target={"_blank"}
                  className={"btn-white cursor-pointer"}
                >
                  Explore Series
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"we-are-not-numbers"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>We Are Not Numbers</h2>
                  <p>
                    Amplifying the individual stories behind the statistics of
                    Palestinian suffering.
                  </p>
                </div>
              </div>
              <div className={"wann-card"}>
                <div className={"wann-body"}>
                  <h3>We Are Not Numbers</h3>
                  <p>
                    A partnership with the We Are Not Numbers project — a
                    Gaza-based initiative pairing young Palestinian writers with
                    international mentors to tell the human stories behind the
                    statistics. USAPALMHN curates and amplifies these narratives
                    to help mental health professionals understand the
                    individual faces of collective trauma.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/we-are-not-numbers/"
                    }
                    target={"_blank"}
                    className={"btn-olive-sm cursor-pointer"}
                  >
                    Read the Stories
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"pledge"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Mental Health Workers Pledge for Palestine</h2>
                  <p>
                    A collective statement and call to action by mental health
                    professionals.
                  </p>
                </div>
              </div>
              <div className={"pledge-banner"}>
                <div>
                  <h3>Sign the Mental Health Workers Pledge for Palestine</h3>
                  <p>
                    Mental health professionals across the U.S. and globally
                    have pledged to uphold the ethical duty to name and oppose
                    the structural conditions causing harm to the Palestinian
                    people. Add your name.
                  </p>
                </div>
                <div
                  className={"pledge-btn"}
                  style={{
                    margin: "0 auto",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/mental-health-workers-pledge-for-palestine/"
                    }
                    target={"_blank"}
                    className={"btn-white cursor-pointer"}
                  >
                    Sign the Pledge
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"statements"}>
              <div className={"voices-section-header"}>
                <div>
                  <h2>Official Statements</h2>
                  <p>
                    Formal statements issued by USAPALMHN on key political and
                    human rights developments affecting Palestine.
                  </p>
                </div>
              </div>
              <div className={"statement-item red"}>
                <div className={"si-body"}>
                  <div className={"si-tag red"}>Statement</div>
                  <h4>Statement on Israeli Annexation</h4>
                  <p>
                    USAPALMHN&apos;s formal statement condemning Israeli moves
                    toward annexation of Palestinian territory and their
                    psychological and human rights implications.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/statement-on-israeli-annexation/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Read Statement →
                  </a>
                </div>
              </div>
              <div className={"statement-item red"}>
                <div className={"si-body"}>
                  <div className={"si-tag red"}>Statement</div>
                  <h4>
                    Statement on Israeli Raid of Defence for Children
                    International (DCI)
                  </h4>
                  <p>
                    USAPALMHN condemns the Israeli military raid on the offices
                    of Defence for Children International — Palestine, one of
                    the world&apos;s leading children&apos;s rights
                    organizations.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/statement-on-israeli-raid-of-dci/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Read Statement →
                  </a>
                </div>
              </div>
              <div className={"statement-item red"}>
                <div className={"si-body"}>
                  <div className={"si-tag red"}>Statement</div>
                  <h4>
                    Statement Condemning the Invasion of Birzeit University
                  </h4>
                  <p>
                    USAPALMHN joins international mental health organizations in
                    condemning the Israeli military&apos;s invasion of Birzeit
                    University, a leading Palestinian academic institution.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/statement-condemning-the-invasion-of-birzeit/"
                    }
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Read Statement →
                  </a>
                </div>
              </div>
              <div className={"statement-item"}>
                <div className={"si-body"}>
                  <div className={"si-tag"}>Statement</div>
                  <h4>Statement on Anti-Semitism</h4>
                  <p>
                    USAPALMHN&apos;s statement clarifying the distinction
                    between anti-Zionism and antisemitism, and affirming the
                    network&apos;s commitment to opposing all forms of racial
                    and ethnic hatred.
                  </p>
                  <Link
                    href={"/statement-on-anti-semitism/"}
                    className={"cursor-pointer"}
                  >
                    Read Statement →
                  </Link>
                </div>
              </div>
            </ScrollSpySection>
          </main>
        </div>
      </ScrollSpyProvider>
    </>
  );
}
