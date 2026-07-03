---
title: LocalizationExtension - GraphQL Admin
description: >-
  Represents the value captured by a localization extension. Localization

  extensions are additional fields required by certain countries on
  international

  orders. For example, some countries require additional fields for customs

  information or tax identification numbers.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Localization​Extension

object

Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

## Fields

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  Country ISO 3166-1 alpha-2 code.

* key

  [Localization​Extension​Key!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionKey)

  non-null

  The localized extension keys that are allowed.

* purpose

  [Localization​Extension​Purpose!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

  non-null

  The purpose of this localization extension.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized extension title.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the field.

***

## Map

### Fields and connections with this object

* [LocalizationExtensionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-nodes)
* [LocalizationExtensionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtensionEdge#field-LocalizationExtensionEdge.fields.node)
