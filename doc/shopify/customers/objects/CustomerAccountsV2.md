---
title: CustomerAccountsV2 - GraphQL Admin
description: >-
  Information about the shop's customer account-related settings. Includes the

  [customer account
  version](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion)

  which indicates whether the merchant is using new customer accounts or legacy

  customer accounts, along with other account configuration such as login
  requirements.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Accounts​V2

object

Information about the shop's customer account-related settings. Includes the [customer account version](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion) which indicates whether the merchant is using new customer accounts or legacy customer accounts, along with other account configuration such as login requirements.

## Fields

* customer​Accounts​Version

  [Customer​Accounts​Version!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountsVersion)

  non-null

  Indicates which version of customer accounts the merchant is using in online store and checkout.

* login​Links​Visible​On​Storefront​And​Checkout

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Login links are shown in online store and checkout.

* login​Required​At​Checkout

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Customers are required to log in to their account before checkout.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The root url for the customer accounts pages.

***

## Map

### Fields with this object

* [Shop.customerAccountsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customerAccountsV2)
