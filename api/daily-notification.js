export default async function handler(request, response) {
  const authorization = request.headers.authorization || "";
  if (!process.env.CRON_SECRET || authorization !== `Bearer ${process.env.CRON_SECRET}`) return response.status(401).json({ error: "Unauthorized" });
  const appId = process.env.ONESIGNAL_APP_ID;
  const apiKey = process.env.ONESIGNAL_REST_API_KEY;
  if (!appId || !apiKey) return response.status(500).json({ error: "OneSignal environment variables are missing" });
  const sent = await fetch("https://api.onesignal.com/notifications", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Key ${apiKey}` },
    body: JSON.stringify({
      app_id: appId,
      target_channel: "push",
      included_segments: ["Subscribed Users"],
      headings: { en: "JFJM Career Advice" },
      contents: { en: "ဒန့်နောက်အတွက် လက်တွေ့အသုံးဝင်တဲ့ Career Advice အသစ်ရှိပါတယ်။" },
      web_url: "https://www.jobforjoblessmyanmar.com/reader/?section=advice&sharing=next",
      chrome_web_icon: "https://www.jobforjoblessmyanmar.com/assets/icon-192.png"
    })
  });
  const payload = await sent.json();
  return response.status(sent.ok ? 200 : 502).json(payload);
}
