// IMPORTANT: When review count or rating changes, update ONLY this file.
// Key pages (homepage, header, footer, schema) pull from here.
// Other pages still have hardcoded values — run a site-wide update when count changes.

// Centralized site statistics — update here, propagates everywhere
export const SITE_STATS = {
  reviewCount: 306,
  starRating: 4.9,
  totalRoofs: '7,200+',
  totalRoofsNumber: 7204,
  yearsExperience: '10+',
  yearsExperienceNumber: 10,
  certificationCount: 4,
  phone: '(720) 766-3377',
} as const;

// Formatted strings for common usage
export const REVIEW_TEXT = `${SITE_STATS.reviewCount} Google Reviews`;
export const RATING_TEXT = `${SITE_STATS.starRating} Stars`;
export const ROOFS_TEXT = `${SITE_STATS.totalRoofs} Roofs Completed`;
