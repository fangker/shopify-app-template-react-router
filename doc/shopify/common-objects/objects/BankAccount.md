---
title: BankAccount - GraphQL Admin
description: Represents a bank account payment instrument.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BankAccount'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BankAccount.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Bank​Account

object

Requires `read_payment_mandate` access scope.

Represents a bank account payment instrument.

## Fields

* account​Holder​Type

  [Bank​Account​Holder​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BankAccountHolderType)

  non-null

  The type of account holder.

* account​Type

  [Bank​Account​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BankAccountType)

  non-null

  The type of bank account.

* bank​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the bank.

* billing​Address

  [Customer​Payment​Instrument​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress)

  The billing address associated with the bank account.

* last​Digits

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The last four digits of the account number.

***

## Map

### Possible type in

* [Customer​Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument)
* [Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentInstrument)
