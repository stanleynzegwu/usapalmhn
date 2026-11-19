import {
  ScrollSpyLink,
  ScrollSpyProvider,
  ScrollSpySection,
} from "@/components/scroll-spy";
import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/resources.css";

export const metadata: Metadata = {
  title: "Resources — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <ScrollSpyProvider>
        <div className={"page-hero"}>
          <div className={"keffiyeh-overlay"}></div>
          <div className={"page-hero-content"}>
            <div className={"page-hero-eyebrow"}>
              Knowledge · Education · Action
            </div>
            <h1>Resources</h1>
            <p>
              A curated library of books, films, journal articles,
              organizations, and international networks — organized to inform
              clinical practice and advocacy for Palestinian mental health.
            </p>
          </div>
        </div>
        <div className={"breadcrumb"}>
          <Link href={"/"} className={"cursor-pointer"}>
            Home
          </Link>
          <span>›</span>
          {"Resources\n"}
        </div>
        <div className={"res-layout"}>
          <aside className={"res-sidebar"} data-scrollspy={""}>
            <div className={"res-sidebar-header"}>Resource Library</div>
            <ScrollSpyLink href={"#why"} className={"active cursor-pointer"}>
              Why We Need Information
            </ScrollSpyLink>
            <ScrollSpyLink href={"#international"} className={"cursor-pointer"}>
              International Networks
            </ScrollSpyLink>
            <ScrollSpyLink href={"#cafe"} className={"cursor-pointer"}>
              Café Palestine Webinars
            </ScrollSpyLink>
            <ScrollSpyLink href={"#books"} className={"cursor-pointer"}>
              Books
            </ScrollSpyLink>
            <ScrollSpyLink href={"#journals"} className={"cursor-pointer"}>
              Journal Articles
            </ScrollSpyLink>
            <ScrollSpyLink href={"#opinion"} className={"cursor-pointer"}>
              Opinion Pieces
            </ScrollSpyLink>
            <ScrollSpyLink href={"#films"} className={"cursor-pointer"}>
              Films &amp; Documentaries
            </ScrollSpyLink>
            <ScrollSpyLink href={"#news-venues"} className={"cursor-pointer"}>
              News Venues
            </ScrollSpyLink>
            <ScrollSpyLink href={"#organizations"} className={"cursor-pointer"}>
              Organizations
            </ScrollSpyLink>
            <ScrollSpyLink href={"#bissalameh"} className={"cursor-pointer"}>
              Bissalameh
            </ScrollSpyLink>
          </aside>
          <main className={"res-content"}>
            <ScrollSpySection id={"why"}>
              <div className={"res-section-header"}>
                <h2>Why We Need Information</h2>
                <p>
                  Understanding the context behind our clinical and advocacy
                  work.
                </p>
              </div>
              <div className={"intro-block"}>
                <p>
                  The resources on this page are organized to assist mental
                  health workers in understanding the historical, political, and
                  social context of Palestine — context that is essential for
                  ethical, justice-oriented clinical practice.
                </p>
                <p>
                  The state of Israel maintains extensive institutional
                  organizations with the goal of discrediting criticism of
                  Zionism, justifying its policies, and spreading its ideology
                  as "public diplomacy" through HASBARA — literally (in Hebrew)
                  "explanation." Some foundational planks of Zionist propaganda
                  assert that Israel represents the best interests of Jewish
                  people worldwide, and that Israel is a vibrant democracy
                  reluctantly forced to adopt security measures that outsiders
                  have no right to criticize.
                </p>
                <p>
                  The resources below offer evidence-based, clinically grounded
                  alternatives to these narratives — drawing on international
                  law, peer-reviewed research, journalism, film, and firsthand
                  testimony.
                </p>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"international"}>
              <div className={"res-section-header"}>
                <h2>International Networks</h2>
                <p>
                  Sister organizations advancing Palestinian mental health
                  globally.
                </p>
              </div>
              <div className={"net-grid"}>
                <div className={"net-card"}>
                  <h3>Palestine Global Mental Health Network</h3>
                  <p>
                    USAPALMHN took its initial inspiration from our Palestinian
                    colleagues who founded the PGMHN. The global anchor of all
                    our sister networks.
                  </p>
                  <a
                    href={"https://www.pgmhn.org/"}
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Visit PGMHN →
                  </a>
                </div>
                <div className={"net-card"}>
                  <h3>UK-Palestine Mental Health Network</h3>
                  <p>
                    A sister organization and close collaborator. Hosts the
                    acclaimed Café Palestine webinar series and supports our
                    "Don&apos;t Go" campaigns.
                  </p>
                  <a
                    href={"https://ukpalmhn.com/"}
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Visit UK-PalMHN →
                  </a>
                </div>
                <div className={"net-card"}>
                  <h3>Ireland-Palestine Mental Health Network</h3>
                  <p>
                    Irish mental health professionals in solidarity with
                    Palestine, coordinating with the global network of sister
                    organizations.
                  </p>
                  <a
                    href={"https://ipmhn.com/"}
                    target={"_blank"}
                    className={"cursor-pointer"}
                  >
                    Visit Ireland-PalMHN →
                  </a>
                </div>
                <div className={"net-card"}>
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
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"cafe"}>
              <div className={"res-section-header"}>
                <h2>Café Palestine Webinars</h2>
                <p>
                  A long-running webinar series hosted by the UK-Palestine
                  Mental Health Network.
                </p>
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://ukpalmhn.com/cafe-palestine/cafe-palestine-index/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Café Palestine — Full Webinar Archive</h4>
                  <p>
                    Dozens of webinars featuring Palestinian clinicians,
                    scholars, and activists discussing mental health,
                    resistance, and decolonial practice. Searchable index
                    available at the UK-PalMHN website.
                  </p>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"books"}>
              <div className={"res-section-header"}>
                <h2>Books</h2>
                <p>
                  Essential reading on Palestinian psychology, history, trauma,
                  and resistance.
                </p>
              </div>
              <div className={"sub-label"}>
                Racism, Imperialism, and Colonialism — Foundational Texts
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>
                    Freedom is a Constant Struggle: Ferguson, Palestine, and the
                    Foundations of a Movement (2016)
                  </h4>
                  <p className={"author"}>Angela Y. Davis</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Wretched of the Earth (1961)</h4>
                  <p className={"author"}>Frantz Fanon</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Orientalism (1978)</h4>
                  <p className={"author"}>Edward W. Said</p>
                </div>
              </div>
              <div className={"sub-label"}>
                Addressing Palestine Specifically
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>
                    The Palestine Communist Party 1919-1948: Arab and Jew in the
                    Struggle for Internationalism (2010)
                  </h4>
                  <p className={"author"}>Musa Budeiri</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Persistence of the Palestinian Question: Essays on
                    Zionism and the Palestinians (2006)
                  </h4>
                  <p className={"author"}>Joseph Massad</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Politics of Dispossession: The Struggle for Palestinian
                    Self-Determination (1994)
                  </h4>
                  <p className={"author"}>Edward Said</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Question of Palestine (1979)</h4>
                  <p className={"author"}>Edward Said</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Citizen Strangers: Palestinians and the Birth of
                    Israel&apos;s Liberal Settler State (2013)
                  </h4>
                  <p className={"author"}>Shira Robinson</p>
                </div>
              </div>
              <div className={"sub-label"}>
                History and Conditions Under Israeli Occupation
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>
                    I Shall Not Hate: A Gaza Doctor&apos;s Journey on the Road
                    to Peace and Human Dignity (2010)
                  </h4>
                  <p className={"author"}>Izzeldin Abuelaish</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Drone Eats with Me: A Gaza Diary (2014)</h4>
                  <p className={"author"}>Atef Abu Saif</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Palestinian Nakba 1948: Register of Depopulated
                    Localities in Palestine (2000)
                  </h4>
                  <p className={"author"}>Salman H. Abu Sitta</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Atlas of Palestine 1917-1966 (2010)</h4>
                  <p className={"author"}>Salman H. Abu Sitta</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Gaza Unsilenced (2015)</h4>
                  <p className={"author"}>Refaat Alareer</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    One State Condition: Occupation and Democracy in
                    Israel/Palestine (2012)
                  </h4>
                  <p className={"author"}>Ariella Azoulay and Adi Ophir</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Witness in Palestine: A Jewish American Woman in the
                    Occupied Territories (2007)
                  </h4>
                  <p className={"author"}>Anna Baltzer</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Goliath: Life and Loathing in Greater Israel (2013)</h4>
                  <p className={"author"}>Max Blumenthal</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Our Harsh Logic: Israeli Soldiers&apos; Testimonies from the
                    Occupied Territories, 2000-2010 (2012)
                  </h4>
                  <p className={"author"}>Breaking the Silence</p>
                </div>
                <div className={"rli-item"}>
                  <h4>On Palestine (2015)</h4>
                  <p className={"author"}>Noam Chomsky and Ilan Pappe</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Disappearing Palestine: Israel&apos;s Experiments in Human
                    Despair (2013)
                  </h4>
                  <p className={"author"}>Jonathan Cook</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Way to the Spring: Life and Death in Palestine (2016)
                  </h4>
                  <p className={"author"}>Ben Erenreich</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Israel&apos;s Occupation (2008)</h4>
                  <p className={"author"}>Neve Gordon</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    An Israeli in Palestine: Resisting Dispossession, Redeeming
                    Israel (2008)
                  </h4>
                  <p className={"author"}>Jeff Halper</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    War Against the People: Israel, the Palestinians and Global
                    Pacification (2015)
                  </h4>
                  <p className={"author"}>Jeff Halper</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Punishment of Gaza (2010)</h4>
                  <p className={"author"}>Gideon Levy</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Palestine Inside Out: An Everyday Occupation (2008)</h4>
                  <p className={"author"}>Saree Makdisi</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Politics of Denial: Israel and the Palestinian Refugee
                    Problem (2003)
                  </h4>
                  <p className={"author"}>Nur Masalha</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The Idea of Israel: A History of Power and Knowledge (2014)
                  </h4>
                  <p className={"author"}>Ilan Pappe</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Ethnic Cleansing of Palestine (2006)</h4>
                  <p className={"author"}>Ilan Pappe</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    A History of Modern Palestine: One Land, Two Peoples (2004)
                  </h4>
                  <p className={"author"}>Ilan Pappe</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Gaza in Crisis: Reflections on Israel&apos;s War</h4>
                  <p className={"author"}>Ilan Pappe and Noam Chomsky</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Mental Health &amp; Human Rights in Palestine: The life of
                    Gaza&apos;s pioneering psychiatrist Dr. Eyad Sarraj (2022)
                  </h4>
                  <p className={"author"}>Wasseem El Sarraj</p>
                  <p>
                    <a
                      href={
                        "https://usapalmhn.org/wp-content/uploads/2020/11/Mental-Health-in-Palestine-rqeoxy.pdf"
                      }
                      target={"_blank"}
                      style={{
                        color: "var(--olive)",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      className={"cursor-pointer"}
                    >
                      Download PDF →
                    </a>
                  </p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Condition Critical: Life and Death in Israel/Palestine
                    (2016)
                  </h4>
                  <p className={"author"}>Alice Rothchild</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Hollow Land: Israel&apos;s Architecture of Occupation (2007)
                  </h4>
                  <p className={"author"}>Eyal Weizman</p>
                </div>
                <div className={"rli-item"}>
                  <h4>Israeli Apartheid: A Beginner&apos;s Guide (2009)</h4>
                  <p className={"author"}>Ben White</p>
                </div>
              </div>
              <div className={"sub-label"}>
                The Role of the USA in the Oppression of the Palestinian
                Community
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>Peace not Apartheid (2006)</h4>
                  <p className={"author"}>Jimmy Carter</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Gaza in Crisis: Reflections on the US-Israeli War Against
                    Palestinians (2013)
                  </h4>
                  <p className={"author"}>Noam Chomsky and Ilan Pappe</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Brokers of Deceit: How the US has undermined peace in the
                    Middle East (2013)
                  </h4>
                  <p className={"author"}>Rashid Khalidi</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    One Land, Two States: Israel and Palestine as Parallel
                    States (2014)
                  </h4>
                  <p className={"author"}>Mark Levine and Matias Mossberg</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Shattered Hopes: Obama&apos;s Failure to Broker
                    Israeli-Palestinian Peace (2013)
                  </h4>
                  <p className={"author"}>Josh Ruebner</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Failing Peace: Gaza and the Palestinian-Israeli Conflict
                    (2007)
                  </h4>
                  <p className={"author"}>Sara Roy</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Peace and Its Discontents: Essays on Palestine in the Middle
                    East Peace Process (1996)
                  </h4>
                  <p className={"author"}>Edward Said</p>
                </div>
              </div>
              <div className={"sub-label"}>
                The Holocaust and Countering Claims of Anti-Semitism
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>The Holocaust Industry (2000)</h4>
                  <p className={"author"}>Norman Finkelstein</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Beyond Chutzpah: On the Misuse of Anti-Semitism and the
                    Abuse of History (2008)
                  </h4>
                  <p className={"author"}>Norman Finkelstein</p>
                </div>
              </div>
              <div className={"sub-label"}>
                Zionism from the Perspective of Jewish Identity
              </div>
              <div className={"rli"}>
                <div className={"rli-item"}>
                  <h4>
                    Son of the Cypresses: Memories, Reflections and Regrets from
                    a Political Life (2007)
                  </h4>
                  <p className={"author"}>Meron Benvenisti</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    States of Denial: Knowing about Atrocities and Suffering
                    (2001)
                  </h4>
                  <p className={"author"}>Stanley Cohen</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Zionism and its Discontents: A Century of Radical Dissent
                    (2014)
                  </h4>
                  <p className={"author"}>Ran Greenstein</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Overcoming Zionism: Creating a Single Democratic State in
                    Israel/Palestine (2007)
                  </h4>
                  <p className={"author"}>Joel Kovel</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    The General&apos;s Son: Journey of an Israeli in Palestine
                    (2012)
                  </h4>
                  <p className={"author"}>Miko Peled</p>
                </div>
                <div className={"rli-item"}>
                  <h4>The Last Resistance (2007)</h4>
                  <p className={"author"}>Jacqueline Rose</p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Survival and Conscience: From the Shadows of Nazi Germany to
                    the Jewish Boat to Gaza (2015)
                  </h4>
                  <p className={"author"}>Lilian Rosengarten</p>
                </div>
              </div>
              <div className={"sub-label"}>Islamophobia</div>
              <div className={"rli"}>
                <a
                  href={
                    "https://usapalmhn.org/wp-content/uploads/2020/11/haas-institute-islamophobia-reading-list.pdf"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Haas Institute Islamophobia Reading List</h4>
                  <p>
                    A comprehensive reading list on Islamophobia complete with
                    its own curated resources. PDF download.
                  </p>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"journals"}>
              <div className={"res-section-header"}>
                <h2>Journal Articles</h2>
                <p>
                  Peer-reviewed research on Palestinian mental health, trauma,
                  and occupation.
                </p>
              </div>
              <div className={"sub-label"}>Key Journals</div>
              <div className={"rli"}>
                <a
                  href={"http://www.palestine-studies.org/jps"}
                  target={"_blank"}
                  className={"rli-item blue cursor-pointer"}
                >
                  <h4>The Journal of Palestine Studies</h4>
                  <p>
                    A scholarly journal focusing on broad aspects of the
                    Palestinian situation, published by the Institute for
                    Palestine Studies.
                  </p>
                </a>
                <a
                  href={
                    "http://www.thelancet.com/health-in-the-occupied-palestinian-territory-2013"
                  }
                  target={"_blank"}
                  className={"rli-item blue cursor-pointer"}
                >
                  <h4>
                    The Lancet — Health in the Occupied Palestinian Territory
                  </h4>
                  <p>
                    Health in Palestine comprehensively discussed in the British
                    medical journal.
                  </p>
                </a>
                <a
                  href={
                    "https://www.docdroid.net/RvhYtZn/mental-health-in-palestine-country-report.pdf"
                  }
                  target={"_blank"}
                  className={"rli-item blue cursor-pointer"}
                >
                  <h4>Mental Health in Palestine: Country Report (2013)</h4>
                  <p>
                    Mental health needs and services in Palestine summarized.
                    Arab Journal of Psychiatry, 24(2), 174-178.
                  </p>
                  <p className={"author"}>
                    Jabr, S., Morse, M., El Sarraj, W., Awidi, B.
                  </p>
                </a>
              </div>
              <div className={"sub-label"}>
                Eyad El Sarraj — Gaza Community Mental Health Programme
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "http://www.tandfonline.com/doi/abs/10.1080/01650250042000294"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Resiliency Factors Predicting Psychological Adjustment After
                    Political Violence Among Palestinian Children
                  </h4>
                </a>
              </div>
              <div className={"sub-label"}>
                Samah Jabr &amp; Elizabeth Berger
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://link.springer.com/article/10.1186/s12913-023-10256-6"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Enhancing Healthcare Providers&apos; Diagnostic and
                    Intervention Skills to Deal with Suicidal Patients at
                    Emergency Departments in Palestinian Hospitals (2023)
                  </h4>
                  <p className={"author"}>Jabr, Mahamid, Hinnawi, et al.</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.46?shared_access_token=I5Ajl9gGKxCVvypFGM0X8FxOt48VBPO10Uv7D6sAgHtJ_kteR2YM4chn-MPGydynF5bM9sls5VjlozkeX873wLoxNb7kc3ArUYO4G9OUCnOowbSKDZJaNCK3nMXamWHRZT6gl0MJs1FcSkezYqyXPA5SVIuHvXFjtjzU4NznTX0%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    An Occupied State of Mind: Clinical Transference and
                    Countertransference Across the Israeli/Palestinian Divide
                  </h4>
                  <p className={"author"}>
                    Samah Jabr and Elizabeth Berger — Journal of Psychoanalysis,
                    Culture, and Society
                  </p>
                </a>
                <a
                  href={"http://www.bluetoad.com/publication/?i=200453&p=14"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Mental Health Care in Palestine: Barriers to Excellence
                    (2014)
                  </h4>
                  <p className={"author"}>
                    Jabr, Berger, Morse, Awidi — The Washington Psychiatrist
                  </p>
                </a>
              </div>
              <div className={"sub-label"}>
                Journal of Psychoanalysis, Culture, and Society — Special Issue
                on Israel/Palestine (2016)
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.57?shared_access_token=SwbR9MP5n3MQWiVsZrk88lxOt48VBPO10Uv7D6sAgHtLb4Nws3w9GnEdMBf9YBrjCsAExiYAr8E5WhQQRtYIn07JyD2Mr7zidyQQ2t_1jXrccP5XU2TGGrPJGtqhKTWPgjHR2l0FoMMGXzvgP7wRMsow4_FjvTMDMTFJbhscKnA%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Introduction to Special Issue on Acknowledgment and
                    Accountability in the Israel-Palestinian Conflict
                  </h4>
                  <p className={"author"}>Stephen Frosh</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.60?shared_access_token=nCW_3gs9Xu-Z6o0U32FmrFxOt48VBPO10Uv7D6sAgHt1gkeyAVDzxnksRSvxjyGXYBUqlZ8-SdbV7udLQdFXnyhPykFLQH_l0D0dE8ypIge3rGKtujPnARkYjRj5lMOhrbc-NfeKyutNISsxgp-XoKwA63iJjiQeKcMir51xVuQ%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Non-Violence as Respect for All Suffering: Thoughts Inspired
                    by Eyad El Sarraj
                  </h4>
                  <p className={"author"}>Jessica Benjamin</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.65?shared_access_token=YE2faQUgmuh4qIAfl4EkcVxOt48VBPO10Uv7D6sAgHufAwScuELnmCQSOqHr1LombTHk7bw-XmSe0LrfbLZkW8GD50yvTmhODEh8dzTTAQ172Jid6r2oocObDXQllX78a7Crr1y6vMqeapJON4iFgmZHoDiVWOU2QAjqicdgSXs%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Psychoanalysis and Palestine-Israel: A Personal Angle</h4>
                  <p className={"author"}>Fakhry Davids</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.67?shared_access_token=vqrXRc-rIQWP4DffPm9CyFxOt48VBPO10Uv7D6sAgHtW47GRbQWfmK73UqJ3108CcLfIdvpx3oME3Ij9ZuWG45GlyLWmcpra9TavCczZjcFEDD7MgKrU4yWiScRFHBSGW3zrcJod_0KLrv7Ril_s1OiFZzbxXsl2Xlmx5g%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Trauma as Identity: Accountability in the Intractable
                    Conflict
                  </h4>
                  <p className={"author"}>Nancy Caro Hollander</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.66?shared_access_token=BD6lgI35_bFNbSAELczFfFxOt48VBPO10Uv7D6sAgHvDG4ghAmk1m0Hk4BGGMuT4evJLk_ySgGd5emapXrNvsactjDfIMDWbImU5Y2qf4EPYZgOxA2hY8tR2idqj1ngMCz30RHaG_KcqJFwlVZsjKmzNWtiC_SYf4sGXqqKntxc%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Enactments of Otherness and Searching for a Third Space in
                    the Palestine-Israel Matrix
                  </h4>
                  <p className={"author"}>Lara Sheehi and Stephen Sheehi</p>
                </a>
                <a
                  href={
                    "https://link.springer.com/epdf/10.1057/pcs.2015.52?shared_access_token=0Avp45Ym1R9L5lsGO5ISSVxOt48VBPO10Uv7D6sAgHsbavadjdG2CrqjjHQTQERzF127eDa8MqgMpBc9PUkY_qWsahAxqt_ICrtEzN9Buykxv2MsdxOiH583-RTZsfrnaiYsxvSaTsrcWdROQWrgMzvult07kIX7prAbN1H3JwI%3D"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Assessing the Effects of Reported Torture in the
                    Israeli-Palestinian Context: A Struggle for Psycho-Political
                    Thirdness
                  </h4>
                  <p className={"author"}>Maya Mukamel</p>
                </a>
              </div>
              <div className={"sub-label"}>Additional Articles</div>
              <div className={"rli"}>
                <a
                  href={
                    "http://www.tandfonline.com/doi/abs/10.1080/17441692.2010.551518"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Human Rights Violations During Israel&apos;s Attack on the
                    Gaza Strip: 27 December 2008 to 19 January 2009
                  </h4>
                  <p className={"author"}>
                    Ruchama Marton — Global Public Health
                  </p>
                </a>
                <a
                  href={
                    "https://www.researchgate.net/publication/230220005_Dehumanization_guilt_and_large_group_dynamics_with_reference_to_the_west_Israel_and_the_Palestinians"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Dehumanization, Guilt and Large Group Dynamics with
                    Reference to the West, Israel and the Palestinians (2011)
                  </h4>
                  <p className={"author"}>
                    Martin Kemp — British Journal of Psychotherapy
                  </p>
                </a>
                <a
                  href={
                    "https://www.researchgate.net/publication/282455897_Collusion_as_a_Defense_against_Guilt_Further_Notes_on_the_West%27s_Relationship_with_Israel_and_the_Palestinians"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Collusion as a Defense Against Guilt: Further Notes on the
                    West&apos;s Relationship with Israel and the Palestinians
                    (2015)
                  </h4>
                  <p className={"author"}>
                    Martin Kemp — International Journal of Applied
                    Psychoanalytic Studies
                  </p>
                </a>
                <div className={"rli-item"}>
                  <h4>
                    A Model for Community Care in Gaza: Conclusions Drawn from a
                    Community-Based Approach to Mental Health Care in Gaza
                    (2003)
                  </h4>
                  <p className={"author"}>
                    Abdel Hamid Afana — Palestine-Israel Journal, Vol 10, No. 4
                  </p>
                </div>
                <a
                  href={
                    "http://www.academia.edu/15298554/Sumud_A_Palestinian_Philosophy_of_Confrontation_in_Colonial_Prisons"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Sumud: A Palestinian Philosophy of Confrontation in Colonial
                    Prisons (2014)
                  </h4>
                  <p className={"author"}>
                    Lena Maeri — South Atlantic Quarterly
                  </p>
                </a>
                <div className={"rli-item"}>
                  <h4>
                    The Impact of Men&apos;s Detention on the Psychological
                    Wellbeing of Palestinian Women (2016)
                  </h4>
                  <p className={"author"}>
                    Shehadeh, Loots, Vanderfaeillie, Derluyn — Mental Health in
                    Family Medicine
                  </p>
                </div>
                <div className={"rli-item"}>
                  <h4>
                    Childhood: A Universalist Perspective for How Israel is
                    Using Child Arrest and Detention to Further its Colonial
                    Settler Project (2015)
                  </h4>
                  <p className={"author"}>
                    Nadera Shalhoub-Kevorkian — International Journal of Applied
                    Psychoanalytic Studies
                  </p>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"opinion"}>
              <div className={"res-section-header"}>
                <h2>Opinion Pieces &amp; Personal Reflections</h2>
                <p>
                  Essays and reflections from clinicians, academics, and
                  advocates on clinical ethics, justice, and Palestine.
                </p>
              </div>
              <div className={"sub-label"}>
                Reflections from Gaza — Wasseem El Sarraj
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://www.newyorker.com/news/news-desk/fathers-sons-gaza"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Fathers and Sons in Gaza</h4>
                  <p>The New Yorker, July 26, 2014.</p>
                  <p className={"author"}>Wasseem El Sarraj</p>
                </a>
              </div>
              <div className={"sub-label"}>From the Network</div>
              <div className={"rli"}>
                <a
                  href={
                    "https://aapcsw.org/pdf/news/newsletters/AAPCSW_Newsletter_Winter_2014.pdf"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Praise for Mandela&apos;s South Africa but Silence for
                    Palestine (pages 4–8)
                  </h4>
                  <p>AAPCSW Newsletter, Winter 2014.</p>
                  <p className={"author"}>
                    Rebecca Fadil — USAPALMHN Steering Committee
                  </p>
                </a>
              </div>
              <div className={"sub-label"}>
                Dr. Samah Jabr — Psychiatrist, East Jerusalem
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://www.middleeastmonitor.com/20141219-samah-jabr-the-invisible-damage-of-life-under-the-occupation/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    The Invisible Damage of Life Under the Occupation —
                    Interview (2014)
                  </h4>
                  <p>
                    Essays describing the emotional, social, and political
                    turmoil imposed by the occupation.
                  </p>
                  <p className={"author"}>Samah Jabr — Middle East Monitor</p>
                </a>
                <a
                  href={
                    "https://www.middleeastmonitor.com/6-author/samah-jabr/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Additional Essays by Samah Jabr</h4>
                  <p>
                    Full archive of essays on occupation, mental health, and
                    resistance.
                  </p>
                  <p className={"author"}>Samah Jabr — Middle East Monitor</p>
                </a>
                <a
                  href={
                    "https://www.middleeastmonitor.com/20181129-professional-solidarity-with-palestine-a-mental-health-imperative/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Professional Solidarity with Palestine: A Mental Health
                    Imperative (2018)
                  </h4>
                  <p>Middle East Monitor, November 29, 2018.</p>
                  <p className={"author"}>Samah Jabr, MD</p>
                </a>
              </div>
              <div className={"sub-label"}>
                Essays by Mental Health Clinicians and Activists
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://thebaffler.com/salvos/forest-against-the-trees-aziza"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Forest Against the Trees (2023)</h4>
                  <p className={"author"}>Sarah Aziza — The Baffler</p>
                </a>
                <a
                  href={"https://thebaffler.com/latest/doomsday-diaries-aziza"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Doomsday Diaries, October 7–17 (2023)</h4>
                  <p className={"author"}>Sarah Aziza — The Baffler</p>
                </a>
                <a
                  href={
                    "https://ukpalmhn.com/2018/06/20/a-letter-from-gaza-june-2018-by-hanan-bashir/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>A Letter from Gaza, June 2018</h4>
                  <p className={"author"}>
                    Hanan Bashir — UK-Palestine Mental Health Network
                  </p>
                </a>
                <a
                  href={
                    "https://psychoanalyticactivist.com/2017/02/14/the-first-100-days-indefensible/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>The First Hundred Days: Indefensible</h4>
                  <p className={"author"}>
                    Lama Khouri — The Psychoanalytic Activist
                  </p>
                </a>
                <a
                  href={"http://mondoweiss.net/2016/12/forced-existence/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Forced Existence (2016)</h4>
                  <p>Mondoweiss, December 21, 2016.</p>
                  <p className={"author"}>Ruchama Marton</p>
                </a>
                <a
                  href={
                    "https://search.proquest.com/openview/339ff205c5611026916cd9301f8b4499/1.pdf?pq-origsite=gscholar&cbl=18750&diss=y"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Trauma and Identity Development: A Palestinian American
                    Experience
                  </h4>
                  <p className={"author"}>Razan Seikaly</p>
                </a>
              </div>
              <div className={"sub-label"}>
                The Psychoanalytic Activist — Special Edition: 70th Anniversary
                of the Nakba
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "https://psychoanalyticactivist.com/2018/04/03/introduction-to-special-edition-70th-anniversary-of-the-nakba/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Introduction to the Special Edition — 70th Anniversary of
                    the Nakba
                  </h4>
                  <p className={"author"}>
                    Lara Sheehi — The Psychoanalytic Activist
                  </p>
                </a>
                <a
                  href={
                    "https://psychoanalyticactivist.com/2018/04/05/70th-anniversary-of-he-nakba-modifying-some-settings-on-the-smart-phones-camera/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Modifying Some Settings on the Smart Phone&apos;s Camera
                  </h4>
                  <p className={"author"}>
                    Mustafa Qossoqsi — The Psychoanalytic Activist
                  </p>
                </a>
              </div>
              <div className={"sub-label"}>
                Anti-Semitism, Anti-Jewish Racism, and Anti-Israel Activism
              </div>
              <div className={"rli"}>
                <a
                  href={
                    "http://www.buildingequality.us/prejudice/antisemitism/rosenblum/the-past.pdf"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>The Past Didn&apos;t Go Anywhere</h4>
                  <p>
                    Exploring the distinctions between antisemitism, anti-Jewish
                    racism, and anti-Israel activism.
                  </p>
                </a>
                <a
                  href={
                    "https://jewishvoiceforpeace.org/fighting-antisemitism/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Fighting Anti-Semitism (2016)</h4>
                  <p className={"author"}>Jewish Voice for Peace</p>
                </a>
                <a
                  href={
                    "https://qpinblog.wordpress.com/2017/09/24/newly-published-engaging-critics-of-bds/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Engaging Critics of BDS</h4>
                  <p className={"author"}>Quaker Palestine Israel Network</p>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"films"}>
              <div className={"res-section-header"}>
                <h2>Films &amp; Documentaries</h2>
                <p>
                  Visual storytelling on Palestinian life, resistance, and
                  mental health.
                </p>
              </div>
              <div className={"rli"}>
                <a
                  href={"https://wearenotnumbers.org/"}
                  target={"_blank"}
                  className={"rli-item red cursor-pointer"}
                >
                  <h4>We Are Not Numbers</h4>
                  <p>
                    Gaza-based initiative pairing young Palestinian writers with
                    mentors to tell human stories behind the statistics.
                  </p>
                </a>
                <a
                  href={
                    "http://gazaunlocked.org/gaza-unlocked-resources-download"
                  }
                  target={"_blank"}
                  className={"rli-item red cursor-pointer"}
                >
                  <h4>Gaza Unlocked</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=BcARfW8vff0"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>A Soldier&apos;s Story</h4>
                  <p className={"author"}>Eran Efrati</p>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=Pwygicy7Wy8"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Mark Kaplan Discussing His Documentary About a Forest Funded
                    by South African Jews Covering the Remains of a Palestinian
                    Village
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=zWaLuVQ_LCc"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Noam Chomsky Addressing the United Nations, Blasting the US
                    for Supporting Israel
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=5AJlfW0g2rk"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Noam Chomsky on the Israel/Palestine Conflict</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=s4bQtM7q67k"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Noam Chomsky with Edward Said — On Palestine</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=cXTfHxxs4_g"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Oceans of Injustice: Why Does the Media Ignore Palestine?
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=_msusYXQIfc"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Letter from Gaza — John Berger Reads Ghassan Kanafani</h4>
                </a>
                <a
                  href={"http://born-equal.net/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Born Equal — Testimonies from Families Living Under
                    Occupation
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=rvMmIkMPijU"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Earliest Known Photo Images of Palestine and Jerusalem
                    (1837)
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=Eh0Z1VfYPcE"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Censored Voices — Film Trailer</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=2WZ_7Z6vbsg"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>They Do Not Exist</h4>
                  <p className={"author"}>Mustafa Abu Ali</p>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=qUDh-jTa3Go"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>The Nakba of Palestine</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=sIWvcBzbqVc"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Israeli Myths and Propaganda</h4>
                </a>
                <a
                  href={
                    "https://972mag.com/war-crimes-and-open-wounds-the-physician-who-took-on-israeli-segregation/129700/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Ruchama Marton — Interview</h4>
                </a>
                <a
                  href={
                    "https://kboo.fm/media/64039-mental-health-support-palestinians"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Dr. Elizabeth Berger — Interview</h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=oleOC-xB-XI"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Women in Palestine — An Interview with Samah Jabr</h4>
                  <p className={"author"}>Directed by Alexandra Dols</p>
                </a>
                <a
                  href={"http://mediaed.org/occupationmovie/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    The Occupation of the American Mind: Israel&apos;s Public
                    Relations War in the US
                  </h4>
                  <p>Narrated by Roger Waters</p>
                </a>
                <a
                  href={
                    "https://jewishvoiceforpeace.org/israeli-palestinian-conflict-101/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Short Video on Israel/Palestine — Jewish Voice for Peace
                  </h4>
                </a>
                <a
                  href={"http://www.occupation101.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Occupation 101 — Documentary (Available for Purchase)</h4>
                </a>
                <a
                  href={
                    "https://socialism2018.s3-us-west-2.amazonaws.com/S2018-The%20Arc%20of%20Palestinian%20Resistance.mp3"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Sumaya Awad Explains Palestinian Resistance, from First
                    Intifada to BDS
                  </h4>
                </a>
                <a
                  href={"https://www.youtube.com/watch?v=mUi3bxsCwUE"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>We Have a Dream to Live Safe — 12-Minute Video</h4>
                  <p>Produced by Lajee Center in Aida Camp, Bethlehem</p>
                </a>
                <a
                  href={"https://beyondthefrontlines.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Beyond the Frontlines: Resistance and Resilience in
                    Palestine
                  </h4>
                  <p className={"author"}>
                    Dr. Samah Jabr, directed by Alexandra Dols
                  </p>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"news-venues"}>
              <div className={"res-section-header"}>
                <h2>News Venues</h2>
                <p>
                  Online news outlets covering Palestine in English —
                  recommended by USAPALMHN.
                </p>
              </div>
              <div className={"rli"}>
                <a
                  href={"http://www.aljazeera.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Al Jazeera English</h4>
                </a>
                <a
                  href={"https://electronicintifada.net/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Electronic Intifada</h4>
                </a>
                <a
                  href={"http://www.jadaliyya.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Jadaliyya / Palestine</h4>
                </a>
                <a
                  href={
                    "https://jewishvoiceforpeace.org/january-2018-media-watch-jvp-health-advisory-council/"
                  }
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>
                    Jewish Voice for Peace Health Advisory Council Media Watch
                  </h4>
                </a>
                <a
                  href={"https://www.middleeastmonitor.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Middle East Monitor</h4>
                </a>
                <a
                  href={"http://mondoweiss.net/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Mondoweiss</h4>
                </a>
                <a
                  href={"http://www.palestinechronicle.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>Palestine Chronicle</h4>
                </a>
                <a
                  href={"https://972mag.com/"}
                  target={"_blank"}
                  className={"rli-item cursor-pointer"}
                >
                  <h4>+972 Magazine</h4>
                </a>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"organizations"}>
              <div className={"res-section-header"}>
                <h2>Organizations</h2>
                <p>
                  A sampling of organizations involved in furthering human
                  rights for Palestinians.
                </p>
              </div>
              <div className={"org-group"}>
                <div className={"org-group-label"}>
                  Activist Organizations — USA and International
                </div>
                <div className={"rli"}>
                  <a
                    href={"http://www.nationalsjp.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Students for Justice in Palestine</h4>
                  </a>
                  <a
                    href={"https://palestinelegal.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Palestine Legal</h4>
                  </a>
                  <a
                    href={"https://jewishvoiceforpeace.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Jewish Voice for Peace</h4>
                  </a>
                  <a
                    href={"https://uscpr.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>US Campaign for Palestinian Rights</h4>
                  </a>
                  <a
                    href={"http://www.icahdusa.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Israeli Committee Against House Demolitions USA</h4>
                  </a>
                  <a
                    href={"https://bdsmovement.net/what-is-bds"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Boycott, Divestment, Sanctions (BDS)</h4>
                  </a>
                </div>
              </div>
              <div className={"org-group"}>
                <div className={"org-group-label"}>
                  Advocacy and Direct Services in Palestine
                </div>
                <div className={"rli"}>
                  <a
                    href={"https://www.gcmhp.ps/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Gaza Community Mental Health Program</h4>
                  </a>
                  <a
                    href={"https://www.unrwausa.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>United Nations Relief and Works Agency USA</h4>
                  </a>
                  <a
                    href={"http://www.humanitycrew.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Humanity Crew</h4>
                  </a>
                  <a
                    href={"http://www.dci-palestine.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Defense for Children International</h4>
                  </a>
                  <a
                    href={"https://www.mecaforpeace.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Middle East Children&apos;s Alliance</h4>
                  </a>
                  <a
                    href={"http://pchrgaza.org/en/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Palestinian Center for Human Rights</h4>
                  </a>
                  <a
                    href={"http://nwttac.dci-palestine.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>No Way to Treat a Child</h4>
                  </a>
                </div>
              </div>
              <div className={"org-group"}>
                <div className={"org-group-label"}>
                  Information and Research Organizations
                </div>
                <div className={"rli"}>
                  <a
                    href={"https://imeu.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Institute for Middle East Understanding</h4>
                  </a>
                  <a
                    href={"https://whoprofits.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Who Profits?</h4>
                  </a>
                  <a
                    href={"http://www.ameu.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Americans for Middle East Understanding</h4>
                  </a>
                  <a
                    href={"http://mesana.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Middle East Studies Association</h4>
                  </a>
                  <a
                    href={"https://www.wrmea.org/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>The Washington Report for Middle East Affairs</h4>
                  </a>
                  <a
                    href={
                      "https://interactive.aljazeera.com/aje/PalestineRemix/"
                    }
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Palestinian Remix — Al Jazeera Interactive</h4>
                  </a>
                  <a
                    href={"https://visualizingpalestine.org/#about"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Visualizing Palestine</h4>
                  </a>
                  <a
                    href={"https://a4vpe.com/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Americans for a Vibrant Palestinian Economy</h4>
                  </a>
                </div>
              </div>
              <div className={"org-group"}>
                <div className={"org-group-label"}>Other Organizations</div>
                <div className={"rli"}>
                  <a
                    href={"http://www.breakingthesilence.org.il/"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Breaking the Silence</h4>
                    <p>
                      Israeli organization providing soldiers an opportunity to
                      talk about the occupation.
                    </p>
                  </a>
                  <a
                    href={"http://www.alqaws.org/about-us"}
                    target={"_blank"}
                    className={"rli-item cursor-pointer"}
                  >
                    <h4>Alqaws</h4>
                    <p>
                      Palestinian organization providing LGBT advocacy and
                      services.
                    </p>
                  </a>
                </div>
              </div>
            </ScrollSpySection>
            <ScrollSpySection id={"bissalameh"}>
              <div className={"res-section-header"}>
                <h2>Bissalameh</h2>
                <p>
                  بالسلامة — "Go in peace." A special resource on healing and
                  resilience.
                </p>
              </div>
              <div className={"bissalameh-block"}>
                <h3>Bissalameh</h3>
                <p>
                  Due to the attacks on Gaza in the summer of 2021, the
                  Bissalameh team launched a follow-up campaign on Instagram.
                  This campaign offers interviews with mental health clinicians
                  as well as Palestinian public figures in conversations about
                  healing and resilience.
                </p>
                <a
                  href={"https://www.instagram.com/bissalameh/"}
                  target={"_blank"}
                  className={"btn-olive-sm cursor-pointer"}
                >
                  Explore Bissalameh
                </a>
              </div>
            </ScrollSpySection>
          </main>
        </div>
      </ScrollSpyProvider>
    </>
  );
}
