---
title: DraftOrderDiscountNotAppliedWarning - GraphQL Admin
description: A warning indicating that a discount cannot be applied to a draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderDiscountNotAppliedWarning
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderDiscountNotAppliedWarning.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Discount​Not​Applied​Warning

object

Requires `read_draft_orders` access scope.

A warning indicating that a discount cannot be applied to a draft order.

## Fields

* discount​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code of the discount that can't be applied.

* discount​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the discount that can't be applied.

* error​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error code.

* field

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The input field that the warning applies to.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The warning message.

* price​Rule

  [Price​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule)

  Deprecated (removal date set)

***

## Map

No referencing types

***

## Interfaces

* [Draft​Order​Warning](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

  interface

***

## DraftOrderDiscountNotAppliedWarning Implements

### Implements

* [Draft​Order​Warning](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)
