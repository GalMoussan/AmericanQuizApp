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
  // --- Section 1: Multiple Choice (American) - New Questions 1-50 ---
  {
    id: "q_extra_1",
    category: "general",
    prompt: "על פי לוח הזמנים האבולוציוני שהוצג, לפני כמה זמן בערך הופיעו יצורים רב-תאיים?",
    choices: ["4 מיליארד שנה", "23 מיליון שנה", "1250 מיליון שנה", "500 מיליון שנה"],
    correctIndex: 2
  },
  {
    id: "q_extra_2",
    category: "general",
    prompt: "מהי ה'הנצה' (Budding) בהקשר של הידרה (Hydra)?",
    choices: [
      "תהליך של רבייה מינית המופעל בתנאי עקה",
      "סוג של רבייה א-מינית בה צאצא מתפתח כבליטה על גוף ההורה ומתנתק",
      "שלב יצירת הגמטות בזמן התחדשות",
      "מנגנון נשימה דיפוזי דרך דופן הגוף"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_3",
    category: "hard",
    prompt: "בניסוי המחשבתי על החתולים: אם נשווה קצב גידול אוכלוסייה א-מינית למינית, איזו נוסחה מייצגת את גידול האוכלוסייה המינית (4 צאצאים לזוג)?",
    choices: ["4^n", "10^6 × 2^n", "n + 10^6", "2^n / 4"],
    correctIndex: 1
  },
  {
    id: "q_extra_4",
    category: "general",
    prompt: "מהו תפקיד ה'צנטרומר' (Centromere) בחלוקת המיטוזה?",
    choices: [
      "סינתזת חלבונים לבניית כישור החלוקה",
      "יצירת קרום התא החדש בטלופאזה",
      "חיבור בין שתי כרומטידות אחיות ונקודת אחיזה לסיבים",
      "שם נרדף לאזור הגרעין המכיל את הנוקלאולוס"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_5",
    category: "male",
    prompt: "מהו ה-Rete Testis ('רשת האשך')?",
    choices: [
      "מערכת צינורות קצרים אליהם מתנקזות אבוביות הזרע לפני המעבר ליותרת האשך",
      "רשת נימים המקיפה את תאי הליידיג",
      "קרום סיבי העוטף את האשך מבחוץ",
      "השריר החלק האחראי על הרמת האשכים"
    ],
    correctIndex: 0
  },
  {
    id: "q_extra_6",
    category: "male",
    prompt: "מהו אחוז התינוקות הזכרים שנולדים עם אשך טמיר (Undescended testicle)?",
    choices: ["כ-50%", "כ-10%", "כ-3%", "פחות מ-0.1%"],
    correctIndex: 2
  },
  {
    id: "q_extra_7",
    category: "male",
    prompt: "מהו תפקיד ה-Tunica Albuginea בתהליך הזקפה?",
    choices: [
      "שחרור מוליכים עצביים מהמערכת הפארא-סימפתטית",
      "ייצור נוזל סיכוך לצינור השופכה",
      "לחיצה על הוורידים למניעת בריחת דם ושימור הלחץ בסינוסים",
      "עיכוב האנזים PDE5 ברקמה המחילתית"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_8",
    category: "expert",
    prompt: "היכן ממוקם המכשיר הרפואי החדשני 'ורטיקה' (Vertica) שנמצא בניסוי קליני?",
    choices: ["אוניברסיטת תל אביב", "בי\"ח שיבא", "בי\"ח רמב\"ם (נוירו-אורולוגיה)", "מכון ויצמן"],
    correctIndex: 2
  },
  {
    id: "q_extra_9",
    category: "pregnancy",
    prompt: "מהו ה-Mucus Plug (הפקק הרירי)?",
    choices: [
      "חסימה פתולוגית בחצוצרה המונעת הפריה",
      "ריר צמיגי החוסם את צוואר הרחם ומגן מפני זיהומים",
      "שאריות של רירית הרחם לאחר המחזור",
      "חלק מהמבנה הפנימי של השלייה"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_10",
    category: "pregnancy",
    prompt: "מהו מקורו של קרום השפיר (Amnion)?",
    choices: [
      "מהטרופובלסט (השכבה החיצונית של הבלסטוציסט)",
      "מהתאים הפנימיים של הבלסטוציסט (Inner Cell Mass)",
      "מרירית הרחם האימהית בלבד",
      "מתאי הדם הראשוניים של שק החלמון"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_11",
    category: "pregnancy",
    prompt: "כיצד משתנה הרכב מי השפיר במהלך ההריון?",
    choices: [
      "הם הופכים לדם עוברי עשיר בנוגדנים",
      "בתחילה מהאם, ובהמשך מורכבים בעיקר משתן העובר",
      "הם נספגים לחלוטין לקראת החודש התשיעי",
      "הם מוחלפים בחלב ראשוני המיוצר ברחם"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_12",
    category: "pregnancy",
    prompt: "מהו רפלקס האחיזה (Grasping Reflex)?",
    choices: [
      "תנועת התינוק לאחיזת חבל הטבור ברחם",
      "סגירת אצבעות היד בחוזקה בתגובה למגע בכף היד",
      "חיפוש הפטמה בתגובה למגע בלחי",
      "תנועת רגליים אוטומטית כנגד משטח"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_13",
    category: "pregnancy",
    prompt: "מהו רפלקס הצעידה (Stepping Reflex)?",
    choices: [
      "תנועת הזרע לכיוון הביצית",
      "תנועות הליכה אוטומטיות ביילוד כאשר רגליו נוגעות במשטח",
      "הליכה רצונית המתחילה בגיל 12 חודשים",
      "בעיטות העובר ברחם המעידות על חיוניות"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_14",
    category: "expert",
    prompt: "מהי תסמונת דה-לה-שאפל (De la Chapelle syndrome)?",
    choices: [
      "נקבה עם חוסר מוחלט בארומטאז",
      "זכר גנטי XY שנראה כנקבה עקב חוסר ב-SRY",
      "זכר XX הנוצר מעבר של גן SRY לכרומוזום X",
      "חוסר מוחלט בייצור 5-אלפא-רדוקטאז"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_15",
    category: "female",
    prompt: "מהו הטיפול ההורמונלי הנדרש לנשים עם תסמונת טרנר (XO)?",
    choices: [
      "מתן אסטרוגן להתפתחות סימני מין משניים ולאחר מכן שילוב פרוגסטרון",
      "מתן טסטוסטרון לעידוד צפיפות העצם",
      "הזרקת GnRH בפעימות לגירוי השחלות",
      "מתן קורטיזול למניעת איבוד מלחים"
    ],
    correctIndex: 0
  },
  {
    id: "q_extra_16",
    category: "expert",
    prompt: "מהי היפרפלזיה מולדת של יותרת הכליה (CAH)?",
    choices: [
      "חוסר באדרנלין הגורם לעייפות כרונית",
      "חוסר בייצור קורטיזול המוביל לייצור עודף של אנדרוגנים בעוברית (XX)",
      "גידול שפיר ביותרת הכליה המפריש אסטרוגן",
      "אי-ספיקת כליות עוברית המונעת ייצור שתן"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_17",
    category: "expert",
    prompt: "מהו אחוז הנשים עם CAH שמזדהות כבעלות זהות מגדרית גברית?",
    choices: ["100%", "כ-50%", "כ-5%", "0%"],
    correctIndex: 2
  },
  {
    id: "q_extra_18",
    category: "expert",
    prompt: "מהי הסיבה להפסקת בדיקות המגדר (SRY) באולימפיאדה החל משנת 2000?",
    choices: [
      "הבדיקה הייתה יקרה ולא מדויקת",
      "הבנה ש-SRY בנשים עם AIS אינו מעניק יתרון פיזיולוגי",
      "כי לכל הנשים המשתתפות יש SRY",
      "עקב לחץ פוליטי של הוועד האולימפי"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_19",
    category: "female",
    prompt: "מהו ה-Lactiferous Sinus בשד?",
    choices: [
      "השקיק המייצר את החלב",
      "הרחבה בצינורית החלב מתחת לעטרה לאגירה זמנית של חלב",
      "סוג של דלקת בבלוטות החלב",
      "רשת נימי הדם המזינה את השד"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_20",
    category: "female",
    prompt: "מהו תפקיד רצועות קופר (Cooper's Ligaments) בשד?",
    choices: [
      "הפרשת הורמון האוקסיטוצין לשחרור חלב",
      "אספקת דם עשיר בחמצן לאונות",
      "תמיכה מבנית וחיבור השד לשריר החזה",
      "כיווץ הפטמה בתגובה לקור"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_21",
    category: "female",
    prompt: "היכן מיוצר ההורמון לפטין (Leptin)?",
    choices: ["בהיפותלמוס", "בשחלות", "בתאי שומן (Adipose tissue)", "בכבד"],
    correctIndex: 2
  },
  {
    id: "q_extra_22",
    category: "expert",
    prompt: "לאיזה אזור במוח מגיע ה-Kisspeptin כדי להתחיל את גיל ההתבגרות?",
    choices: ["לקורטקס הראייתי", "למוח הקטן", "לגרעין ה-Arcuate בהיפותלמוס", "לגזע המוח"],
    correctIndex: 2
  },
  {
    id: "q_extra_23",
    category: "hard",
    prompt: "מהי ההשפעה של חלבון Alpha-fetoprotein (AFP) בעובר חולדה נקבה?",
    choices: [
      "המרה של אסטרוגן לטסטוסטרון",
      "קשירה לאסטרוגן למניעת חדירתו למוח וזכריזציה שלו",
      "דיכוי ייצור ה-GnRH בשחלה",
      "עידוד התפתחות מערכת מילר"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_24",
    category: "hard",
    prompt: "מה קורה לטסטוסטרון שנכנס למוח של עובר זכר (חולדה)?",
    choices: [
      "הוא נהרס על ידי מערכת החיסון",
      "הוא הופך לאסטרוגן (באמצעות ארומטאז) הגורם לזכריזציה של המוח",
      "הוא הופך ל-FSH בתוך בלוטת ההיפופיזה",
      "הוא נקשר ל-AFP ויוצא לדם"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_25",
    category: "expert",
    prompt: "באיזו מדינה מוטציה של חוסר ב-5-אלפא-רדוקטאז נפוצה יחסית?",
    choices: ["שוודיה", "אוסטרליה", "הרפובליקה הדומיניקנית", "יפן"],
    correctIndex: 2
  },
  {
    id: "q_extra_26",
    category: "expert",
    prompt: "מהי הנטייה המינית הנפוצה בקרב אנשים עם תסמונת AIS?",
    choices: ["משיכה לגברים (זהות נשית)", "משיכה לנשים", "א-מיניות", "משיכה לשני המינים באופן שווה"],
    correctIndex: 0
  },
  {
    id: "q_extra_27",
    category: "pregnancy",
    prompt: "מהו תפקיד ה-Chorion Frondosum?",
    choices: [
      "החלק החלק בשק השפיר",
      "החלק העוברי בשלייה המכיל סיסים (Villi) לחילוף חומרים",
      "המקום ממנו מופרשים מי השפיר",
      "הקרום העוטף את חבל הטבור"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_28",
    category: "pregnancy",
    prompt: "מהו ה-Chorion Laeve?",
    choices: [
      "החלק החלק של קרום הכוריון שאינו משמש כשליה פעילה",
      "שק השפיר המלא בנוזל",
      "רירית הרחם האימהית המשתנה",
      "המבנה המחבר בין השליה לרחם"
    ],
    correctIndex: 0
  },
  {
    id: "q_extra_29",
    category: "pregnancy",
    prompt: "מהי השכבה Decidua Parietalis?",
    choices: [
      "השכבה העוטפת את העובר ישירות",
      "דופן שריר הרחם",
      "חלק מרירית הרחם שבהיקף, שלא נמצא מתחת לשליה",
      "החלק הפנימי של צוואר הרחם"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_30",
    category: "female",
    prompt: "מה קורה לזקיק שהתחיל להתפתח אך לא הגיע לביוץ?",
    choices: ["הוא מחכה למחזור הבא", "הוא הופך לביצית נוספת", "הוא עובר ניוון ומוות (Atresia)", "הוא הופך לגופיף צהוב"],
    correctIndex: 2
  },
  {
    id: "q_extra_31",
    category: "general",
    prompt: "מהו הגורם העיקרי המבדיל בין פרוקריוטים לאאוקריוטים ברמת התא?",
    choices: [
      "קיום קרום תא",
      "קיום דנ\"א",
      "היעדר גרעין תא העוטף את החומר התורשתי בפרוקריוטים",
      "יכולת לבצע מיטוזה"
    ],
    correctIndex: 2
  },
  {
    id: "q_extra_32",
    category: "general",
    prompt: "כמה שנים נמשכה האבולוציה מרבייה א-מינית למינית?",
    choices: ["כ-50 שנה", "כמיליארד שנים", "כ-100 מיליון שנה", "זה קרה מיד"],
    correctIndex: 1
  },
  {
    id: "q_extra_33",
    category: "general",
    prompt: "מהו מבנה הכרומוזום לפני חלוקת התא?",
    choices: [
      "סליל יחיד של רנ\"א",
      "שתי כרומטידות אחיות המחוברות בצנטרומר",
      "כדור חלבון דחוס",
      "מבנה של ארבעה כרומוזומים נפרדים"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_34",
    category: "general",
    prompt: "מהו ה-Sex-determining Region Y?",
    choices: ["אזור במוח", "הורמון מין", "השם המלא של הגן SRY", "אזור בשחלה"],
    correctIndex: 2
  },
  {
    id: "q_extra_35",
    category: "expert",
    prompt: "איזו תסמונת מאופיינת בסיכון גבוה פי 10 לאוטיזם?",
    choices: ["תסמונת טרנר", "תסמונת דה-לה-שאפל", "תסמונת קליינפלטר (XXY)", "AIS"],
    correctIndex: 2
  },
  {
    id: "q_extra_36",
    category: "male",
    prompt: "מהי התכונה הפיזית האופיינית לגברים עם תסמונת קליינפלטר?",
    choices: [
      "קומה נמוכה מאוד",
      "גבוהים, אגן רחב, לעיתים צמיחת שדיים",
      "שיעור יתר קיצוני",
      "קול עמוק במיוחד"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_37",
    category: "expert",
    prompt: "מהו תפקיד ה-Gonadotropins (FSH, LH)?",
    choices: [
      "ויסות רמת הסוכר",
      "הבשלת הגונדות ופיתוח תאי והורמוני מין",
      "גרימת גדילת עצמות ליניארית",
      "שליטה על מחזור השינה"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_38",
    category: "general",
    prompt: "מהו ה-Bipotential Gonad?",
    choices: [
      "גונדה עם שני אשכים",
      "שלב עוברי בו לגונדה פוטנציאל להפוך לאשך או לשחלה",
      "גונדה המייצרת זרע וביציות בו זמנית",
      "בלוטה המפרישה אסטרוגן וטסטוסטרון יחד"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_39",
    category: "male",
    prompt: "מה מהבאים מתפתח מהסינוס האורו-גניטלי (ולא מצינור וולף)?",
    choices: ["יותרת האשך", "צינור הזרע", "שלפוחית הזרע", "בלוטת הערמונית (Prostate)"],
    correctIndex: 3
  },
  {
    id: "q_extra_40",
    category: "expert",
    prompt: "מהי כמות החומר הגנטי בתא מין (גמטה) במונחי C?",
    choices: ["4C", "2C", "C", "אפס"],
    correctIndex: 2
  },
  {
    id: "q_extra_41",
    category: "general",
    prompt: "מדוע זיהוי מין העובר באולטרסאונד אפשרי בבירור רק סביב שבוע 16?",
    choices: [
      "כי העובר קטן מדי קודם",
      "כי איברי המין החיצוניים דומים מאוד בשלבים מוקדמים",
      "כי העובר מסתתר בדרך כלל",
      "כי המכשור לא רגיש מספיק קודם"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_42",
    category: "general",
    prompt: "מהו ה-Genital Ridge?",
    choices: ["אזור בגב העובר", "האזור העוברי ממנו מתפתחות הגונדות", "איבר המין החיצוני", "עצם האגן"],
    correctIndex: 1
  },
  {
    id: "q_extra_43",
    category: "male",
    prompt: "מהי הפעולה ההפוכה לזו של ה-PDE5?",
    choices: ["יצירת cGMP על ידי Guanylate Cyclase", "פירוק טסטוסטרון", "כיווץ שרירים חלקים", "יצירת זרע"],
    correctIndex: 0
  },
  {
    id: "q_extra_44",
    category: "pregnancy",
    prompt: "מהי ההשפעה של קורטיזול עוברי בסוף ההריון?",
    choices: [
      "עיכוב הלידה",
      "ירידה בפרוגסטרון ועלייה באסטרוגן להכנת הרחם לצירים",
      "גרימת שינה לעובר",
      "בניית השלייה מחדש"
    ],
    correctIndex: 1
  },
  {
    id: "q_extra_45",
    category: "hard",
    prompt: "מתי מסתיים תהליך ההתלמה (Cleavage)?",
    choices: ["כשהעובר מגיע לרחם והופך לבלסטוציסט", "בלידה", "אחרי שבוע", "מיד אחרי החלוקה הראשונה"],
    correctIndex: 0
  },
  {
    id: "q_extra_46",
    category: "general",
    prompt: "על פי הגרף האבולוציוני, מתי הופיע הדג החולייתן הראשון?",
    choices: ["לפני 23 מיליון שנה", "לפני 1.2 מיליארד שנה", "לפני כ-500 מיליון שנה", "לפני 4 מיליארד שנה"],
    correctIndex: 2
  },
  {
    id: "q_extra_47",
    category: "female",
    prompt: "מהו תפקיד האסטרוגן בשלב הפוליקולרי (ימים 6-14)?",
    choices: ["פירוק הרירית", "צמיחה והתעבות (פרוליפרציה) של רירית הרחם", "מניעת ביוץ", "הפיכה לרירית מפרישה"],
    correctIndex: 1
  },
  {
    id: "q_extra_48",
    category: "expert",
    prompt: "מהו שמו של ההורמון המשתחרר מההיפותלמוס וגורם לשחרור גונדוטרופינים?",
    choices: ["LH", "GnRH", "Kisspeptin", "Testosterone"],
    correctIndex: 1
  },
  {
    id: "q_extra_49",
    category: "female",
    prompt: "מהי ה'גאות' (Surge) ההורמונלית?",
    choices: ["ירידה פתאומית בהורמונים", "עלייה חדה וקצרה ב-LH הגורמת לביוץ", "דימום הווסת", "הפרשת חלב"],
    correctIndex: 1
  },
  {
    id: "q_extra_50",
    category: "male",
    prompt: "מהו המרכיב העיקרי (מבחינת נפח) של האשך?",
    choices: ["תאי ליידיג", "אבוביות הזרע (Seminiferous tubules)", "יותרת האשך", "כלי דם"],
    correctIndex: 1
  },

  // --- Section 2: True / False (Boolean) - New Questions 51-100 ---
  {
    id: "tf_new_1",
    category: "true-false",
    prompt: "המונח 'אמבריוגנזה' (Embryogenesis) מתייחס לתהליך הלידה בלבד.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_2",
    category: "true-false",
    prompt: "מולקולת ה-DNA בנויה מחומצות אמינו.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_3",
    category: "true-false",
    prompt: "גנים מכילים רצפי בקרה הקובעים מתי ואיפה הגן יתבטא.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_4",
    category: "true-false",
    prompt: "העובר האנושי דומה בשלביו המוקדמים לעוברים של בעלי חוליות אחרים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_5",
    category: "true-false",
    prompt: "בסוף החודש השני (שבוע 8), העובר שוקל פחות מ-10 גרם.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_6",
    category: "true-false",
    prompt: "השליה נוצרת אך ורק מרקמת האם.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_7",
    category: "true-false",
    prompt: "חבל הטבור מחבר את העובר לשחלה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_8",
    category: "true-false",
    prompt: "קרום השפיר (Amnion) מתפתח מתאים פנימיים יותר של הבלסטוציסט מאשר אלו שיצרו את השליה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_9",
    category: "true-false",
    prompt: "'ירידת מים' היא בעצם קריעה של שלפוחית השתן של האם.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_10",
    category: "true-false",
    prompt: "הצעקה הראשונה של היילוד היא סימן למצוקה נשימתית קשה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_11",
    category: "true-false",
    prompt: "רפלקס ההליכה (Stepping) בתינוקות נשאר רציף עד שהם לומדים ללכת עצמאית.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_12",
    category: "true-false",
    prompt: "בשד האישה יש שרירים רבים שנועדו 'להחזיק' את החזה זקוף.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_13",
    category: "true-false",
    prompt: "האוניות בשד (Lobules) מסודרות כמו עלי כותרת של חרצית סביב הפטמה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_14",
    category: "true-false",
    prompt: "תסמונת טרנר (Turner) יכולה להופיע גם אצל גברים (XY).",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_15",
    category: "true-false",
    prompt: "בתסמונת קליינפלטר (XXY), הגברים הם לרוב עקרים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_16",
    category: "true-false",
    prompt: "גיל האם (מעל 40) מעלה את הסיכון ללידת בן עם תסמונת קליינפלטר פי 4.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_17",
    category: "true-false",
    prompt: "נשים עם תסמונת טרנר הן פוריות בדרך כלל.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_18",
    category: "true-false",
    prompt: "בתסמונת דה-לה-שאפל, לאדם יש כרומוזומים XX אך גן SRY עבר אליו, ולכן הוא מתפתח כזכר.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_19",
    category: "true-false",
    prompt: "אנשים עם תסמונת AIS הם בדרך כלל בעלי שיער גוף שופע.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_20",
    category: "true-false",
    prompt: "בתסמונת PMDS (צינור מילר עיקש), לגבר יש רחם בגלל עודף טסטוסטרון.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_21",
    category: "true-false",
    prompt: "השיפור בתזונה במאה השנים האחרונות גרם לירידה בגיל ההתבגרות המינית.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_22",
    category: "true-false",
    prompt: "הורמון ה-GnRH מופרש מהשחלות.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_23",
    category: "true-false",
    prompt: "אסטרדיול (סוג של אסטרוגן) גורם לסגירת לוחיות הגדילה בעצמות.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_24",
    category: "true-false",
    prompt: "הזהות המגדרית נקבעת אך ורק על פי איברי המין החיצוניים בלידה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_25",
    category: "true-false",
    prompt: "הגרעין הדו-צורתי (SDN) במוח גדול יותר אצל נקבות.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_26",
    category: "true-false",
    prompt: "הזרקת טסטוסטרון לחולדה נקבה בוגרת תשנה את מבנה ה-SDN שלה למבנה זכרי.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_27",
    category: "true-false",
    prompt: "נטייה מינית בבני אדם היא בחירה חופשית לחלוטין ואינה מושפעת מביולוגיה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_28",
    category: "true-false",
    prompt: "אצל תנינים, המין נקבע על פי הטמפרטורה בקן.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_29",
    category: "true-false",
    prompt: "אצל דבורים, ביצית מופרית מתפתחת לזכר.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_30",
    category: "true-false",
    prompt: "כל תאי הגוף של האדם (חוץ מתאי מין) הם דיפלואידים (2n).",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_31",
    category: "true-false",
    prompt: "לפני חלוקת התא (מיטוזה), הדנ\"א מוכפל.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_32",
    category: "true-false",
    prompt: "בחלוקת מיוזה נוצרים 4 תאים זהים גנטית.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_33",
    category: "true-false",
    prompt: "שחלוף (רקומבינציה) קורה במיטוזה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_34",
    category: "true-false",
    prompt: "בלוטות סקנס (Skene's) מפרישות נוזל לבן.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_35",
    category: "true-false",
    prompt: "רוב הזקיקים בשחלה מתנוונים ומתים (Atresia) ולא מבייצים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_36",
    category: "true-false",
    prompt: "הביצית נכנסת לחצוצרה בזכות כוח הכבידה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_37",
    category: "true-false",
    prompt: "הרחם הוא האיבר בו מתרחשת ההפריה בדרך כלל.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_38",
    category: "true-false",
    prompt: "הגופיף הצהוב מפריש פרוגסטרון כדי לפרק את רירית הרחם.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_39",
    category: "true-false",
    prompt: "רמת הפרוגסטרון עולה מיד אחרי הביוץ.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_40",
    category: "true-false",
    prompt: "צינור הזרע (Vas Deferens) משמש גם למעבר שתן.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_41",
    category: "true-false",
    prompt: "שלפוחית הזרע (Seminal Vesicle) היא מקום אגירת השתן בגבר.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_42",
    category: "true-false",
    prompt: "האנזים באקרוזום מפרק סוכרים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_43",
    category: "true-false",
    prompt: "משוב שלילי במערכת ההורמונלית גורם לתנודות קיצוניות ברמות ההורמונים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_44",
    category: "true-false",
    prompt: "המכשיר 'ורטיקה' מיועד לטיפול בנשים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_45",
    category: "true-false",
    prompt: "תאי ליידיג נמצאים צמוד לכלי דם ברקמה שבין האבוביות.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_46",
    category: "true-false",
    prompt: "טסטוסטרון חיוני לייצור תאי זרע.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_47",
    category: "true-false",
    prompt: "תאי הזרע מבשילים ורוכשים יכולת תנועה בערמונית.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_48",
    category: "true-false",
    prompt: "בלוטות קאופר מפרישות את נוזל הזרע העיקרי.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  },
  {
    id: "tf_new_49",
    category: "true-false",
    prompt: "המערכת הסימפתטית אחראית על השפיכה.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 0,
    type: 'boolean'
  },
  {
    id: "tf_new_50",
    category: "true-false",
    prompt: "הזיגוטה מכילה 23 כרומוזומים.",
    choices: ["נכון", "לא נכון"],
    correctIndex: 1,
    type: 'boolean'
  }
];