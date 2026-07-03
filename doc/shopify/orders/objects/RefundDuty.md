---
title: RefundDuty - GraphQL Admin
description: Represents a refunded duty.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund​Duty

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents a refunded duty.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of a refunded duty in shop and presentment currencies.

* original​Duty

  [Duty](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty)

  The duty associated with this refunded duty.

***

## Map

### Fields with this object

* [Refund.duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.duties)
* [SuggestedRefund.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund#field-SuggestedRefund.fields.refundDuties)
* [SuggestedReturnFinancialOutcome.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome#field-SuggestedReturnFinancialOutcome.fields.refundDuties)
* [SuggestedReturnRefund.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund#field-SuggestedReturnRefund.fields.refundDuties)
