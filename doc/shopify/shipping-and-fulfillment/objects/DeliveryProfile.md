---
title: DeliveryProfile - GraphQL Admin
description: >-
  A shipping profile that defines shipping rates for specific

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  objects and
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  objects. Delivery profiles determine which products can ship from which

  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  objects to which zones, and at what rates.


  Profiles can associate with
  [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  objects to provide custom shipping rules for subscriptions, such as free

  shipping or restricted delivery zones. The default profile applies to all

  products that aren't assigned to other profiles.


  Learn more about [building delivery
  profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Profile

object

A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

## Fields

* active​Method​Definitions​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of active shipping rates for the profile.

* covers​All​Items

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this delivery profile covers every shippable product variant in the shop. Rates from a profile with `coversAllItems: true` apply to all items at checkout, overriding any explicit product or variant assignments.

* default

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this is the default profile.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* locations​Without​Rates​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of locations without rates defined.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the delivery profile.

* origin​Location​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of active origin locations for the profile.

* product​Variants​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  How many product variants are in this profile.

* profile​Items

  [Delivery​Profile​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection)

  non-null

  The products and variants associated with this profile.

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

  * sort​Key

    [Profile​Item​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProfileItemSortKeys)

    DeprecatedDefault:ID

  ***

* profile​Location​Groups

  [\[Delivery​Profile​Location​Group!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup)

  non-null

  The location groups and associated zones using this profile.

  * location​Group​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    Filter the location groups of the profile by location group ID.

  ***

* selling​Plan​Groups

  [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection)

  non-null

  Selling plan groups associated with the specified delivery profile.

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

* unassigned​Locations

  [\[Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  List of locations that haven't been assigned to a location group for this profile.

* unassigned​Locations​Paginated

  [Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  non-null

  List of locations that have not been assigned to a location group for this profile.

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

* version

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The version of the delivery profile.

* zone​Country​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of countries with active rates to deliver to.

* product​Variants​Count​V2

  [Delivery​Product​Variants​Count!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProductVariantsCount)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [DeliveryProfileConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-nodes)
* [DeliveryProfileEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge#field-DeliveryProfileEdge.fields.node)
* [ProductVariant.deliveryProfile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.deliveryProfile)

***

## Queries

* [delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfile)

  query

  Retrieves a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) by ID. Delivery profiles group shipping settings for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects that ship from selected [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to \[delivery zones]\(<https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone> with defined rates.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the DeliveryProfile to return.

  ***

* [delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

  query

  Returns a paginated list of [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) objects for the shop. Delivery profiles group [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that share shipping rates and zones.

  Each profile contains [`DeliveryLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup) objects that organize fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects and their associated delivery zones. [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects define geographic regions with specific shipping methods and rates. Use the [`merchantOwnedOnly`](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles#arguments-merchantOwnedOnly) filter to exclude profiles that third-party apps manage.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

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

  * merchant​Owned​Only

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    If `true`, returns only delivery profiles that were created by the merchant.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## DeliveryProfile Queries

### Queried by

* [delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfile)
* [delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

***

## Mutations

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

  mutation

  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

  A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    ### Arguments

    Specifies the input fields for a delivery profile.

  ***

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

  mutation

  Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones, rates, and associated products.

  Modify location groups to control which fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects serve specific geographic areas. Add or remove shipping zones with custom countries and provinces. Create or update shipping methods with rate definitions and delivery conditions. Associate or dissociate [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to determine which products use this profile's shipping rules.

  The mutation supports partial updates through dedicated input fields for creating, updating, and deleting specific components without affecting the entire profile structure.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to update.

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    Specifies the input fields for a delivery profile.

  ***

***

## DeliveryProfile Mutations

### Mutated by

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)
* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryProfile Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
