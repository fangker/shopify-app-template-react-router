---
title: ResourceAlert - GraphQL Admin
description: >-
  An alert message that appears in the Shopify admin about a problem with a
  store

  resource, with 1 or more actions to take. For example, you could use an alert
  to

  indicate that you're not charging taxes on some product variants.

  They can optionally have a specific icon and be dismissed by merchants.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Resource​Alert

object

An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants. They can optionally have a specific icon and be dismissed by merchants.

## Fields

* actions

  [\[Resource​Alert​Action!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlertAction)

  non-null

  Buttons in the alert that link to related information. For example, *Edit variants*.

* content

  [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  non-null

  The secondary text in the alert that includes further information or instructions about how to solve a problem.

* dismissible​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Unique identifier that appears when an alert is manually closed by the merchant. Most alerts can't be manually closed.

* icon

  [Resource​Alert​Icon](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertIcon)

  An icon that's optionally displayed with the alert.

* severity

  [Resource​Alert​Severity!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertSeverity)

  non-null

  Indication of how important the alert is.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The primary text in the alert that includes information or describes the problem.

***

## Map

### Fields with this object

* [CalculatedDraftOrder.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.alerts)
* [Order.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.alerts)
