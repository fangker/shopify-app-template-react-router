---
title: PriceRuleShareableUrl - GraphQL Admin
description: Shareable URL for the discount code associated with the price rule.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Shareable​Url

object

Requires `read_price_rules` access scope.

Shareable URL for the discount code associated with the price rule.

## Fields

* target​Item​Image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image URL of the item (product or collection) to which the discount applies.

* target​Type

  [Price​Rule​Shareable​Url​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleShareableUrlTargetType)

  non-null

  The type of page that's associated with the URL.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the page that's associated with the URL.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL for the discount code.

***

## Map

### Fields with this object

* [PriceRule.shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.shareableUrls)
