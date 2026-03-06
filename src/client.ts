/**
 * WhiskeyFYI API client -- TypeScript wrapper for whiskeyfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
  CaskDetail,
  CompareResult,
  DistilleryDetail,
  ExpressionDetail,
  GlossaryTerm,
  RandomResult,
  RegionDetail,
  SearchResult,
  TypeDetail,
} from "./types.js";

export class WhiskeyFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://whiskeyfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search whiskey expressions, distilleries, regions, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get whiskey expression detail by slug. */
  async expression(slug: string): Promise<ExpressionDetail> {
    return this.get<ExpressionDetail>(`/api/expression/${slug}/`);
  }

  /** Get distillery detail by slug. */
  async distillery(slug: string): Promise<DistilleryDetail> {
    return this.get<DistilleryDetail>(`/api/distillery/${slug}/`);
  }

  /** Get whiskey type detail by slug. */
  async type(slug: string): Promise<TypeDetail> {
    return this.get<TypeDetail>(`/api/type/${slug}/`);
  }

  /** Get cask type detail by slug. */
  async cask(slug: string): Promise<CaskDetail> {
    return this.get<CaskDetail>(`/api/cask/${slug}/`);
  }

  /** Get whiskey region detail by slug. */
  async region(slug: string): Promise<RegionDetail> {
    return this.get<RegionDetail>(`/api/region/${slug}/`);
  }

  /** Compare two whiskey expressions. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random whiskey expression. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }
}
