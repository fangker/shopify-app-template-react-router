---
title: RefundReturnOutcome - GraphQL Admin
description: The financial transfer details for a return outcome that results in a refund.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundReturnOutcome
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundReturnOutcome.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund​Return​Outcome

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The financial transfer details for a return outcome that results in a refund.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value to be refunded in shop and presentment currencies.

* suggested​Refund​Methods

  [\[Suggested​Refund​Method!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod)

  non-null

  A list of suggested refund methods.

* suggested​Transactions

  [\[Suggested​Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction)

  non-null

  A list of suggested order transactions.

***

## Map

### Possible type in

* [Return​Outcome​Financial​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/unions/ReturnOutcomeFinancialTransfer)
