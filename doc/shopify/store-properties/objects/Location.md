---
title: Location - GraphQL Admin
description: >-
  A physical location where merchants store and fulfill inventory. Locations

  include retail stores, warehouses, popups, dropshippers, or other places where

  inventory is managed or stocked.


  Active locations can fulfill online orders when configured with shipping
  rates,

  local pickup, or local delivery options. Locations track inventory quantities
  for

  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  and

  process
  [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  fulfillment. Third-party apps using
  [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  can create and manage their own locations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Location'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Location.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Location

object

Requires `read_locations` access scope, `read_inventory` access scope or `read_markets_home` access scope.

A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

## Fields

* activatable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the location can be reactivated. If `false`, then trying to activate the location with the [`LocationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation will return an error that describes why the location can't be activated.

* address

  [Location​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress)

  non-null

  The address of this location.

* address​Verified

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the location address has been verified.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was added to a shop.

* deactivatable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location can be deactivated. If `true`, then the location can be deactivated by calling the [`LocationDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate) mutation. If `false`, then calling the mutation to deactivate it will return an error that describes why the location can't be deactivated.

* deactivated​At

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`".

* deletable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location can be deleted.

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Name of the service provider that fulfills from this location.

* fulfills​Online​Orders

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location can fulfill online orders.

* has​Active​Inventory

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location has active inventory.

* has​Unfulfilled​Orders

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location has orders that need to be fulfilled.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* inventory​Level

  [Inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The quantities of an inventory item at this location.

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to return the inventory level if it is inactive.

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the inventory item to obtain the inventory level for.

  ***

* inventory​Levels

  [Inventory​Level​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection)

  non-null

  A list of the quantities of the inventory items that can be stocked at this location.

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

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include inactive inventory levels.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * inventory\_group\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * inventory\_item\_id

      id

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* is​Active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the location is active. A deactivated location can be activated (change `isActive: true`) if it has `activatable` set to `true` by calling the [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation.

* is​Fulfillment​Service

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this location is a fulfillment service.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* local​Pickup​Settings​V2

  [Delivery​Local​Pickup​Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings)

  Local pickup settings for the location.

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

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the location.

* ships​Inventory

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Legacy field indicating this location was designated for shipping. All locations with valid addresses can now ship.

* suggested​Addresses

  [\[Location​Suggested​Address!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSuggestedAddress)

  non-null

  List of suggested addresses for this location (empty if none).

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the location was last updated.

### Deprecated fields

* is​Primary

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* metafield​Definitions

  [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

  non-nullDeprecated

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

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definitions by namespace.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter by the definition's pinned status.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * key

        string

      * namespace

        string

      * owner\_type

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the metafield definition was created.

      - Example:

        * `created_at:>2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

      - Example:

        * `key:some-key`

        Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

      - Example:

        * `namespace:some-namespace`

        Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

      - Example:

        * `owner_type:PRODUCT`

        Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

      - Example:

        * `type:single_line_text_field`

        Filter by the date and time when the metafield definition was last updated.

        Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Map

### Fields and connections with this object

* [CashDrawer.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.location)
* [CashTrackingSession.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.location)
* [CustomerEmailAddress.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation)
* [CustomerEmailMarketingConsentState.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-CustomerEmailMarketingConsentState.fields.sourceLocation)
* [CustomerMarketingConsent.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMarketingConsent#fields-sourceLocation)
* [CustomerSmsMarketingConsentState.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.sourceLocation)
* [CustomerWhatsAppMarketingConsent.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerWhatsAppMarketingConsent#field-CustomerWhatsAppMarketingConsent.fields.sourceLocation)
* [DeliveryCarrierCalculatedOptionDefinition.includedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedOptionDefinition#field-DeliveryCarrierCalculatedOptionDefinition.fields.includedLocations)
* [DeliveryCarrierServiceAndLocations.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations#field-DeliveryCarrierServiceAndLocations.fields.locations)
* [DeliveryFlatRateOptionDefinition.includedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateOptionDefinition#field-DeliveryFlatRateOptionDefinition.fields.includedLocations)
* [DeliveryLocationGroup.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations)
* [DeliveryOptionDefinition.includedLocations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinition#fields-includedLocations)
* [DeliveryProfile.unassignedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocations)
* [DeliveryProfile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocationsPaginated)
* [DeliveryPromiseProvider.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider#field-DeliveryPromiseProvider.fields.location)
* [DeliveryRateGroupConditions.originLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions#field-DeliveryRateGroupConditions.fields.originLocations)
* [DeliveryValueBasedOptionDefinition.includedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedOptionDefinition#field-DeliveryValueBasedOptionDefinition.fields.includedLocations)
* [DeliveryWeightBasedOptionDefinition.includedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedOptionDefinition#field-DeliveryWeightBasedOptionDefinition.fields.includedLocations)
* [Fulfillment.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.location)
* [FulfillmentOrderAssignedLocation.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-FulfillmentOrderAssignedLocation.fields.location)
* [FulfillmentOrderDestination.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderDestination#field-FulfillmentOrderDestination.fields.location)
* [FulfillmentOrderLocationForMove.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.location)
* [FulfillmentService.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService#field-FulfillmentService.fields.location)
* [InventoryChange.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.location)
* [InventoryLevel.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.location)
* [LocationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-nodes)
* [LocationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge#field-LocationEdge.fields.node)
* [LocationSnapshot.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot#field-LocationSnapshot.fields.location)
* [LocationsCondition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.locations)
* [Order.retailLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.retailLocation)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)

  query

  Retrieves a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by its ID. Locations are physical places where merchants store inventory, such as warehouses, retail stores, or fulfillment centers.

  Each location tracks inventory levels, fulfillment capabilities, and address information. Active locations can stock products and fulfill orders based on their configuration settings.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the location to return. If no ID is provided, the primary location of the Shop is returned.

  ***

* [location​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationByIdentifier)

  query

  Return a location by an identifier.

  * identifier

    [Location​Identifier​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationIdentifierInput)

    required

    ### Arguments

    The identifier of the location.

  ***

* [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)

  query

  A paginated list of inventory locations where merchants can stock [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) items and fulfill [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) items.

  Returns only active locations by default. Use the [`includeInactive`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeInactive) argument to retrieve deactivated locations that can no longer stock inventory or fulfill orders. Use the [`includeLegacy`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeLegacy) argument to include locations that [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) apps manage. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-query) argument to filter by location attributes like name, address, and whether local pickup is enabled.

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

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the locations that are deactivated.

  * include​Legacy

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the legacy locations of fulfillment services.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * active

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * address1

      string

    * address2

      string

    * city

      string

    * country

      string

    * created\_at

      time

    * geolocated

      boolean

    * * id

        id

      * legacy

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * name

      string

    * * pickup\_in\_store

        string

      * province

        string

      -
      - Valid values:
        * `enabled`
        * `disabled`

    * zip

      string

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

  query

  Returns a list of all origin locations available for a delivery profile.

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

* [locations​Available​For​Delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfiles)

  query

  Deprecated

***

## Location Queries

### Queried by

* [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
* [location​By​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationByIdentifier)
* [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
* [locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

***

## Mutations

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

  mutation

  Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to activate.

  ***

* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

  mutation

  Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Locations represent physical places like warehouses, retail stores, or fulfillment centers.

  The location requires a name and address with at least a country code. You can specify whether the location fulfills online orders, which determines if its inventory is available for online sales. You can also attach custom [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional information about the location.

  * input

    [Location​Add​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput)

    required

    ### Arguments

    The properties of the location to add.

  ***

* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

  mutation

  Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of a location to deactivate.

  ***

* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

  mutation

  Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's name, address, whether it fulfills online orders, and custom [`metafields`](https://shopify.dev/docs/apps/build/custom-data).

  Apps that created a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can edit the associated location to ensure accurate representation of their fulfillment network.

  ***

  **Note:** You can\&#39;t disable the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit#arguments-input.fields.fulfillsOnlineOrders">\<code>\<span class="PreventFireFoxApplyingGapToWBR">fulfills\<wbr/>Online\<wbr/>Orders\</span>\</code>\</a> setting for fulfillment service locations.

  ***

  Learn more about [editing locations for fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to edit.

  * input

    [Location​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput)

    required

    The updated properties for the location.

  ***

***

## Location Mutations

### Mutated by

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)
* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)
* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)
* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

***

## Interfaces

* * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Location Implements

### Implements

* [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
