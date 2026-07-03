---
title: CustomerMergeError - GraphQL Admin
description: The error blocking a customer merge.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Merge​Error

object

Requires The user must have `read_customer_merge` permissions.

The error blocking a customer merge.

## Fields

* error​Fields

  [\[Customer​Merge​Error​Field​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorFieldType)

  non-null

  The list of fields preventing the customer from being merged.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The customer merge error message.

***

## Map

### Fields with this object

* [CustomerMergePreview.customerMergeErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview#field-CustomerMergePreview.fields.customerMergeErrors)
* [CustomerMergeRequest.customerMergeErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest#field-CustomerMergeRequest.fields.customerMergeErrors)
