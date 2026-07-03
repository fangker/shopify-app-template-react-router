---
title: MarketingActivityExtensionAppErrors - GraphQL Admin
description: >-
  Represents errors returned from apps when using the marketing activity
  extension.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Marketing​Activity​Extension​App​Errors

object

Represents errors returned from apps when using the marketing activity extension.

## Fields

* code

  [Marketing​Activity​Extension​App​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExtensionAppErrorCode)

  non-null

  The app error type.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors returned by the app.

***

## Map

### Fields with this object

* [MarketingActivity.appErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.appErrors)
