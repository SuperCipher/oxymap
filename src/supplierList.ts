

// Set LatLng and title text for the markers. The first marker (Boynton Pass)
// receives the initial focus when tab is pressed. Use arrow keys to
// move between markers; press tab again to cycle through the map controls.
// [location, name, address, telephone, placeid, details]
const suppliers: [google.maps.LatLngLiteral, string, string, Array<string>, string, string][] = [
  [
    { lat: 13.8146038, lng: 100.5960651 },
    "ห้างหุ้นส่วนจำกัด ธนบุรีวัฒนา",
    "109 ซอย อุดมสุข 51 แขวง บางจาก เขตพระโขนง กรุงเทพมหานคร 10250",
    ["02-746-5085"],
    "ChIJBdSDKOJfHTER-xXTGBv6fhE",
    ""
  ],
  [{ "lat": 13.6433125, "lng": 100.5909219 }, "เจริญไพศาลพานิช", "484/13-16 หมุ่ 1 ถ.ปู่เจ้าสมิงพราย ตำบล สำโรงกลาง อำเภอพระประแดง สมุทรปราการ ประเทศไทย", ["02-394-3733-4"], "GhIJSzeJQWBJK0ARX78WqtElWUA", "ปู่เจ้าสมิงพราย"],
  [{ "lat": 13.7045684, "lng": 100.3285583 }, "บริษัท ล.แจ้งตงอ๊อกซิเย่นและอะซิทีลีน จำกัด", "72 ถ. เพชรเกษม ตำบล อ้อมน้อย อำเภอกระทุ่มแบน สมุทรสาคร 74130", ["02-420-9892-3", "02-420-1628"], "ChIJzdhiQPOV4jARS-wbsnhV6J8", "https://www.facebook.com/LCTO-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%A5%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%95%E0%B8%87%E0%B8%AD%E0%B9%8A%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%A2%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B0%E0%B8%8B%E0%B8%B4%E0%B8%97%E0%B8%B5%E0%B8%A5%E0%B8%B5%E0%B8%99-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-151517518229870/?ref=page_internal"],
  [{ "lat": 13.7851375, "lng": 100.6484924 }, "อิทธิพลโลหะกิจ (ออกซิเจน)", "93/14 ถนน นวมินทร์ แขวง คลองกุ่ม เขต บึงกุ่ม กรุงเทพมหานคร 10240", ["02-377-0098"], "ChIJJ48rmCRiHTERy5Ntfe2dM5g", "https://ittiphol-oxygen.business.site/?utm_source=gmb&utm_medium=referral"],
  [{ "lat": 13.8476442, "lng": 100.6462806 }, "ชานกรุงอ๊อกซิเจน-แก๊ส Charnkrung Oxygen by Nongnuch", "923 ถ. รามอินทรา แขวง ท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220", ["02-510-1941"], "ChIJSeaSEsFiHTERYrPzFwS8Nzo", "https://charnkrung.business.site/?utm_source=gmb&utm_medium=referral"],
  [{ "lat": 13.8725061, "lng": 100.6325578 }, "บริษัท รามอินทรา อ๊อกซิเย่น จำกัด", "153 ซ. พหลโยธิน 48 แขวง ท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220", ["02-521-9280"], "ChIJVVc93U19HTERsURIwoaeGYY", ""],
  [{ "lat": 13.8255287, "lng": 100.5575488 }, "ศ.จำรัสอ๊อกซีเย่น", "7/72 ถนน วิภาวดีรังสิต แขวง จตุจักร เขตจตุจักร กรุงเทพมหานคร 10900", ["02 537 8514"], "ChIJ55ja_PWc4jARRbrjYOZv-oY", ""],


];

export { suppliers };

// https://www.google.com/maps/place/?q=place_id:ChIJBdSDKOJfHTER-xXTGBv6fhE
