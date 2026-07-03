---
title: SelectedOption - GraphQL Admin
description: |-
  Properties used by customers to select a product variant.
  Products can have multiple options, like different sizes or colors.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SelectedOption'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SelectedOption.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Selected​Option

object

Properties used by customers to select a product variant. Products can have multiple options, like different sizes or colors.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The product option’s name.

* option​Value

  [Product​Option​Value!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue)

  non-null

  The product option’s value object.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The product option’s value.

***

## Map

### Fields with this object

* [ProductVariant.selectedOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.selectedOptions)
