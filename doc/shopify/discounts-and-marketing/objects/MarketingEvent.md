---
title: MarketingEvent - GraphQL Admin
description: Represents actions that market a merchant's store or products.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Marketing​Event

object

Requires `read_marketing_events` access scope.

Represents actions that market a merchant's store or products.

## Fields

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app that the marketing event is attributed to.

* channel​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable description of the marketing event.

* ended​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the marketing event ended.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* manage​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL where the marketing event can be managed.

* marketing​Channel​Type

  [Marketing​Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

* preview​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL where the marketing event can be previewed.

* remote​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional ID that helps Shopify validate engagement data.

* scheduled​To​End​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the marketing event is scheduled to end.

* source​And​Medium

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Where the `MarketingEvent` occurred and what kind of content was used. Because `utmSource` and `utmMedium` are often used interchangeably, this is based on a combination of `marketingChannel`, `referringDomain`, and `type` to provide a consistent representation for any given piece of marketing regardless of the app that created it.

* started​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the marketing event started.

* type

  [Marketing​Tactic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

  non-null

  The marketing event type.

* utm​Campaign

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the marketing campaign.

* utm​Medium

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The medium that the marketing campaign is using. Example values: `cpc`, `banner`.

* utm​Source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The referrer of the marketing event. Example values: `google`, `newsletter`.

### Deprecated fields

* channel

  [Marketing​Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  Deprecated

* target​Type​Display​Text

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [CustomerVisit.marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.marketingEvent)
* [MarketingActivity.marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.marketingEvent)
* [MarketingEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#returns-nodes)
* [MarketingEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge#field-MarketingEventEdge.fields.node)

***

## Queries

* [marketing​Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvent)

  query

  Returns a `MarketingEvent` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `MarketingEvent` to return.

  ***

* [marketing​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvents)

  query

  A list of marketing events associated with the marketing app.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * app\_id

      id

    * description

      string

    * * id

        id

      * started\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * type

      string

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Marketing​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## MarketingEvent Queries

### Queried by

* [marketing​Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvent)
* [marketing​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvents)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## MarketingEvent Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
