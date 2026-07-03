---
title: CustomerMergePreviewBlockingFields - GraphQL Admin
description: >-
  The blocking fields of a customer merge preview. These fields will block
  customer merge unless edited.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewBlockingFields
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewBlockingFields.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Merge​Preview​Blocking​Fields

object

Requires `read_customer_merge` access scope.

The blocking fields of a customer merge preview. These fields will block customer merge unless edited.

## Fields

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The merged note resulting from a customer merge. The merged note is over the 5000 character limit and will block customer merge.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The merged tags resulting from a customer merge. The merged tags are over the 250 limit and will block customer merge.

***

## Map

### Fields with this object

* [CustomerMergePreview.blockingFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview#field-CustomerMergePreview.fields.blockingFields)
