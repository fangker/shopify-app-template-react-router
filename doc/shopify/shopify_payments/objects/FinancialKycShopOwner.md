---
title: FinancialKycShopOwner - GraphQL Admin
description: Represents the shop owner information for financial KYC purposes.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialKycShopOwner
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialKycShopOwner.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Financial​Kyc​Shop​Owner

object

Requires `read_financial_kyc_information` access scope. Also: The user must have app permission for finance apps.

Represents the shop owner information for financial KYC purposes.

## Fields

* email

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The email of the shop owner.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the shop owner.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the shop owner.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the shop owner.

***

## Map

### Fields with this object

* [FinanceKycInformation.shopOwner](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation#field-FinanceKycInformation.fields.shopOwner)
