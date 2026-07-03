---
title: DeliveryFlatRateGroup - GraphQL Admin
description: >-
  A flat rate group for a shipping option.


  Contains one fixed-price rate and optional collection or origin location
  conditions.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Flat​Rate​Group

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A flat rate group for a shipping option.

Contains one fixed-price rate and optional collection or origin location conditions.

## Fields

* conditions

  [Delivery​Rate​Group​Conditions!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions)

  non-null

  Conditions that limit this rate group to specific collections or origin locations.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* rate

  [Delivery​Flat​Rate!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRate)

  non-null

  The fixed-price rate and optional transit time.

***

## Map

### Fields and connections with this object

* [DeliveryFlatRateGroupConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryFlatRateGroupConnection#returns-nodes)
* [DeliveryFlatRateGroupEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateGroupEdge#field-DeliveryFlatRateGroupEdge.fields.node)
* [DeliveryFlatRateOptionDefinition.rateGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateOptionDefinition#field-DeliveryFlatRateOptionDefinition.fields.rateGroups)

***

## Interfaces

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)

  interface

***

## DeliveryFlatRateGroup Implements

### Implements

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)
