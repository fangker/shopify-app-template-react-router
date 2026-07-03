---
title: OrderStagedChangeRemoveDiscount - GraphQL Admin
description: A discount application removed during an order edit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Staged​Change​Remove​Discount

object

Requires `read_order_edits` access scope.

A discount application removed during an order edit.

## Fields

* discount​Application

  [Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  non-null

  The removed discount application.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
