---
title: DeliveryCarrierCalculatedRateGroupService - GraphQL Admin
description: >-
  A carrier-provided service within a carrier-calculated rate group.


  Represents an individual service that the merchant has explicitly included or
  excluded.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroupService
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroupService.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Carrier​Calculated​Rate​Group​Service

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A carrier-provided service within a carrier-calculated rate group.

Represents an individual service that the merchant has explicitly included or excluded.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the carrier-provided service.

* status

  [Delivery​Carrier​Calculated​Rate​Group​Service​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryCarrierCalculatedRateGroupServiceStatus)

  non-null

  Whether this service is included or excluded at checkout.

***

## Map

### Fields with this object

* [DeliveryCarrierCalculatedRateGroup.serviceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroup#field-DeliveryCarrierCalculatedRateGroup.fields.serviceConfiguration)
