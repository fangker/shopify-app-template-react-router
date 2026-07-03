---
title: CustomerPhoneNumber - GraphQL Admin
description: A phone number.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Phone​Number

object

Requires `read_customers` access scope.

A phone number.

## Fields

* phone​Number

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A customer's phone number.

* whats​App​Marketing​Consent

  [Customer​Whats​App​Marketing​Consent!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerWhatsAppMarketingConsent)

  non-null

  The [WhatsApp marketing consent](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerWhatsAppMarketingConsent) information for the customer's phone number. Update with the [`customerWhatsAppMarketingConsentUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate) mutation.

### Deprecated fields

* marketing​Collected​From

  [Customer​Consent​Collected​From](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom)

  Deprecated

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  Deprecated

* marketing​State

  [Customer​Sms​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState)

  non-nullDeprecated

* marketing​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Deprecated

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  Deprecated

***

## Map

### Fields with this object

* [Customer.defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.defaultPhoneNumber)
* [CustomerMergePreviewAlternateFields.phoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields#field-CustomerMergePreviewAlternateFields.fields.phoneNumber)
* [CustomerMergePreviewDefaultFields.phoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.phoneNumber)
* [CustomerSegmentMember.defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.defaultPhoneNumber)

***

## Mutations

* [customer​Whats​App​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate)

  mutation

  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s WhatsApp marketing consent information. The customer's WhatsApp account is identified by their [phone number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber).

  You can set whether the customer subscribes or unsubscribes to WhatsApp marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.optInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate#arguments-input.fields.whatsAppMarketingConsent.sourceLocationId) collected it.

  * input

    [Customer​Whats​App​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerWhatsAppMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's WhatsApp marketing consent information.

  ***

***

## CustomerPhoneNumber Mutations

### Mutated by

* [customer​Whats​App​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate)
