---
title: CustomerEmailMarketingConsentState - GraphQL Admin
description: >-
  The record of when a customer consented to receive marketing material by
  email.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Email​Marketing​Consent​State

object

Requires `read_customers` access scope.

The record of when a customer consented to receive marketing material by email.

## Fields

* consent​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the customer consented to receive marketing material by email. The customer's consent state reflects the consent record with the most recent `consent_updated_at` date. If no date is provided, then the date and time at which the consent information was sent is used.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines, that the customer gave when they consented to receive marketing material by email.

* marketing​State

  [Customer​Email​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingState)

  non-null

  The current email marketing state for the customer.

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the customer consented to receive marketing material by email.

***

## Map
