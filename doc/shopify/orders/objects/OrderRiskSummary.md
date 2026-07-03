---
title: OrderRiskSummary - GraphQL Admin
description: >-
  Summary of risk characteristics for an order.


  See the [example query "Retrieves a list of all order risks for an
  order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Risk​Summary

object

Requires `read_orders` access scope.

Summary of risk characteristics for an order.

See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

## Fields

* assessments

  [\[Order​Risk​Assessment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment)

  non-null

  The list of risk assessments for the order.

* recommendation

  [Order​Risk​Recommendation​Result!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskRecommendationResult)

  non-null

  The recommendation for the order based on the results of the risk assessments. This suggests the action the merchant should take with regards to its risk of fraud.

***

## Map

### Fields with this object

* [Order.risk](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.risk)
