---
title: MerchantApprovalSignals - GraphQL Admin
description: Merchant approval for accelerated onboarding to channel integration apps.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MerchantApprovalSignals
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MerchantApprovalSignals.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Merchant​Approval​Signals

object

Requires `read_merchant_approval_signals` access scope.

Merchant approval for accelerated onboarding to channel integration apps.

## Fields

* identity​Verified

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shop's Shopify Payments account identity is verified. Returns `false` if the identity is unverified or if the shop doesn't have a Shopify Payments account.

* verified​By​Shopify

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether Shopify has pre-verified the merchant's business for onboarding to channel integration apps. Returns `false` if the shop isn't marked for verification.

* verified​By​Shopify​Tier

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Which tier of the Shopify verification was determined for the merchant's business for onboarding to channel integration apps.

***

## Map

### Fields with this object

* [Shop.merchantApprovalSignals](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.merchantApprovalSignals)
