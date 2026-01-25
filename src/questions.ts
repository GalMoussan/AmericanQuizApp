export type Category = 'general' | 'female' | 'male' | 'pregnancy' | 'hard' | 'true-false' | 'expert' | 'psychology';

export type Question = {
  id: string;
  category: Category;
  prompt: string;
  choices: string[];
  correctIndex: 0 | 1 | 2 | 3;
  type?: 'american' | 'boolean';
  explanation?: string;
};

export const questions: Question[] = [
  // --- Section 1: General & Embryology (Questions 1-20) ---
  {
    id: "q_new_1",
    category: "general",
    prompt: "מהו הגורם הראשוני הקובע אם הגונדות (בלוטות המין) הראשוניות יתפתחו לאשכים?",
    choices: [
      "נוכחות של הורמון AMH (Anti-Mullerian Hormone).",
      "היעדר כרומוזום X שני.",
      "נוכחות של כרומוזום Y הנושא את הגן SRY.",
      "נוכחות של הורמון הטסטוסטרון בשבוע ה-6."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_2",
    category: "general",
    prompt: "מהו ההבדל המהותי בהתפתחות העוברית בין מערכת מילר (Mullerian) למערכת וולף (Wolffian)?",
    choices: [
      "מערכת מילר מתפתחת מעצמה בהיעדר הורמונים, בעוד מערכת וולף דורשת גירוי הורמונלי (טסטוסטרון).",
      "מערכת מילר מתפתחת לצינורות הזרע, ומערכת וולף לחצוצורות.",
      "שתי המערכות דורשות גירוי הורמונלי פעיל כדי להתפתח.",
      "מערכת וולף מתפתחת מעצמה ללא גירוי, בעוד מערכת מילר דורשת אסטרוגן."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_3",
    category: "general",
    prompt: "אילו איברים מתפתחים ממערכת מילר (Mullerian ducts)?",
    choices: [
      "השחלות בלבד.",
      "יותרת האשך, צינור הזרע ושלפוחיות הזרע.",
      "החצוצורות, הרחם והחלקים הפנימיים של הנרתיק.",
      "השפתיים הקטנות והדגדגן."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_4",
    category: "general",
    prompt: "מהו תפקידו של ההורמון DHT (דיהידרו-טסטוסטרון) בהתפתחות העוברית?",
    choices: [
      "ניוון מערכת מילר.",
      "התמיינות איברי המין החיצוניים לזכריים (פין ושק אשכים).",
      "הפיכת הגונדה הראשונית לאשך.",
      "גרימת נדידת האשכים לשק האשכים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_5",
    category: "general",
    prompt: "תינוק נולד עם גנטיקה XY, יש לו אשכים פנימיים, אך גם רחם וחצוצורות. איזו תסמונת מתאימה לתיאור זה?",
    choices: [
      "תסמונת צינור מילר העיקש (PMDS).",
      "תסמונת קליינפלטר (Klinefelter).",
      "תסמונת טרנר (Turner).",
      "אי-רגישות לאנדרוגנים (AIS)."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_6",
    category: "general",
    prompt: "מהו הגורם הביולוגי לתסמונת צינור מילר העיקש (PMDS)?",
    choices: [
      "חוסר בגן SRY.",
      "כשל בייצור ההורמון AMH (נוגד מילר) או פגם בקולטנים שלו.",
      "חוסר בטסטוסטרון.",
      "עודף באסטרוגן."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_7",
    category: "general",
    prompt: "באיזה שבוע להריון (בממוצע) מתחילים להתפתח האשכים בעובר זכר?",
    choices: [
      "שבוע 3.",
      "שבוע 12.",
      "שבוע 20.",
      "שבוע 6."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_8",
    category: "general",
    prompt: "מה קורה לעובר XY שיש לו מוטציה באנזים 5-alpha-reductase (חסר ב-DHT)?",
    choices: [
      "הוא ייוולד כנקבה חיצונית (או עם איברי מין לא ברורים), אך בגיל ההתבגרות יעבור 'מסקוליניזציה' עקב עלייה בטסטוסטרון.",
      "הוא לא יפתח אשכים כלל.",
      "הוא יפתח רחם וחצוצורות.",
      "הוא ימות ברחם."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_9",
    category: "general",
    prompt: "מהי תסמונת טרנר (Turner Syndrome)?",
    choices: [
      "נקבה עם כרומוזום X בודד (XO).",
      "זכר עם כרומוזומים XXY.",
      "זכר ללא קולטנים לטסטוסטרון.",
      "נקבה עם עודף טסטוסטרון."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_10",
    category: "general",
    prompt: "מה מאפיין את תסמונת קליינפלטר (Klinefelter Syndrome)?",
    choices: [
      "נקבה XO.",
      "זכר XXY, המאופיין לעיתים באשכים קטנים ועקרות.",
      "זכר עם רחם.",
      "נקבה עם אשכים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_11",
    category: "general",
    prompt: "מהי הסיבה הביולוגית לתופעת AIS (Androgen Insensitivity Syndrome)?",
    choices: [
      "הגוף לא מייצר טסטוסטרון כלל.",
      "יש כרומוזומים של נקבה (XX) אך עם גן SRY.",
      "הגוף מייצר טסטוסטרון, אך הקולטנים לאנדרוגנים פגומים או חסרים.",
      "חוסר ב-AMH."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_12",
    category: "general",
    prompt: "מהו האיבר ההומולוגי (בעל אותו מקור עוברי) לשפתיים הגדולות (Labia Majora) אצל הזכר?",
    choices: [
      "שק האשכים.",
      "הפין.",
      "העורלה.",
      "הערמונית."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_13",
    category: "general",
    prompt: "מאיזה מבנה עוברי מתפתחות בלוטות סקנס (Skene's glands) בנקבה והערמונית בזכר?",
    choices: [
      "מהצינור המילריאני.",
      "מהגונדה הראשונית.",
      "מהסינוס האורו-גניטלי (Urogenital sinus).",
      "מהשק החלמון."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_14",
    category: "general",
    prompt: "בלוטות ברטולין בנקבה מתפתחות מאותה רקמה עוברית כמו:",
    choices: [
      "שלפוחיות הזרע.",
      "בלוטות קאופר (Cowper's glands).",
      "בלוטת הערמונית.",
      "האשכים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_15",
    category: "general",
    prompt: "כיצד משפיע הגן SRY על הגונדה הראשונית?",
    choices: [
      "הוא גורם לה להפריש אסטרוגן.",
      "הוא מדכא את הגנים המעודדים התפתחות שחלה ומפעיל גנים המעודדים התפתחות אשך.",
      "הוא גורם לנדידת תאי המין מהמוח.",
      "הוא משפיע ישירות על הפין."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_16",
    category: "general",
    prompt: "מהם שלושת התהליכים המרכזיים בהתפתחות העובר?",
    choices: [
      "חלוקת תאים (מיטוזה), התמיינות תאים, והתארגנות לרקמות ואיברים.",
      "מיוזה, הפריה, השרשה.",
      "נשימה, אכילה, גדילה.",
      "ביוץ, ווסת, הריון."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_17",
    category: "general",
    prompt: "מתי ניתן להבחין לראשונה במין העובר (זכר/נקבה) לפי איברי המין החיצוניים באולטרסאונד?",
    choices: [
      "שבוע 6.",
      "שבוע 8.",
      "שבוע 12.",
      "סביב שבוע 16."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_18",
    category: "general",
    prompt: "מה מתרחש בשבוע ה-12 להתפתחות העובר?",
    choices: [
      "נוצר הלב.",
      "העובר נעשה פעיל, מניע גפיים ואף משנה הבעות פנים.",
      "הריאות מבשילות.",
      "ההפריה מתרחשת."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_19",
    category: "general",
    prompt: "מהו תפקידו של הפרוסטגלנדין (PGF2a) בתהליך הלידה?",
    choices: [
      "להרפות את שריר הרחם.",
      "הוא גורם להתכווצויות שריר הרחם ולריכוך צוואר הרחם (יחד עם אוקסיטוצין).",
      "לגרום להתנוונות הגופיף הצהוב.",
      "הוא מגן על העובר מפני לחץ."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_20",
    category: "general",
    prompt: "מהו ה-SP-A (Surfactant Protein A)?",
    choices: [
      "חלבון בחלב האם.",
      "חלבון המופרש מהריאות המהווה סיגנל להתחלת הלידה.",
      "הורמון גדילה.",
      "אנזים בזרע."
    ],
    correctIndex: 1
  },

  // --- Section 2: Female & Pregnancy (Questions 21-47) ---
  {
    id: "q_new_21",
    category: "pregnancy",
    prompt: "איזו מערכת בגוף העובר היא המאוחרת ביותר להבשיל?",
    choices: [
      "מערכת הלב וכלי הדם.",
      "מערכת העיכול.",
      "מערכת השלד.",
      "מערכת חילוף הגזים (ריאות)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_22",
    category: "pregnancy",
    prompt: "כיצד משפיע מתן צלסטון (סטרואידים) לאם בלידה מוקדמת?",
    choices: [
      "הוא עוצר את הצירים.",
      "הוא מאיץ את התפתחות הריאות של העובר ומעלה את סיכויי ההישרדות.",
      "הוא גורם לעובר לגדול מהר יותר במשקל.",
      "הוא מונע זיהומים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_23",
    category: "pregnancy",
    prompt: "מהו 'קרום הכוריון' (Chorion)?",
    choices: [
      "קרום השפיר הפנימי.",
      "קרום השיליה החלק (הצד העוברי שאינו חודר לרחם).",
      "השכבה השרירית של הרחם.",
      "חבל הטבור."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_24",
    category: "pregnancy",
    prompt: "מה קורה בשלב הבלסטוציסט (כ-5-6 ימים לאחר ההפריה)?",
    choices: [
      "נוצרת הזיגוטה.",
      "העובר מקבל צורה אנושית.",
      "מתחילה התמיינות ראשונית (עובר/שליה) והתחלת ההשרשה.",
      "הלב מתחיל לפעום."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_25",
    category: "pregnancy",
    prompt: "באיזה שלב לעובר יש כבר טביעות אצבע ברורות?",
    choices: [
      "רק אחרי הלידה.",
      "בסוף השבוע השמיני (חודש שני).",
      "בסוף החודש השמיני להריון.",
      "בשבוע ה-20."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_26",
    category: "female",
    prompt: "מהי היחידה המייצרת חלב בשד?",
    choices: [
      "האונה (Lobe).",
      "הצינורית (Duct).",
      "הפטמה.",
      "האלוואולי (Alveoli)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_27",
    category: "female",
    prompt: "כמה אונות (Lobes) יש בממוצע בכל שד?",
    choices: [
      "2-3.",
      "15-20.",
      "100-200.",
      "אחת גדולה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_28",
    category: "female",
    prompt: "מהו ההורמון האחראי על ייצור החלב (Production)?",
    choices: [
      "אוקסיטוצין.",
      "אסטרוגן.",
      "פרולקטין.",
      "פרוגסטרון."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_29",
    category: "female",
    prompt: "מהו ההורמון האחראי על שחרור החלב (Let-down reflex)?",
    choices: [
      "אוקסיטוצין.",
      "פרולקטין.",
      "טסטוסטרון.",
      "FSH."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_30",
    category: "female",
    prompt: "מהו המסלול של רפלקס יצירת ושחרור החלב?",
    choices: [
      "גירוי הפטמה -> שחלה -> הפרשת אסטרוגן.",
      "התינוק בוכה -> השד מתכווץ עצמונית.",
      "גירוי הפטמה -> היפותלמוס -> היפופיזה -> שחרור אוקסיטוצין ופרולקטין.",
      "האם רואה את התינוק -> מופרש אדרנלין."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_31",
    category: "female",
    prompt: "ממה מורכבים השדיים בעיקר (מלבד רקמת הבלוטות)?",
    choices: [
      "שריר.",
      "רקמת שומן ורקמת חיבור.",
      "עצם.",
      "סחוס."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_32",
    category: "female",
    prompt: "מהו התפקיד של החלבון Kisspeptin בגיל ההתבגרות?",
    choices: [
      "הוא מדכא את ההתפתחות המינית.",
      "הוא מיוצר בשחלות.",
      "הוא גורם לצמיחת שדיים ישירות.",
      "הוא הסיגנל שמגיע להיפותלמוס ומעורר את שחרור ה-GnRH."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_33",
    category: "female",
    prompt: "מה הקשר בין משקל גוף (רקמת שומן) לתחילת גיל ההתבגרות בבנות?",
    choices: [
      "אין קשר.",
      "תאי שומן מפרישים לפטין -> לפטין מפעיל קיספפטין -> קיספפטין מפעיל GnRH.",
      "שומן סופג את ההורמונים ולכן מעכב התבגרות.",
      "רזון קיצוני מאיץ התבגרות כי הגוף בסטרס."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_34",
    category: "female",
    prompt: "מהי 'השפעה מארגנת' (Organizational effect) של הורמונים?",
    choices: [
      "השפעה הפיכה המתרחשת בבגרות.",
      "השפעה של הורמוני האם על האב.",
      "השפעה קבועה ובלתי הפיכה המתרחשת בשלב העוברי.",
      "השפעה של תזונה על הגובה."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_35",
    category: "female",
    prompt: "מהי 'השפעה מפעילה' (Activational effect) של הורמונים?",
    choices: [
      "שינוי מבני המוח בעובר.",
      "השפעה המתרחשת בבגרות, שהיא לרוב תלויה בנוכחות ההורמון באותו רגע.",
      "יצירת האשכים.",
      "קביעת המין הגנטי."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_36",
    category: "hard",
    prompt: "מהו ה-SDN (Sexually Dimorphic Nucleus) בחולדות?",
    choices: [
      "גרעין בהיפותלמוס שגדול משמעותית אצל זכרים מאשר אצל נקבות.",
      "איבר מין חיצוני.",
      "סוג של הורמון.",
      "אזור בשחלה."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_37",
    category: "hard",
    prompt: "מה קורה אם מזריקים טסטוסטרון לחולדה נקבה בהריון?",
    choices: [
      "העוברים ימותו.",
      "לא יקרה כלום.",
      "העובריות הנקבות יפתחו התנהגות זכרית בבגרותן.",
      "העובריות יהפכו לזכרים גנטיים."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_38",
    category: "hard",
    prompt: "מהו היתרון האבולוציוני של 'המלכה האדומה'?",
    choices: [
      "היכולת לרוץ מהר.",
      "יצירת שונות גנטית באמצעות רבייה מינית כדי להתמודד עם טפילים.",
      "היכולת להתרבות ללא בן זוג.",
      "שליטה של הנקבות בלהקה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_39",
    category: "female",
    prompt: "כמה כרומוזומים יש בתא סומטי (תא גוף) של אדם?",
    choices: [
      "23.",
      "92.",
      "2.",
      "46 (23 זוגות)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_40",
    category: "female",
    prompt: "מהו תהליך המיוזה?",
    choices: [
      "חלוקת תא רגילה לצמיחה.",
      "חלוקת הפחתה היוצרת תאי מין (גמטות) עם מחצית מכלל הכרומוזומים.",
      "איחוד זרע וביצית.",
      "מוות של תאים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_41",
    category: "female",
    prompt: "מהו 'אלל'?",
    choices: [
      "סוג של חלבון.",
      "כרומוזום שלם.",
      "גרסה ספציפית של גן.",
      "האזור שמחבר את הכרומטידות."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_42",
    category: "female",
    prompt: "היכן מתרחשת ההפריה בדרך כלל?",
    choices: [
      "בשחלה.",
      "בחצוצרה.",
      "ברחם.",
      "בנרתיק."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_43",
    category: "female",
    prompt: "מהו תפקיד ה-FSH במערכת הנקבית?",
    choices: [
      "לגרום לביוץ.",
      "לעורר התפתחות של זקיקים בשחלה.",
      "לפרק את רירית הרחם.",
      "למנוע הריון."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_44",
    category: "female",
    prompt: "מה גורם לביוץ (האירוע המיידי)?",
    choices: [
      "עלייה חדה ופתאומית (Gush) ברמת ה-LH.",
      "עלייה בפרוגסטרון.",
      "ירידה באסטרוגן.",
      "ווסת."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_45",
    category: "female",
    prompt: "מהו הגופיף הצהוב?",
    choices: [
      "הזקיק לאחר שהביצית חרגה ממנו, המפריש פרוגסטרון ואסטרוגן.",
      "ביצית שלא הופרתה.",
      "ציסטה בשחלה.",
      "גוף זר."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_46",
    category: "female",
    prompt: "מה תפקיד הפרוגסטרון המופרש מהגופיף הצהוב?",
    choices: [
      "לגרום לביוץ נוסף.",
      "להכין את רירית הרחם לקליטת הריון ולדכא ביוץ נוסף.",
      "לגרום להתכווצויות רחם.",
      "לייצר חלב."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_47",
    category: "female",
    prompt: "מהו אנדומטריוזיס?",
    choices: [
      "דלקת בנרתיק.",
      "חוסר ביוץ.",
      "הימצאות רקמת רירית רחם (אנדומטריום) מחוץ לחלל הרחם.",
      "סרטן השחלה."
    ],
    correctIndex: 2
  },

  // --- Section 3: Male (Questions 48-60) ---
  {
    id: "q_new_48",
    category: "male",
    prompt: "איפה נוצרים תאי הזרע?",
    choices: [
      "בשלפוחית הזרע.",
      "באבוביות הזרע בתוך האשך.",
      "בערמונית.",
      "בפין."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_49",
    category: "male",
    prompt: "מהו תפקיד תאי ליידיג (Leydig)?",
    choices: [
      "לייצר טסטוסטרון.",
      "לייצר זרע.",
      "להזין את הזרע.",
      "ליצור את נוזל הזרע."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_50",
    category: "male",
    prompt: "מהו תפקיד תאי סרטולי (Sertoli)?",
    choices: [
      "לייצר טסטוסטרון.",
      "לגרום לזקפה.",
      "לייצר LH.",
      "לתמוך ולהזין את תאי הזרע המתפתחים וליצור את מחסום דם-אשך."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_51",
    category: "male",
    prompt: "מהו מחסום דם-אשך?",
    choices: [
      "מחסום המונע יציאת זרע.",
      "מחסום הנוצר ע\"י תאי סרטולי המבודד את תאי הזרע ממערכת החיסון.",
      "מחסום המונע כניסת טסטוסטרון לאשך.",
      "קרום העוטף את האשך."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_52",
    category: "male",
    prompt: "מה תורמת שלפוחית הזרע (Seminal Vesicle) לנוזל הזרע?",
    choices: [
      "כ-70% מהנפח, כולל פרוקטוז (אנרגיה).",
      "תאי זרע.",
      "נוזל חומצי.",
      "כלום."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_53",
    category: "male",
    prompt: "מהו תפקיד בלוטת הערמונית (Prostate)?",
    choices: [
      "לייצר זרע.",
      "לייצר כ-25% מנוזל הזרע.",
      "לאגור שתן.",
      "לחמם את האשכים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_54",
    category: "male",
    prompt: "מהו מנגנון הפעולה של ויאגרה?",
    choices: [
      "היא מזריקה טסטוסטרון.",
      "היא פועלת על המוח.",
      "היא מעכבת את האנזים PDE5, מה שמאפשר זקפה ממושכת יותר.",
      "היא מכווצת שרירים בפין."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_55",
    category: "male",
    prompt: "מה קורה בשלב ה-Emission בשפיכה?",
    choices: [
      "יציאת הזרע מחוץ לגוף.",
      "זקפה.",
      "ייצור זרע.",
      "מעבר הזרע והנוזלים לשופכה הפנימית (תהליך אוטונומי)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_56",
    category: "male",
    prompt: "מהו ה-Epididymis (יותרת האשך)?",
    choices: [
      "מקום ייצור הזרע.",
      "בלוטה המפרישה הורמונים.",
      "מקום הבשלת הזרע (רכישת תנועה) ואחסונו.",
      "צינור השתן."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_57",
    category: "male",
    prompt: "מדוע האשכים נמצאים מחוץ לגוף?",
    choices: [
      "כדי שיהיו בולטים.",
      "כי הטמפרטורה הדרושה לייצור זרע נמוכה בכ-2 מעלות מטמפרטורת הגוף.",
      "אין סיבה מיוחדת.",
      "כדי להגן עליהם."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_58",
    category: "male",
    prompt: "מהי אנדרופאוזה?",
    choices: [
      "הפסקת המחזור אצל גברים.",
      "עקרות מוחלטת.",
      "הגדלת הערמונית.",
      "ירידה הדרגתית ברמת הטסטוסטרון עם הגיל."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_59",
    category: "male",
    prompt: "מהו תהליך הקפסיטציה (Capacitation)?",
    choices: [
      "יצירת הזרע באשך.",
      "תהליך הכשרה שעובר הזרע במערכת המין הנקבית המאפשר לו להפרות ביצית.",
      "כניסת הזרע לביצית.",
      "התחלקות הביצית."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_60",
    category: "male",
    prompt: "מהי תגובת האקרוזום?",
    choices: [
      "שחרור אנזימים מראש הזרע המאפשרים לו לחדור את מעטפות הביצית.",
      "תנועת הזנב.",
      "התקשות הביצית.",
      "יצירת הגרעין."
    ],
    correctIndex: 0
  },

  // --- Section 4: Hard / Integrated (Questions 61-80) ---
  {
    id: "q_new_61",
    category: "hard",
    prompt: "מהו הזיגוטה?",
    choices: [
      "תא זרע.",
      "ביצית לא מופרית.",
      "התא הראשון של העובר שנוצר מאיחוד הזרע והביצית (דיפלואידי).",
      "השליה."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_62",
    category: "hard",
    prompt: "מה קורה למספר התאים בעובר בימים הראשונים (Cleavage)?",
    choices: [
      "המספר גדל אך הנפח הכולל נשאר דומה.",
      "הנפח גדל פי 100.",
      "התאים מתים.",
      "נוצרים איברים."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_63",
    category: "hard",
    prompt: "מהו הבלסטוציסט?",
    choices: [
      "העובר בשלב של כדור תאים עם חלל נוזלי (לפני השרשה).",
      "הזקיק בשחלה.",
      "השיליה.",
      "התינוק בלידה."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_64",
    category: "hard",
    prompt: "מה תפקיד ה-hCG בהריון?",
    choices: [
      "לפרק את השליה.",
      "לגרום לצירי לידה.",
      "לייצר חלב.",
      "לשמור על הגופיף הצהוב פעיל כדי שיפריש פרוגסטרון בתחילת ההריון."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_65",
    category: "hard",
    prompt: "מהי השליה?",
    choices: [
      "איבר עוברי בלבד.",
      "שק השפיר.",
      "חבל הטבור.",
      "איבר משותף לאם ולעובר המאפשר חילוף חומרים ללא ערבוב דם."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_66",
    category: "hard",
    prompt: "כמה כלי דם בחבל הטבור?",
    choices: [
      "2 ורידים ועורק אחד.",
      "2 עורקים (מוציאים פסולת) ווריד אחד (מביא חמצן).",
      "רק ורידים.",
      "רק עורקים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_67",
    category: "hard",
    prompt: "מהי שליית פתח?",
    choices: [
      "מצב תקין.",
      "שליה המכסה את פתח צוואר הרחם (מצב מסוכן).",
      "שליה שנפרדת.",
      "שליה כפולה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_68",
    category: "hard",
    prompt: "מהו רפלקס פרגוסון (Ferguson Reflex)?",
    choices: [
      "משוב שלילי.",
      "רפלקס הנקה.",
      "רפלקס זקפה.",
      "משוב חיובי בלידה: לחץ על צוואר הרחם -> אוקסיטוצין -> כיווצים."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_69",
    category: "hard",
    prompt: "מהו הגן על כרומוזום Y הקובע זכריות?",
    choices: [
      "BRCA.",
      "SRY.",
      "AMH.",
      "KISS1."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_70",
    category: "hard",
    prompt: "מהי רקומבינציה (שחלוף)?",
    choices: [
      "החלפת מקטעי דנ\"א בין כרומוזומים הומולוגיים במיוזה (מגדיל שונות).",
      "שכפול הדנ\"א.",
      "תיקון טעויות.",
      "חלוקת התא."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_71",
    category: "hard",
    prompt: "איזה הורמון מופרש מתאי שומן ומשפיע על התבגרות מינית?",
    choices: [
      "אינסולין.",
      "אדרנלין.",
      "לפטין (Leptin).",
      "קורטיזול."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_72",
    category: "hard",
    prompt: "מהי ההשפעה של אסטרוגן על העצמות בגיל ההתבגרות?",
    choices: [
      "פירוק העצם.",
      "בריכוז נמוך מעודד צמיחה, בריכוז גבוה גורם לסגירת לוחיות הגדילה (עצירה).",
      "אין השפעה.",
      "הופך אותן לגמישות."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_73",
    category: "hard",
    prompt: "מהו ה-Gush של ה-LH?",
    choices: [
      "ירידה ב-LH.",
      "דימום ווסתי.",
      "עלייה פתאומית וחדה ב-LH הגורמת לביוץ.",
      "הפרשה של חלב."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_74",
    category: "hard",
    prompt: "מה קורה לרוב הזקיקים בשחלה?",
    choices: [
      "מבייצים.",
      "הופכים לזרע.",
      "נשארים רדומים לנצח.",
      "מתנוונים (Atresia)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_75",
    category: "hard",
    prompt: "מהי הפעולה של שריר ה-Bulbospongiosus אצל גברים?",
    choices: [
      "כיווץ שלפוחית השתן.",
      "הרפיית הפין.",
      "ייצור זרע.",
      "דחיפת הזרע החוצה בשפיכה (Expulsion)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_76",
    category: "hard",
    prompt: "מהו החלק שאחראי על התנועה בתא הזרע?",
    choices: [
      "הראש.",
      "הזנב (Flagellum).",
      "האקרוזום.",
      "הגרעין."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_77",
    category: "hard",
    prompt: "מה מכיל האקרוזום?",
    choices: [
      "דנ\"א.",
      "סוכר.",
      "מיטוכונדריה.",
      "אנזימים מפרקי חלבון לחדירת הביצית."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_78",
    category: "hard",
    prompt: "מהי תופעת 'מיני-התבגרות' (Minipuberty)?",
    choices: [
      "התבגרות מוקדמת בגיל 6.",
      "עלייה בטסטוסטרון בתינוקות זכרים לאחר הלידה (חודשים 1-6).",
      "התפתחות שדיים אצל בנים.",
      "מחזור בגיל 8."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_79",
    category: "hard",
    prompt: "מהו היחס בין גנים לחלבונים?",
    choices: [
      "חלבונים יוצרים גנים.",
      "גנים (דנ\"א) מכילים את הקוד לייצור חלבונים (דרך רנ\"א).",
      "הם אותו דבר.",
      "אין קשר."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_80",
    category: "hard",
    prompt: "מהו תפקיד הריסים בחצוצרה?",
    choices: [
      "לסנן זרע.",
      "להניע את הביצית/עובר לכיוון הרחם.",
      "לייצר הורמונים.",
      "לנקות את הרחם."
    ],
    correctIndex: 1
  },

  // --- Section 5: Expert (Questions 81-100) ---
  {
    id: "q_new_81",
    category: "expert",
    prompt: "מהי הסיבה העיקרית לווסת?",
    choices: [
      "עלייה ב-LH.",
      "ביוץ.",
      "הריון.",
      "נפילת רמות הפרוגסטרון והאסטרוגן עקב התנוונות הגופיף הצהוב."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_82",
    category: "expert",
    prompt: "מהו 'תא הפלואידי'?",
    choices: [
      "תא עם 2n כרומוזומים.",
      "תא ללא גרעין.",
      "תא עור.",
      "תא עם n כרומוזומים (כמו גמטה)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_83",
    category: "expert",
    prompt: "מהו 'תא דיפלואידי'?",
    choices: [
      "תא עם n כרומוזומים.",
      "תא מת.",
      "תא עם 2n כרומוזומים (כמו זיגוטה או תא גוף).",
      "תא זרע."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_84",
    category: "expert",
    prompt: "מהו תפקיד ה-GnRH?",
    choices: [
      "מופרש מהשחלה.",
      "מופרש מההיפותלמוס ומגרה את ההיפופיזה להפריש FSH ו-LH.",
      "גורם לזקפה.",
      "בונה שרירים."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_85",
    category: "expert",
    prompt: "איזה הורמון מעכב את ה-FSH בגברים?",
    choices: [
      "טסטוסטרון בלבד.",
      "LH.",
      "אדרנלין.",
      "אינהיבין (מופרש מתאי סרטולי)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_86",
    category: "expert",
    prompt: "מהי טמפרטורת האשכים הרצויה?",
    choices: [
      "37 מעלות.",
      "כ-2 מעלות מתחת לטמפרטורת הגוף.",
      "40 מעלות.",
      "20 מעלות."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_87",
    category: "expert",
    prompt: "מהי 'התמיינות' (Differentiation)?",
    choices: [
      "חלוקת תאים.",
      "מוות תאי.",
      "תהליך בו תאים זהים גנטית הופכים לתאים בעלי תפקיד וצורה שונים ע\"י הפעלת גנים שונים.",
      "גדילה."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_88",
    category: "expert",
    prompt: "מהי שכבת ה-Decidua?",
    choices: [
      "החלק האימהי של השליה (רירית הרחם שהשתנתה).",
      "עור העובר.",
      "חלק מהזרע.",
      "הורמון."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_89",
    category: "expert",
    prompt: "מהו השק החלמון (Yolk Sac) באדם?",
    choices: [
      "מקור המזון העיקרי עד הלידה.",
      "מבנה עוברי מוקדם המייצר תאי דם ראשוניים ומתנוון בהמשך.",
      "השליה.",
      "הקיבה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_90",
    category: "expert",
    prompt: "מתי מתחילה המערכת המילריאנית להתפתח בנקבה?",
    choices: [
      "רק בגיל ההתבגרות.",
      "מיד בהפריה.",
      "בשליש הראשון להריון (שבועות 8-12), כברירת מחדל בהיעדר AMH.",
      "בלידה."
    ],
    correctIndex: 2
  },
  {
    id: "q_new_91",
    category: "expert",
    prompt: "מהי הסיבה שעובר XY עם חוסר ב-5-alpha-reductase נולד עם איברי מין נקביים/עמומים?",
    choices: [
      "אין לו טסטוסטרון.",
      "יש לו טסטוסטרון, אך אין לו את האנזים שהופך אותו ל-DHT, ו-DHT הוא זה שבונה את הפין ושק האשכים בעובר.",
      "יש לו עודף אסטרוגן.",
      "ה-SRY שלו פגום."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_92",
    category: "expert",
    prompt: "מהו הקריוטיפ של תסמונת טרנר?",
    choices: [
      "46,XX.",
      "45,XO (חסר כרומוזום X).",
      "47,XXY.",
      "46,XY."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_93",
    category: "expert",
    prompt: "מהי ההשפעה של אסטרוגן על רירית הרחם?",
    choices: [
      "פירוק.",
      "שגשוג וצמיחה (פרוליפרציה) בשלב הפוליקולרי.",
      "הפיכה לרירית מפרישה.",
      "אין השפעה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_94",
    category: "expert",
    prompt: "מהו הטריגר להתחלת התפתחות זקיקים בתחילת המחזור?",
    choices: [
      "עלייה בפרוגסטרון.",
      "עלייה קלה ב-FSH (עקב הסרת המשוב השלילי בסוף המחזור הקודם).",
      "הריון.",
      "ביוץ."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_95",
    category: "expert",
    prompt: "מהו ה-Corpus Cavernosum?",
    choices: [
      "הגופיף הצהוב.",
      "הרקמה המחילתית (זקיפה) בפין ובדגדגן.",
      "השחלה.",
      "הרחם."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_96",
    category: "expert",
    prompt: "מהו תפקיד המוצין (Mucin) בצוואר הרחם?",
    choices: [
      "להפוך את הריר לצמיגי וחוסם (בימים שאין ביוץ).",
      "להרוג זרע.",
      "לעזור ללידה.",
      "לייצר חלב."
    ],
    correctIndex: 0
  },
  {
    id: "q_new_97",
    category: "expert",
    prompt: "מהי ורטיקה (Vertica)?",
    choices: [
      "גלולה למניעת הריון.",
      "סוג של קונדום.",
      "תנוחה.",
      "מכשיר ישראלי חדש לטיפול בבעיות זקפה (שמירה על קולגן/רקמה)."
    ],
    correctIndex: 3
  },
  {
    id: "q_new_98",
    category: "expert",
    prompt: "מהו ה-Lactiferous duct?",
    choices: [
      "צינור הזרע.",
      "צינורית החלב המובילה חלב מהאוניות לפטמה.",
      "חבל הטבור.",
      "החצוצרה."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_99",
    category: "expert",
    prompt: "מהו המסקנה העיקרית לגבי הבדלים מולדים במוח (SDN) בין זכרים לנקבות בבע\"ח?",
    choices: [
      "אין הבדלים.",
      "יש הבדלים מבניים הנובעים מחשיפה לטסטוסטרון בשלב העוברי ('השפעה מארגנת').",
      "ההבדלים נוצרים רק מהסביבה.",
      "הנקבות גדולות יותר."
    ],
    correctIndex: 1
  },
  {
    id: "q_new_100",
    category: "expert",
    prompt: "מהו האנזים שחיוני לחדירת הזרע לביצית?",
    choices: [
      "PDE5.",
      "לקטאז.",
      "עמילאז.",
      "אנזימים פרוטאוליטיים (מפרקי חלבון) באקרוזום."
    ],
    correctIndex: 3
  },

  // --- Section 6: True / False (Questions 101-150) ---
  {
    id: "tf_1",
    category: "true-false",
    prompt: "גן SRY נמצא בדרך כלל על כרומוזום X",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_2",
    category: "true-false",
    prompt: "בנוכחות גן SRY, הגונדות הראשוניות הופכות לשחלות",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_3",
    category: "true-false",
    prompt: "מערכת מילר (Mullerian system) מתפתחת למערכת המין הנקבית",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_4",
    category: "true-false",
    prompt: "התפתחות מערכת מילר דורשת גירוי הורמונלי אקטיבי מהשחלות בעובר",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_5",
    category: "true-false",
    prompt: "אצל זכר תקין, ההורמון AMH גורם לניוון של מערכת מילר",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_6",
    category: "true-false",
    prompt: "השפתיים הגדולות בנקבה ושק האשכים בזכר מתפתחים מאותה רקמה עוברית",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_7",
    category: "true-false",
    prompt: "הפין והדגדגן הם איברים הומולוגיים",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_8",
    category: "true-false",
    prompt: "ללא ההורמון DHT, איברי המין החיצוניים של עובר זכר (XY) יראו כנקביים",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_9",
    category: "true-false",
    prompt: "תסמונת טרנר מאופיינת בכרומוזומים XXY",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_10",
    category: "true-false",
    prompt: "אנשים עם תסמונת AIS הם בעלי כרומוזומים XY אך נראים חיצונית כנקבות",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_11",
    category: "true-false",
    prompt: "תאי המין (גמטות) נוצרים בחלוקת מיטוזה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_12",
    category: "true-false",
    prompt: "רבייה מינית מגבירה את השונות הגנטית באוכלוסייה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_13",
    category: "true-false",
    prompt: "בתאי גוף האדם יש 23 זוגות אללים לכל גן",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_14",
    category: "true-false",
    prompt: "ההפריה מתרחשת בדרך כלל ברחם",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_15",
    category: "true-false",
    prompt: "הגופיף הצהוב נוצר מהזקיק לאחר הביוץ",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_16",
    category: "true-false",
    prompt: "הגופיף הצהוב מפריש רק אסטרוגן",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_17",
    category: "true-false",
    prompt: "ירידה ברמת הפרוגסטרון והאסטרוגן גורמת לווסת",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_18",
    category: "true-false",
    prompt: "טמפרטורת האשכים צריכה להיות גבוהה מטמפרטורת הגוף לייצור זרע",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_19",
    category: "true-false",
    prompt: "תאי ליידיג אחראים על ייצור טסטוסטרון",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_20",
    category: "true-false",
    prompt: "שלפוחית הזרע תורמת כ-70% מנפח נוזל הזרע",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_21",
    category: "true-false",
    prompt: "ויאגרה גורמת לזקפה ללא צורך בגירוי מיני",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_22",
    category: "true-false",
    prompt: "משוב שלילי נועד לשמור על הומיאוסטזיס",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_23",
    category: "true-false",
    prompt: "רפלקס פרגוסון בלידה הוא דוגמה למשוב שלילי",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_24",
    category: "true-false",
    prompt: "הזיגוטה היא תא דיפלואידי (2n)",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_25",
    category: "true-false",
    prompt: "הבלסטוציסט משתרש ברחם כ-30 שעות לאחר ההפריה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_26",
    category: "true-false",
    prompt: "קרום הכוריון יוצר את החלק העוברי של השליה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_27",
    category: "true-false",
    prompt: "בחבל הטבור יש שני ורידים ועורק אחד",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_28",
    category: "true-false",
    prompt: "הווריד בחבל הטבור מביא דם עשיר בחמצן מהשליה לעובר",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_29",
    category: "true-false",
    prompt: "הריאות של העובר מתפקדות בנשימה החל מהחודש הרביעי",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_30",
    category: "true-false",
    prompt: "מתן צלסטון לאם מאיץ את הבשלת ריאות העובר",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_31",
    category: "true-false",
    prompt: "שדיים מורכבים בעיקר מרקמת שריר",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_32",
    category: "true-false",
    prompt: "יחידת ייצור החלב בשד נקראת Alveoli",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_33",
    category: "true-false",
    prompt: "הורמון הפרולקטין אחראי על רפלקס שחרור החלב",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_34",
    category: "true-false",
    prompt: "הורמון ה-Kisspeptin הוא הטריגר לתחילת גיל ההתבגרות",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_35",
    category: "true-false",
    prompt: "רזון קיצוני עלול לגרום להתבגרות מינית מוקדמת",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_36",
    category: "true-false",
    prompt: "'השפעה מארגנת' של הורמונים היא הפיכה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_37",
    category: "true-false",
    prompt: "באזור ה-SDN במוח חולדות, גרעין הזכר גדול משל הנקבה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_38",
    category: "true-false",
    prompt: "חשיפת עוברית נקבה לטסטוסטרון גורמת להתנהגות זכרית בבגרות",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_39",
    category: "true-false",
    prompt: "אנדומטריוזיס הוא מצב תקין של הרחם",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_40",
    category: "true-false",
    prompt: "בלוטות ברטולין אחראיות על סיכוך הנרתיק",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_41",
    category: "true-false",
    prompt: "תאי זרע יכולים לשרוד בגוף האישה מספר ימים",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_42",
    category: "true-false",
    prompt: "הביצית חיונית להפריה למשך שבוע לאחר הביוץ",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_43",
    category: "true-false",
    prompt: "האקרוזום נמצא בזנב הזרע",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_44",
    category: "true-false",
    prompt: "גלולת ויאגרה מרפה שרירים חלקים בכלי הדם",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_45",
    category: "true-false",
    prompt: "דם האם ודם העובר מתערבבים בחופשיות בשליה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_46",
    category: "true-false",
    prompt: "ה-hCG מופרש מהשחלה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_47",
    category: "true-false",
    prompt: "בשבוע 8 להריון כבר קיימים יסודות לכל איברי הגוף",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_48",
    category: "true-false",
    prompt: "טביעות אצבע נוצרות רק לאחר הלידה",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1, // false
    type: 'boolean'
  },
  {
    id: "tf_49",
    category: "true-false",
    prompt: "אצל עופות, הזכר הוא ZZ והנקבה ZW",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  },
  {
    id: "tf_50",
    category: "true-false",
    prompt: "בלוטות סקנס (Skene's) הומולוגיות לערמונית",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0, // true
    type: 'boolean'
  }
];