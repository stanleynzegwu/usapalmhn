import Link from "next/link";
import type { Metadata } from "next";
import "../styles/pages/statement.css";

export const metadata: Metadata = {
  title: "Statement on Anti-Semitism — USA Palestine Mental Health Network",
};

export default function Page() {
  return (
    <>
      <div className={"page-hero"}>
        <div className={"keffiyeh-overlay"}></div>
        <div className={"page-hero-content"}>
          <div className={"page-hero-eyebrow"}>
            Network Statement · May 29, 2021
          </div>
          <h1>Statement on Anti-Semitism</h1>
          <p>
            Our position on anti-Semitism, and on the distinction between
            prejudice against Jewish people and criticism of the policies of the
            state of Israel.
          </p>
        </div>
      </div>
      <div className={"breadcrumb"}>
        <Link href={"/"} className={"cursor-pointer"}>
          Home
        </Link>
        <span>›</span>
        <Link href={"/voices/"} className={"cursor-pointer"}>
          Voices
        </Link>
        <span>›</span>
        {"Statement on Anti-Semitism\n"}
      </div>
      <div className={"stm-layout"}>
        <aside className={"stm-sidebar"}>
          <div className={"stm-meta-card"}>
            <div className={"stm-meta-header"}>About This Statement</div>
            <dl className={"stm-meta"}>
              <dt>Issued</dt>
              <dd>
                <time dateTime={"2021-05-29"}>May 29, 2021</time>
              </dd>
              <dt>Issued by</dt>
              <dd>USA-Palestine Mental Health Network</dd>
              <dt>Status</dt>
              <dd>Standing position of the network</dd>
            </dl>
          </div>
          <div className={"stm-related"}>
            <div className={"stm-related-header"}>Related</div>
            <Link href={"/voices/"} className={"cursor-pointer"}>
              Voices on Mental Health
            </Link>
            <Link href={"/about/#mission"} className={"cursor-pointer"}>
              Our Mission and Aims
            </Link>
            <Link href={"/resources/"} className={"cursor-pointer"}>
              Resource Library
            </Link>
            <Link href={"/about/#contact"} className={"cursor-pointer"}>
              Contact the Network
            </Link>
          </div>
        </aside>
        <article className={"stm-content"}>
          <p className={"stm-lede"}>
            In light of recent events, the USA Network sees a need to articulate
            our position on anti-Semitism — a position we have expressed
            previously within various statements and publications:
          </p>
          <ol className={"stm-points"}>
            <li className={"stm-point"}>
              <p>
                We oppose all forms of anti-Semitism — a prejudice in speech or
                in action against Jewish persons — just as we oppose all forms
                of discrimination on the basis of religion, race, ethnicity,
                nation, beliefs, or gender.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We are appalled by all acts of harassment and assault directed
                at persons because of their Jewish identity and the vandalism of
                property associated with them; all such acts are immoral and
                their perpetrators should be brought to justice.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We recognize that the Jewish people have long suffered from
                discrimination, hatred, and violence in many places around the
                world — most catastrophically in the European Holocaust of the
                twentieth century.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We believe it is crucial to distinguish expressions of
                anti-Semitism from expressions that criticize the state of
                Israel.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We observe that the government of Israel — in an effort to
                silence debate about its occupation of Palestine, its violation
                of International Law, and its violation of the human rights of
                the Palestinian people — claims that any criticism of such
                conduct is anti-Semitic.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                The state of Israel falsely claims that it represents all Jewish
                people, that it speaks for all Jewish people, and that all
                Jewish people support the state of Israel. The state of Israel
                has adopted a particular political agenda vis-à-vis its
                Palestinian citizens, the Palestinians under occupation in the
                West Bank and East Jerusalem, and the Palestinians under siege
                in Gaza — an agenda which does not represent and is not
                supported by all Jewish people.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                Zionism is a political ideology laying claim to the Palestinian
                land between the Jordan river and the Mediterranean Sea as a
                nation for exclusively Jewish settlement and governance. Many
                Jewish people had opposed the political agenda of Zionism from
                its earliest beginnings in the nineteenth century and have
                opposed Zionism throughout its history.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                At this time, a large number of Jewish people worldwide
                (including many Jewish Israelis) are opposed to the Israeli
                violation of Palestinians&apos; human rights, the demolition of
                their homes, the military occupation of the West Bank and Gaza,
                the discrimination towards Palestinian citizens of Israel, and
                the indefinite military detention and torture of Palestinian
                civilians — including the torture of children.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We hold the state of Israel responsible, therefore, for damage
                to Judaism itself and for putting the lives of Jewish people in
                danger all over the world. Israel&apos;s intentional conflation
                of anti-Semitism with criticism of Israeli state policy has
                resulted in the Jewish people being unjustly held collectively
                accountable for the human rights abuses perpetrated by the state
                of Israel. Innocent persons who are Jewish are thus made into
                human shields, to absorb the outrage caused by reprehensible
                Israeli state policies. Moreover, resistance to seventy years of
                Israeli governmental and settler violence is cynically exploited
                to inflate a self-serving myth of eternal victimhood and to
                justify the apartheid Israeli political agenda.
              </p>
            </li>
            <li className={"stm-point"}>
              <p>
                We hold the state of Israel guilty of exploiting crimes and acts
                of anti-Semitism to justify the ethnic cleansing of the homeland
                of the Palestinian people. We stand against anti-Semitism and we
                stand for Palestinian human rights.
              </p>
            </li>
          </ol>
          <div className={"stm-signature"}>
            <div className={"stm-sig-date"}>
              <time dateTime={"2021-05-29"}>May 29, 2021</time>
            </div>
            <div className={"stm-sig-name"}>The Steering Committee</div>
          </div>
          <div className={"stm-cta"}>
            <h3>Stand with the network</h3>
            <p>
              This statement reflects the standing position of the USA-Palestine
              Mental Health Network. If it speaks for you, join us.
            </p>
            <Link
              href={"/get-involved/#join"}
              className={"btn-olive cursor-pointer"}
            >
              Join the Network
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
