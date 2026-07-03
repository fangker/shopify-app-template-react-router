---
title: DiscountRedeemCodeBulkCreationCode - GraphQL Admin
description: >-
  A result of a discount redeem code creation operation created by a bulk
  creation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Redeem​Code​Bulk​Creation​Code

object

Requires Apps must have `read_discounts` access scope.

A result of a discount redeem code creation operation created by a bulk creation.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The code to use in the discount redeem code creation operation.

* discount​Redeem​Code

  [Discount​Redeem​Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode)

  The successfully created discount redeem code.

  If the discount redeem code couldn't be created, then this field is \`null\`\`.

* errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  A list of errors that occurred during the creation operation of the discount redeem code.

***

## Map

### Fields and connections with this object

* [DiscountRedeemCodeBulkCreation.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.codes)
* [DiscountRedeemCodeBulkCreationCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-nodes)
* [DiscountRedeemCodeBulkCreationCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCodeEdge#field-DiscountRedeemCodeBulkCreationCodeEdge.fields.node)
