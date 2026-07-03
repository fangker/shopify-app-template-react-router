---
title: FinanceKycInformation - GraphQL Admin
description: >-
  Shopify Payments account information shared with embedded finance
  applications.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Finance​Kyc​Information

object

Requires `read_financial_kyc_information` access scope. Also: The user must have app permission for finance apps.

Shopify Payments account information shared with embedded finance applications.

## Fields

* business​Address

  [Shopify​Payments​Address​Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAddressBasic)

  The legal entity business address.

* business​Type

  [Shopify​Payments​Business​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBusinessType)

  The legal entity business type.

* industry

  [Shopify​Payments​Merchant​Category​Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsMerchantCategoryCode)

  Business industry.

* legal​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Returns the business legal name.

* shop​Owner

  [Financial​Kyc​Shop​Owner!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialKycShopOwner)

  non-null

  The shop owner information for financial KYC purposes.

* tax​Identification

  [Shopify​Payments​Tax​Identification](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTaxIdentification)

  Tax identification information.

***

## Map

No referencing types

***

## Queries

* [finance​Kyc​Information](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation)

  query

  Returns Know Your Customer (KYC) information for the shop's Shopify Payments account. KYC data includes verified identity and business details collected during onboarding. This is primarily used by embedded finance apps (e.g., Shopify Balance, Bill Pay) that need to verify the merchant's identity without requiring a separate KYC process.

***

## FinanceKycInformation Queries

### Queried by

* [finance​Kyc​Information](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation)
