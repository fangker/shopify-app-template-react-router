---
title: ReverseFulfillmentOrderThirdPartyConfirmation - GraphQL Admin
description: The third-party confirmation of a reverse fulfillment order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderThirdPartyConfirmation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderThirdPartyConfirmation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Reverse​Fulfillment​Order​Third​Party​Confirmation

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The third-party confirmation of a reverse fulfillment order.

## Fields

* status

  [Reverse​Fulfillment​Order​Third​Party​Confirmation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderThirdPartyConfirmationStatus)

  non-null

  The status of the reverse fulfillment order third-party confirmation.

***

## Map

### Fields with this object

* [ReverseFulfillmentOrder.thirdPartyConfirmation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.thirdPartyConfirmation)
