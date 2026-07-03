---
title: InvoiceReturnOutcome - GraphQL Admin
description: >-
  The financial transfer details for a return outcome that results in an
  invoice.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InvoiceReturnOutcome
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InvoiceReturnOutcome.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Invoice​Return​Outcome

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The financial transfer details for a return outcome that results in an invoice.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value to be invoiced in shop and presentment currencies.

***

## Map

### Possible type in

* [Return​Outcome​Financial​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/unions/ReturnOutcomeFinancialTransfer)
