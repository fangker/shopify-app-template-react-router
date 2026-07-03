---
title: OrderRisk - GraphQL Admin
description: >-
  Represents a fraud check on an order. This object is deprecated in favor of
  [OrderRiskAssessment](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment)

  and its enhanced capabilities.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRisk'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRisk.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Risk

object

Requires `read_orders` access scope.

Represents a fraud check on an order. This object is deprecated in favor of [OrderRiskAssessment](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment) and its enhanced capabilities.

## Fields

### Deprecated fields

* display

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* level

  [Order​Risk​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskLevel)

  Deprecated

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map
