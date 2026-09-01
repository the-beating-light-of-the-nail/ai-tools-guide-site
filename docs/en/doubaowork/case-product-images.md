# From One Raw Product Photo to a Full Set of Listing Images

> Scenario: E-commerce hero image design. All you have is a casually shot product photo, and you want a complete, listing-ready set of images. This isn't a simple image-generation prompt—it's an e-commerce visual production workflow.

## What This Skill Does for You

The [moyuxl-ecom-image-prompt](https://github.com/AlephAITech/moyuxl-ecom-image-prompt) skill handles: **deconstructing references, locking down facts, defining the visual direction, writing production-grade prompts, and proofreading the output**. Two working modes:

| Mode | When to Use | What It Does |
| --- | --- | --- |
| Reference reverse-engineering (primary) | You have a product photo + a few reference images you like | Breaks down each reference's composition/information structure/style, then transfers it onto your product to generate new images |
| Planning from scratch | No references, just the product | Derives the visual direction from the product's identity and the buyer's decision path, offering 2–4 directions to choose from |

The output varies with what you have: raw product photo with no direction → research selling points and plan hero images or detail pages from scratch; product photo + references → deconstruct the references, transfer the techniques, and generate a full new set; complete copy and selling points already written → compile them directly into copy-ready, production-grade image-generation prompts.

Install it with one command in environments that support Agent Skills (or download the skill folder and import it directly into Doubao Work):

```text
npx skills add https://github.com/AlephAITech/moyuxl-ecom-image-prompt --skill moyuxl-ecom-image-prompt
```

## In Practice: 1 Hand-Held Product Photo → 7 Hero Images

The starting point is a casual shot with **zero layout design**: hand holding the product, plants in the background.

### What to "Borrow" from Each Reference

Don't copy any single one—**take one type of mechanism from each**, then reassemble them with your own product and visual system:

| Reference | Mechanism Borrowed | Explicitly Not Borrowed |
| --- | --- | --- |
| Studio symmetrical | Stable hero composition with the product centered and left-right symmetry | Its product, colors, and copy |
| Ingredient immersion | The blending technique of the product "soaked" in its raw ingredients | Its bottle shape and exclusive imagery |
| Infographic style | The information skeleton of columns, cards, and flow lines | Its original data and wording |
| Aerial origin | Origin atmosphere and spatial storytelling | Its specific acreage/yield figures |

### Diverge First, Then Converge

Don't rush to finalize—around the same product, try a set of directions across **composition/scene/information/color tone** and then choose:

- **Batch 1 · 4 studio-style directions**: faithful transfer, upgraded composition, scene storytelling, information design (the faithful-transfer version scores highest on product fidelity and compositional stability);
- **Batch 2 · 3 ingredient-immersion variants**: the product surrounded by Red Fuji apples—the angled-insert version sits closest to the reference paradigm, the close-up upright version maximizes product share, and the side-lying version has the strongest sense of motion;
- **Batch 3 · 3 infographic variants**: real orchard backdrop with four-quadrant information and hand-drawn arrows—the quadrant version has the clearest information layout, the framed version makes the product stand out most, and the inter-row perspective version has the strongest depth;
- **Batch 4 · 3 aerial-origin variants**: data like competitors' planting acreage and cold-storage tonnage can't be inherited—uniformly replaced with this product's verified facts ("sourced from Yantai, in-season Red Fuji, 100% fresh apple juice"); **no invented scale figures**;
- **Batch 5 · 5 original-style directions**: exploration free of references, covering the full style spectrum from minimalist to dynamic, cool to warm, everyday to premium—used to reason backward toward the tone of the final set.

## Key Method Points

1. **References are a mechanism library, not something to copy**—borrow only one composition/information/mood mechanism per image; the product and the data are always yours;
2. **Lock the facts first**—origin, ingredients, selling points, anything that will appear on the image: verify it's true first; competitor numbers are not inheritable;
3. **Use batch variants for A/B testing**—produce 3–4 variants of the same mechanism to compare (product share, dynamism, information density), then pick what goes into the final set;
4. **Reason backward from the tone spectrum**—use the style spectrum of the original directions to decide the unified visual tone of the whole set.

---

On to the finance scenarios: [After the Close: Turning Market Moves into a Research List →](/en/doubaowork/case-market-review)
