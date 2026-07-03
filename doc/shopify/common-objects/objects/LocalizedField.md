---
title: LocalizedField - GraphQL Admin
description: >-
  Represents the value captured by a localized field. Localized fields are

  additional fields required by certain countries on international orders. For

  example, some countries require additional fields for customs information or
  tax

  identification numbers.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedField'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedField.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Localized​Field

object

Represents the value captured by a localized field. Localized fields are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

## Fields

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  Country ISO 3166-1 alpha-2 code.

* key

  [Localized​Field​Key!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldKey)

  non-null

  The localized field keys that are allowed.

* purpose

  [Localized​Field​Purpose!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldPurpose)

  non-null

  The purpose of this localized field.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized field title.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the field.

***

## Map

### Fields and connections with this object

* [DraftOrder.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizedFields)
* [HasLocalizedFields.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields#fields-localizedFields)
* [LocalizedFieldConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-nodes)
* [LocalizedFieldEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedFieldEdge#field-LocalizedFieldEdge.fields.node)
* [Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizedFields)
