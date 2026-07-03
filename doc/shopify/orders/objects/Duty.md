---
title: Duty - GraphQL Admin
description: The duty details for a line item.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Duty

object

Requires `read_orders` access scope.

The duty details for a line item.

## Fields

* country​Code​Of​Origin

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The ISO 3166-1 alpha-2 country code of the country of origin used in calculating the duty.

* harmonized​System​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The harmonized system code of the item used in calculating the duty.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* price

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of the duty.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  A list of taxes charged on the duty.

***

## Map

### Fields with this object

* [DutySale.duty](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.duty)
* [LineItem.duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.duties)
* [RefundDuty.originalDuty](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty#field-RefundDuty.fields.originalDuty)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Duty Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
