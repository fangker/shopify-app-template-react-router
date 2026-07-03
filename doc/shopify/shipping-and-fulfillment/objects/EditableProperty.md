---
title: EditableProperty - GraphQL Admin
description: The attribute editable information.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Editable​Property

object

The attribute editable information.

## Fields

* locked

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the attribute is locked for editing.

* reason

  [Formatted​String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  The reason the attribute is locked for editing.

***

## Map

### Fields with this object

* [InventoryItem.trackedEditable](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.trackedEditable)
