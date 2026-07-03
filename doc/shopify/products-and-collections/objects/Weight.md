---
title: Weight - GraphQL Admin
description: >-
  A weight measurement with its numeric value and unit. Used throughout the API,

  for example in shipping calculations, delivery conditions, order line items,
  and

  inventory measurements.


  The weight combines a decimal value with a standard unit of measurement to

  ensure consistent weight handling across different regional systems.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Weight

object

A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

## Fields

* unit

  [Weight​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit)

  non-null

  The unit of measurement for `value`.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The weight value using the unit system specified with `unit`.

***

## Map

### Fields with this object

* [CalculatedDraftOrderLineItem.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.weight)
* [CollectionSourceInclusionConditionVariantWeight.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionVariantWeight#field-CollectionSourceInclusionConditionVariantWeight.fields.value)
* [DeliveryWeightBasedRate.maxWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRate#field-DeliveryWeightBasedRate.fields.maxWeight)
* [DeliveryWeightBasedRate.minWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRate#field-DeliveryWeightBasedRate.fields.minWeight)
* [DraftOrderLineItem.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.weight)
* [FulfillmentOrder.remainingLineItemsWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.remainingLineItemsWeight)
* [FulfillmentOrderLineItem.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.weight)
* [InventoryItemMeasurement.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemMeasurement#field-InventoryItemMeasurement.fields.weight)
* [LineItem.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.weight)
* [ReturnLineItem.totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.totalWeight)

### Possible type in

* [Delivery​Condition​Criteria](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria)
