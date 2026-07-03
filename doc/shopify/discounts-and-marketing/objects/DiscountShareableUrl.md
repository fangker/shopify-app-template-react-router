---
title: DiscountShareableUrl - GraphQL Admin
description: A shareable URL for a discount code.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Shareable​Url

object

Requires Apps must have `read_discounts` access scope.

A shareable URL for a discount code.

## Fields

* target​Item​Image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image URL of the item (product or collection) to which the discount applies.

* target​Type

  [Discount​Shareable​Url​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountShareableUrlTargetType)

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

* [DiscountCodeApp.shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.shareableUrls)
* [DiscountCodeBasic.shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.shareableUrls)
* [DiscountCodeBxgy.shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.shareableUrls)
* [DiscountCodeFreeShipping.shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.shareableUrls)
