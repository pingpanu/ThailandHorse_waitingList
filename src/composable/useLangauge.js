import { ref } from "vue";

const currentLanguage = ref("THA");

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    console.log("Global langauge changed to: ", lang);
  };

  const translations = {
    nav: {
      home: {
        THA: "หน้าหลัก",
        ENG: "Home",
        JAP: "ホーム",
      },
      activities: {
        THA: "กิจกรรม",
        ENG: "Activities",
        JAP: "アクティビティ",
      },
      racehorses: {
        THA: "ม้าแข่ง",
        ENG: "Racehorses",
        JAP: "競走馬",
      },
      racecourses: {
        THA: "สนามแข่ง",
        ENG: "Racecourses",
        JAP: "競馬場",
      },
      stories: {
        THA: "เรื่องราว",
        ENG: "Stories",
        JAP: "ストーリー",
      },
      aboutUs: {
        THA: "เกี่ยวกับเรา",
        ENG: "About Us",
        JAP: "私たちについて",
      },
    },
    footer: {
      otherSites: {
        THA: 'เว็บไซต์ที่เกี่ยวข้อง',
        ENG: 'Related sites',
        JAP: '関連サイト'
      },
      siamhorse: {
        THA: "สยามฮอร์ส",
        ENG: "Siamhorse",
        JAP: "シャムホース",
      },
      assawa_krithalai: {
        THA: "โรงเรียนอัศวกรีฑาลัย",
        ENG: "Assawa Krithalai School",
        JAP: "アサワ・クリタライ学園",
      },
    },
  };

  const t = (category, key) => {
    return translations[category]?.[key]?.[currentLanguage.value] || key;
  };

  return {
    currentLanguage,
    setLanguage,
    t,
  };
}
