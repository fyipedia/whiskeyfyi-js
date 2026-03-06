import { describe, expect, it } from "vitest";
import { WhiskeyFYI } from "../src/index.js";

describe("WhiskeyFYI", () => {
  it("can be instantiated with default base URL", () => {
    const api = new WhiskeyFYI();
    expect(api).toBeInstanceOf(WhiskeyFYI);
  });

  it("can be instantiated with custom base URL", () => {
    const api = new WhiskeyFYI("http://localhost:8033");
    expect(api).toBeInstanceOf(WhiskeyFYI);
  });

  it("has search method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.search).toBe("function");
  });

  it("has glossaryTerm method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.glossaryTerm).toBe("function");
  });

  it("has expression method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.expression).toBe("function");
  });

  it("has distillery method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.distillery).toBe("function");
  });

  it("has type method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.type).toBe("function");
  });

  it("has cask method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.cask).toBe("function");
  });

  it("has region method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.region).toBe("function");
  });

  it("has compare method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.compare).toBe("function");
  });

  it("has random method", () => {
    const api = new WhiskeyFYI();
    expect(typeof api.random).toBe("function");
  });
});
