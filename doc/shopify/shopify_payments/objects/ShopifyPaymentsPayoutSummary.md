---
title: ShopifyPaymentsPayoutSummary - GraphQL Admin
description: >-
  Breakdown of the total fees and gross of each of the different types of
  transactions associated

  with the payout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Payout​Summary

object

Requires The user must have access to payouts.

Breakdown of the total fees and gross of each of the different types of transactions associated with the payout.

## Fields

* adjustments​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all adjustments including disputes.

* adjustments​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all adjustments including disputes.

* advance​Fees

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all advances.

* advance​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all advances.

* charges​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all charges.

* charges​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all charges.

* refunds​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all refunds.

* refunds​Fee​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all refunds.

* reserved​Funds​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all reserved funds.

* reserved​Funds​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all reserved funds.

* retried​Payouts​Fee

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total fees for all retried payouts.

* retried​Payouts​Gross

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total gross amount for all retried payouts.

* usdc​Rebate​Credit​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total amount for all usdc rebate credit balance adjustments.

***

## Map

### Fields with this object

* [ShopifyPaymentsPayout.summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.summary)
