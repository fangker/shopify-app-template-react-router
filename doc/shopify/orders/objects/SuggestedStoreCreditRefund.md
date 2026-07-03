---
title: SuggestedStoreCreditRefund - GraphQL Admin
description: The suggested values for a refund to store credit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedStoreCreditRefund
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedStoreCreditRefund.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Suggested​Store​Credit​Refund

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The suggested values for a refund to store credit.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The suggested amount to refund in shop and presentment currencies.

* expires​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The suggested expiration date for the store credit.

* maximum​Refundable

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The maximum available amount to refund in shop and presentment currencies.

***

## Map

No referencing types

***

## Interfaces

* [Suggested​Refund​Method](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)

  interface

***

## SuggestedStoreCreditRefund Implements

### Implements

* [Suggested​Refund​Method](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)
