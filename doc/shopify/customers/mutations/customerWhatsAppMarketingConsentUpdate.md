---
title: customerWhatsAppMarketingConsentUpdate - GraphQL Admin
description: >-
  Updates a
  [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s
  WhatsApp marketing consent information. The customer's WhatsApp account is

  identified by their [phone
  number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber).


  You can set whether the customer subscribes or unsubscribes to WhatsApp

  marketing and specify the [opt-in
  level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.optInLevel).

  Optionally include when the consent was collected and which
  [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.sourceLocationId)
  collected it.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Whats​App​Marketing​Consent​Update

mutation

Requires `write_customers` access scope. Also: The user must have permission to create and edit customers.

Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s WhatsApp marketing consent information. The customer's WhatsApp account is identified by their [phone number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber).

You can set whether the customer subscribes or unsubscribes to WhatsApp marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.optInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.sourceLocationId) collected it.

## Arguments

* input

  [Customer​Whats​App​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerWhatsAppMarketingConsentUpdateInput)

  required

  Specifies the input fields to update a customer's WhatsApp marketing consent information.

***

## Customer​Whats​App​Marketing​Consent​Update​Payload returns

* customer​Phone​Number

  [Customer​Phone​Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

  The [customer phone number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber) with the updated WhatsApp marketing consent information.

* user​Errors

  [\[Customer​Marketing​Consent​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMarketingConsentError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerWhatsAppMarketingConsentUpdate reference
