---
title: PaymentSchedule - GraphQL Admin
description: >-
  Represents the payment schedule for a single payment defined in the payment
  terms.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Schedule

object

Requires `read_payment_terms` access scope.

Represents the payment schedule for a single payment defined in the payment terms.

## Fields

* balance​Due

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Remaining balance to be captured for this payment schedule.

* completed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Date and time when the payment schedule is paid or fulfilled.

* due

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the payment schedule is due.

* due​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Date and time when the payment schedule is due.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* issued​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Date and time when the invoice is sent.

* payment​Terms

  [Payment​Terms!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  non-null

  The payment terms the payment schedule belongs to.

* total​Balance

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Remaining balance to be paid or authorized by the customer for this payment schedule.

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [PaymentScheduleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-nodes)
* [PaymentScheduleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleEdge#field-PaymentScheduleEdge.fields.node)
* [PaymentTerms.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PaymentSchedule Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
