---
title: MarketingBudget - GraphQL Admin
description: This type combines budget amount and its marketing budget type.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Marketing​Budget

object

This type combines budget amount and its marketing budget type.

## Fields

* budget​Type

  [Marketing​Budget​Budget​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingBudgetBudgetType)

  non-null

  The budget type for a marketing activity.

* total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of budget for marketing activity.

***

## Map

### Fields with this object

* [MarketingActivity.budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.budget)
