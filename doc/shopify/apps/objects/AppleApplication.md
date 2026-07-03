---
title: AppleApplication - GraphQL Admin
description: The Apple mobile platform application.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Apple​Application

object

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

The Apple mobile platform application.

## Fields

* app​Clip​Application​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The iOS App Clip application ID.

* app​Clips​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether iOS App Clips are enabled for this app.

* app​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The iOS App ID.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* shared​Web​Credentials​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether iOS shared web credentials are enabled for this app.

* universal​Links​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether iOS Universal Links are supported by this app.

***

## Map

### Possible type in

* [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)
