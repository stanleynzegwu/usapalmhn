import {
  ScrollSpyLink,
  ScrollSpyProvider,
  ScrollSpySection,
} from "@/components/scroll-spy";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/campaigns.css";

export const metadata: Metadata = {
  title: "Campaigns — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <ScrollSpyProvider>
        <div className={"page-hero"}>
          <div className={"keffiyeh-overlay"}></div>
          <div className={"page-hero-content"}>
            <div className={"page-hero-eyebrow"}>
              Advocacy · Professional Ethics · Solidarity
            </div>
            <h1>Campaigns</h1>
            <p>
              We campaign where our profession meets Palestinian rights — urging
              colleagues to decline conferences held in Israel, challenging
              institutions that lend their credibility to the occupation, and
              holding our professional bodies to their own ethical codes.
            </p>
          </div>
        </div>
        <div className={"breadcrumb"}>
          <Link href={"/"} className={"cursor-pointer"}>
            Home
          </Link>
          <span>›</span>
          {'"Don\'t Go" Campaigns\n'}
        </div>
        <div className={"campaigns-layout"}>
          <aside className={"camp-sidebar"} data-scrollspy={""}>
            <div className={"camp-sidebar-header"}>Campaign Archive</div>
            <ScrollSpyLink href={"#about"} className={"active cursor-pointer"}>
              About "Don&apos;t Go"
            </ScrollSpyLink>
            <ScrollSpyLink href={"#do-no-harm"} className={"cursor-pointer"}>
              Do No Harm
            </ScrollSpyLink>
            <ScrollSpyLink href={"#iarpp"} className={"cursor-pointer"}>
              IARPP
            </ScrollSpyLink>
            <ScrollSpyLink href={"#iasgop"} className={"cursor-pointer"}>
              IASGOP
            </ScrollSpyLink>
            <ScrollSpyLink href={"#isps"} className={"cursor-pointer"}>
              ISPS
            </ScrollSpyLink>
            <ScrollSpyLink href={"#nls"} className={"cursor-pointer"}>
              NLS
            </ScrollSpyLink>
            <ScrollSpyLink
              href={"#world-mediation"}
              className={"cursor-pointer"}
            >
              {" World Mediation Summit"}
            </ScrollSpyLink>
            <ScrollSpyLink href={"#copelfi"} className={"cursor-pointer"}>
              COPELFI
            </ScrollSpyLink>
            <ScrollSpyLink href={"#enmesh"} className={"cursor-pointer"}>
              ENMESH
            </ScrollSpyLink>
            <ScrollSpyLink href={"#dr-akhtar"} className={"cursor-pointer"}>
              Dr. Akhtar
            </ScrollSpyLink>
          </aside>
          <main className={"camp-content"}>
            <ScrollSpySection id={"about"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>About "Don&apos;t Go"</h2>
                  <p>
                    The ethical and professional basis for our cultural boycott
                    campaigns.
                  </p>
                </div>
              </div>
              <div className={"about-block"}>
                <div className={"kef-overlay"}></div>
                <h3>Why We Say "Don&apos;t Go"</h3>
                <p>
                  The USA-Palestine Mental Health Network respects the position
                  articulated by our colleagues in Palestine through the
                  Palestinian Union of Social Workers and Psychologists (PUSWP),
                  asking for international support in their declaration of
                  October 2, 2018. The PUSWP represents approximately 20,000
                  mental health professionals in Palestine.
                </p>
                <p>
                  Consistent with the PUSWP position, the USA-PalMHN has taken a
                  public stand urging mental health organizations and clinicians
                  not to go to Israel. We have approached individual
                  international mental health organizations planning to hold
                  meetings and conferences in Israel, asking them to reconsider
                  and hold their meetings elsewhere.
                </p>
                <p>
                  The USA-PalMHN wishes to thank our sibling organization, the
                  UK-Palestine Mental Health Network, and the advocacy
                  organization Jewish Voice for Peace, for their tremendous
                  support in waging these campaigns.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={"https://usapalmhn.org/about-dont-go/"}
                    target={"_blank"}
                    className={"btn-white cursor-pointer"}
                  >
                    Read Full Statement
                  </a>
                  <a
                    href={
                      "https://www.facebook.com/PUSWP.Palestine/posts/902274599967730"
                    }
                    target={"_blank"}
                    className={"btn-white-outline cursor-pointer"}
                  >
                    PUSWP Declaration →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"do-no-harm"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>Do No Harm Campaign</h2>
                  <p>
                    Demanding mental health organizations uphold the
                    foundational ethical principle.
                  </p>
                </div>
              </div>
              <div className={"do-no-harm-banner"}>
                <h3>Do No Harm</h3>
                <p>
                  The Do No Harm Campaign calls on mental health professional
                  organizations to refuse participation in events that normalize
                  Israeli apartheid and the ongoing ethnic cleansing of
                  Palestinians — in direct violation of our profession&apos;s
                  most foundational ethical principle.
                </p>
                <div className={"dnh-ctas"}>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/the-do-no-harm-campaign/"
                    }
                    target={"_blank"}
                    className={"btn-white cursor-pointer"}
                  >
                    About the Campaign
                  </a>
                  <a
                    href={"https://usapalmhn.org/portfolio-item/do-no-harm/"}
                    target={"_blank"}
                    className={"btn-white-outline cursor-pointer"}
                  >
                    Do No Harm Resources
                  </a>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-red"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-red"}>Active — 2026</span>
                  <h3>Henri Parens Symposium — Do No Harm Campaign</h3>
                  <p>
                    In February 2026, USAPALMHN launched a Do No Harm Campaign
                    in response to the Henri Parens Symposium scheduled for
                    March 7, 2026, titled "Resilience in Response to Violence
                    &amp; War." The symposium featured Dr. Merav Roth, an
                    Israeli clinician, framing the conflict as a "symmetrical
                    trauma" — which USAPALMHN condemned as clinically inaccurate
                    and politically harmful.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/the-do-no-harm-campaign/"
                    }
                    target={"_blank"}
                    className={"link-arrow cursor-pointer"}
                  >
                    Read the Campaign →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"iarpp"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>IARPP Campaign</h2>
                  <p>
                    International Association for Relational Psychoanalysis and
                    Psychotherapy.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-red"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-red"}>Campaign Archive</span>
                  <h3>Don&apos;t Go to the IARPP Conference in Israel</h3>
                  <p>
                    One of USAPALMHN&apos;s most sustained campaigns, opposing
                    the International Association for Relational Psychoanalysis
                    and Psychotherapy&apos;s decision to hold its conference in
                    Israel. The campaign generated significant international
                    support and media attention.
                  </p>
                  <div className={"sub-docs"}>
                    <div className={"sub-docs-label"}>
                      Documents &amp; Resources
                    </div>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/palestinian-clinicians-back-cultural-boycott-of-iarpp-conference/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Palestinian Clinicians Condemn IARPP Meeting</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/israeli-professionals-oppose-iarpp-meeting/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Israeli Professionals Oppose IARPP Meeting</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/assoc-of-arab-clinicians-in-israel/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>
                        Palestinian-Israeli Clinicians Oppose IARPP Conference
                      </span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/voices-on-palestine-forum/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>"Voices on Palestine" Forum — June 15, 2018</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/sign-petition-no-conference-in-israel/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>
                        Sign Petition to IARPP: No Conference in Israel
                      </span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/iarpp-attempts-twice/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>
                        IARPP Attempts Twice to Squelch NYC Meeting on Palestine
                      </span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/peoples-health-movement/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>
                        People&apos;s Health Movement Opposes IARPP Conference
                      </span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/uk-union-supports-palestinian-condemnation-of-iarpp-conference/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>UK Union Condemns IARPP Conference</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/media-reports-on-the-iarpp-protest/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Media Reports on the IARPP Protest</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/protest-letters-to-iarpp-from-individuals/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Protest Letters to IARPP from Individuals</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/networks-letter-to-conference-speakers/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Networks&apos; Letter to Conference Speakers</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"iasgop"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>IASGOP Campaign</h2>
                  <p>
                    Israeli Association for the Study of Group and
                    Organizational Processes.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-blue"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-blue"}>Campaign Archive</span>
                  <h3>
                    Don&apos;t Go to the "Recalculating" Conference in Israel
                  </h3>
                  <p>
                    USAPALMHN campaigned against attendance at the
                    "Recalculating" conference organized by the Israeli
                    Association for the Study of Group and Organizational
                    Processes, urging mental health professionals to respect the
                    Palestinian call for cultural boycott.
                  </p>
                  <a
                    href={
                      "https://usapalmhn.org/portfolio-item/dont-go-to-the-recalculating-conference-in-israel/"
                    }
                    target={"_blank"}
                    className={"link-arrow cursor-pointer"}
                  >
                    Read the Campaign →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"isps"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>ISPS Campaign</h2>
                  <p>
                    International Society for Psychological and Social
                    Approaches to Psychosis.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-blue"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-blue"}>Campaign Archive</span>
                  <h3>Don&apos;t Go to the ISPS Conference in Israel</h3>
                  <p>
                    USAPALMHN opposed the International Society for
                    Psychological and Social Approaches to Psychosis hosting its
                    conference in Israel, coordinating with Palestinian
                    clinicians and international networks to pressure the
                    organization.
                  </p>
                  <div className={"sub-docs"}>
                    <div className={"sub-docs-label"}>Documents</div>
                    <a
                      href={"https://usapalmhn.org/portfolio-item/isps/"}
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>ISPS Campaign Overview</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/intl-society-for-psychological-and-social-approaches-to-psychosis/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>
                        Int&apos;l Society for Psychological and Social
                        Approaches to Psychosis
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"nls"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>NLS Campaign</h2>
                  <p>The New Lacanian School of Psychoanalysis.</p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-blue"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-blue"}>Campaign Archive</span>
                  <h3>
                    Don&apos;t Go to the New Lacanian School Conference in Tel
                    Aviv
                  </h3>
                  <p>
                    USAPALMHN opposed the New Lacanian School of Psychoanalysis
                    hosting its conference in Tel Aviv, urging psychoanalytic
                    clinicians to respect the Palestinian call for boycott.
                  </p>
                  <div className={"sub-docs"}>
                    <div className={"sub-docs-label"}>Documents</div>
                    <a
                      href={"https://usapalmhn.org/portfolio-item/nls/"}
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>NLS Campaign Overview</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/the-new-lacanian-school-of-psychoanalysis-conference-in-tel-aviv/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>New Lacanian School Conference — Tel Aviv</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"world-mediation"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>World Mediation Summit Campaign</h2>
                  <p>Opposing the World Mediation Summit held in Israel.</p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-green"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-green"}>Campaign Archive</span>
                  <h3>Don&apos;t Go to the World Mediation Summit in Israel</h3>
                  <p>
                    USAPALMHN campaigned against the World Mediation Summit
                    being held in Israel, coordinating with international
                    organizations and writing directly to summit organizers.
                  </p>
                  <div className={"sub-docs"}>
                    <div className={"sub-docs-label"}>Documents</div>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/world-mediation-summit/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>World Mediation Summit Campaign Overview</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/synopsis-of-wms-campaign/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Synopsis of the WMS Campaign</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/letter-to-professor-tal-and-mr-brown/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Letter to Professor Tal and Mr. Brown</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"copelfi"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>COPELFI at Rennes Campaign</h2>
                  <p>
                    Opposing COPELFI&apos;s conference planned for Rennes with
                    Israeli institutional involvement.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-green"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-green"}>Campaign Archive</span>
                  <h3>COPELFI at Rennes</h3>
                  <p>
                    USAPALMHN organized against COPELFI&apos;s conference at
                    Rennes in France, which involved Israeli institutional
                    participation, in solidarity with the Palestinian call for
                    cultural boycott.
                  </p>
                  <div className={"sub-docs"}>
                    <div className={"sub-docs-label"}>Documents</div>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/copelfi-at-rennes/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>COPELFI at Rennes — Campaign Overview</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/synopsis-of-copelfi-campaign/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Synopsis of the COPELFI Campaign</span>
                    </a>
                    <a
                      href={
                        "https://usapalmhn.org/portfolio-item/petition-in-english/"
                      }
                      target={"_blank"}
                      className={"sub-doc cursor-pointer"}
                    >
                      <span>Petition in English</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"enmesh"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>ENMESH Campaign</h2>
                  <p>European Network for Mental Health Service Evaluation.</p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-blue"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-blue"}>Campaign Archive</span>
                  <h3>Don&apos;t Go to the ENMESH Conference in Israel</h3>
                  <p>
                    USAPALMHN opposed the European Network for Mental Health
                    Service Evaluation hosting its conference in Israel,
                    contributing to the international pressure on professional
                    mental health organizations to respect the Palestinian
                    cultural boycott.
                  </p>
                  <a
                    href={"https://usapalmhn.org/portfolio-item/enmesh/"}
                    target={"_blank"}
                    className={"link-arrow cursor-pointer"}
                  >
                    Read the Campaign →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"dr-akhtar"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>Dr. Akhtar Campaign</h2>
                  <p>
                    Addressing an individual clinician&apos;s participation in
                    events in Israel.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-green"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-green"}>Campaign Archive</span>
                  <h3>Dr. Akhtar — Don&apos;t Go</h3>
                  <p>
                    USAPALMHN addressed Dr. Akhtar&apos;s planned participation
                    in a professional event in Israel, urging him and other
                    prominent clinicians to stand in solidarity with the
                    Palestinian call for cultural boycott.
                  </p>
                  <a
                    href={"https://usapalmhn.org/portfolio-item/dr-akhtar/"}
                    target={"_blank"}
                    className={"link-arrow cursor-pointer"}
                  >
                    Read the Campaign →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"ipa"}>
              <div className={"camp-section-header"}>
                <div>
                  <h2>Resign IPA Campaign</h2>
                  <p>
                    Calling on members of the International Psychoanalytic
                    Association to resign.
                  </p>
                </div>
              </div>
              <div className={"campaign-card"}>
                <div className={"cc-top cc-red"}></div>
                <div className={"cc-body"}>
                  <span className={"cc-tag ct-red"}>Active — 2026</span>
                  <h3>
                    Call to Resign from the International Psychoanalytic
                    Association
                  </h3>
                  <p>
                    In 2026, the Palestine Mental Health Networks issued a call
                    for members of the International Psychoanalytic Association
                    (IPA) to resign due to the organization&apos;s ongoing
                    refusal to acknowledge the genocide in Gaza. USAPALMHN
                    endorses and amplifies this call.
                  </p>
                </div>
              </div>
            </ScrollSpySection>
          </main>
        </div>
      </ScrollSpyProvider>
    </>
  );
}
