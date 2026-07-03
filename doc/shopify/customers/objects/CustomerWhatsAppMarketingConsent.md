---
title: CustomerWhatsAppMarketingConsent - GraphQL Admin
description: >-
  The WhatsApp marketing consent information for a [customer's phone
  number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber).
  Implements the
  [`CustomerMarketingConsent`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMarketingConsent)

  interface. Use the
  [`customerWhatsAppMarketingConsentUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate)

  mutation to change it.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerWhatsAppMarketingConsent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerWhatsAppMarketingConsent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Whats​App​Marketing​Consent

object

Requires `read_customers` access scope.

The WhatsApp marketing consent information for a [customer's phone number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber). Implements the [`CustomerMarketingConsent`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMarketingConsent) interface. Use the [`customerWhatsAppMarketingConsentUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate) mutation to change it.

## Fields

* collected​From

  [Customer​Consent​Collected​From](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom)

  The [source](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom) from which the marketing consent was collected.

* opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The [marketing subscription opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel), as described by the M3AAWG best practices guidelines, received when the marketing consent was updated.

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The [location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where the customer consented to receive marketing material.

* state

  [Customer​Marketing​Consent​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingConsentState)

  non-null

  The customer's current [marketing consent state](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingConsentState) for this channel.

* updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the marketing consent was updated.

  No date is provided if the customer has never updated their marketing consent for this channel.

***

## Map

### Fields with this object

* [CustomerPhoneNumber.whatsAppMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.whatsAppMarketingConsent)

***

## Interfaces

* [Customer​Marketing​Consent](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMarketingConsent)

  interface

***

## CustomerWhatsAppMarketingConsent Implements

### Implements

* [Customer​Marketing​Consent](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMarketingConsent)
