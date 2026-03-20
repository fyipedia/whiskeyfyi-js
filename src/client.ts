/**
 * WhiskeyFYI API client — TypeScript wrapper for whiskeyfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { WhiskeyFYI } from "whiskeyfyi";
 * const api = new WhiskeyFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class WhiskeyFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://whiskeyfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all casks. */
  async listCasks(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/casks/", params);
  }

  /** Get cask by slug. */
  async getCask(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/casks/${slug}/`);
  }

  /** List all countries. */
  async listCountries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/countries/", params);
  }

  /** Get country by slug. */
  async getCountry(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/countries/${slug}/`);
  }

  /** List all distilleries. */
  async listDistilleries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/distilleries/", params);
  }

  /** Get distillery by slug. */
  async getDistillery(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/distilleries/${slug}/`);
  }

  /** List all expressions. */
  async listExpressions(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/expressions/", params);
  }

  /** Get expression by slug. */
  async getExpression(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/expressions/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all regions. */
  async listRegions(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/regions/", params);
  }

  /** Get region by slug. */
  async getRegion(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/regions/${slug}/`);
  }

  /** List all tools. */
  async listTools(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tools/", params);
  }

  /** Get tool by slug. */
  async getTool(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tools/${slug}/`);
  }

  /** List all types. */
  async listTypes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/types/", params);
  }

  /** Get type by slug. */
  async getType(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/types/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
