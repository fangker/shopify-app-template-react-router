---
title: ShopAlertAction - GraphQL Admin
description: 'An action associated to a shop alert, such as adding a credit card.'
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlertAction'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlertAction.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Alert​Action

object

An action associated to a shop alert, such as adding a credit card.

## Fields

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The text for the button in the alert. For example, *Add credit card*.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The target URL that the button links to.

***

## Map

### Fields with this object

* [ShopAlert.action](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlert#field-ShopAlert.fields.action)
