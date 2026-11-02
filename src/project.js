export const PROJECT = {
  id: 'palm-river-mkt',
  name: 'Palm River MKT',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://canho-palmriver.vn',
  get schemaUrl() { return import.meta.env.VITE_SCHEMA_URL || (import.meta.env.DEV && import.meta.env.VITE_CMS_DEMO === '1' ? '/cms-schema.json' : `${this.siteUrl}/cms-schema.json`); },
  get statusUrl() { return import.meta.env.VITE_STATUS_URL || `${this.siteUrl}/cms-status.json`; },
  accent: '#8b7552',
};
