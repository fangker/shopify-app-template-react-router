---
title: discountBulkTagsAdd - GraphQL Admin
description: >-
  Adds tags to multiple

  [discounts](https://help.shopify.com/manual/discounts/discount-types)

  asynchronously using one of the following:

  - A search query

  - A saved search ID

  - A list of discount IDs


  For example, you can add tags to price rules that match a search criteria, or
  add tags to a predefined set of price rules.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# discount​Bulk​Tags​Add

mutation

Requires Apps must have `write_discounts` access scope.

Adds tags to multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

* A search query
* A saved search ID
* A list of discount IDs

For example, you can add tags to price rules that match a search criteria, or add tags to a predefined set of price rules.

## Arguments

* ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the discounts to tag.

* saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the saved search for filtering discounts to tag.

* search

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The search query for filtering discounts.\
  \
  For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The tags to add to the discounts.

***

## Discount​Bulk​Tags​Add​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that adds the tags.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### discountBulkTagsAdd reference
