---
title: ConsentPolicyRegion - GraphQL Admin
description: A country or region code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyRegion
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyRegion.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Consent​Policy​Region

object

A country or region code.

## Fields

* country​Code

  [Privacy​Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

  The `ISO 3166` country code for which the policy applies.

* region​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `ISO 3166` region code for which the policy applies.

***

## Map

No referencing types

***

## Queries

* [consent​Policy​Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicyRegions)

  query

  List of countries and regions for which consent policies can be created or updated.

***

## ConsentPolicyRegion Queries

### Queried by

* [consent​Policy​Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicyRegions)
