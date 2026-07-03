---
title: CustomerPaymentInstrumentBillingAddress - GraphQL Admin
description: The billing address of a payment instrument.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Payment​Instrument​Billing​Address

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

The billing address of a payment instrument.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the country.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter code for the country of the address. For example, US.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the buyer of the address.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alphanumeric code for the region. For example, ON.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

***

## Map

### Fields with this object

* [BankAccount.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/BankAccount#field-BankAccount.fields.billingAddress)
* [CustomerPaypalBillingAgreement.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaypalBillingAgreement#field-CustomerPaypalBillingAgreement.fields.billingAddress)
