---
title: productVariantLeaveSellingPlanGroups - GraphQL Admin
description: Remove multiple groups from a product variant.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# product​Variant​Leave​Selling​Plan​Groups

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Remove multiple groups from a product variant.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the product variant.

* selling​Plan​Group​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the selling plan groups to leave.

***

## Product​Variant​Leave​Selling​Plan​Groups​Payload returns

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### productVariantLeaveSellingPlanGroups reference
