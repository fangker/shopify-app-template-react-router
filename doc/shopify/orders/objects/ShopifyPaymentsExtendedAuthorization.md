---
title: ShopifyPaymentsExtendedAuthorization - GraphQL Admin
description: >-
  Presents all Shopify Payments information related to an extended
  authorization.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsExtendedAuthorization
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsExtendedAuthorization.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Extended​Authorization

object

Requires `read_orders` access scope.

Presents all Shopify Payments information related to an extended authorization.

## Fields

* extended​Authorization​Expires​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time after which the extended authorization expires. After the expiry, the merchant is unable to capture the payment.

* standard​Authorization​Expires​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time after which capture will incur an additional fee.

***

## Map

### Fields with this object

* [ShopifyPaymentsTransactionSet.extendedAuthorizationSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet#field-ShopifyPaymentsTransactionSet.fields.extendedAuthorizationSet)
