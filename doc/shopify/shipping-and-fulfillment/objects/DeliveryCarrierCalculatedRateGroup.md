---
title: DeliveryCarrierCalculatedRateGroup - GraphQL Admin
description: |-
  A rate group for a carrier-calculated shipping option.

  Sets the carrier service, rate adjustments,
  and carrier-provided services offered at checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Carrier​Calculated​Rate​Group

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A rate group for a carrier-calculated shipping option.

Sets the carrier service, rate adjustments, and carrier-provided services offered at checkout.

## Fields

* absolute​Adjustment

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The flat amount added to or subtracted from carrier rates.

* auto​Include​New​Services

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether new services from this carrier are automatically included at checkout. When true, buyers see any service that isn't excluded. When false, buyers see only included services.

* carrier​Service

  [Delivery​Carrier​Service!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  The carrier service that provides rates for this rate group.

* conditions

  [Delivery​Rate​Group​Conditions!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions)

  non-null

  Conditions that limit this rate group to specific collections or origin locations.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally unique ID.

* percentage​Adjustment

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The percentage added to or subtracted from carrier rates. Applied after `absoluteAdjustment`. A value of 10 means +10%.

* service​Configuration

  [\[Delivery​Carrier​Calculated​Rate​Group​Service!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroupService)

  non-null

  Carrier-provided services included or excluded for this rate group.

***

## Map

### Fields and connections with this object

* [DeliveryCarrierCalculatedOptionDefinition.rateGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedOptionDefinition#field-DeliveryCarrierCalculatedOptionDefinition.fields.rateGroups)
* [DeliveryCarrierCalculatedRateGroupConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierCalculatedRateGroupConnection#returns-nodes)
* [DeliveryCarrierCalculatedRateGroupEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroupEdge#field-DeliveryCarrierCalculatedRateGroupEdge.fields.node)

***

## Interfaces

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)

  interface

***

## DeliveryCarrierCalculatedRateGroup Implements

### Implements

* [Delivery​Option​Definition​Rate​Group](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup)
