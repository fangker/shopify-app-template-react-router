---
title: RiskFact - GraphQL Admin
description: >-
  A risk fact belongs to a single risk assessment and serves to provide
  additional

  context for an assessment. Risk facts are not necessarily tied to the result
  of

  the recommendation.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RiskFact'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/RiskFact.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Risk​Fact

object

Requires `read_orders` access scope.

A risk fact belongs to a single risk assessment and serves to provide additional context for an assessment. Risk facts are not necessarily tied to the result of the recommendation.

## Fields

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A description of the fact.

* sentiment

  [Risk​Fact​Sentiment!](https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskFactSentiment)

  non-null

  Indicates whether the fact is a negative, neutral or positive contributor with regards to risk.

***

## Map

### Fields with this object

* [OrderRiskAssessment.facts](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.facts)
