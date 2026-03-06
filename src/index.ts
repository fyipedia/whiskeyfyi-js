/**
 * whiskeyfyi -- TypeScript API client for WhiskeyFYI.
 *
 * Search whiskey expressions, distilleries, regions, and whiskey terminology
 * from whiskeyfyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { WhiskeyFYI } from "whiskeyfyi";
 *
 * const api = new WhiskeyFYI();
 * const results = await api.search("bourbon");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { WhiskeyFYI } from "./client.js";

export type {
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
