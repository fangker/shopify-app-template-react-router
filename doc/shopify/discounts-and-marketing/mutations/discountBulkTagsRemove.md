---
title: discountBulkTagsRemove - GraphQL Admin
description: |-
  Removes tags from multiple
  [discounts](https://help.shopify.com/manual/discounts/discount-types)
  asynchronously using one of the following:
  - A search query
  - A saved search ID
  - A list of discount IDs

  For example, you can delete tags from price rules that match a search
  criteria, or delete tags from a predefined set of price rules.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# discount​Bulk​Tags​Remove

mutation

Requires Apps must have `write_discounts` access scope.

Removes tags from multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

* A search query
* A saved search ID
* A list of discount IDs

For example, you can delete tags from price rules that match a search criteria, or delete tags from a predefined set of price rules.

## Arguments

* ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the discounts to untag.

* saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the saved search for filtering discounts to remove tags from.

* search

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The search query for filtering discounts.\
  \
  For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The tags to remove from the discounts.

***

## Discount​Bulk​Tags​Remove​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that removes the tags.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### discountBulkTagsRemove reference
