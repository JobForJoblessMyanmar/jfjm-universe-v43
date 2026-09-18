(() => {
  "use strict";
  const url = window.JFJM_SUPABASE_URL;
  const key = window.JFJM_SUPABASE_PUBLISHABLE_KEY;
  const recent = new Map();
  const allowed = new Set(["app_open", "channel_click", "install_click", "notification_click", "shuffle_next", "copy", "download_post", "share_post"]);
  function visitorId() {
    const storageKey = "jfjm-anonymous-visitor-id";
    try {
      let value = localStorage.getItem(storageKey);
      if (!value) { value = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`; localStorage.setItem(storageKey, value); }
      return value;
    } catch { return null; }
  }
  function source() {
    try { return document.referrer ? new URL(document.referrer).hostname : "direct"; } catch { return "direct"; }
  }
  function event(eventType, detail = {}) {
    if (!url || !key || !allowed.has(eventType)) return;
    const fingerprint = `${eventType}:${detail.section || ""}:${detail.target || ""}`;
    const now = Date.now();
    if (now - (recent.get(fingerprint) || 0) < 1500) return;
    recent.set(fingerprint, now);
    fetch(`${url}/rest/v1/jfjm_analytics_events`, {
      method: "POST",
      keepalive: true,
      headers: { "apikey": key, "Authorization": `Bearer ${key}`, "Content-Type": "application/json", "Prefer": "return=minimal" },
      body: JSON.stringify({ event_type: eventType, section: detail.section || null, target: detail.target || null, source: source(), path: location.pathname || "/", visitor_id: visitorId() })
    }).catch(() => {});
  }
  window.JFJM_TRACK = { event };
  event("app_open");
})();
