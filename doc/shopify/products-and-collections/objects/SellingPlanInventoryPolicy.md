---
title: SellingPlanInventoryPolicy - GraphQL Admin
description: The selling plan inventory policy.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanInventoryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanInventoryPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selling​Plan​Inventory​Policy

object

Requires `read_products` access scope.

The selling plan inventory policy.

## Fields

* reserve

  [Selling​Plan​Reserve!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanReserve)

  non-null

  When to reserve inventory for the order.

***

## Map

### Fields with this object

* [SellingPlan.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.inventoryPolicy)
