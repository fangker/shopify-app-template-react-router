---
title: financeKycInformation - GraphQL Admin
description: |-
  Returns Know Your Customer (KYC) information for the shop's Shopify Payments
  account. KYC data includes verified identity and business details collected
  during onboarding. This is primarily used by embedded finance apps (e.g.,
  Shopify Balance, Bill Pay) that need to verify the merchant's identity without
  requiring a separate KYC process.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# finance​Kyc​Information

query

Returns Know Your Customer (KYC) information for the shop's Shopify Payments account. KYC data includes verified identity and business details collected during onboarding. This is primarily used by embedded finance apps (e.g., Shopify Balance, Bill Pay) that need to verify the merchant's identity without requiring a separate KYC process.

## Possible returns

* Finance​Kyc​Information

  [Finance​Kyc​Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation)

  Shopify Payments account information shared with embedded finance applications.

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

## Examples

* ### financeKycInformation reference
