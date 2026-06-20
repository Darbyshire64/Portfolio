const KEY = "analytics-consent";

export function getConsent() {
  return localStorage.getItem(KEY);
}

export function acceptAnalytics() {
  localStorage.setItem(KEY, "true");
  window.umami?.track?.(); // re-enable tracking
}

export function rejectAnalytics() {
  localStorage.setItem(KEY, "false");
  window.umami?.disable?.(); // stop tracking
}