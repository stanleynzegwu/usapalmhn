export type VoiceCategory = "gaza" | "west-bank" | "may-2021";
export type VoiceEntryKind = "article" | "statement" | "collection" | "pledge" | "legacy-landing";

export interface VoiceDocumentReference {
  label: string;
  href: string;
  sourceUrl: string;
  local: boolean;
}

export interface VoiceEntry {
  id: string;
  slug: string;
  title: string;
  sourceTitle: string;
  sourceUrl: string;
  sourcePath: string;
  canonicalPath: string;
  kind: VoiceEntryKind;
  categories: VoiceCategory[];
  bodyFile: string;
  documents: VoiceDocumentReference[];
  editorialNotes: string[];
  audio?: { src: string; label: string };
}

export interface VoiceArchiveItem {
  title: string;
  sourceUrl: string;
  href: string;
  page: number;
  slug: string;
}

export interface VoiceCategoryArchive {
  slug: VoiceCategory;
  title: string;
  sourcePath: string;
  itemsPerPage: number;
  items: VoiceArchiveItem[];
}

export interface VoiceRedirect {
  source: string;
  destination: string;
}

export const voiceEntries: VoiceEntry[] = [
  {
    "id": "0017",
    "slug": "may-2021",
    "title": "May 2021 Assault on Palestine",
    "sourceTitle": "May 2021 Assault on Palestine – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/may-2021-assault-on-palestine/",
    "sourcePath": "/may-2021-assault-on-palestine",
    "canonicalPath": "/voices/may-2021",
    "kind": "legacy-landing",
    "categories": [],
    "bodyFile": "articles/may-2021.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0025",
    "slug": "a-letter-from-gaza-june-2018-by-hanan-bashir",
    "title": "Letters from Gaza by Hanan Abubasheer",
    "sourceTitle": "Letters from Gaza by Hanan Abubasheer – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/a-letter-from-gaza-june-2018-by-hanan-bashir/",
    "sourcePath": "/portfolio-item/a-letter-from-gaza-june-2018-by-hanan-bashir",
    "canonicalPath": "/voices/a-letter-from-gaza-june-2018-by-hanan-bashir",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/a-letter-from-gaza-june-2018-by-hanan-bashir.mdx",
    "documents": [],
    "editorialNotes": [
      "Editorial review: the source URL uses “Bashir”, while the captured page heading and byline use “Abubasheer”. Preserve the captured heading and body verbatim pending editorial clarification.",
      "Unresolved source media reference preserved in the body: [wpvideo 5OVxNOxR]. No embed URL was supplied."
    ]
  },
  {
    "id": "0107",
    "slug": "a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict",
    "title": "A Romance, a Birthplace Destroyed Memories of Gaza’s bombed Ahli Hospital Israel-Palestine conflict",
    "sourceTitle": "A Romance, a Birthplace Destroyed Memories of Gaza’s bombed Ahli Hospital Israel-Palestine conflict – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict/",
    "sourcePath": "/portfolio-item/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict",
    "canonicalPath": "/voices/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0110",
    "slug": "a-voice-from-a-young-journalist-in-gaza-october-26-2023",
    "title": "A Voice From a Young Journalist in Gaza, October 26, 2023",
    "sourceTitle": "A Voice From a Young Journalist in Gaza, October 26, 2023 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/a-voice-from-a-young-journalist-in-gaza-october-26-2023/",
    "sourcePath": "/portfolio-item/a-voice-from-a-young-journalist-in-gaza-october-26-2023",
    "canonicalPath": "/voices/a-voice-from-a-young-journalist-in-gaza-october-26-2023",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/a-voice-from-a-young-journalist-in-gaza-october-26-2023.mdx",
    "documents": [],
    "editorialNotes": [],
    "audio": {
      "src": "/voices/audio/young-journalist-in-Gaza-2023-10-26-11-15-17.m4a",
      "label": "Audio recording from a young journalist in Gaza, October 26, 2023"
    }
  },
  {
    "id": "0073",
    "slug": "about-voices-on-mental-health",
    "title": "About Voices on Mental Health",
    "sourceTitle": "About Voices on Mental Health – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/about-voices-on-mental-health/",
    "sourcePath": "/portfolio-item/about-voices-on-mental-health",
    "canonicalPath": "/voices/about-voices-on-mental-health",
    "kind": "article",
    "categories": [],
    "bodyFile": "articles/about-voices-on-mental-health.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0118",
    "slug": "all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching",
    "title": "“All That’s Left of You,” Not just a film, but an experience worth watching",
    "sourceTitle": "“All That’s Left of You,” Not just a film, but an experience worth watching – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching/",
    "sourcePath": "/portfolio-item/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching",
    "canonicalPath": "/voices/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching",
    "kind": "article",
    "categories": [
      "west-bank"
    ],
    "bodyFile": "articles/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0108",
    "slug": "close-calls-with-death",
    "title": "Close Calls with Death",
    "sourceTitle": "Close Calls with Death – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/close-calls-with-death/",
    "sourcePath": "/portfolio-item/close-calls-with-death",
    "canonicalPath": "/voices/close-calls-with-death",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/close-calls-with-death.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0092",
    "slug": "donoharm",
    "title": "#DoNoHarm",
    "sourceTitle": "#DoNoHarm – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/donoharm/",
    "sourcePath": "/portfolio-item/donoharm",
    "canonicalPath": "/voices/donoharm",
    "kind": "statement",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/donoharm.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0116",
    "slug": "even-the-longest-winters-end-december-2024",
    "title": "Even the Longest Winters End,  December 2024",
    "sourceTitle": "Even the Longest Winters End, December 2024 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/even-the-longest-winters-end-december-2024/",
    "sourcePath": "/portfolio-item/even-the-longest-winters-end-december-2024",
    "canonicalPath": "/voices/even-the-longest-winters-end-december-2024",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/even-the-longest-winters-end-december-2024.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0091",
    "slug": "french-statement",
    "title": "French Statement on Crisis",
    "sourceTitle": "French Statement on Crisis – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/french-statement/",
    "sourcePath": "/portfolio-item/french-statement",
    "canonicalPath": "/voices/french-statement",
    "kind": "statement",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/french-statement.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0113",
    "slug": "in-memoriam-yousef-mahar-dawas",
    "title": "In Memoriam: Yousef Mahar Dawas, Killed on Oct.14, 2023",
    "sourceTitle": "In Memoriam: Yousef Mahar Dawas, Killed on Oct.14, 2023 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/in-memoriam-yousef-mahar-dawas/",
    "sourcePath": "/portfolio-item/in-memoriam-yousef-mahar-dawas",
    "canonicalPath": "/voices/in-memoriam-yousef-mahar-dawas",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/in-memoriam-yousef-mahar-dawas.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0026",
    "slug": "israeli-colleagues-seek-our-support-for-statement-on-gaza",
    "title": "Israeli colleagues seek our support for statement on Gaza",
    "sourceTitle": "Israeli colleagues seek our support for statement on Gaza – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/israeli-colleagues-seek-our-support-for-statement-on-gaza/",
    "sourcePath": "/portfolio-item/israeli-colleagues-seek-our-support-for-statement-on-gaza",
    "canonicalPath": "/voices/israeli-colleagues-seek-our-support-for-statement-on-gaza",
    "kind": "statement",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/israeli-colleagues-seek-our-support-for-statement-on-gaza.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0105",
    "slug": "israels-war-isnt-against-hamas-its-on-the-palestinian-people",
    "title": "Israel’s War Isn’t Against Hamas—It’s on the Palestinian People",
    "sourceTitle": "Israel’s War Isn’t Against Hamas—It’s on the Palestinian People – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/israels-war-isnt-against-hamas-its-on-the-palestinian-people/",
    "sourcePath": "/portfolio-item/israels-war-isnt-against-hamas-its-on-the-palestinian-people",
    "canonicalPath": "/voices/israels-war-isnt-against-hamas-its-on-the-palestinian-people",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/israels-war-isnt-against-hamas-its-on-the-palestinian-people.mdx",
    "documents": [
      {
        "label": "Maha article Gaza Oct2023",
        "href": "/voices/documents/Maha-article-Gaza-Oct2023.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2023/10/Maha-article-Gaza-Oct2023.pdf",
        "local": true
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0089",
    "slug": "jerusalemite-womens-coalition",
    "title": "Jerusalemite Women’s Coalition",
    "sourceTitle": "Jerusalemite Women’s Coalition – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/jerusalemite-womens-coalition/",
    "sourcePath": "/portfolio-item/jerusalemite-womens-coalition",
    "canonicalPath": "/voices/jerusalemite-womens-coalition",
    "kind": "statement",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/jerusalemite-womens-coalition.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0090",
    "slug": "jewish-voice-for-peace-statement",
    "title": "Jewish Voice for Peace Statement",
    "sourceTitle": "Jewish Voice for Peace Statement – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/jewish-voice-for-peace-statement/",
    "sourcePath": "/portfolio-item/jewish-voice-for-peace-statement",
    "canonicalPath": "/voices/jewish-voice-for-peace-statement",
    "kind": "statement",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/jewish-voice-for-peace-statement.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0086",
    "slug": "life-lacking-a-sense-of-safety",
    "title": "Life Lacking a Sense of Safety",
    "sourceTitle": "Life Lacking a Sense of Safety – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/life-lacking-a-sense-of-safety/",
    "sourcePath": "/portfolio-item/life-lacking-a-sense-of-safety",
    "canonicalPath": "/voices/life-lacking-a-sense-of-safety",
    "kind": "article",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/life-lacking-a-sense-of-safety.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0085",
    "slug": "may-2021-assault-on-palestine",
    "title": "May 2021 Assault on Palestine",
    "sourceTitle": "May 2021 Assault on Palestine – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/may-2021-assault-on-palestine/",
    "sourcePath": "/portfolio-item/may-2021-assault-on-palestine",
    "canonicalPath": "/voices/may-2021-assault-on-palestine",
    "kind": "article",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/may-2021-assault-on-palestine.mdx",
    "documents": [
      {
        "label": "Statement",
        "href": "https://palmhn.files.wordpress.com/2021/05/ukpalmhn-statement-about-current-crisis.pdf",
        "sourceUrl": "https://palmhn.files.wordpress.com/2021/05/ukpalmhn-statement-about-current-crisis.pdf",
        "local": false
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0022",
    "slug": "mental-health-workers-pledge-for-palestine",
    "title": "Mental Health Workers’ Pledge for Palestine",
    "sourceTitle": "Mental Health Workers’ Pledge for Palestine – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/mental-health-workers-pledge-for-palestine/",
    "sourcePath": "/portfolio-item/mental-health-workers-pledge-for-palestine",
    "canonicalPath": "/voices/mental-health-workers-pledge-for-palestine",
    "kind": "pledge",
    "categories": [],
    "bodyFile": "articles/mental-health-workers-pledge-for-palestine.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0111",
    "slug": "nakba-2023",
    "title": "Nakba 2023",
    "sourceTitle": "Nakba 2023 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/nakba-2023/",
    "sourcePath": "/portfolio-item/nakba-2023",
    "canonicalPath": "/voices/nakba-2023",
    "kind": "article",
    "categories": [
      "west-bank"
    ],
    "bodyFile": "articles/nakba-2023.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0104",
    "slug": "once-upon-a-time-in-palestine",
    "title": "Once upon a time in Palestine",
    "sourceTitle": "Once upon a time in Palestine – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/once-upon-a-time-in-palestine/",
    "sourcePath": "/portfolio-item/once-upon-a-time-in-palestine",
    "canonicalPath": "/voices/once-upon-a-time-in-palestine",
    "kind": "article",
    "categories": [
      "west-bank"
    ],
    "bodyFile": "articles/once-upon-a-time-in-palestine.mdx",
    "documents": [
      {
        "label": "Once upon a time in Palestine by Saed Zboun – pdf",
        "href": "/voices/documents/Once-upon-a-time-in-Palestine-Saed-Zboun.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2023/04/Once-upon-a-time-in-Palestine-Saed-Zboun.pdf",
        "local": true
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0093",
    "slug": "palestine-health-justice-working-group-statement",
    "title": "Palestine Health Justice Working Group Statement",
    "sourceTitle": "Palestine Health Justice Working Group Statement – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/palestine-health-justice-working-group-statement/",
    "sourcePath": "/portfolio-item/palestine-health-justice-working-group-statement",
    "canonicalPath": "/voices/palestine-health-justice-working-group-statement",
    "kind": "statement",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/palestine-health-justice-working-group-statement.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0027",
    "slug": "psychoanalytic-activist",
    "title": "Psychoanalytic Activist",
    "sourceTitle": "Psychoanalytic Activist – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/psychoanalytic-activist/",
    "sourcePath": "/portfolio-item/psychoanalytic-activist",
    "canonicalPath": "/voices/psychoanalytic-activist",
    "kind": "article",
    "categories": [],
    "bodyFile": "articles/psychoanalytic-activist.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0114",
    "slug": "reflections-from-a-journalist-in-gaza-january-2024",
    "title": "Reflections from a journalist in Gaza, January 2024",
    "sourceTitle": "Reflections from a journalist in Gaza, January 2024 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/reflections-from-a-journalist-in-gaza-january-2024/",
    "sourcePath": "/portfolio-item/reflections-from-a-journalist-in-gaza-january-2024",
    "canonicalPath": "/voices/reflections-from-a-journalist-in-gaza-january-2024",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/reflections-from-a-journalist-in-gaza-january-2024.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0102",
    "slug": "resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine",
    "title": "Resistance as a Path to Healing: The Quest for Mental Health in Palestine",
    "sourceTitle": "Resistance as a Path to Healing: The Quest for Mental Health in Palestine – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine/",
    "sourcePath": "/portfolio-item/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine",
    "canonicalPath": "/voices/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine",
    "kind": "article",
    "categories": [
      "west-bank"
    ],
    "bodyFile": "articles/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0088",
    "slug": "resistance-to-occupation",
    "title": "Resistance to Occupation",
    "sourceTitle": "Resistance to Occupation – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/resistance-to-occupation/",
    "sourcePath": "/portfolio-item/resistance-to-occupation",
    "canonicalPath": "/voices/resistance-to-occupation",
    "kind": "article",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/resistance-to-occupation.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0117",
    "slug": "statement-condemning-the-invasion-of-birzeit",
    "title": "Statement condemning the invasion of Birzeit",
    "sourceTitle": "Statement condemning the invasion of Birzeit – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/statement-condemning-the-invasion-of-birzeit/",
    "sourcePath": "/portfolio-item/statement-condemning-the-invasion-of-birzeit",
    "canonicalPath": "/voices/statement-condemning-the-invasion-of-birzeit",
    "kind": "statement",
    "categories": [],
    "bodyFile": "articles/statement-condemning-the-invasion-of-birzeit.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0075",
    "slug": "statement-on-israeli-annexation",
    "title": "Statement on Israeli Annexation",
    "sourceTitle": "Statement on Israeli Annexation – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/statement-on-israeli-annexation/",
    "sourcePath": "/portfolio-item/statement-on-israeli-annexation",
    "canonicalPath": "/voices/statement-on-israeli-annexation",
    "kind": "statement",
    "categories": [],
    "bodyFile": "articles/statement-on-israeli-annexation.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0095",
    "slug": "statement-on-israeli-raid-of-dci",
    "title": "Statement on Israeli Raid of DCI",
    "sourceTitle": "Statement on Israeli Raid of DCI – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/statement-on-israeli-raid-of-dci/",
    "sourcePath": "/portfolio-item/statement-on-israeli-raid-of-dci",
    "canonicalPath": "/voices/statement-on-israeli-raid-of-dci",
    "kind": "statement",
    "categories": [],
    "bodyFile": "articles/statement-on-israeli-raid-of-dci.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0087",
    "slug": "the-battle-for-liberation",
    "title": "The Battle for Liberation",
    "sourceTitle": "The Battle for Liberation – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/the-battle-for-liberation/",
    "sourcePath": "/portfolio-item/the-battle-for-liberation",
    "canonicalPath": "/voices/the-battle-for-liberation",
    "kind": "article",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/the-battle-for-liberation.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0109",
    "slug": "the-long-walk-to-palestines-freedom",
    "title": "The Long Walk to Palestine’s Freedom",
    "sourceTitle": "The Long Walk to Palestine’s Freedom – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/the-long-walk-to-palestines-freedom/",
    "sourcePath": "/portfolio-item/the-long-walk-to-palestines-freedom",
    "canonicalPath": "/voices/the-long-walk-to-palestines-freedom",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/the-long-walk-to-palestines-freedom.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0021",
    "slug": "the-thinking-behind-the-mental-health-workers-pledge",
    "title": "The Thinking Behind the Mental Health Workers’ Pledge",
    "sourceTitle": "The Thinking Behind the Mental Health Workers’ Pledge – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/the-thinking-behind-the-mental-health-workers-pledge/",
    "sourcePath": "/portfolio-item/the-thinking-behind-the-mental-health-workers-pledge",
    "canonicalPath": "/voices/the-thinking-behind-the-mental-health-workers-pledge",
    "kind": "article",
    "categories": [],
    "bodyFile": "articles/the-thinking-behind-the-mental-health-workers-pledge.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0115",
    "slug": "there-is-always-hope",
    "title": "There Is Always Hope, November 2024",
    "sourceTitle": "There Is Always Hope, November 2024 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/there-is-always-hope/",
    "sourcePath": "/portfolio-item/there-is-always-hope",
    "canonicalPath": "/voices/there-is-always-hope",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/there-is-always-hope.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0084",
    "slug": "this-must-end-dr-yasser-abu-jamei",
    "title": "This Must End, Dr. Yasser Abu Jamei",
    "sourceTitle": "This Must End, Dr. Yasser Abu Jamei – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/this-must-end-dr-yasser-abu-jamei/",
    "sourcePath": "/portfolio-item/this-must-end-dr-yasser-abu-jamei",
    "canonicalPath": "/voices/this-must-end-dr-yasser-abu-jamei",
    "kind": "article",
    "categories": [
      "may-2021"
    ],
    "bodyFile": "articles/this-must-end-dr-yasser-abu-jamei.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0096",
    "slug": "under-siege-childrens-mental-health-in-gaza",
    "title": "Under Siege & Under Bombs; Children’s Mental Health in Gaza",
    "sourceTitle": "Under Siege & Under Bombs; Children’s Mental Health in Gaza – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/under-siege-childrens-mental-health-in-gaza/",
    "sourcePath": "/portfolio-item/under-siege-childrens-mental-health-in-gaza",
    "canonicalPath": "/voices/under-siege-childrens-mental-health-in-gaza",
    "kind": "article",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/under-siege-childrens-mental-health-in-gaza.mdx",
    "documents": [
      {
        "label": "Gaza Children- Save the date flyer",
        "href": "/voices/documents/Gaza-Children-Save-the-date-flyer.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2021/10/Gaza-Children-Save-the-date-flyer.pdf",
        "local": true
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0106",
    "slug": "update-from-palestine-october-16-2023",
    "title": "Update from  Palestine – October 16, 2023",
    "sourceTitle": "Update from Palestine – October 16, 2023 – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/update-from-palestine-october-16-2023/",
    "sourcePath": "/portfolio-item/update-from-palestine-october-16-2023",
    "canonicalPath": "/voices/update-from-palestine-october-16-2023",
    "kind": "article",
    "categories": [
      "west-bank"
    ],
    "bodyFile": "articles/update-from-palestine-october-16-2023.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0101",
    "slug": "voices-from-the-diaspora",
    "title": "Voices from the Diaspora",
    "sourceTitle": "Voices from the Diaspora – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/voices-from-the-diaspora/",
    "sourcePath": "/portfolio-item/voices-from-the-diaspora",
    "canonicalPath": "/voices/voices-from-the-diaspora",
    "kind": "collection",
    "categories": [],
    "bodyFile": "articles/voices-from-the-diaspora.mdx",
    "documents": [
      {
        "label": "Click here to download a pdf",
        "href": "/voices/documents/Manifesto.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2023/05/Manifesto.pdf",
        "local": true
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0019",
    "slug": "voices-on-gaza",
    "title": "Voices on Gaza",
    "sourceTitle": "Voices on Gaza – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/voices-on-gaza/",
    "sourcePath": "/portfolio-item/voices-on-gaza",
    "canonicalPath": "/voices/voices-on-gaza",
    "kind": "collection",
    "categories": [
      "gaza"
    ],
    "bodyFile": "articles/voices-on-gaza.mdx",
    "documents": [
      {
        "label": "Letter from Psychiatrist in Gaza, 10/12/23",
        "href": "/voices/documents/plea-from-Gaza.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2018/09/plea-from-Gaza.pdf",
        "local": true
      },
      {
        "label": "Letters in Solidarity: To Medics & Paramedics in Gaza Palestine!",
        "href": "/voices/documents/Final-Letters-to-Gaza-PDF.pdf",
        "sourceUrl": "https://usapalmhn.org/wp-content/uploads/2018/09/Final-Letters-to-Gaza-PDF.pdf",
        "local": true
      }
    ],
    "editorialNotes": []
  },
  {
    "id": "0081",
    "slug": "we-are-not-numbers",
    "title": "We Are Not Numbers",
    "sourceTitle": "We Are Not Numbers – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/portfolio-item/we-are-not-numbers/",
    "sourcePath": "/portfolio-item/we-are-not-numbers",
    "canonicalPath": "/voices/we-are-not-numbers",
    "kind": "collection",
    "categories": [],
    "bodyFile": "articles/we-are-not-numbers.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0015",
    "slug": "west-bank",
    "title": "Voices from the West Bank",
    "sourceTitle": "Voices from the West Bank – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/voices-from-the-west-bank/",
    "sourcePath": "/voices-from-the-west-bank",
    "canonicalPath": "/voices/west-bank",
    "kind": "legacy-landing",
    "categories": [],
    "bodyFile": "articles/west-bank.mdx",
    "documents": [],
    "editorialNotes": []
  },
  {
    "id": "0016",
    "slug": "gaza",
    "title": "Voices on Gaza",
    "sourceTitle": "Voices on Gaza – USA Palestine Mental Health Network",
    "sourceUrl": "https://usapalmhn.org/voices-on-gaza/",
    "sourcePath": "/voices-on-gaza",
    "canonicalPath": "/voices/gaza",
    "kind": "legacy-landing",
    "categories": [],
    "bodyFile": "articles/gaza.mdx",
    "documents": [],
    "editorialNotes": []
  }
];

export const voiceCategoryArchives: VoiceCategoryArchive[] = [
  {
    "slug": "gaza",
    "title": "Voices on Gaza",
    "sourcePath": "/portfolio_entries/voices-on-gaza",
    "itemsPerPage": 10,
    "items": [
      {
        "title": "Even the Longest Winters End,  December 2024",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/even-the-longest-winters-end-december-2024/",
        "href": "/voices/even-the-longest-winters-end-december-2024",
        "page": 1,
        "slug": "even-the-longest-winters-end-december-2024"
      },
      {
        "title": "There Is Always Hope, November 2024",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/there-is-always-hope/",
        "href": "/voices/there-is-always-hope",
        "page": 1,
        "slug": "there-is-always-hope"
      },
      {
        "title": "Reflections from a journalist in Gaza, January 2024",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/reflections-from-a-journalist-in-gaza-january-2024/",
        "href": "/voices/reflections-from-a-journalist-in-gaza-january-2024",
        "page": 1,
        "slug": "reflections-from-a-journalist-in-gaza-january-2024"
      },
      {
        "title": "In Memoriam: Yousef Mahar Dawas, Killed on Oct.14, 2023",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/in-memoriam-yousef-mahar-dawas/",
        "href": "/voices/in-memoriam-yousef-mahar-dawas",
        "page": 1,
        "slug": "in-memoriam-yousef-mahar-dawas"
      },
      {
        "title": "A Voice From a Young Journalist in Gaza, October 26, 2023",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/a-voice-from-a-young-journalist-in-gaza-october-26-2023/",
        "href": "/voices/a-voice-from-a-young-journalist-in-gaza-october-26-2023",
        "page": 1,
        "slug": "a-voice-from-a-young-journalist-in-gaza-october-26-2023"
      },
      {
        "title": "The Long Walk to Palestine’s Freedom",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/the-long-walk-to-palestines-freedom/",
        "href": "/voices/the-long-walk-to-palestines-freedom",
        "page": 1,
        "slug": "the-long-walk-to-palestines-freedom"
      },
      {
        "title": "Close Calls with Death",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/close-calls-with-death/",
        "href": "/voices/close-calls-with-death",
        "page": 1,
        "slug": "close-calls-with-death"
      },
      {
        "title": "A Romance, a Birthplace Destroyed Memories of Gaza’s bombed Ahli Hospital Israel-Palestine conflict",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict/",
        "href": "/voices/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict",
        "page": 1,
        "slug": "a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict"
      },
      {
        "title": "Israel’s War Isn’t Against Hamas—It’s on the Palestinian People",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/israels-war-isnt-against-hamas-its-on-the-palestinian-people/",
        "href": "/voices/israels-war-isnt-against-hamas-its-on-the-palestinian-people",
        "page": 1,
        "slug": "israels-war-isnt-against-hamas-its-on-the-palestinian-people"
      },
      {
        "title": "Under Siege & Under Bombs; Children’s Mental Health in Gaza",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/under-siege-childrens-mental-health-in-gaza/",
        "href": "/voices/under-siege-childrens-mental-health-in-gaza",
        "page": 1,
        "slug": "under-siege-childrens-mental-health-in-gaza"
      },
      {
        "title": "Films and Videos on Gaza",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/films-and-videos-on-gaza/",
        "href": "/resources#films",
        "page": 2,
        "slug": "resources#films"
      },
      {
        "title": "Israeli colleagues seek our support for statement on Gaza",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/israeli-colleagues-seek-our-support-for-statement-on-gaza/",
        "href": "/voices/israeli-colleagues-seek-our-support-for-statement-on-gaza",
        "page": 2,
        "slug": "israeli-colleagues-seek-our-support-for-statement-on-gaza"
      },
      {
        "title": "Letters from Gaza by Hanan Abubasheer",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/a-letter-from-gaza-june-2018-by-hanan-bashir/",
        "href": "/voices/a-letter-from-gaza-june-2018-by-hanan-bashir",
        "page": 2,
        "slug": "a-letter-from-gaza-june-2018-by-hanan-bashir"
      },
      {
        "title": "Voices on Gaza",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/voices-on-gaza/",
        "href": "/voices/voices-on-gaza",
        "page": 2,
        "slug": "voices-on-gaza"
      }
    ]
  },
  {
    "slug": "west-bank",
    "title": "Voices from the West Bank",
    "sourcePath": "/portfolio_entries/voices-from-the-west-bank",
    "itemsPerPage": 10,
    "items": [
      {
        "title": "“All That’s Left of You,” Not just a film, but an experience worth watching",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching/",
        "href": "/voices/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching",
        "page": 1,
        "slug": "all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching"
      },
      {
        "title": "Nakba 2023",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/nakba-2023/",
        "href": "/voices/nakba-2023",
        "page": 1,
        "slug": "nakba-2023"
      },
      {
        "title": "Update from  Palestine – October 16, 2023",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/update-from-palestine-october-16-2023/",
        "href": "/voices/update-from-palestine-october-16-2023",
        "page": 1,
        "slug": "update-from-palestine-october-16-2023"
      },
      {
        "title": "Once upon a time in Palestine",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/once-upon-a-time-in-palestine/",
        "href": "/voices/once-upon-a-time-in-palestine",
        "page": 1,
        "slug": "once-upon-a-time-in-palestine"
      },
      {
        "title": "Resistance as a Path to Healing: The Quest for Mental Health in Palestine",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine/",
        "href": "/voices/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine",
        "page": 1,
        "slug": "resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine"
      }
    ]
  },
  {
    "slug": "may-2021",
    "title": "May 2021 Assault on Palestine",
    "sourcePath": "/portfolio_entries/may-2021-assault-on-palestine",
    "itemsPerPage": 10,
    "items": [
      {
        "title": "USA Palestine Mental Health Network Statement on Anti-Semitism",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/statement-on-anti-semitism/",
        "href": "/statement-on-anti-semitism",
        "page": 1,
        "slug": "statement-on-anti-semitism"
      },
      {
        "title": "Palestine Health Justice Working Group Statement",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/palestine-health-justice-working-group-statement/",
        "href": "/voices/palestine-health-justice-working-group-statement",
        "page": 1,
        "slug": "palestine-health-justice-working-group-statement"
      },
      {
        "title": "#DoNoHarm",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/donoharm/",
        "href": "/voices/donoharm",
        "page": 1,
        "slug": "donoharm"
      },
      {
        "title": "Jewish Voice for Peace Statement",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/jewish-voice-for-peace-statement/",
        "href": "/voices/jewish-voice-for-peace-statement",
        "page": 1,
        "slug": "jewish-voice-for-peace-statement"
      },
      {
        "title": "French Statement on Crisis",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/french-statement/",
        "href": "/voices/french-statement",
        "page": 1,
        "slug": "french-statement"
      },
      {
        "title": "Jerusalemite Women’s Coalition",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/jerusalemite-womens-coalition/",
        "href": "/voices/jerusalemite-womens-coalition",
        "page": 1,
        "slug": "jerusalemite-womens-coalition"
      },
      {
        "title": "Life Lacking a Sense of Safety",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/life-lacking-a-sense-of-safety/",
        "href": "/voices/life-lacking-a-sense-of-safety",
        "page": 1,
        "slug": "life-lacking-a-sense-of-safety"
      },
      {
        "title": "Resistance to Occupation",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/resistance-to-occupation/",
        "href": "/voices/resistance-to-occupation",
        "page": 1,
        "slug": "resistance-to-occupation"
      },
      {
        "title": "The Battle for Liberation",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/the-battle-for-liberation/",
        "href": "/voices/the-battle-for-liberation",
        "page": 1,
        "slug": "the-battle-for-liberation"
      },
      {
        "title": "May 2021 Assault on Palestine",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/may-2021-assault-on-palestine/",
        "href": "/voices/may-2021-assault-on-palestine",
        "page": 1,
        "slug": "may-2021-assault-on-palestine"
      },
      {
        "title": "This Must End, Dr. Yasser Abu Jamei",
        "sourceUrl": "https://usapalmhn.org/portfolio-item/this-must-end-dr-yasser-abu-jamei/",
        "href": "/voices/this-must-end-dr-yasser-abu-jamei",
        "page": 2,
        "slug": "this-must-end-dr-yasser-abu-jamei"
      }
    ]
  }
];

export const voiceRedirects: VoiceRedirect[] = [
  {
    "source": "/may-2021-assault-on-palestine",
    "destination": "/voices/may-2021"
  },
  {
    "source": "/portfolio-item/a-letter-from-gaza-june-2018-by-hanan-bashir",
    "destination": "/voices/a-letter-from-gaza-june-2018-by-hanan-bashir"
  },
  {
    "source": "/portfolio-item/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict",
    "destination": "/voices/a-romance-a-birthplace-destroyed-memories-of-gazas-bombed-ahli-hospital-israel-palestine-conflict"
  },
  {
    "source": "/portfolio-item/a-voice-from-a-young-journalist-in-gaza-october-26-2023",
    "destination": "/voices/a-voice-from-a-young-journalist-in-gaza-october-26-2023"
  },
  {
    "source": "/portfolio-item/about-voices-on-mental-health",
    "destination": "/voices/about-voices-on-mental-health"
  },
  {
    "source": "/portfolio-item/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching",
    "destination": "/voices/all-thats-left-of-you-not-just-a-film-but-an-experience-worth-watching"
  },
  {
    "source": "/portfolio-item/close-calls-with-death",
    "destination": "/voices/close-calls-with-death"
  },
  {
    "source": "/portfolio-item/donoharm",
    "destination": "/voices/donoharm"
  },
  {
    "source": "/portfolio-item/even-the-longest-winters-end-december-2024",
    "destination": "/voices/even-the-longest-winters-end-december-2024"
  },
  {
    "source": "/portfolio-item/films-and-videos-on-gaza",
    "destination": "/resources#films"
  },
  {
    "source": "/portfolio-item/french-statement",
    "destination": "/voices/french-statement"
  },
  {
    "source": "/portfolio-item/in-memoriam-yousef-mahar-dawas",
    "destination": "/voices/in-memoriam-yousef-mahar-dawas"
  },
  {
    "source": "/portfolio-item/israeli-colleagues-seek-our-support-for-statement-on-gaza",
    "destination": "/voices/israeli-colleagues-seek-our-support-for-statement-on-gaza"
  },
  {
    "source": "/portfolio-item/israels-war-isnt-against-hamas-its-on-the-palestinian-people",
    "destination": "/voices/israels-war-isnt-against-hamas-its-on-the-palestinian-people"
  },
  {
    "source": "/portfolio-item/jerusalemite-womens-coalition",
    "destination": "/voices/jerusalemite-womens-coalition"
  },
  {
    "source": "/portfolio-item/jewish-voice-for-peace-statement",
    "destination": "/voices/jewish-voice-for-peace-statement"
  },
  {
    "source": "/portfolio-item/life-lacking-a-sense-of-safety",
    "destination": "/voices/life-lacking-a-sense-of-safety"
  },
  {
    "source": "/portfolio-item/may-2021-assault-on-palestine",
    "destination": "/voices/may-2021-assault-on-palestine"
  },
  {
    "source": "/portfolio-item/mental-health-workers-pledge-for-palestine",
    "destination": "/voices/mental-health-workers-pledge-for-palestine"
  },
  {
    "source": "/portfolio-item/nakba-2023",
    "destination": "/voices/nakba-2023"
  },
  {
    "source": "/portfolio-item/once-upon-a-time-in-palestine",
    "destination": "/voices/once-upon-a-time-in-palestine"
  },
  {
    "source": "/portfolio-item/palestine-health-justice-working-group-statement",
    "destination": "/voices/palestine-health-justice-working-group-statement"
  },
  {
    "source": "/portfolio-item/psychoanalytic-activist",
    "destination": "/voices/psychoanalytic-activist"
  },
  {
    "source": "/portfolio-item/reflections-from-a-journalist-in-gaza-january-2024",
    "destination": "/voices/reflections-from-a-journalist-in-gaza-january-2024"
  },
  {
    "source": "/portfolio-item/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine",
    "destination": "/voices/resistance-as-a-path-to-healing-the-quest-for-mental-health-in-palestine"
  },
  {
    "source": "/portfolio-item/resistance-to-occupation",
    "destination": "/voices/resistance-to-occupation"
  },
  {
    "source": "/portfolio-item/statement-condemning-the-invasion-of-birzeit",
    "destination": "/voices/statement-condemning-the-invasion-of-birzeit"
  },
  {
    "source": "/portfolio-item/statement-on-anti-semitism",
    "destination": "/statement-on-anti-semitism"
  },
  {
    "source": "/portfolio-item/statement-on-israeli-annexation",
    "destination": "/voices/statement-on-israeli-annexation"
  },
  {
    "source": "/portfolio-item/statement-on-israeli-raid-of-dci",
    "destination": "/voices/statement-on-israeli-raid-of-dci"
  },
  {
    "source": "/portfolio-item/the-battle-for-liberation",
    "destination": "/voices/the-battle-for-liberation"
  },
  {
    "source": "/portfolio-item/the-long-walk-to-palestines-freedom",
    "destination": "/voices/the-long-walk-to-palestines-freedom"
  },
  {
    "source": "/portfolio-item/the-thinking-behind-the-mental-health-workers-pledge",
    "destination": "/voices/the-thinking-behind-the-mental-health-workers-pledge"
  },
  {
    "source": "/portfolio-item/there-is-always-hope",
    "destination": "/voices/there-is-always-hope"
  },
  {
    "source": "/portfolio-item/this-must-end-dr-yasser-abu-jamei",
    "destination": "/voices/this-must-end-dr-yasser-abu-jamei"
  },
  {
    "source": "/portfolio-item/under-siege-childrens-mental-health-in-gaza",
    "destination": "/voices/under-siege-childrens-mental-health-in-gaza"
  },
  {
    "source": "/portfolio-item/update-from-palestine-october-16-2023",
    "destination": "/voices/update-from-palestine-october-16-2023"
  },
  {
    "source": "/portfolio-item/voices-from-the-diaspora",
    "destination": "/voices/voices-from-the-diaspora"
  },
  {
    "source": "/portfolio-item/voices-on-gaza",
    "destination": "/voices/voices-on-gaza"
  },
  {
    "source": "/portfolio-item/we-are-not-numbers",
    "destination": "/voices/we-are-not-numbers"
  },
  {
    "source": "/portfolio_entries/may-2021-assault-on-palestine",
    "destination": "/voices/categories/may-2021"
  },
  {
    "source": "/portfolio_entries/may-2021-assault-on-palestine/page/2",
    "destination": "/voices/categories/may-2021/page/2"
  },
  {
    "source": "/portfolio_entries/voices-from-the-west-bank",
    "destination": "/voices/categories/west-bank"
  },
  {
    "source": "/portfolio_entries/voices-on-gaza",
    "destination": "/voices/categories/gaza"
  },
  {
    "source": "/portfolio_entries/voices-on-gaza/page/2",
    "destination": "/voices/categories/gaza/page/2"
  },
  {
    "source": "/portfolio_entries/voices-on-mental-health",
    "destination": "/voices/archive"
  },
  {
    "source": "/voices-from-the-west-bank",
    "destination": "/voices/west-bank"
  },
  {
    "source": "/voices-on-gaza",
    "destination": "/voices/gaza"
  }
];

export const overallVoiceArchive = { title: "Voices on Mental Health", items: [{ title: "Statement condemning the invasion of Birzeit", href: "/voices/statement-condemning-the-invasion-of-birzeit", sourceUrl: "https://usapalmhn.org/portfolio-item/statement-condemning-the-invasion-of-birzeit/" }] };

export const unresolvedVoiceMediaReferences = [
  {
    "label": "Sumaya Awad Explains Palestinian Resistance, from First Intifada to BDS",
    "url": "https://socialism2018.s3-us-west-2.amazonaws.com/S2018-The%20Arc%20of%20Palestinian%20Resistance.mp3",
    "status": "original external media URL retained on the existing Resources Films section; no local replacement"
  },
  {
    "label": "UK-Palestine Mental Health Network statement PDF",
    "url": "https://palmhn.files.wordpress.com/2021/05/ukpalmhn-statement-about-current-crisis.pdf",
    "status": "original external PDF URL retained; no local replacement"
  },
  {
    "label": "Unresolved WordPress video shortcode [wpvideo 5OVxNOxR]",
    "url": null,
    "status": "source reference retained in Hanan Abubasheer article; no embed URL supplied"
  }
] as const;

export const voiceCrossLinks = [
  {
    title: "USA Palestine Mental Health Network Statement on Anti-Semitism",
    sourceUrl: "https://usapalmhn.org/portfolio-item/statement-on-anti-semitism/",
    href: "/statement-on-anti-semitism",
    disposition: "Reuse the existing statement page; do not create a duplicate.",
  },
  {
    title: "Films and Videos on Gaza",
    sourceUrl: "https://usapalmhn.org/portfolio-item/films-and-videos-on-gaza/",
    href: "/resources#films",
    disposition: "Reuse the existing Resources section; do not duplicate its content.",
  },
] as const;

export const preservedVoiceRoutes = [
  { path: "/voices", disposition: "Existing curated landing page remains unchanged." },
  { path: "/statement-on-anti-semitism", disposition: "Existing full statement page remains unchanged." },
] as const;
