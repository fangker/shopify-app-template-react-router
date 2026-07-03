---
title: ShopifyProtectOrderSummary - GraphQL Admin
description: A summary of Shopify Protect details for an order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Protect​Order​Summary

object

Requires `read_orders` access scope.

A summary of Shopify Protect details for an order.

## Fields

* eligibility

  [Shopify​Protect​Order​Eligibility!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderEligibility)

  non-null

  The eligibility details of an order's protection against fraudulent chargebacks.

* status

  [Shopify​Protect​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectStatus)

  non-null

  The status of the order's protection against fraudulent chargebacks.

***

## Map

### Fields with this object

* [Order.shopifyProtect](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shopifyProtect)
