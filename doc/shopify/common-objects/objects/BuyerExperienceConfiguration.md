---
title: BuyerExperienceConfiguration - GraphQL Admin
description: Settings describing the behavior of checkout for a B2B buyer.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Buyer​Experience​Configuration

object

Requires `read_customers` access scope or `read_companies` access scope.

Settings describing the behavior of checkout for a B2B buyer.

## Fields

* checkout​To​Draft

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to checkout to draft order for merchant review.

* deposit

  [Deposit​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration)

  The portion required to be paid at checkout.

* editable​Shipping​Address

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to allow customers to use editable shipping addresses.

* payment​Terms​Template

  [Payment​Terms​Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate)

  Represents the merchant configured payment terms.

* pay​Now​Only

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CompanyLocation.buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.buyerExperienceConfiguration)
