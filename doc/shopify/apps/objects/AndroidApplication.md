---
title: AndroidApplication - GraphQL Admin
description: The Android mobile platform application.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Android​Application

object

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

The Android mobile platform application.

## Fields

* application​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The Android application ID.

* app​Links​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether Android App Links are supported by this app.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* sha256Cert​Fingerprints

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The SHA256 fingerprints of the app's signing certificate.

***

## Map

### Possible type in

* [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)
