---
title: sellingPlanGroupRemoveProductVariants - GraphQL Admin
description: Removes multiple product variants from a selling plan group.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# selling​Plan​Group​Remove​Product​Variants

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Removes multiple product variants from a selling plan group.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the selling plan group.

* product​Variant​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the product variants to remove.

***

## Selling​Plan​Group​Remove​Product​Variants​Payload returns

* removed​Product​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product variant ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### sellingPlanGroupRemoveProductVariants reference
