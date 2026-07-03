---
title: ShopifyPaymentsAddressBasic - GraphQL Admin
description: A Shopify Payments address.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAddressBasic
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAddressBasic.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Address​Basic

object

Requires `read_shopify_payments_legal_entities` access scope or `read_financial_kyc_information` access scope. Also: The app must have the Shopify Payments Legal Entities or Financial KYC Information permission.

A Shopify Payments address.

## Fields

* address​Line1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Line 1 of the address.

* address​Line2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Line 2 of the address.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The address city.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The address country.

* postal​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The address postal code.

* zone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The address state/province/zone.

***

## Map

### Fields with this object

* [FinanceKycInformation.businessAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation#field-FinanceKycInformation.fields.businessAddress)
