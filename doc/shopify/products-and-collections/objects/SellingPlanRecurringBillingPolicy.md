---
title: SellingPlanRecurringBillingPolicy - GraphQL Admin
description: Represents a recurring selling plan billing policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringBillingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringBillingPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Recurring​Billing​Policy

object

Requires `read_products` access scope.

Represents a recurring selling plan billing policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

  non-null

  Specific anchor dates upon which the billing interval calculations should be made.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the selling plan billing policy was created.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The billing frequency, it can be either: day, week, month or year.

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of intervals between billings.

* max​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Maximum number of billing iterations.

* min​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Minimum number of billing iterations.

***

## Map

### Possible type in

* [Selling​Plan​Billing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy)
