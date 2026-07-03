---
title: CustomerSmsMarketingConsentError - GraphQL Admin
description: An error that occurs during execution of an SMS marketing consent mutation.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Sms​Marketing​Consent​Error

object

Requires `read_customers` access scope.

An error that occurs during execution of an SMS marketing consent mutation.

## Fields

* code

  [Customer​Sms​Marketing​Consent​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingConsentErrorCode)

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

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

  mutation

  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a phone number on their account to receive SMS marketing.

  You can set whether the customer subscribes or unsubscribes to SMS marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.marketingOptInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.sourceLocationId) collected it.

  * input

    [Customer​Sms​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's SMS marketing consent information.

  ***

***

## CustomerSmsMarketingConsentError Mutations

### Mutated by

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## CustomerSmsMarketingConsentError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
