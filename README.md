# whiskeyfyi

[![npm](https://img.shields.io/npm/v/whiskeyfyi)](https://www.npmjs.com/package/whiskeyfyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/whiskeyfyi)

TypeScript API client for [WhiskeyFYI](https://whiskeyfyi.com) -- the comprehensive whiskey reference with 80 whiskey expressions, 500+ distilleries across 7 countries and 13 regions, cask types, and 150 expert guides covering single malts, bourbons, cask maturation, and tasting methodology. Zero dependencies, uses native `fetch`.

> **Explore whiskey at [whiskeyfyi.com](https://whiskeyfyi.com)** -- [Whiskeys](https://whiskeyfyi.com/whiskeys/) | [Distilleries](https://whiskeyfyi.com/distilleries/) | [Regions](https://whiskeyfyi.com/regions/) | [API Docs](https://whiskeyfyi.com/developers/)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
  - [Whiskey Types](#whiskey-types)
  - [Cask Types and Maturation](#cask-types-and-maturation)
  - [Whiskey Regions](#whiskey-regions)
- [API Reference](#api-reference)
- [REST API (No Auth Required)](#rest-api-no-auth-required)
- [Features](#features)
- [TypeScript Types](#typescript-types)
- [Learn More About Whiskey](#learn-more-about-whiskey)
- [Also Available for Python](#also-available-for-python)
- [Beverage FYI Family](#beverage-fyi-family)
- [License](#license)

## Install

```bash
npm install whiskeyfyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { WhiskeyFYI } from "whiskeyfyi";

const api = new WhiskeyFYI();

// Search whiskeys, distilleries, regions, glossary
const results = await api.search("bourbon");

// Get whiskey expression detail with tasting notes
const whiskey = await api.expression("lagavulin-16");
console.log(whiskey.abv);            // 43.0
console.log(whiskey.tasting_notes);  // { nose: [...], palate: [...], finish: [...] }

// Get cask type flavor contributions
const cask = await api.cask("ex-bourbon");
console.log(cask.flavor_contribution);

// Compare two expressions
const comparison = await api.compare("lagavulin-16", "laphroaig-10");
```

## What You Can Do

### Whiskey Types

Whiskey classification is governed by legal definitions that vary by country:

| Type | Country | Key Requirements |
|------|---------|-----------------|
| Scotch Single Malt | Scotland | 100% malted barley, pot still, 3+ years |
| Bourbon | United States | 51%+ corn, new charred oak barrels |
| Tennessee | United States | Bourbon + Lincoln County Process |
| Rye (American) | United States | 51%+ rye grain, new charred oak |
| Irish Whiskey | Ireland | 3+ years aging, triple distillation common |
| Japanese Whisky | Japan | Scotch-influenced, precision crafting |

Learn more: [Whiskey Types](https://whiskeyfyi.com/type/) -- [Whiskey Encyclopedia](https://whiskeyfyi.com/whiskey/)

### Cask Types and Maturation

Maturation accounts for 60-80% of a whiskey's final flavor:

| Cask Type | Capacity | Flavor Contribution |
|-----------|----------|---------------------|
| Ex-Bourbon | 200L | Vanilla, caramel, coconut |
| Sherry (Oloroso) | 500L | Dried fruit, nuts, chocolate |
| Port | 500L | Berry fruit, plum |
| Virgin Oak | 200L | Strong oak, tannins, spice |
| Mizunara | 480L | Sandalwood, incense |

Learn more: [Cask Types](https://whiskeyfyi.com/cask/) -- [Whiskey Glossary](https://whiskeyfyi.com/glossary/)

### Whiskey Regions

13 whiskey-producing regions with distinctive characteristics:

| Region | Country | Characteristics |
|--------|---------|-----------------|
| Speyside | Scotland | Elegant, fruity, honeyed |
| Islay | Scotland | Heavily peated, maritime, smoky |
| Highland | Scotland | Diverse, from light to robust |
| Kentucky | USA | Bourbon heartland, limestone water |
| Yamazaki | Japan | Precision crafting, varied yeast |

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Search whiskeys, distilleries, regions, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `expression(slug)` | Whiskey expression detail with tasting notes |
| `distillery(slug)` | Distillery detail with history |
| `type(slug)` | Whiskey type detail |
| `cask(slug)` | Cask type detail with flavor contributions |
| `region(slug)` | Region detail with characteristics |
| `compare(slugA, slugB)` | Compare two whiskey expressions |
| `random()` | Random whiskey expression |

## REST API (No Auth Required)

All endpoints are free, require no authentication, and return JSON with CORS enabled.

```bash
curl "https://whiskeyfyi.com/api/v1/search/?q=bourbon"
curl "https://whiskeyfyi.com/api/v1/whiskey/makers-mark/"
curl "https://whiskeyfyi.com/api/v1/distillery/makers-mark-distillery/"
curl "https://whiskeyfyi.com/api/v1/compare/makers-mark/woodford-reserve/"
curl "https://whiskeyfyi.com/api/v1/random/"
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/whiskey/` | List all 80 whiskey expressions |
| GET | `/api/v1/whiskey/{slug}/` | Whiskey detail with tasting notes |
| GET | `/api/v1/distillery/` | List all distilleries |
| GET | `/api/v1/distillery/{slug}/` | Distillery detail |
| GET | `/api/v1/glossary/{slug}/` | Glossary term definition |
| GET | `/api/v1/search/?q={query}` | Search across all content |
| GET | `/api/v1/compare/{slug1}/{slug2}/` | Compare two whiskeys |
| GET | `/api/v1/random/` | Random whiskey expression |
| GET | `/api/v1/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: [OpenAPI 3.1.0](https://whiskeyfyi.com/api/v1/openapi.json)

## Features

- **Comprehensive whiskey data**: 80 expressions, distillery profiles, regional styles
- **14 whiskey types**: Bourbon, Scotch, Irish, Japanese, Rye, and more
- **Expression comparison**: Side-by-side tasting note analysis
- **Whiskey glossary**: Distillation and maturation terminology
- **Zero dependencies**: Uses native `fetch`, no runtime deps
- **Type-safe**: Full TypeScript with strict mode
- **Tree-shakeable**: ESM with named exports

## TypeScript Types

```typescript
import type { SearchResult, GlossaryTerm, ExpressionDetail, DistilleryDetail, TypeDetail, CaskDetail, RegionDetail, CompareResult, RandomResult } from "whiskeyfyi";
```

## Learn More About Whiskey

Visit [whiskeyfyi.com](https://whiskeyfyi.com/) to explore 80 whiskey expressions, 500+ distilleries, cask types, and regional styles with interactive tools.

## Also Available for Python

```bash
pip install whiskeyfyi
```

See [whiskeyfyi on PyPI](https://pypi.org/project/whiskeyfyi/) for the Python package with API client, CLI, and MCP server.

<p align="center">
  <img src="demo.gif" alt="WhiskeyFYI demo -- whiskey API client for TypeScript" width="800">
</p>

## Beverage FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- world beverages from cocktails to sake.

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| cocktailfyi | [PyPI](https://pypi.org/project/cocktailfyi/) | [npm](https://www.npmjs.com/package/cocktailfyi) | 636 cocktails, ABV, calories -- [cocktailfyi.com](https://cocktailfyi.com/) |
| vinofyi | [PyPI](https://pypi.org/project/vinofyi/) | [npm](https://www.npmjs.com/package/vinofyi) | Wines, grapes, regions, food pairings -- [vinofyi.com](https://vinofyi.com/) |
| beerfyi | [PyPI](https://pypi.org/project/beerfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/beerfyi) | 112 beer styles, hops, malts -- [beerfyi.com](https://beerfyi.com/) |
| brewfyi | [PyPI](https://pypi.org/project/brewfyi/) | [npm](https://www.npmjs.com/package/brewfyi) | 72 coffee varieties, brew methods -- [brewfyi.com](https://brewfyi.com/) |
| **whiskeyfyi** | [PyPI](https://pypi.org/project/whiskeyfyi/) | [npm](https://www.npmjs.com/package/whiskeyfyi) | **80 whiskey expressions, distilleries -- [whiskeyfyi.com](https://whiskeyfyi.com/)** |
| teafyi | [PyPI](https://pypi.org/project/teafyi/) | [npm](https://www.npmjs.com/package/teafyi) | 60 tea varieties, teaware -- [teafyi.com](https://teafyi.com/) |
| nihonshufyi | [PyPI](https://pypi.org/project/nihonshufyi/) | [npm](https://www.npmjs.com/package/nihonshufyi) | 80 sake, rice varieties -- [nihonshufyi.com](https://nihonshufyi.com/) |

## License

MIT
