---
title: PurchasingCompany - GraphQL Admin
description: >-
  Represents information about the purchasing company for the order or draft
  order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PurchasingCompany'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PurchasingCompany.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Purchasing​Company

object

Requires The user must have access to orders or draft orders.

Represents information about the purchasing company for the order or draft order.

## Fields

* company

  [Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  non-null

  The company associated to the order or draft order.

* contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The company contact associated to the order or draft order.

* location

  [Company​Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  non-null

  The company location associated to the order or draft order.

***

## Map

### Possible type in

* [Purchasing​Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)
