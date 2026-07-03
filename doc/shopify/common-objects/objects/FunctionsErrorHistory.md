---
title: FunctionsErrorHistory - GraphQL Admin
description: The error history from running a Shopify Function.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Functions​Error​History

object

The error history from running a Shopify Function.

## Fields

* errors​First​Occurred​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time that the first error occurred.

* first​Occurred​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time that the first error occurred.

* has​Been​Shared​Since​Last​Error

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the merchant has shared all the recent errors with the developer.

* has​Shared​Recent​Errors

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the merchant has shared all the recent errors with the developer.

***

## Map

### Fields with this object

* [DeliveryCustomization.errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.errorHistory)
* [DiscountAutomaticApp.errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.errorHistory)
* [DiscountCodeApp.errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.errorHistory)
* [PaymentCustomization.errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.errorHistory)
* [Validation.errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.errorHistory)
