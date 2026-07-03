---
title: ShopPlan - GraphQL Admin
description: >-
  The shop's billing plan and subscription details. Indicates the plan tier
  (such

  as Basic, Advanced, or Plus), whether the shop has a Shopify Plus
  subscription,

  and if it's a dev store for testing.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPlan'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPlan.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Plan

object

The shop's billing plan and subscription details. Indicates the plan tier (such as Basic, Advanced, or Plus), whether the shop has a Shopify Plus subscription, and if it's a dev store for testing.

## Fields

* partner​Development

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shop is a partner development shop for testing purposes.

* public​Display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The public display name of the shop's billing plan. Possible values are: Advanced, Agentic, Agentic Enterprise, Basic, Development, Grow, Inactive, Lite, Other, Paused, Plus, Plus Trial, Retail, Shop Component, Staff Business, Starter, and Trial.

* shopify​Plus

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shop has a Shopify Plus subscription.

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

***

## Map

### Fields with this object

* [Shop.plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.plan)
