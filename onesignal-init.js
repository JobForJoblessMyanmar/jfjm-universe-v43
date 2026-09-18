(() => {
  const appId = String(window.JFJM_ONESIGNAL_APP_ID || "").trim();
  if (!appId) return;
  const script = document.createElement("script");
  script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
  script.defer = true;
  document.head.appendChild(script);
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  window.OneSignalDeferred.push(async OneSignal => {
    await OneSignal.init({ appId, serviceWorkerPath: "sw.js", serviceWorkerParam: { scope: "/" } });
    window.JFJM_OneSignal = OneSignal;
  });
})();
