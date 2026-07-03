---
title: CartTransform - GraphQL Admin
description: >-
  A deployed cart transformation function that actively modifies how products

  appear and behave in customer carts. Cart transforms enable sophisticated

  merchandising strategies by programmatically merging, expanding, or updating

  cart line items based on custom business logic.


  Use the `CartTransform` object to:

  - Monitor active bundling and cart modification logic

  - Track transform function deployment status and configuration

  - Manage error handling behavior for cart processing failures

  - Coordinate multiple transforms when running complex merchandising strategies

  - Analyze transform performance and customer interaction patterns


  Each cart transform links to a specific [Shopify

  Function](https://shopify.dev/docs/apps/build/functions) that contains the

  actual cart modification logic. The `blockOnFailure` setting determines
  whether

  cart processing should halt when the transform encounters errors, or whether
  it

  should allow customers to proceed with unmodified carts. This flexibility

  ensures merchants can balance feature richness with checkout reliability.


  Transform functions operate during cart updates, product additions, and
  checkout

  initiation, providing multiple touchpoints to enhance the shopping experience.

  They integrate seamlessly with existing cart APIs while extending
  functionality

  beyond standard product catalog capabilities.


  The function ID connects to your deployed function code, while the
  configuration

  settings control how the transform behaves in different scenarios. Multiple

  transforms can work together, processing cart modifications in sequence to

  support complex merchandising workflows.


  Learn more about [customized
  bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle),

  and about the [Cart Transform Function

  API](https://shopify.dev/docs/api/functions/latest/cart-transform).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Cart​Transform

object

Requires `read_cart_transforms` access scope.

A deployed cart transformation function that actively modifies how products appear and behave in customer carts. Cart transforms enable sophisticated merchandising strategies by programmatically merging, expanding, or updating cart line items based on custom business logic.

Use the `CartTransform` object to:

* Monitor active bundling and cart modification logic
* Track transform function deployment status and configuration
* Manage error handling behavior for cart processing failures
* Coordinate multiple transforms when running complex merchandising strategies
* Analyze transform performance and customer interaction patterns

Each cart transform links to a specific [Shopify Function](https://shopify.dev/docs/apps/build/functions) that contains the actual cart modification logic. The `blockOnFailure` setting determines whether cart processing should halt when the transform encounters errors, or whether it should allow customers to proceed with unmodified carts. This flexibility ensures merchants can balance feature richness with checkout reliability.

Transform functions operate during cart updates, product additions, and checkout initiation, providing multiple touchpoints to enhance the shopping experience. They integrate seamlessly with existing cart APIs while extending functionality beyond standard product catalog capabilities.

The function ID connects to your deployed function code, while the configuration settings control how the transform behaves in different scenarios. Multiple transforms can work together, processing cart modifications in sequence to support complex merchandising workflows.

Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle), and about the [Cart Transform Function API](https://shopify.dev/docs/api/functions/latest/cart-transform).

## Fields

* block​On​Failure

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a run failure will block cart and checkout operations.

* function​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ID for the Cart Transform function.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The key for the metafield.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

### Fields and connections with this object

* [CartTransformConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-nodes)
* [CartTransformEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEdge#field-CartTransformEdge.fields.node)

***

## Queries

* [cart​Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms)

  query

  Retrieves all cart transform functions currently deployed by your app within the merchant's store. This query provides comprehensive access to your active cart modification logic, enabling management and monitoring of bundling and merchandising features.

  The query returns paginated results with full cart transform details, including function IDs, configuration settings, and operational status.

  Cart Transform ownership is scoped to your API client, ensuring you only see and manage functions deployed by your specific app. This isolation prevents conflicts between different apps while maintaining security boundaries for sensitive merchandising logic.

  Learn more about [managing cart transforms](https://shopify.dev/docs/api/functions/latest/cart-transform).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

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

  ***

***

## CartTransform Queries

### Queried by

* [cart​Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms)

***

## Mutations

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

  mutation

  Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful control over their merchandising strategy by allowing apps to modify cart line items programmatically, supporting advanced approaches like dynamic bundles or personalized product recommendations.

  For example, a bundle app might create a cart transform that automatically groups related products (like a camera, lens, and case) into a single bundle line item when customers add them to their cart, complete with bundle pricing and unified presentation.

  Use `CartTransformCreate` to:

  * Deploy custom bundling logic to merchant stores
  * Enable dynamic product grouping during checkout
  * Implement personalized product recommendations
  * Create conditional offers based on cart contents
  * Support complex pricing strategies for product combinations

  The mutation processes synchronously and returns the created cart transform along with any validation errors. Once created, the cart transform function becomes active for the shop and will process cart modifications according to your defined logic. Cart transforms integrate with [Shopify Functions](https://shopify.dev/docs/api/functions) to provide powerful customization capabilities while maintaining checkout performance.

  Cart Transform functions can be configured to block checkout on failure or allow graceful degradation, giving you control over how errors are handled in the customer experience.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

  * block​On​Failure

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether a run failure should block cart and checkout operations.

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the Function providing the cart transform.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Additional metafields to associate to the cart transform.

  ***

***

## CartTransform Mutations

### Mutated by

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

***

## Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CartTransform Implements

### Implements

* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
