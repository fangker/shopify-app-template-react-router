---
title: LineItemSellingPlan - GraphQL Admin
description: Represents the selling plan for a line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemSellingPlan
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemSellingPlan.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Line​Item​Selling​Plan

object

Requires `read_orders` access scope.

Represents the selling plan for a line item.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the selling plan for display purposes.

* selling​Plan​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the selling plan associated with the line item.

***

## Map

### Fields with this object

* [LineItem.sellingPlan](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.sellingPlan)
