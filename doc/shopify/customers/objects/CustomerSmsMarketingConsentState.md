---
title: CustomerSmsMarketingConsentState - GraphQL Admin
description: >-
  The record of when a customer consented to receive marketing material by SMS.


  The customer's consent state reflects the record with the most recent date
  when consent was updated.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Sms​Marketing​Consent​State

object

Requires `read_customers` access scope.

The record of when a customer consented to receive marketing material by SMS.

The customer's consent state reflects the record with the most recent date when consent was updated.

## Fields

* consent​Collected​From

  [Customer​Consent​Collected​From](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom)

  The source from which the SMS marketing information for the customer was collected.

* consent​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the customer consented to receive marketing material by SMS. If no date is provided, then the date and time when the consent information was sent is used.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  non-null

  The marketing subscription opt-in level that was set when the customer consented to receive marketing information.

* marketing​State

  [Customer​Sms​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState)

  non-null

  The current SMS marketing state for the customer.

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the customer consented to receive marketing material by SMS.

***

## Map
