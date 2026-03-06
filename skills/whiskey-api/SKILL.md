---
name: whiskey-api
description: Search whiskey expressions, distilleries, cask types, regions, and whiskey terminology. Use when working with whiskey data, tasting notes, or spirits applications.
license: MIT
metadata:
  author: fyipedia
  version: "0.1.0"
  homepage: "https://whiskeyfyi.com"
---

# WhiskeyFYI -- Whiskey API for AI Agents

TypeScript API client for whiskeyfyi.com. Search 80 whiskey expressions, 500+ distilleries, cask types, 13 whiskey regions, and whiskey terminology. Zero dependencies.

**Install**: `npm install whiskeyfyi` -- **Web**: [whiskeyfyi.com](https://whiskeyfyi.com/) -- **API**: [REST API](https://whiskeyfyi.com/developers/) -- **PyPI**: `pip install whiskeyfyi`

## When to Use

- User asks about whiskey types, bourbon vs scotch, or single malt classifications
- User needs distillery information or cask type flavor contributions
- User wants to compare whiskey expressions or explore regional styles
- User is building a whiskey recommendation or tasting note tool
- User needs whiskey terminology definitions

## Tools

### `search(query) -> SearchResult`

Search across whiskey expressions, distilleries, regions, and glossary terms.

```typescript
import { WhiskeyFYI } from "whiskeyfyi";
const api = new WhiskeyFYI();
const results = await api.search("bourbon");
```

### `glossaryTerm(slug) -> GlossaryTerm`

Look up whiskey terminology by slug.

```typescript
const term = await api.glossaryTerm("cask-strength");
console.log(term.definition);
```

### `expression(slug) -> ExpressionDetail`

Get whiskey expression detail with tasting notes and cask information.

```typescript
const whiskey = await api.expression("lagavulin-16");
console.log(whiskey.tasting_notes); // { nose: [...], palate: [...], finish: [...] }
```

### `distillery(slug) -> DistilleryDetail`

Get distillery detail with history and location.

```typescript
const distillery = await api.distillery("macallan");
```

### `compare(slugA, slugB) -> CompareResult`

Compare two whiskey expressions side by side.

```typescript
const comparison = await api.compare("lagavulin-16", "laphroaig-10");
```

## REST API (No Auth Required)

```bash
curl https://whiskeyfyi.com/api/search/?q=bourbon
curl https://whiskeyfyi.com/api/expression/lagavulin-16/
curl https://whiskeyfyi.com/api/distillery/macallan/
curl https://whiskeyfyi.com/api/term/cask-strength/
curl https://whiskeyfyi.com/api/random/
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expression/{slug}/` | Whiskey expression detail with tasting notes |
| GET | `/api/distillery/{slug}/` | Distillery detail with history, location |
| GET | `/api/region/{slug}/` | Whiskey region detail with distilleries |
| GET | `/api/term/{slug}/` | Whiskey glossary term definition |
| GET | `/api/search/?q={query}` | Search expressions, distilleries, regions |
| GET | `/api/compare/?a={slug}&b={slug}` | Compare two whiskey expressions |
| GET | `/api/random/` | Random whiskey expression |
| GET | `/api/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: [OpenAPI 3.1.0](https://whiskeyfyi.com/api/openapi.json)

## Whiskey Types

| Type | Region | Grain | Min Age | Key Characteristics |
|------|--------|-------|---------|-------------------|
| Single Malt Scotch | Scotland | 100% malted barley | 3 years | Regional terroir, complex |
| Bourbon | USA (Kentucky) | 51%+ corn | No minimum | Sweet, caramel, vanilla |
| Rye | USA/Canada | 51%+ rye | No minimum | Spicy, peppery, bold |
| Irish | Ireland | Barley (malted/unmalted) | 3 years | Triple distilled, smooth |
| Japanese | Japan | Malted barley | No minimum | Precise, elegant, balanced |
| Tennessee | USA (Tennessee) | 51%+ corn | No minimum | Charcoal filtered, mellow |
| Canadian | Canada | Various | 3 years | Blended, light, versatile |
| Indian | India | Various | 2-3 years | Tropical maturation, spicy |

## Cask Types

| Cask | Origin | Flavor Contribution |
|------|--------|-------------------|
| Ex-Bourbon | American oak | Vanilla, caramel, coconut |
| Ex-Sherry | European oak | Dried fruit, nuts, chocolate |
| Virgin Oak | American/European | Intense wood, spice, tannin |
| Port | Portuguese oak | Berry, plum, sweetness |
| Wine | French oak | Red fruit, tannin, complexity |
| Mizunara | Japanese oak | Sandalwood, incense, coconut |

## Whiskey Regions

| Region | Country | Style | Notable Distilleries |
|--------|---------|-------|---------------------|
| Speyside | Scotland | Fruity, elegant | Macallan, Glenfiddich |
| Islay | Scotland | Peaty, smoky | Lagavulin, Laphroaig |
| Kentucky | USA | Sweet, full-bodied | Maker's Mark, Buffalo Trace |
| Yamazaki | Japan | Delicate, balanced | Suntory Yamazaki |
| Cooley | Ireland | Smooth, triple distilled | Kilbeggan, Connemara |

## Demo

![WhiskeyFYI demo](https://raw.githubusercontent.com/fyipedia/whiskeyfyi-js/main/demo.gif)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BeerFYI](https://beerfyi.com), [BrewFYI](https://brewfyi.com), [TeaFYI](https://teafyi.com), [NihonshuFYI](https://nihonshufyi.com).
