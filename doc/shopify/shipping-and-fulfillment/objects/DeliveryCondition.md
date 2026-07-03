---
title: DeliveryCondition - GraphQL Admin
description: >-
  A condition that must pass for a delivery method definition to be applied to
  an order.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Condition

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A condition that must pass for a delivery method definition to be applied to an order.

## Fields

* condition​Criteria

  [Delivery​Condition​Criteria!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria)

  non-null

  The value (weight or price) that the condition field is compared to.

* field

  [Delivery​Condition​Field!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionField)

  non-null

  The field to compare the criterion value against, using the operator.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* operator

  [Delivery​Condition​Operator!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator)

  non-null

  The operator to compare the field and criterion value.

***

## Map

### Fields with this object

* [DeliveryMethodDefinition.methodConditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition#field-DeliveryMethodDefinition.fields.methodConditions)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryCondition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
