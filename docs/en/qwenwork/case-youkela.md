---
title: "Youkela: Product R&D and Attendance-Based Payroll"
description: Support product R&D with user review analysis and distill attendance and payroll rules into reusable processes
status: community-practice
verifiedAt: 2026-07-29
sources:
  - Customer-provided case transcript (authorized for publication)
---

# Youkela: Product R&D and Attendance-Based Payroll

> This case was organized from customer-provided materials; the quantitative results were not independently audited by this project. Use it together with your own organization's data, permissions, and human-review requirements. V2.0 keeps the text readable but does not auto-promote customer statements into verified public cases.

## Conclusions First: From Problem to Reusable Artifacts

### Product R&D

#### The Problem

New product R&D used to rely mainly on experience and scattered review-section feedback. User voices were voluminous and diffusely expressed, making it hard for the team to systematically distill requirements; a wrong call in design, tooling, or stocking wasted the entire chain.

#### The Final Artifacts

An R&D report containing user needs, evidence excerpts, classifications, and priority suggestions, plus a user feedback summary and issue list for R&D review.

#### If You Want to Reuse

1. Replace user reviews, after-sales feedback, product information, sources, and time ranges with your own authorized materials.
2. Clean, deduplicate, and de-identify first, then generate requirement leads by pain points, itch points, selling points, and evidence strength.
3. Organize the report with your own R&D constraints and acceptance basis, separating user facts, analytical hypotheses, and R&D suggestions.
4. The R&D team proposes solutions and completes internal review; the product owner then samples raw reviews to confirm high-priority requirements.

Must be replaced with your own data, rules, or materials: user reviews, after-sales feedback, product information, sources, time ranges, and R&D constraints all need re-confirmation.

Results from customer material cannot be transplanted directly; retest with your own sample sizes, first-launch success definitions, report generation time, and human review time. The human confirmers are the product owner and the R&D team.

#### Evidence Boundaries

Customer materials state that about 5,000 reviews can be turned into a report in about 15 minutes, and new-product first-launch success rose from 62% to 92%. These are customer statements, not independently audited by this project, and do not represent the results other organizations will obtain.

### Attendance-Based Payroll

#### The Problem

A factory of about 80 people had one part-time HR person handling attendance-based payroll. Every month required exporting data from the system, then transcribing item by item, converting formats, and computing overtime and comp time—usually 2 days, and error-prone.

#### The Final Artifacts

A human-reviewed payroll working sheet, an anomaly list, and rule version records.

#### If You Want to Reuse

1. Export attendance data within the authorized scope and check field completeness; replace the data, staff scope, pay rules, and exceptions with your own inputs.
2. Break overtime, comp time, absence, and exception rules into explicit conditions, and first run parallel calculations on historical samples.
3. Generate the payroll working sheet and anomaly list; do not use the working sheet directly as the official payroll result.
4. HR or finance samples and cross-checks, completes approval per the company's official process, and records the rule version.

Must be replaced with your own data, rules, or materials: attendance data, staff scope, pay rules, and exceptions all need re-confirmation.

Results from customer material cannot be transplanted directly; retest with your own headcount, rule complexity, human review time, and anomaly rate. The human confirmers are authorized HR, finance, or management personnel.

#### Evidence Boundaries

Customer materials state that monthly payroll went from 2 days to about 10 minutes, letting the part-time HR spend more time on recruiting, training, and employee relations. This is a customer statement, not independently audited by this project, and does not represent the results other organizations will obtain.

## The Two Scenarios at a Glance

| Scenario | Old way | AI workflow | Customer-stated result |
|------|----------|-----------|--------------|
| Product R&D | Manually combing user reviews; R&D judgment driven by experience | Analyze user reviews into structured requirement reports by pain points, itch points, selling points | First-launch success from 62% to 92%; review analysis in about 15 minutes |
| Attendance-based payroll | Part-time HR exporting data, then manual transcription, format conversion, and calculation | Clean attendance data, compute per confirmed rules, output an anomaly list | Payroll time from 2 days to about 10 minutes |

## Scenario and Problem

Zhejiang Youkela Intelligent Technology is an industry-and-trade manufacturer; the case covers product R&D for its star projector category and attendance-based payroll for a small factory. The R&D team previously had to comb large volumes of user reviews by hand, while HR had to export data from multiple systems, check line by line, and compute wages—both slow and prone to omissions and errors.

## Applicable Roles

Product R&D, user research, operations analysis, HR, and finance collaborators. Suited to small and mid-sized manufacturers that need to turn user feedback into R&D input or improve attendance and payroll data processing under existing rules.

## Input Materials

### Product R&D

- Authorized user reviews, after-sales feedback, and product information.
- R&D constraints, acceptance basis, and the final decision maker.

### Attendance-Based Payroll

- De-identified attendance data, pay rules, and staff scope.
- Overtime, comp time, absences, exceptions, and the final approver.

## Capabilities Used

Text classification and summarization, requirement signal extraction, structured report generation, data cleaning, and rule-based calculation assistance. Payroll-related calculations must keep human review and official system records; AI output cannot directly replace statutory or company approval processes.

## Task Description

### Product R&D

Distill large volumes of user reviews into pain-point, itch-point, and selling-point leads, generating a reviewable, traceable requirements report.

### Attendance-Based Payroll

Organize established attendance and pay rules into a repeatable process that retains human review of anomalies, reducing manual data shuffling and formula work.

## Execution Steps

### Product R&D

1. Clarify review sources, time ranges, sample bias, and content that must be excluded from analysis.
2. Clean, deduplicate, de-identify, then generate requirement leads by pain points, itch points, selling points, and evidence strength.
3. The product owner samples raw reviews to confirm high-priority requirements and R&D constraints.

### Attendance-Based Payroll

1. Split attendance rules into data fields, calculation conditions, exceptions, and human approval nodes.
2. First run parallel calculations on historical samples.
3. Expand usage only after results match the existing basis, continuously recording anomalies, human edits, and rule versions.

## Final Artifacts

### Product R&D

- A product requirements report with evidence excerpts, classifications, and priority suggestions.
- A user feedback summary and issue list for R&D review.

### Attendance-Based Payroll

- A human-reviewed attendance-based payroll working sheet.
- An anomaly list and rule version records.

## Acceptance Criteria

### Product R&D

- Requirement conclusions trace to authorized original feedback.
- User facts, analytical hypotheses, and R&D suggestions clearly separated.

### Attendance-Based Payroll

- Calculation results must match the company-confirmed rules and sampled human review.
- Anomalies, missing data, or rule conflicts must enter a manual handling queue.
- Efficiency metrics must not replace review of employee rights, compliance, and data accuracy.

## Permission and Security Boundaries

User reviews, employee attendance, and payroll data may all involve personal or commercially sensitive information. Minimize usage scope, de-identify, restrict access, and keep audit records. Payroll conclusions must be finally confirmed by authorized HR, finance, or management personnel.

## Reproducible Evidence

### Product R&D

Customer materials state first-launch success rose from 62% to 92%, and about 5,000 reviews become a requirements report in about 15 minutes. When reproducing, record sample size, the first-launch success definition, report generation time, human review time, and final adoption rate.

### Attendance-Based Payroll

Customer materials state payroll went from 2 days to about 10 minutes. When reproducing, record headcount, rule complexity, human review time, anomaly rate, and employee appeals.

All of the above are customer statements and do not represent the results other organizations will obtain.

## Contributors and Verification Date

Source: customer-provided transcript of a Qwen Work AI practice case; organized by the QwenWorkGuide maintainers; verification date: 2026-07-29.
