---
title: DiscountCustomerSegments - GraphQL Admin
description: >-
  Represents customer segments that are eligible to receive a specific discount,

  allowing merchants to target promotions to defined groups of customers. This

  enables personalized marketing campaigns based on customer behavior and

  characteristics.


  For example, a "VIP Customer 15% Off" promotion might target a segment of

  high-value repeat customers, while a "New Customer Welcome" discount could
  focus

  on first-time buyers.


  Segment-based discounts help merchants create more relevant promotional

  experiences and improve conversion rates by showing the right offers to the

  right customers at the right time.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customer​Segments

object

Requires Apps must have `read_discounts` access scope.

Represents customer segments that are eligible to receive a specific discount, allowing merchants to target promotions to defined groups of customers. This enables personalized marketing campaigns based on customer behavior and characteristics.

For example, a "VIP Customer 15% Off" promotion might target a segment of high-value repeat customers, while a "New Customer Welcome" discount could focus on first-time buyers.

Segment-based discounts help merchants create more relevant promotional experiences and improve conversion rates by showing the right offers to the right customers at the right time.

## Fields

* segments

  [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  non-null

  The list of customer segments who are eligible for the discount.

***

## Map

### Possible type in

* [Discount​Context](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)
* [Discount​Customer​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)
