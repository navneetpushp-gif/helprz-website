# Helprz — Programmatic SEO साइट (Next.js)

यह वही सिस्टम है जिसकी हमने बात की थी: **एक टेम्पलेट + एक डेटा फ़ाइल + एक
Next.js ऐप** — जो हर city/locality/service के कॉम्बिनेशन के लिए अपने-आप
एक पूरा पेज बना देता है। यानी अब हर पेज को हाथ से HTML में नहीं लिखना
पड़ेगा।

अभी इसमें 6 डेटा rows से 6 असली पेज बन रहे हैं। नया पेज जोड़ना बस एक
फ़ाइल में copy-paste-edit करने जितना आसान है — कोई नया कोड या नई HTML
फ़ाइल नहीं बनानी पड़ती।

---

## Next.js क्या है, एक पैराग्राफ़ में

Next.js, React से वेबसाइट बनाने का एक फ्रेमवर्क है। आपके काम की बात
सिर्फ़ इतनी है: अगर आप `app/about/page.tsx` नाम की फ़ाइल बनाएं, तो वो
अपने-आप `yoursite.com/about` वाला पेज बन जाती है। हम यहाँ इसका एक
"dynamic" version इस्तेमाल कर रहे हैं: एक ही फ़ाइल,
`app/[city]/[locality]/[service]/page.tsx`, अपने-आप सैकड़ों URL बन
जाती है — क्योंकि इसका कॉन्टेंट hardcode नहीं है, बल्कि एक डेटा फ़ाइल से
आ रहा है।

## सारी फ़ाइलें कैसे जुड़ी हैं

```
data/pages.ts                        <- यही "डेटाबेस" है। नया पेज यहीं जोड़ें।
lib/types.ts                         <- हर पेज में कौन-कौन से फ़ील्ड चाहिए, यह बताता है।
components/PageTemplate.tsx          <- यही "टेम्पलेट" है। डिज़ाइन/लेआउट बदलना हो तो यहीं बदलें।
components/Header.tsx, Footer.tsx    <- हर पेज पर एक जैसा (header/footer)।
components/VerifiedBadge.tsx         <- घूमने वाला "verified" स्टैम्प ग्राफ़िक।
components/FAQAccordion.tsx          <- क्लिक करने वाला FAQ विजेट।
app/[city]/[locality]/[service]/page.tsx
                                      <- डेटा + टेम्पलेट को जोड़ता है, और हर
                                         पेज के लिए SEO metadata + schema
                                         अपने-आप बनाता है।
app/page.tsx                         <- होमपेज (सारे बने हुए पेजों की लिस्ट)।
app/sitemap.ts                       <- डेटा फ़ाइल से sitemap.xml अपने-आप बनाता है।
app/robots.ts                        <- robots.txt अपने-आप बनाता है।
```

**आपका ज़्यादातर समय `data/pages.ts` में ही जाएगा।** बस यही मुख्य फ़ाइल
है। यह वही spreadsheet है जिसकी हमने पहले बात की थी — बस CSV की जगह
code में लिखा हुआ है, लेकिन structure बिल्कुल वैसा ही है: city, locality,
service, salary के आँकड़े, FAQs, नज़दीकी इलाके, और related pages के links।

## नया पेज कैसे जोड़ें (उदाहरण: "Driver in Sector 43")

1. `data/pages.ts` फ़ाइल खोलें
2. पहले से मौजूद किसी object को copy करें (जैसे "full-time-maid" वाला)
3. हर फ़ील्ड बदलें: `localitySlug`, `localityName`, `serviceSlug`,
   `serviceName`, meta title/description, FAQs, salary के आँकड़े
4. फ़ाइल save करें
5. `npm run build` चलाएँ — अब `/gurgaon/sector-43/driver` पर अपने-आप
   एक नया पेज बन जाएगा, अपने title, meta description, schema markup
   और sitemap entry के साथ।

