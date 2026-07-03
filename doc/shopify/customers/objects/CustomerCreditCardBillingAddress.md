---
title: CustomerCreditCardBillingAddress - GraphQL Admin
description: The billing address of a credit card payment instrument.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Credit​Card​Billing​Address

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

The billing address of a credit card payment instrument.

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

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name in the billing address.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name in the billing address.

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

* [CustomerCreditCard.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCard#field-CustomerCreditCard.fields.billingAddress)
* [CustomerShopPayAgreement.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerShopPayAgreement#field-CustomerShopPayAgreement.fields.billingAddress)
* [VaultCreditCard.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultCreditCard#field-VaultCreditCard.fields.billingAddress)
