---
title: ShopifyFunction - GraphQL Admin
description: A Shopify Function.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Function

object

A Shopify Function.

## Fields

* api​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The API type of the Shopify Function.

* api​Version

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The API version of the Shopify Function.

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app that owns the Shopify Function.

* app​Bridge

  [Functions​App​Bridge!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsAppBridge)

  non-null

  The App Bridge information for the Shopify Function.

* app​Key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The client ID of the app that owns the Shopify Function.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the Shopify Function.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The handle of the Shopify Function.

* id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ID of the Shopify Function.

* input​Query

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The input query of the Shopify Function.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the Shopify Function.

* use​Creation​Ui

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  If the Shopify Function uses the creation UI in the Admin.

***

## Map

### Fields and connections with this object

* [DeliveryCustomization.shopifyFunction](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.shopifyFunction)
* [FulfillmentConstraintRule.function](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.function)
* [PaymentCustomization.shopifyFunction](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.shopifyFunction)
* [ShopifyFunctionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-nodes)
* [ShopifyFunctionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunctionEdge#field-ShopifyFunctionEdge.fields.node)
* [Validation.shopifyFunction](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.shopifyFunction)

***

## Queries

* [shopify​Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunction)

  query

  Returns a Shopify Function by its ID. [Functions](https://shopify.dev/apps/build/functions) enable you to customize Shopify's backend logic at defined parts of the commerce loop.

  * id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The ID of the Shopify Function.

  ***

* [shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)

  query

  Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable you to customize Shopify's backend logic at specific points in the commerce loop, such as discounts, checkout validation, and fulfillment.

  You can filter the results by API type to find specific function implementations, or by whether they provide a merchant configuration interface in the Shopify Admin.

  The response includes details about each function's configuration, including its title, description, API version, and the input query used to provide data to the function logic.

  Learn more about [building functions](https://shopify.dev/docs/api/functions).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * api​Type

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter the functions by the API type.

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * use​Creation​Ui

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Filter the functions by whether or not the function uses the creation UI in the Admin.

  ***

***

## ShopifyFunction Queries

### Queried by

* [shopify​Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunction)
* [shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)
