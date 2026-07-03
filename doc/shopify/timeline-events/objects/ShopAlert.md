---
title: ShopAlert - GraphQL Admin
description: >-
  An alert message that appears in the Shopify admin about a problem with a
  store

  setting, with an action to take. For example, you could show an alert to ask
  the

  merchant to enter their billing information to activate Shopify Plus.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlert'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlert.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Alert

object

An alert message that appears in the Shopify admin about a problem with a store setting, with an action to take. For example, you could show an alert to ask the merchant to enter their billing information to activate Shopify Plus.

## Fields

* action

  [Shop​Alert​Action!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlertAction)

  non-null

  The text for the button in the alert that links to related information. For example, *Add credit card*.

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A description of the alert and further information, such as whether the merchant will be charged.

***

## Map

### Fields with this object

* [Shop.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.alerts)
