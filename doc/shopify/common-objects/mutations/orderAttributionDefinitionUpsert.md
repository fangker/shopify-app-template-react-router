---
title: orderAttributionDefinitionUpsert - GraphQL Admin
description: >-
  Upserts an order attribution definition for the calling app on the current
  shop. Apps can use

  attribution definitions to label orders they route to a shop, replacing or
  augmenting any definitions

  shipped declaratively via the `order_attribution_config` extension.


  If a definition with the same handle exists for this app on the shop, the
  supplied input fields are

  merged onto it; fields omitted from the input are left unchanged. Otherwise a
  new definition is

  created. To explicitly clear the stored `icon` on an existing definition, pass
  `icon: null`.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionUpsert
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderAttributionDefinitionUpsert.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# order​Attribution​Definition​Upsert

mutation

Upserts an order attribution definition for the calling app on the current shop. Apps can use attribution definitions to label orders they route to a shop, replacing or augmenting any definitions shipped declaratively via the `order_attribution_config` extension.

If a definition with the same handle exists for this app on the shop, the supplied input fields are merged onto it; fields omitted from the input are left unchanged. Otherwise a new definition is created. To explicitly clear the stored `icon` on an existing definition, pass `icon: null`.

## Arguments

* input

  [Order​Attribution​Definition​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderAttributionDefinitionUpsertInput)

  required

  The input fields for upserting the order attribution definition.

***

## Order​Attribution​Definition​Upsert​Payload returns

* order​Attribution​Definition

  [Order​Attribution​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinition)

  The order attribution definition that was upserted.

* user​Errors

  [\[Order​Attribution​Definition​Upsert​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAttributionDefinitionUpsertUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### orderAttributionDefinitionUpsert reference
