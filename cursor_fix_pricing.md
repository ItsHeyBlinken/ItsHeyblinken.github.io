# Cursor Instructions: Pricing Sync & Strategy Update

## Overview
This document contains the final analysis and specific implementation tasks to sync BuiltByBlinken's pricing and position the agency for its first client acquisitions. 

**Strategy:** Maintain "Market Entry" pricing ($995 / $1,995 / $3,995) to build a portfolio, but fix the internal math discrepancies and "pricing drift" across the site to maintain professional credibility.

---

## 1. Pricing Consistency Sync
There is currently a discrepancy between the **Pricing Cards** and the **FAQ/Comparison Table**. We will standardize on the lower "Market Entry" rates for now to ensure we land the first few clients.

### Tasks:
*   **Search for:** `$1,495` (Launch) -> **Replace with:** `$995`
*   **Search for:** `$2,995` (Growth) -> **Replace with:** `$1,995`
*   **Search for:** `$6,995` (Signature) -> **Replace with:** `$3,995`
*   **Search for:** `$4,500+` (Commerce) -> **Replace with:** `$3,995+` (Match Signature baseline)

*Note: Ensure these updates are applied in the `pricing.html` FAQ section, the Comparison Table, and any mention of "Starting at" prices in the site copy.*

---

## 2. Activation Bundle Math Fix
The bundles are currently more expensive than buying parts separately. We will adjust them to offer a clear "First Client" incentive.

| Bundle Tier | Current Price | **New Recommended Price** | Why? |
| :--- | :--- | :--- | :--- |
| **Launch + Care** | $2,495 | **$1,995** | High incentive to get on a care plan immediately. |
| **Growth + Care** | $3,495 | **$2,995** | Encourages the most popular plan + long-term retention. |
| **Signature + Care** | $5,495 | **$4,995** | Offers a $300 discount for the high-tier commitment. |

---

## 3. Infrastructure & Site Care Refinement
We will add a standalone "Infrastructure" tier for clients who only need the technical basics, and refine the "Site Care" description to protect your time.

### Tasks:
*   **Add "Infrastructure Only" Tier:** 
    *   **Price:** **$29/mo** (or **$295/yr**)
    *   **Inclusions:** Managed Cloud Hosting, SSL Certificate, Domain Renewal (.com), and Weekly Backups.
    *   **Exclusions:** No content updates, no manual software updates, no priority support.
*   **Update Site Care Description:** Change *"small content/layout tweaks inside your monthly allowance"* to *"up to 30 minutes of content/layout updates per month (non-rolling)."*
*   **Reasoning:** The $29/mo price point covers your costs (approx. $10-15/mo for hosting/domain/SSL) and provides a low-friction entry point for clients who just want their site to "stay online."

---

## 4. Strategic "Introductory" Messaging
To explain the professional site look vs. the affordable entry prices, we will add "Introductory" messaging.

### Tasks:
*   **Add Banner/Text to Pricing Section:** *"Currently offering limited-time introductory pricing for our first 5 partner projects. Secure your spot at these rates today."*
*   **Update "Founder's Note" or About Section:** Mention that BuiltByBlinken is expanding its local portfolio in McKinney, TX, which is why these rates are currently active.

---

## 5. Summary of Values for Cursor
Use these values for a final sweep of the site:

*   **Launch:** $995
*   **Growth:** $1,995
*   **Signature:** $3,995
*   **Infrastructure Only:** $29/mo (or $295/yr)
*   **Site Care (Monthly):** $129/mo
*   **Site Care (Yearly):** $1,299/yr
*   **Launch + Care Bundle:** $1,995
*   **Growth + Care Bundle:** $2,995
*   **Signature + Care Bundle:** $4,995
*   **Care on Demand (Hourly):** $125/hr

---

## References
[1] 2Marketing. "Web Design Pricing Guide 2025." https://2marketing.com/how-much-does-web-design-cost-web-design-pricing-guide-2025/
[2] ManyPixels. "Average Cost of Small Business Website Design 2025." https://www.manypixels.co/blog/web-design/for-small-businesses
[3] Siteswan. "Web Design Pricing Trends for 2025." https://www.siteswan.com/web-design-pricing-trends-for-2025-how-much-should-you-charge
