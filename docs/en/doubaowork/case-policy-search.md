# No More Digging Through the Company Knowledge Base: Find the Process (with Sources) in One Question

> Scenario: It's not that the company lacks policies—the trouble is finding **the currently effective version** quickly when you actually need to do something. Overtime requests are a classic case: do you apply in advance, who approves, where do you submit, can you take time off instead—the answers may be scattered across several documents. Digging yourself wastes time, and asking a colleague may get you an outdated answer.

Test question: "What's the process for applying for overtime today." Add the company policy knowledge base to the Doubao conversation and require the answer to include **the policy name, section, original text, and version info**. Focus on two things: can it find the genuinely relevant policy, and how does it handle conflicting or missing material.

> Prerequisite: the Doubao login account must match the account that owns the Feishu knowledge base, and must already have access to the target knowledge base—without sufficient permissions, Doubao can't read the content.

## State Your Constraints When Asking

Type @ in the input box to select the company policy knowledge base and pin down the material scope. If you only ask "what's the overtime process," Doubao may give you a summary, but it won't necessarily volunteer versions, original text, or conflicts—so add the material scope, answer format, and human-confirmation boundary:

```text
I want to apply for overtime today—what's the exact process?

Answer only from policies currently in effect in the knowledge base that I'm authorized to view.
Give a short conclusion first, then list the specific policy names, sections, original text excerpts, versions, and effective dates.

If multiple policies conflict, present each one separately and tell me to contact the policy owner to confirm.
If you can't find a basis, say clearly that the material is insufficient—don't fill gaps with common sense.

If you detect an expired, pending, or superseded document, flag it at the top of the answer.
For individual-case approvals, legal judgments, or exception requests, only explain the process and the contact person—don't decide on the owner's behalf.
```

This prompt does just three things: **limit the policy scope, attach sources to key conclusions, and leave conflicts/gaps/exception approvals to the responsible owner**.

## Field Test: Conclusion First, Then the Basis

Judging from the retrieval log, Doubao first read the knowledge base's directory structure (identifying 7 category nodes), filed the overtime process under HR policies, and focused on the Attendance and Leave Management policy and the Employee Handbook; after locating the "Overtime Management" section, it went on to check Compensation and Benefits Management, and scanned the Corporate Governance, Administration, R&D, and Information Security categories for any other provisions. **This is exactly the step people skip when checking policies themselves: they stop at the first relevant document and never look for supplementary or conflicting clauses.**

The answer first explains how to apply today, then lists the basis: policy name "Attendance and Leave Management" (HR policy category), section "Working Hours → Overtime Management," the original text (fill in the Overtime Application Form in advance and get department head approval; overtime on workdays/rest days/statutory holidays is compensated at 1.5x/2x/3x pay or time off; unapproved overtime doesn't count), and version info (revision 3, currently effective, owned by General Administration).

One detail worth human confirmation: the result gave a "last edited" time but didn't list an "effective date" separately—the two mean different things, so open the original before acting on it formally.

## What About Places the Policy Doesn't Spell Out

The result also listed three boundary notes:

1. It checked policies under the other categories and found no provisions conflicting with the overtime application process;
2. The submission channel for the overtime application form (attendance system form or paper form) is **not specified in the policy**—confirm with General Administration;
3. Individual cases or exceptions beyond standard approval authority are ultimately decided by the approving manager; the answer only describes the process and doesn't make the call.

The second one is the most practically useful: the gap in the policy is preserved and pointed at a department that can resolve it—the task can keep moving on the basis of the answer.

## How This Test Changed the Way I Look Up Policies

1. Let AI **narrow the scope** to the most relevant policy first, then check other documents for supplementary or conflicting clauses—less "run with the first search result";
2. In the answer, focus on the **policy name, version, effective date, and original text**—if you only get a process summary with no original text or version, go back to the knowledge base;
3. On conflicts or gaps, follow the **owning department** named in the result to keep confirming. This also requires the knowledge base itself to keep clear versions, effective dates, and responsible departments—if old policies aren't deactivated promptly, even the best retrieval tool can't produce reliable answers.

What AI saves is search-and-compare time; the policy text and its owner remain the final authority. To test your own knowledge base, try a frequently asked question (leave requests, reimbursements, purchase requests): does the answer include the currently effective version, an accurate citation, and a way to confirm uncertain information?

---

Next: [Re-Categorizing 541 GPT Prompt Examples →](/en/doubaowork/case-prompt-library)
