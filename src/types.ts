/**
 * WhiskeyFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface ExpressionDetail {
  slug: string;
  name: string;
  type?: string;
  region?: string;
  country?: string;
  age_statement?: number;
  abv?: number;
  cask_type?: string;
  description: string;
  tasting_notes?: {
    nose?: string[];
    palate?: string[];
    finish?: string[];
  };
  url: string;
}

export interface DistilleryDetail {
  slug: string;
  name: string;
  country?: string;
  region?: string;
  description: string;
  founded?: number;
  url: string;
}

export interface TypeDetail {
  slug: string;
  name: string;
  country?: string;
  description: string;
  requirements?: string;
  url: string;
}

export interface CaskDetail {
  slug: string;
  name: string;
  description: string;
  capacity?: string;
  flavor_contribution?: string[];
  url: string;
}

export interface RegionDetail {
  slug: string;
  name: string;
  country?: string;
  description: string;
  characteristics?: string[];
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
