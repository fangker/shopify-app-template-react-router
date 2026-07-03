---
title: MarketLocalizableResource - GraphQL Admin
description: A resource that has market localizable fields.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Localizable​Resource

object

Requires `read_translations` access scope.

A resource that has market localizable fields.

## Fields

* market​Localizable​Content

  [\[Market​Localizable​Content!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableContent)

  non-null

  The market localizable content.

* market​Localizations

  [\[Market​Localization!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  non-null

  Market localizations for the market localizable content.

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Filters market localizations by market ID.

  ***

* resource​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The GID of the resource.

***

## Map

### Fields and connections with this object

* [MarketLocalizableResourceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-nodes)
* [MarketLocalizableResourceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge#field-MarketLocalizableResourceEdge.fields.node)

***

## Queries

* [market​Localizable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResource)

  query

  A resource that can have localized values for different markets.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a market localizable resource by ID.

  ***

* [market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)

  query

  Resources that can have localized values for different markets.

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

  * resource​Type

    [Market​Localizable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketLocalizableResourceType)

    required

    Return only resources of a type.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* [market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)

  query

  Resources that can have localized values for different markets.

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

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Return only resources for given IDs.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## MarketLocalizableResource Queries

### Queried by

* [market​Localizable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResource)
* [market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)
* [market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)
