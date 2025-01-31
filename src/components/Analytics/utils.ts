import capitalize from 'lodash/capitalize';
import words from 'lodash/words';
import { trackGA4Event } from './gtag';

export interface Tracker {
  trackingId: string;
  name: string;
}

/**
 * Categories represent high-level groups of events in the application.
 */
export enum EventCategory {
  ABOUT = 'about',
  API = 'api',
  ARTICLES = 'articles',
  COMPARE = 'compare',
  DONATE = 'donate',
  ENGAGEMENT = 'engagement',
  EXPLORE = 'explore',
  EXPOSURE_NOTIFICATIONS = 'exposure notifications',
  FAQ = 'faq',
  FOOTER = 'footer',
  GEOLOCATION_CARDS = 'geolocation cards',
  GLOSSARY = 'glossary',
  HOMEPAGE_BANNER = 'homepage banner',
  INDIGENOUS_PEOPLES_DAY = 'indigenous peoples day',
  LEARN = 'learn',
  MAP = 'map',
  METRICS = 'metrics',
  METRIC_EXPLAINERS = 'metric explainers',
  NONE = 'none', // use NONE for development
  RECOMMENDATIONS = 'recommendations',
  RECRUITING = 'recruiting',
  SEARCH = 'search',
  TOP_NAVBAR = 'top navbar',
  TOOLTIPS = 'tooltips',
  VACCINATION = 'vaccination',
  VOTE_2020 = 'vote',
  VULNERABILITIES = 'vulnerabilities',
  WEB_VITALS = 'web vitals',
  MINI_MAP = 'minimap',
}

/**
 * Actions represent something that the user does and that we want to track
 * and count.
 */
export enum EventAction {
  SHARE = 'share',
  SAVE_IMAGE = 'save image',
  COPY_LINK = 'copy link',
  CLICK_LINK = 'click link',
  CLICK = 'click',
  SELECT = 'select',
  OPEN_MODAL = 'open modal',
  SUBSCRIBE = 'subscribe',
  ALERTS_UNSUBSCRIBE = 'alertsUnsubscribe',
  EXPAND = 'expand',
  REDIRECT = 'redirect',
  FOCUS = 'focus',
  NAVIGATE = 'navigate',
  CLS = 'Cumulative Layout Shift (*1000)',
  FCP = 'First Contentful Paint (ms)',
  FID = 'First Input Delay (ms)',
  LCP = 'Largest Contentful Paint (ms)',
  TTFB = 'Time to First Byte (ms)',
  OPEN_TOOLTIP = 'open tooltip',
}

// Capitalize string (special characters are not kept)
function toTitleCase(name: string) {
  return words(name).map(capitalize).join(' ');
}

// Capitalize string (special characters kept in place by not using "words" from lodash)
function toTitleCaseWithSpecialCharacters(name: string) {
  return name ? name.split(' ').map(capitalize).join(' ') : '';
}

/**
 * An event represents a single user interaction. We must trigger a single
 * event per interaction to avoid double counting.
 */
export function trackEvent(
  category: EventCategory,
  action: EventAction,
  label: string,
  value?: number,
  nonInteraction?: boolean,
  transport: 'beacon' | 'xhr' | 'image' = 'beacon',
) {
  if (category !== EventCategory.NONE) {
    trackGA4Event(
      toTitleCase(action),
      toTitleCase(category),
      toTitleCaseWithSpecialCharacters(label),
      value,
    );
  }
}

export function trackSaveImage(category: EventCategory, label: string) {
  trackEvent(category, EventAction.SAVE_IMAGE, label);
}

export function trackCopyLink(category: EventCategory, label: string) {
  trackEvent(category, EventAction.COPY_LINK, label);
}

/**
 * All 2020 election related link clicks
 */
export function trackVoteClick(label: string) {
  trackEvent(EventCategory.VOTE_2020, EventAction.CLICK_LINK, label);
}

/**
 * Callback passed to web-vitals to report important performance events
 */
export function trackWebVitals({
  name,
  delta,
  id,
}: {
  name: 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';
  delta: number;
  id: string;
}) {
  trackEvent(
    EventCategory.WEB_VITALS,
    EventAction[name],
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Use a non-interaction event to avoid affecting bounce rate.
    true,
    // Use `sendBeacon()` if the browser supports it.
    'beacon',
  );
}
