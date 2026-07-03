---
title: DiscountAllocation - GraphQL Admin
description: >-
  The actual amount discounted on a line item or shipping line. While
  [`DiscountApplication`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  captures the discount's intentions and rules, The `DiscountAllocation` object

  shows the final calculated discount amount applied to each line.


  The allocation includes the discounted amount in both shop and presentment

  currencies, with a reference to the originating discount application.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Allocation

object

The actual amount discounted on a line item or shipping line. While [`DiscountApplication`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication) captures the discount's intentions and rules, The `DiscountAllocation` object shows the final calculated discount amount applied to each line.

The allocation includes the discounted amount in both shop and presentment currencies, with a reference to the originating discount application.

## Fields

* allocated​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The money amount that's allocated to a line based on the associated discount application in shop and presentment currencies.

* discount​Application

  [Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  non-null

  The discount application that the allocated amount originated from.

* allocated​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [AbandonedCheckoutLineItem.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations)
* [DiscountAllocationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-nodes)
* [DiscountAllocationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocationEdge#field-DiscountAllocationEdge.fields.node)
* [LineItem.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.discountAllocations)
* [ShippingLine.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine#field-ShippingLine.fields.discountAllocations)
