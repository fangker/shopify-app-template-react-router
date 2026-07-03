---
title: DeliveryMethodDefinition - GraphQL Admin
description: >-
  A method definition contains the delivery rate and the conditions that must be
  met for the method to be

  applied.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Method​Definition

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A method definition contains the delivery rate and the conditions that must be met for the method to be applied.

## Fields

* active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this method definition is active.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the method definition. Only available on shipping rates that are custom.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* method​Conditions

  [\[Delivery​Condition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition)

  non-null

  The method conditions that must pass for this method definition to be applied to an order.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the method definition.

* rate​Provider

  [Delivery​Rate​Provider!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryRateProvider)

  non-null

  The provided rate for this method definition, from a rate definition or participant.

***

## Map

### Fields and connections with this object

* [DeliveryLocationGroupZone.methodDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitions)
* [DeliveryMethodDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-nodes)
* [DeliveryMethodDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionEdge#field-DeliveryMethodDefinitionEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryMethodDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
