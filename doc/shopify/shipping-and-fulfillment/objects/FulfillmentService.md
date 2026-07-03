---
title: FulfillmentService - GraphQL Admin
description: >-
  A **Fulfillment Service** is a third party warehouse that prepares and ships
  orders

  on behalf of the store owner. Fulfillment services charge a fee to package and
  ship items

  and update product inventory levels. Some well known fulfillment services with
  Shopify integrations

  include: Amazon, Shipwire, and Rakuten. When an app registers a new
  `FulfillmentService` on a store,

  Shopify automatically creates a `Location` that's associated to the
  fulfillment service.

  To learn more about fulfillment services, refer to

  [Manage fulfillments as a fulfillment service
  app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps)

  guide.


  ## Mutations


  You can work with the `FulfillmentService` object with the

  [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate),

  [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate),

  and
  [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)

  mutations.


  ## Hosted endpoints


  Fulfillment service providers integrate with Shopify by providing Shopify with
  a set of hosted endpoints that

  Shopify can query on certain conditions.

  These endpoints must have a common prefix, and this prefix should be supplied
  in the `callbackUrl` parameter

  in the

  [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

  mutation.


  - Shopify sends POST requests to the
  `<callbackUrl>/fulfillment_order_notification` endpoint
    to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests.

    For more information, refer to
    [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).
  - Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers`
  endpoint to retrieve tracking numbers for orders
    if `trackingSupport` is set to `true`.

    For more information, refer to
    [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).

    Fulfillment services can also update tracking information using the
    [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation,
    rather than waiting for Shopify to ask for tracking numbers.
  - Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to
  retrieve
    on hand inventory levels for the fulfillment service location if `inventoryManagement` is set to `true`.

    For more information, refer to
    [Sharing inventory levels with Shopify](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-10-optional-share-inventory-levels-with-shopify).

  To make sure you have everything set up correctly, you can test the
  `callbackUrl`-prefixed endpoints

  in your development store.


  ## Resources and webhooks


  There are a variety of objects and webhooks that enable a fulfillment service
  to work.

  To exchange fulfillment information with Shopify, fulfillment services use the

  [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder),

  [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment)
  and

  [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects
  and related mutations.

  To act on fulfillment process events that happen on the Shopify side,

  besides awaiting calls to `callbackUrl`-prefixed endpoints,

  fulfillment services can subscribe to the

  [fulfillment
  order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks)

  and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook)

  webhooks.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Service

object

Requires Apps will need one of the following: `fulfillments`, `products` or `custom_fulfillment_services` (in case of custom fulfillment service). Fulfillment service apps can also access their own fulfillment service records if they have `assigned_fulfillment_orders` access scope. Users with access to the app will have access to their fulfillment services.

A **Fulfillment Service** is a third party warehouse that prepares and ships orders on behalf of the store owner. Fulfillment services charge a fee to package and ship items and update product inventory levels. Some well known fulfillment services with Shopify integrations include: Amazon, Shipwire, and Rakuten. When an app registers a new `FulfillmentService` on a store, Shopify automatically creates a `Location` that's associated to the fulfillment service. To learn more about fulfillment services, refer to [Manage fulfillments as a fulfillment service app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps) guide.

## Mutations

You can work with the `FulfillmentService` object with the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate), [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate), and [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete) mutations.

## Hosted endpoints

Fulfillment service providers integrate with Shopify by providing Shopify with a set of hosted endpoints that Shopify can query on certain conditions. These endpoints must have a common prefix, and this prefix should be supplied in the `callbackUrl` parameter in the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate) mutation.

* Shopify sends POST requests to the `<callbackUrl>/fulfillment_order_notification` endpoint to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests.

  For more information, refer to [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

* Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders if `trackingSupport` is set to `true`.

  For more information, refer to [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).

  Fulfillment services can also update tracking information using the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation, rather than waiting for Shopify to ask for tracking numbers.

* Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to retrieve on hand inventory levels for the fulfillment service location if `inventoryManagement` is set to `true`.

  For more information, refer to [Sharing inventory levels with Shopify](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-10-optional-share-inventory-levels-with-shopify).

To make sure you have everything set up correctly, you can test the `callbackUrl`-prefixed endpoints in your development store.

## Resources and webhooks

There are a variety of objects and webhooks that enable a fulfillment service to work. To exchange fulfillment information with Shopify, fulfillment services use the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder), [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) and [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects and related mutations. To act on fulfillment process events that happen on the Shopify side, besides awaiting calls to `callbackUrl`-prefixed endpoints, fulfillment services can subscribe to the [fulfillment order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook) webhooks.

## Fields

* callback​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The callback URL that the fulfillment service has registered for requests. The following considerations apply:

  * Shopify queries the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
  * Shopify queries the `<callbackUrl>/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
  * Shopify uses the `<callbackUrl>/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support).

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Human-readable unique identifier for this fulfillment service.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment service.

* inventory​Management

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the fulfillment service tracks product inventory and provides updates to Shopify.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  Location associated with the fulfillment service.

* requires​Shipping​Method

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the fulfillment service requires products to be physically shipped.

* service​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the fulfillment service as seen by merchants.

* tracking​Support

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the fulfillment service implemented the /fetch\_tracking\_numbers endpoint.

* type

  [Fulfillment​Service​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceType)

  non-null

  Type associated with the fulfillment service.

* fulfillment​Orders​Opt​In

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CalculatedDraftOrderLineItem.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.fulfillmentService)
* [DraftOrderLineItem.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.fulfillmentService)
* [Fulfillment.service](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.service)
* [Location.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.fulfillmentService)
* [Shop.fulfillmentServices](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.fulfillmentServices)

***

## Queries

* [fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentService)

  query

  Returns a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) by its ID. The service can manage inventory, process fulfillment requests, and provide tracking details through callback endpoints or directly calling Shopify's APIs.

  When you register a fulfillment service, Shopify automatically creates an associated [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where fulfillment order's can be assigned to be processed.

  Learn more about [building fulfillment service apps](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the FulfillmentService to return.

  ***

***

## FulfillmentService Queries

### Queried by

* [fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentService)

***

## Mutations

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

  mutation

  Creates a fulfillment service.

  ## Fulfillment service location

  When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

  If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    ### Arguments

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the fulfillment service.

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  ***

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

  mutation

  Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, callback URL, and operational settings.

  The mutation modifies how the fulfillment service handles inventory tracking, shipping requirements, and package tracking support.

  ***

  **Note:** To update the physical address or other location details of the fulfillment service, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">location\<wbr/>Edit\</span>\</code>\</a> mutation instead.

  ***

  Learn more about [editing fulfillment service locations](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    ### Arguments

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The id of the fulfillment service.

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided, Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the fulfillment service.

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided, Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  ***

***

## FulfillmentService Mutations

### Mutated by

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)
* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)
