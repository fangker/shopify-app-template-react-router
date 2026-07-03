---
title: DiscountRedeemCodeBulkCreation - GraphQL Admin
description: The properties and status of a bulk discount redeem code creation operation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Redeem​Code​Bulk​Creation

object

Requires Apps must have `read_discounts` access scope.

The properties and status of a bulk discount redeem code creation operation.

## Fields

* codes

  [Discount​Redeem​Code​Bulk​Creation​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection)

  non-null

  The result of each code creation operation associated with the bulk creation operation including any errors that might have occurred during the operation.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* codes​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of codes to create.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the bulk creation was created.

* discount​Code

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount associated with the created codes.

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the bulk creation is still queued (`false`) or has been run (`true`).

* failed​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of codes that weren't created successfully.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* imported​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of codes created successfully.

***

## Map

No referencing types

***

## Queries

* [discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation)

  query

  Returns a `DiscountRedeemCodeBulkCreation` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountRedeemCodeBulkCreation` to return.

  ***

***

## DiscountRedeemCodeBulkCreation Queries

### Queried by

* [discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation)

***

## Mutations

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

  mutation

  Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

  * codes

    [\[Discount​Redeem​Code​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountRedeemCodeInput)

    required

    ### Arguments

    The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  ***

***

## DiscountRedeemCodeBulkCreation Mutations

### Mutated by

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DiscountRedeemCodeBulkCreation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
