---
title: PrivacyPolicy - GraphQL Admin
description: A shop's privacy policy settings.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyPolicy'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyPolicy.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Privacy​Policy

object

Requires `read_privacy_settings` access scope.

A shop's privacy policy settings.

## Fields

* auto​Managed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the policy is auto managed.

* supported​Locales

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Policy template supported locales.

***

## Map

### Fields with this object

* [PrivacySettings.privacyPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacySettings#field-PrivacySettings.fields.privacyPolicy)
