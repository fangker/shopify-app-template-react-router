---
title: AppCredit - GraphQL Admin
description: >-
  Represents monetary credits that merchants can apply toward future app

  purchases, subscriptions, or usage-based billing within their Shopify store.
  App

  credits provide a flexible way to offer refunds, promotional credits, or

  compensation without processing external payments.


  For example, if a merchant experiences service downtime, an app might issue

  credits equivalent to the affected billing period. These credits can apply to

  future charges, reducing the merchant's next invoice or extending their

  subscription period.


  Use the `AppCredit` object to:

  - Issue refunds for service interruptions or billing disputes

  - Provide promotional credits for new merchant onboarding

  - Compensate merchants for app-related issues or downtime

  - Create loyalty rewards or referral bonuses within your billing system

  - Track credit balances and application history for accounting purposes


  For comprehensive billing strategies and credit management patterns, see the

  [subscription billing

  guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Credit

object

Represents monetary credits that merchants can apply toward future app purchases, subscriptions, or usage-based billing within their Shopify store. App credits provide a flexible way to offer refunds, promotional credits, or compensation without processing external payments.

For example, if a merchant experiences service downtime, an app might issue credits equivalent to the affected billing period. These credits can apply to future charges, reducing the merchant's next invoice or extending their subscription period.

Use the `AppCredit` object to:

* Issue refunds for service interruptions or billing disputes
* Provide promotional credits for new merchant onboarding
* Compensate merchants for app-related issues or downtime
* Create loyalty rewards or referral bonuses within your billing system
* Track credit balances and application history for accounting purposes

For comprehensive billing strategies and credit management patterns, see the [subscription billing guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount that can be used towards future app purchases in Shopify.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app credit was created.

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The description of the app credit.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app credit is a test transaction.

***

## Map

### Fields and connections with this object

* [AppCreditConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#returns-nodes)
* [AppCreditEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCreditEdge#field-AppCreditEdge.fields.node)
* [AppInstallation.credits](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## AppCredit Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
