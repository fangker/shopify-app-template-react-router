---
title: PrivacySettings - GraphQL Admin
description: A shop's privacy settings.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacySettings'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacySettings.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Privacy​Settings

object

Requires `read_privacy_settings` access scope.

A shop's privacy settings.

## Fields

* banner

  [Cookie​Banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner)

  Banner customizations for the 'cookie banner'.

* data​Sale​Opt​Out​Page

  [Data​Sale​Opt​Out​Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutPage)

  A shop's data sale opt out page (e.g. CCPA).

* privacy​Policy

  [Privacy​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyPolicy)

  A shop's privacy policy settings.

***

## Map

No referencing types

***

## Queries

* [privacy​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/privacySettings)

  query

  Privacy related settings for a shop.

***

## PrivacySettings Queries

### Queried by

* [privacy​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/privacySettings)
