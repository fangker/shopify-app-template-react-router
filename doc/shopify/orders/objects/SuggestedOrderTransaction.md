---
title: SuggestedOrderTransaction - GraphQL Admin
description: >-
  A suggested transaction. Suggested transaction are usually used in the context
  of refunds

  and exchanges.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Suggested​Order​Transaction

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A suggested transaction. Suggested transaction are usually used in the context of refunds and exchanges.

## Fields

* account​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The masked account number associated with the payment method.

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount and currency of the suggested order transaction in shop and presentment currencies.

* formatted​Gateway

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The human-readable payment gateway name suggested to process the transaction.

* gateway

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suggested payment gateway used to process the transaction.

* kind

  [Suggested​Order​Transaction​Kind!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SuggestedOrderTransactionKind)

  non-null

  Specifies the kind of the suggested order transaction.

* maximum​Refundable​Set

  [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund.

* parent​Transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The associated parent transaction, for example the authorization of a capture.

* payment​Details

  [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

  The associated payment details related to the transaction.

### Deprecated fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* maximum​Refundable

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

***

## Map

### Fields with this object

* [RefundReturnOutcome.suggestedTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundReturnOutcome#field-RefundReturnOutcome.fields.suggestedTransactions)
* [SuggestedRefund.suggestedTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund#field-SuggestedRefund.fields.suggestedTransactions)
* [SuggestedReturnRefund.suggestedTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund#field-SuggestedReturnRefund.fields.suggestedTransactions)
