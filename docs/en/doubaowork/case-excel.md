# Work Excel Freely and Turn into a Data-Analysis Wizard

> Scenario: too many worksheets gives anyone a headache—column widths don't line up, every sheet formats dates its own way, several detail files need merging, and formulas need checking cell by cell. Hand the beautifying, cleaning, merging, and analyzing all to Doubao Work.

## One-Click Excel Beautification

Beautification only fixes **readability**, not data: headers, column widths, frozen panes, filters, and banded rows make long detail tables easier to browse and cut down on misreads. Original values, formulas, and worksheet names should stay untouched.

```text
Please beautify the uploaded file "January 2026 Sales Detail.xlsx".

Specific requirements:
1. Do not modify any original data, formulas, or worksheet names.
2. Header row: dark blue background, white bold text.
3. Set appropriate column widths and row heights so no text is cut off.
4. Freeze the first row and enable filters.
5. Add banded row shading to the data area.
6. Save the result as "January 2026 Sales Detail - beautified.xlsx".

Adjust formatting only—do not change the data.
```

Acceptance check: is any text cut off, do filters and freezing work, is the original data unchanged?

## Data Cleaning and Standardization

Cleaning starts by defining **what counts as correct**: spacing, region spellings, number formats, and duplicate records each get explicit rules, so the model has a basis to work from. Anything ambiguous goes into "problem data" rather than being auto-guessed—far easier to trace later.

```text
Please clean the uploaded file "January 2026 Sales Detail.xlsx".

Keep the original worksheet untouched; create two new worksheets, "cleaned
data" and "problem data".

Cleaning rules:
1. Trim leading/trailing spaces from text fields.
2. Normalize spellings like "Eas t China" and " East China" to "East
   China".
3. Convert sales quantity and unit price to numbers.
4. Convert discount rates to decimals—e.g. 10% stored as 0.1.
5. Keep only one copy of fully identical duplicate records.

Do not fill in any data you cannot determine.
```

The system keeps the original worksheet, writes rule-compliant records into "cleaned data", puts anything ambiguous into "problem data"; besides the local file it also generates an online spreadsheet, handy for further review and collaboration.

## Merging Multiple Excel Files

**Vertical merge** (Jan–Apr detail files into one master table):

```text
Please merge the January-to-April 2026 sales detail files.

Processing requirements:
1. Match columns by field name, not by column position.
2. Append all detail rows to one worksheet named "Sales Master".
3. Add two columns: "source file" and "source worksheet".
4. Check each file for missing or extra fields.
5. Check for duplicate records by order number.
6. Do not delete conflicting duplicate orders—put them in a "merge
   exceptions" worksheet.
7. Create a "merge summary" listing each file's original row count, valid
   rows, and exception rows.
8. Output "Jan-Apr 2026 Sales Merged.xlsx" as the final file.
```

**Horizontal join** (transaction detail + product info + customer info, three tables):

```text
Please join the following three files:
1. Jan-Apr 2026 sales merged.xlsx
2. product-info.xlsx
3. customer-info.xlsx

Join rules:
1. Use "product ID" to add product name, category, list price, and unit
   cost to the sales master.
2. Use "customer ID" to add customer name, industry, tier, and province to
   the sales master.
3. Keep the sales master as the base table—retain sales records even when
   no product or customer matches.
4. Mark unmatched entries as "unmatched".
5. Collect unmatched records into a "match exceptions" worksheet.
6. Report the product match rate and customer match rate.
7. Do not fuzzy-guess by product name or customer name.
```

## Data Analysis in Three Steps

**Calculated columns with formulas** (keep formulas, don't hardcode values):

```text
Add the following calculated columns to "Jan-Apr 2026 sales merged -
joined.xlsx":

1. Sales amount = quantity × unit price × (1 - discount rate)
2. Cost amount = quantity × unit cost
3. Gross profit = sales amount - cost amount
4. Gross margin = gross profit ÷ sales amount
5. Price deviation = (unit price - list price) ÷ list price

Requirements:
1. Use Excel formulas; do not hardcode computed values.
2. Round sales amount, cost amount, and gross profit to two decimals.
3. Show gross margin and price deviation as percentages.
4. When sales amount is 0, leave gross margin blank—no division-by-zero
   errors.
5. Use one consistent formula structure down all data rows.
6. Apply red conditional formatting to orders with gross margin below 10%.
```

**Pivots and operating summary** (watch deduplication and bases):

```text
Create an "Operating Analysis" worksheet from "Jan-Apr 2026 sales merged -
joined.xlsx".

Statistics needed:
1. Monthly sales amount, gross profit, order count, and gross margin.
2. Sales amount, gross profit, and customer count by region.
3. Volume, sales amount, and gross profit by product category.
4. Sales share by sales channel.
5. Sales amount ranking by sales rep.

Requirements:
- Count orders by distinct order numbers.
- Count customers by distinct customer IDs.
- Compute gross margin as "total gross profit ÷ total sales amount"; do not
  average the per-row margins.
- Add grand totals.
- Use thousands separators for amounts.
```

**Management dashboard** (answers what management asks daily: has the scale moved, is profit healthy, what's below target, who needs follow-up):

```text
Build a management sales dashboard from "Operating Analysis".

The dashboard includes:
1. Four core metrics: sales amount, gross profit, gross margin, order
   count.
2. Monthly sales trend chart.
3. Sales comparison by region.
4. Sales ranking by product category.
5. Channel share chart.
6. Top 10 sales reps leaderboard.
7. Attainment of actual sales vs. target.

Design requirements:
- Clean business-blue style throughout.
- Core metrics at the top.
- Clear chart titles and units.
- No 3D charts.
- Limit the color count; no over-decoration.
- Red alert for target attainment below 80%.
```

You don't need many charts—enough to explain the anomalies and the trend. In field testing, the whole pipeline from merging, joining, formulas, and pivots to the dashboard lost no data.

---

Related: [From Ad-Hoc Research to a Formal Deliverable →](/en/doubaowork/case-research)
