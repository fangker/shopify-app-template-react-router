---
title: AppInstallation - GraphQL Admin
description: >-
  An app installed on a shop. Each installation tracks the permissions granted
  to

  the app through
  [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  objects, along with billing subscriptions and
  [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)
  objects.


  The installation provides metafields that only the owning

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can

  access. These metafields store app-specific configuration that merchants and

  other apps can't modify. The installation also provides URLs for launching and

  uninstalling the app, along with any active
  [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)
  objects or
  [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)
  purchases.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Installation

object

An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

## Fields

* access​Scopes

  [\[Access​Scope!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  non-null

  The access scopes granted to the application by a merchant during installation.

* active​Subscriptions

  [\[App​Subscription!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  non-null

  The active application subscriptions billed to the shop on a recurring basis.

* all​Subscriptions

  [App​Subscription​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection)

  non-null

  All subscriptions created for a shop.

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

    [App​Subscription​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  Application which is installed.

* credits

  [App​Credit​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection)

  non-null

  Credits that can be used towards future app purchases.

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

    [App​Transaction​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppTransactionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* launch​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL to launch the application.

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

* one​Time​Purchases

  [App​Purchase​One​Time​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection)

  non-null

  One-time purchases to a shop.

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

    [App​Transaction​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppTransactionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* revenue​Attribution​Records

  [App​Revenue​Attribution​Record​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection)

  non-null

  The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes.

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

    [App​Revenue​Attribution​Record​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionRecordSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* uninstall​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to uninstall the application.

### Deprecated fields

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  Deprecated

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  Deprecated

* subscriptions

  [\[App​Subscription!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [App.installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation)
* [AppInstallationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-nodes)
* [AppInstallationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallationEdge#field-AppInstallationEdge.fields.node)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [app​Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallation)

  query

  Retrieves an [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) by ID. If no ID is provided, returns the installation for the currently authenticated [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App). The query provides essential data for validating installation state and managing app functionality within a store.

  Use this query to access installation details including granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects, [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) objects, and app-specific metadata.

  Learn more about [app installation](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation).

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    ID used to lookup AppInstallation.

  ***

* [app​Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations)

  query

  A paginated list of [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) objects across multiple stores where your app is installed. Use this query to monitor installation status, track billing and subscriptions through [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and review granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects.

  Filter by [`AppInstallationCategory`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory) to find specific types of installations (such as POS or channel apps) and by [`AppInstallationPrivacy`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy) to scope to public or private installations.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * category

    [App​Installation​Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory)

    The category of app installations to fetch.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * privacy

    [App​Installation​Privacy](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy)

    Default:PUBLIC

    The privacy level of app installations to fetch.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [App​Installation​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationSortKeys)

    Default:INSTALLED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [current​App​Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentAppInstallation)

  query

  Returns the [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) for the currently authenticated app. Provides access to granted access scopes, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and billing information for your app.

  Use this query to check which permissions your app has, monitor subscription status, or retrieve [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects. Learn more about [managing access scopes](https://shopify.dev/docs/api/usage/access-scopes#checking-granted-access-scopes), [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing), and [app credits](https://shopify.dev/docs/apps/launch/billing/award-app-credits).

***

## AppInstallation Queries

### Queried by

* [app​Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallation)
* [app​Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations)
* [current​App​Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentAppInstallation)

***

## Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## AppInstallation Implements

### Implements

* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
