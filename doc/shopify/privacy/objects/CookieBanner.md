---
title: CookieBanner - GraphQL Admin
description: A shop's banner settings.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cookie​Banner

object

Requires `read_privacy_settings` access scope.

A shop's banner settings.

## Fields

* auto​Managed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the banner is auto managed.

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the banner is enabled.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

***

## Map

### Fields with this object

* [PrivacySettings.banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacySettings#field-PrivacySettings.fields.banner)

***

## Interfaces

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

  interface

***

## CookieBanner Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
