---
title: DeliveryCountry - GraphQL Admin
description: A country that is used to define a shipping zone.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Country

object

A country that is used to define a shipping zone.

## Fields

* code

  [Delivery​Country​Code​Or​Rest​Of​World!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodeOrRestOfWorld)

  non-null

  A two-letter country code in ISO 3166-1 alpha-2 standard. It also includes a flag indicating whether the country should be a part of the 'Rest Of World' shipping zone.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The full name of the country.

* provinces

  [\[Delivery​Province!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProvince)

  non-null

  The list of regions associated with this country.

* translated​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The translated name of the country. The translation returned is based on the system's locale.

***

## Map

### Fields with this object

* [DeliveryCountryAndZone.country](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryAndZone#field-DeliveryCountryAndZone.fields.country)
* [DeliveryZone.countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone#field-DeliveryZone.fields.countries)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryCountry Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
