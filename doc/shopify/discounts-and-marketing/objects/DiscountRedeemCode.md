---
title: DiscountRedeemCode - GraphQL Admin
description: >-
  A code that a customer can use at checkout to receive a discount. For example,
  a

  customer can use the redeem code 'SUMMER20' at checkout to receive a 20%

  discount on their entire order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Redeem​Code

object

Requires Apps must have `read_discounts` access scope.

A code that a customer can use at checkout to receive a discount. For example, a customer can use the redeem code 'SUMMER20' at checkout to receive a 20% discount on their entire order.

## Fields

* async​Usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times that the discount redeem code has been used. This value is updated asynchronously and can be different than the actual usage count.

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code that a customer can use at checkout to receive a discount.

* created​By

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the discount redeem code.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID of the discount redeem code.

***

## Map

### Fields and connections with this object

* [DiscountCodeApp.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes)
* [DiscountCodeBasic.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes)
* [DiscountCodeBxgy.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes)
* [DiscountCodeFreeShipping.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes)
* [DiscountRedeemCodeBulkCreationCode.discountRedeemCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode#field-DiscountRedeemCodeBulkCreationCode.fields.discountRedeemCode)
* [DiscountRedeemCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-nodes)
* [DiscountRedeemCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeEdge#field-DiscountRedeemCodeEdge.fields.node)
