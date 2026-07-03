---
title: GiftCardConfiguration - GraphQL Admin
description: Represents information about the configuration of gift cards on the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Gift​Card​Configuration

object

Requires `read_gift_cards` access scope.

Represents information about the configuration of gift cards on the shop.

## Fields

* expiration​Configuration

  [Gift​Card​Expiration​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardExpirationConfiguration)

  The default expiration configuration of gift cards on the shop. This field is null if the shop hasn't set a default expiration for gift cards.

* issue​Limit

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The issue limit for gift cards in the default shop currency.

* purchase​Limit

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The purchase limit for gift cards in the default shop currency.

***

## Map

No referencing types

***

## Queries

* [gift​Card​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardConfiguration)

  query

  The configuration for the shop's gift cards.

***

## GiftCardConfiguration Queries

### Queried by

* [gift​Card​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCardConfiguration)
