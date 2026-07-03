---
title: EntitlementsType - GraphQL Admin
description: The shop's entitlements.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/EntitlementsType'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/EntitlementsType.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Entitlements​Type

object

The shop's entitlements.

## Fields

* b2b

  [B2BType!](https://shopify.dev/docs/api/admin-graphql/latest/objects/B2BType)

  non-null

  The shop's B2B entitlements.

* markets

  [Markets​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsType)

  non-null

  Represents the markets for the shop.

***

## Map

### Fields with this object

* [Shop.entitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.entitlements)
