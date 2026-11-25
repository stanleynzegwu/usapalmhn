import {
  ScrollSpyLink,
  ScrollSpyProvider,
  ScrollSpySection,
} from "@/components/scroll-spy";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/crisis-resources.css";

export const metadata: Metadata = {
  title: "Crisis Resources — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <ScrollSpyProvider>
        <div className={"page-hero"}>
          <div className={"keffiyeh-overlay"}></div>
          <div className={"page-hero-content"}>
            <div className={"page-hero-eyebrow"}>
              Support · Safety · Solidarity
            </div>
            <h1>Crisis Resources</h1>
            <p>
              Resources for those who need help — and those who want to help.
              Legal aid, psychological support, and tools for clinicians working
              with Palestinian and Arab-American communities.
            </p>
          </div>
        </div>
        <div className={"breadcrumb"}>
          <Link href={"/"} className={"cursor-pointer"}>
            Home
          </Link>
          <span>›</span>
          {"Crisis Resources\n"}
        </div>
        <div className={"cr-layout"}>
          <aside className={"cr-sidebar"} data-scrollspy={""}>
            <div className={"cr-sidebar-header"}>On This Page</div>
            <ScrollSpyLink
              href={"#hotlines"}
              className={"active cursor-pointer"}
            >
              Emergency Hotlines
            </ScrollSpyLink>
            <ScrollSpyLink href={"#legal"} className={"cursor-pointer"}>
              Legal Help
            </ScrollSpyLink>
            <ScrollSpyLink href={"#psychological"} className={"cursor-pointer"}>
              Psychological Support
            </ScrollSpyLink>
            <ScrollSpyLink href={"#children"} className={"cursor-pointer"}>
              Resources for Children
            </ScrollSpyLink>
            <ScrollSpyLink href={"#providers"} className={"cursor-pointer"}>
              For MH Providers
            </ScrollSpyLink>
            <ScrollSpyLink href={"#action"} className={"cursor-pointer"}>
              Take Action
            </ScrollSpyLink>
            <ScrollSpyLink href={"#statement"} className={"cursor-pointer"}>
              Our Statement
            </ScrollSpyLink>
          </aside>
          <main className={"cr-content"}>
            <ScrollSpySection id={"hotlines"}>
              <div className={"hotline-banner"}>
                <h3>If You Are in Immediate Crisis</h3>
                <div className={"hotline-numbers"}>
                  <div className={"hotline-number-card"}>
                    <div className={"label"}>988 Crisis Lifeline</div>
                    <div className={"number"}>988</div>
                    <div className={"note"}>
                      Call or text — free &amp; confidential, 24/7
                    </div>
                  </div>
                  <div className={"hotline-number-card"}>
                    <div className={"label"}>Disaster Distress Helpline</div>
                    <div className={"number"}>800-985-5990</div>
                    <div className={"note"}>
                      Call or text — trained counselors, 24/7
                    </div>
                  </div>
                </div>
                <p>
                  Arabic-speaking counselors are available. Both lines are free,
                  confidential, and available around the clock.
                </p>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"legal"}>
              <div className={"cr-section-header"}>
                <h2>Legal Help</h2>
                <p>
                  Know your rights — legal resources for Palestinians,
                  Arab-Americans, and student activists.
                </p>
              </div>
              <div className={"cr-list"}>
                <a
                  href={"https://palestinelegal.org/kyr-video-series"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>Palestine Legal — Know Your Rights Video Series</h4>
                  <div className={"source"}>palestinelegal.org</div>
                </a>
                <a
                  href={"https://palestinelegal.org/know-your-rights"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>Palestine Legal — Know Your Rights Student Handbook</h4>
                  <div className={"source"}>palestinelegal.org</div>
                </a>
                <a
                  href={"https://adc.org/"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>
                    Arab-American Anti-Discrimination League (ADC) — Advocate,
                    Defend, Connect
                  </h4>
                  <div className={"source"}>adc.org</div>
                </a>
                <a
                  href={
                    "https://www.nlg.org/wp-content/uploads/2022/06/Know-Your-Rights-Booklet-2022.pdf"
                  }
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>
                    National Lawyers Guild — Know Your Rights: A Guide for
                    Protestors
                  </h4>
                  <div className={"source"}>nlg.org — PDF download</div>
                </a>
                <a
                  href={"https://www.cair.com/"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>Council on American-Islamic Relations (CAIR)</h4>
                  <div className={"source"}>cair.com</div>
                </a>
                <a
                  href={"https://www.nlg.org/"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>National Lawyers Guild</h4>
                  <div className={"source"}>nlg.org</div>
                </a>
                <a
                  href={
                    "https://righttobe.org/events/bystander-intervention-to-stop-islamophobic-and-xenophobic-harassment-2/"
                  }
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>
                    Bystander Intervention to Stop Islamophobic and Xenophobic
                    Harassment
                  </h4>
                  <div className={"source"}>righttobe.org</div>
                </a>
                <a
                  href={
                    "https://ccrjustice.org/israel-s-unfolding-crime-genocide-palestinian-people-us-failure-prevent-and-complicity-genocide"
                  }
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>
                    Israel&apos;s Unfolding Crime of Genocide — Center for
                    Constitutional Rights
                  </h4>
                  <div className={"source"}>ccrjustice.org</div>
                </a>
                <a
                  href={"https://www.cunyclear.org/know-your-rights"}
                  target={"_blank"}
                  className={"cr-item blue cursor-pointer"}
                >
                  <h4>CUNY Know Your Rights</h4>
                  <div className={"source"}>cunyclear.org</div>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"psychological"}>
              <div className={"cr-section-header"}>
                <h2>Psychological Support</h2>
                <p>
                  Mental health services, apps, and community support for
                  individuals and families.
                </p>
              </div>
              <div className={"cr-list"}>
                <a
                  href={
                    "https://healthy.kaiserpermanente.org/southern-california/health-wellness/mental-health/tools-resources/digital"
                  }
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Free Wellness Apps — Calm, Ginger, My Strength</h4>
                  <p>A curated list of free digital mental health tools.</p>
                  <div className={"source"}>
                    Kaiser Permanente — Southern California
                  </div>
                </a>
                <a
                  href={
                    "https://docs.google.com/spreadsheets/d/14GvPKPxIuZ5zYfu8Nrk_7-1lgEP0L-v-VpsVPObhFNA/edit#gid=0"
                  }
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Meditation and Stress Relief Apps</h4>
                  <p>
                    A community-maintained list of apps for managing acute
                    stress and grief.
                  </p>
                  <div className={"source"}>
                    Google Sheets — curated resource
                  </div>
                </a>
                <a
                  href={"https://amaly.org/"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Amaly Psychotherapy Services</h4>
                  <p>Psychotherapy services for residents of California.</p>
                  <div className={"source"}>amaly.org</div>
                </a>
                <a
                  href={"https://maristan.org/"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Maristan Mental Health Services</h4>
                  <div className={"source"}>maristan.org</div>
                </a>
                <a
                  href={"https://www.inclusivetherapists.com/resources"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>
                    Mental Health Resources for Therapists, Students, and
                    Learners — Inclusive Therapists
                  </h4>
                  <div className={"source"}>inclusivetherapists.com</div>
                </a>
                <a
                  href={"https://www.wafahouse.org/"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Wafa House</h4>
                  <p>For residents of New Jersey.</p>
                  <div className={"source"}>wafahouse.org</div>
                </a>
                <a
                  href={"http://www.redclinic.org"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Red Clinic</h4>
                  <div className={"source"}>redclinic.org</div>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"children"}>
              <div className={"cr-section-header"}>
                <h2>Resources for Children</h2>
                <p>
                  Guidance for parents and caregivers talking with children
                  about war and conflict.
                </p>
              </div>
              <div className={"cr-grid-2"}>
                <a
                  href={
                    "https://www.nctsn.org/sites/default/files/resources/fact-sheet/talking-to-children-about-war.pdf"
                  }
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Talking to Children About War</h4>
                  <div className={"source"}>
                    National Child Traumatic Stress Network (NCTSN)
                  </div>
                </a>
                <a
                  href={
                    "https://www.unicef.org/parenting/how-talk-your-children-about-conflict-and-war"
                  }
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>How to Talk With Your Children About Conflict and War</h4>
                  <div className={"source"}>UNICEF — unicef.org</div>
                </a>
                <a
                  href={"https://www.apa.org/topics/resilience/kids-war"}
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Resilience in a Time of War</h4>
                  <div className={"source"}>
                    American Psychological Association — apa.org
                  </div>
                </a>
                <a
                  href={
                    "https://www.verywellfamily.com/how-to-talk-to-kids-about-war-4147597"
                  }
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Talking to Your Kids About War</h4>
                  <div className={"source"}>
                    Very Well Family — verywellfamily.com
                  </div>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"providers"}>
              <div className={"cr-section-header"}>
                <h2>For Mental Health Providers</h2>
                <p>
                  Tools, community, and clinical guidance for clinicians
                  supporting Palestinian and Arab-American clients.
                </p>
              </div>
              <div className={"cr-list"}>
                <a
                  href={"https://www.facebook.com/groups/arabmhproviders"}
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Arab Mental Health Providers Community</h4>
                  <p>
                    A peer support group for Arab and Arab-American mental
                    health providers.
                  </p>
                  <div className={"source"}>Facebook Group</div>
                </a>
                <a
                  href={
                    "https://www.inclusivetherapists.com/events/speaking-our-vision-a-support-group-for-southwest-asian-north-african-women-diaspora-in-pa-nj-de-and-fl"
                  }
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>
                    Support Group — Southwest Asian and North African Women
                    Diaspora
                  </h4>
                  <p>For residents of PA, NJ, DE, and FL.</p>
                  <div className={"source"}>Inclusive Therapists</div>
                </a>
                <a
                  href={"https://mayflybooks.org/curcums-trees/"}
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>
                    A Decolonial Health Guide for Palestinian Community Health
                    Workers
                  </h4>
                  <div className={"source"}>mayflybooks.org</div>
                </a>
                <a
                  href={
                    "https://usapalmhn.org/wp-content/uploads/2023/10/AMENA-Psy-Guidelines-for-Working-with-MENA-Students-1.pdf"
                  }
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Guidelines for Working with Arab and MENA Students</h4>
                  <p>
                    Developed by AMENA-Psy for mental health practitioners
                    working in academic settings.
                  </p>
                  <div className={"source"}>AMENA-Psy — PDF download</div>
                </a>
                <a
                  href={"https://forms.gle/nKYVfCg8GHJcFTsz7"}
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Pro-Bono Providers for Palestine</h4>
                  <p>
                    Sign up to offer pro-bono mental health services to
                    Palestinian and Arab-American clients.
                  </p>
                  <div className={"source"}>Google Forms</div>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"action"}>
              <div className={"cr-section-header"}>
                <h2>Take Action</h2>
                <p>
                  Ways to act in solidarity — from advocacy to joining the
                  network.
                </p>
              </div>
              <div className={"cr-list"}>
                <a
                  href={
                    "https://www.jewishvoiceforpeace.org/resource/urgent-tell-congress-to-stop-fueling-violence/"
                  }
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Demand Ceasefire Now</h4>
                  <p>
                    Tell Congress to stop fueling violence in Gaza and the West
                    Bank.
                  </p>
                  <div className={"source"}>
                    Jewish Voice for Peace — jewishvoiceforpeace.org
                  </div>
                </a>
                <a
                  href={
                    "https://uscpr.org/campaigns/end-u-s-military-funding-to-israel/"
                  }
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>End US Military Funding to Israel</h4>
                  <div className={"source"}>
                    US Campaign for Palestinian Rights — uscpr.org
                  </div>
                </a>
                <a
                  href={"https://palestinianfeministcollective.org/"}
                  target={"_blank"}
                  className={"cr-item red cursor-pointer"}
                >
                  <h4>Palestinian Feminist Collective</h4>
                  <div className={"source"}>
                    palestinianfeministcollective.org
                  </div>
                </a>
                <a
                  href={"https://forms.gle/WqFWimox7aKW7HzM9"}
                  target={"_blank"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>Join the USAPALMHN Mailing List</h4>
                  <p>
                    Stay informed and connected with the network&apos;s updates,
                    events, and resources.
                  </p>
                  <div className={"source"}>
                    USA-Palestine Mental Health Network
                  </div>
                </a>
                <Link
                  href={"/get-involved/"}
                  className={"cr-item cursor-pointer"}
                >
                  <h4>More Ways to Get Involved</h4>
                  <p>
                    Sign the Pledge, donate, join Hill Days, or travel to
                    Palestine on a mental health study delegation.
                  </p>
                  <div className={"source"}>Get Involved</div>
                </Link>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"statement"}>
              <div className={"cr-section-header"}>
                <h2>Our Statement</h2>
                <p>
                  Justice as the foundation of mental health — the
                  network&apos;s guiding philosophy.
                </p>
              </div>
              <div className={"cr-statement"}>
                <blockquote>
                  {
                    "\n          \"As we see it, the principle of justice is the core of mental health. This is true regarding what is happening in Palestine and it is true everywhere. 'Coping' with injustice means first understanding it, and then taking responsible action to address it. Our potential for mental well-being is undermined by our ignorance, powerlessness, and passivity in the face of injustice. But through our empathy with human beings who are being destroyed, humiliated, injured, and killed, we have the opportunity to participate in the restoration of their human dignity.\"\n        "
                  }
                </blockquote>
                <cite>— USA-Palestine Mental Health Network</cite>
                <div className={"doc-links"}>
                  <a
                    href={
                      "https://usapalmhn.org/wp-content/uploads/2023/10/December-8-Genocide-in-Gaza-statement.pdf"
                    }
                    target={"_blank"}
                    className={"btn-white cursor-pointer"}
                  >
                    Statement on the Genocide in Gaza
                  </a>
                  <a
                    href={
                      "https://usapalmhn.org/wp-content/uploads/2023/10/Dear-Mental-Health-Professionals-5.pdf"
                    }
                    target={"_blank"}
                    className={"btn-white-outline cursor-pointer"}
                  >
                    Letter to Mental Health Professionals in Gaza →
                  </a>
                </div>
              </div>
            </ScrollSpySection>
          </main>
        </div>
      </ScrollSpyProvider>
    </>
  );
}
