---
title: CustomerMarketingConsentError - GraphQL Admin
description: >-
  An error that occurs during the execution of a customer marketing consent

  mutation, such as
  [`customerWhatsAppMarketingConsentUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMarketingConsentError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMarketingConsentError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Marketing​Consent​Error

object

Requires `read_customers` access scope.

An error that occurs during the execution of a customer marketing consent mutation, such as [`customerWhatsAppMarketingConsentUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate).

## Fields

* code

  [Customer​Marketing​Consent​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingConsentErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

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

## CustomerMarketingConsentError Mutations

### Mutated by

* [customer​Whats​App​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerWhatsAppMarketingConsentUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## CustomerMarketingConsentError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
