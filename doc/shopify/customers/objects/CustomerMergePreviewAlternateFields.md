---
title: CustomerMergePreviewAlternateFields - GraphQL Admin
description: The fields that can be used to override the default fields.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Merge​Preview​Alternate​Fields

object

Requires `read_customer_merge` access scope.

The fields that can be used to override the default fields.

## Fields

* default​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The default address of a customer.

* email

  [Customer​Email​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress)

  The email state of a customer.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of a customer.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of a customer.

* phone​Number

  [Customer​Phone​Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

  The phone number state of a customer.

***

## Map

### Fields with this object

* [CustomerMergePreview.alternateFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview#field-CustomerMergePreview.fields.alternateFields)
