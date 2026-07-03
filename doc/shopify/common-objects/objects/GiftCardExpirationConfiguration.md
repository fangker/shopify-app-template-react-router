---
title: GiftCardExpirationConfiguration - GraphQL Admin
description: Represents the default expiration configuration of gift cards on the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardExpirationConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardExpirationConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Gift​Card​Expiration​Configuration

object

Requires `read_gift_cards` access scope.

Represents the default expiration configuration of gift cards on the shop.

## Fields

* expiration​Unit

  [Gift​Card​Configuration​Expiration​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardConfigurationExpirationUnit)

  non-null

  The unit for the default gift card expiration.

* expiration​Value

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The value for the default gift card expiration.

***

## Map

### Fields with this object

* [GiftCardConfiguration.expirationConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration#field-GiftCardConfiguration.fields.expirationConfiguration)
