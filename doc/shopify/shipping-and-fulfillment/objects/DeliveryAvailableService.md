---
title: DeliveryAvailableService - GraphQL Admin
description: A shipping service and a list of countries that the service is available for.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryAvailableService
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryAvailableService.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Available​Service

object

Requires Any of `orders` or `shipping` access scopes, `read_markets` access scope or `manage_delivery_settings` user permission.

A shipping service and a list of countries that the service is available for.

## Fields

* countries

  [Delivery​Country​Codes​Or​Rest​Of​World!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodesOrRestOfWorld)

  non-null

  The countries the service provider ships to.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the service.

***

## Map

### Fields with this object

* [DeliveryCarrierService.availableServicesForCountries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService#field-DeliveryCarrierService.fields.availableServicesForCountries)
