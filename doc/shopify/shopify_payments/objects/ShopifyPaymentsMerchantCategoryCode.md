---
title: ShopifyPaymentsMerchantCategoryCode - GraphQL Admin
description: >-
  A MerchantCategoryCode (MCC) is a four-digit number listed in ISO 18245 for

  retail financial services and used to classify the business by the type of
  goods

  or services it provides.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsMerchantCategoryCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsMerchantCategoryCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Merchant​Category​Code

object

Requires `read_shopify_payments` access scope or `read_financial_kyc_information` access scope. Also: The app must have the Shopify Payments or Financial KYC Information permission.

A MerchantCategoryCode (MCC) is a four-digit number listed in ISO 18245 for retail financial services and used to classify the business by the type of goods or services it provides.

## Fields

* category

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The category of the MCC.

* category​Label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The category label of the MCC.

* code

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  A four-digit number listed in ISO 18245.

* id

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The ID of the MCC.

* subcategory​Label

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The subcategory label of the MCC.

***

## Map

### Fields with this object

* [FinanceKycInformation.industry](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation#field-FinanceKycInformation.fields.industry)
