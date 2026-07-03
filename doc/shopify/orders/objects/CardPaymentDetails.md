---
title: CardPaymentDetails - GraphQL Admin
description: >-
  Credit card payment information captured during a transaction. Includes

  cardholder details, card metadata, verification response codes, and the
  [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values)
  when used.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Card​Payment​Details

object

Requires `read_orders` access scope.

Credit card payment information captured during a transaction. Includes cardholder details, card metadata, verification response codes, and the [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values) when used.

## Fields

* avs​Result​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The response code from the address verification system (AVS). The code is always a single letter.

* bin

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the company that issued the customer's credit card.

* cvv​Result​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string.

* expiration​Month

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The month in which the used credit card expires.

* expiration​Year

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The year in which the used credit card expires.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The holder of the credit card.

* number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's credit card number, with most of the leading digits redacted.

* payment​Method​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of payment method used by the buyer.

* wallet

  [Digital​Wallet](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet)

  Digital wallet used for the payment.

***

## Map

### Possible type in

* [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

***

## Interfaces

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)

  interface

***

## CardPaymentDetails Implements

### Implements

* [Base​Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/BasePaymentDetails)
