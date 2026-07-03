---
title: AppPlanV2 - GraphQL Admin
description: >-
  Contains the pricing details for the app plan that a merchant has subscribed
  to within their current billing arrangement.


  This simplified object focuses on the essential pricing information merchants

  need to understand their current subscription costs and billing structure.


  Details about subscription management and pricing strategies are available in

  the [app billing documentation](https://shopify.dev/docs/apps/launch/billing).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Plan​V2

object

Contains the pricing details for the app plan that a merchant has subscribed to within their current billing arrangement.

This simplified object focuses on the essential pricing information merchants need to understand their current subscription costs and billing structure.

Details about subscription management and pricing strategies are available in the [app billing documentation](https://shopify.dev/docs/apps/launch/billing).

## Fields

* pricing​Details

  [App​Pricing​Details!](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails)

  non-null

  The plan billed to a shop on a recurring basis.

***

## Map

### Fields with this object

* [AppSubscriptionLineItem.plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.plan)