इसके लिए किसी और फ़ाइल को छूने की ज़रूरत नहीं। यही इस पूरे सिस्टम का
मक़सद है।

## इसे अपने कंप्यूटर पर चलाना

इसके लिए आपके कंप्यूटर में [Node.js](https://nodejs.org) इंस्टॉल होना
चाहिए (कोई भी हाल का version)।

```bash
npm install       # एक बार का सेटअप, ज़रूरी packages डाउनलोड करता है
npm run dev       # http://localhost:3000 पर लोकल प्रीव्यू शुरू करता है
```

कोई भी फ़ाइल बदलें, save करें — ब्राउज़र में प्रीव्यू अपने-आप update हो
जाएगा।

## इसे लाइव कैसे करें

यह प्रोजेक्ट **Vercel** पर डिप्लॉय करने के लिए बना है (Next.js बनाने
वाली कंपनी का ही है, और इसका फ्री plan काफ़ी अच्छा है):

1. इस फ़ोल्डर को एक GitHub repository में push करें
2. vercel.com पर जाएँ, "Import Project" पर क्लिक करें, वो repo चुनें
3. "Deploy" पर क्लिक करें — Vercel अपने-आप समझ जाएगा कि यह Next.js ऐप है
4. अपना डोमेन (`helprz.in`) Vercel के project से जोड़ें (Vercel की domain
   settings में), और अपने domain registrar पर DNS भी उसी हिसाब से
   update करें

अब जब भी आप `data/pages.ts` में बदलाव करके GitHub पर push करेंगे,
Vercel पूरी साइट को अपने-आप फिर से बना (rebuild) और publish कर देगा —
नए पेजों के साथ भी।

## SEO के लिए पहले से क्या-क्या सही तरीक़े से लगा हुआ है

- हर पेज का अपना अलग `<title>` और meta description, डेटा से बना हुआ
- हर पेज का canonical URL
- हर पेज पर Open Graph tags
- हर पेज पर JSON-LD structured data: `BreadcrumbList`, `FAQPage`, `Service`
- अपने-आप बनने वाला `sitemap.xml` — जैसे-जैसे आप `data/pages.ts` में नई
  rows जोड़ेंगे, यह अपने-आप बढ़ता जाएगा
- अपने-आप बनने वाला `robots.txt`
- हर पेज पर नज़दीकी इलाकों और related services के बीच internal linking
  (यह "Nearby Areas" / "Related Services" वाला हिस्सा है — यह डेटा फ़ाइल
  में मौजूद `nearbyAreaLinks` / `relatedServiceLinks` फ़ील्ड से आता है)

## अभी इसमें क्या शामिल नहीं है (अगला कदम, अभी अपने-आप नहीं हुआ)

- सैकड़ों इलाक़ों का असली कॉन्टेंट — अभी सिर्फ़ 6 sample पेज हैं ताकि आप
  पूरा सिस्टम काम करते हुए देख सकें। जैसा हमने पहले बात की थी:
  **सीधे सैकड़ों पेज पर मत जाइए।** पहले अपने अगले 10-15 target इलाक़ों
  के लिए असली, इलाक़े-विशेष जानकारी भरें, publish करें, 3-4 हफ़्ते तक
  देखें कि Google में indexing कैसी हो रही है, फिर उसी pattern को बड़े
  स्तर पर बढ़ाएँ।
- Booking form / backend — अभी CTA बटन `tel:` और `wa.me` (WhatsApp) पर
  ले जाते हैं, जैसे आपकी मौजूदा होमपेज पर पहले से है।
- Images — अभी कोई फ़ोटो नहीं जोड़ी गई है; अगर आप चाहें तो हर इलाक़े के
  हिसाब से लोकेशन-specific फ़ोटो जोड़ सकते हैं (इससे image-search SEO
  में भी फ़ायदा होता है, जैसा पहले बताया गया था)।
