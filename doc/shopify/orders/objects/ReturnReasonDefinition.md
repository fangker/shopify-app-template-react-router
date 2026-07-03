---
title: ReturnReasonDefinition - GraphQL Admin
description: >-
  A standardized reason for returning an item.


  - Shopify offers an expanded library of return reasons available to all
  merchants

  - For each product, Shopify suggests a curated subset of reasons based on the
  product's category

  - Suggested reasons aren't the only valid options. When creating a return via

  the API, you can use any reason from the [full
  library](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Return​Reason​Definition

object

Requires `read_returns` access scope.

A standardized reason for returning an item.

* Shopify offers an expanded library of return reasons available to all merchants
* For each product, Shopify suggests a curated subset of reasons based on the product's category
* Suggested reasons aren't the only valid options. When creating a return via the API, you can use any reason from the [full library](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions).

## Fields

* deleted

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the return reason has been removed from taxonomy.

  Deleted reasons should not be presented to customers when creating new returns, but may still appear on existing returns that were created before the reason was deleted. This field enables graceful deprecation of return reasons without breaking historical data.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-readable, stable identifier for the return reason.

  Example values include "arrived-late", "comfort", "too-tight", "color-too-bright", and "quality". The handle remains consistent across API versions and localizations, making it suitable for programmatic use.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized, user-facing name of the return reason.

  This field returns the reason name in the requested locale, automatically falling back to English if no translation is available. Use this field when displaying return reasons to customers or merchants.

***

## Map

### Fields and connections with this object

* [LineItem.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)
* [ReturnLineItem.returnReasonDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.returnReasonDefinition)
* [ReturnLineItemType.returnReasonDefinition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType#fields-returnReasonDefinition)
* [ReturnReasonDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-nodes)
* [ReturnReasonDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinitionEdge#field-ReturnReasonDefinitionEdge.fields.node)
* [UnverifiedReturnLineItem.returnReasonDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnverifiedReturnLineItem#field-UnverifiedReturnLineItem.fields.returnReasonDefinition)

***

## Queries

* [return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

  query

  Returns the full library of available return reason definitions.

  Use this query to retrieve the standardized return reasons available for creating returns. Filter by IDs or handles to get specific definitions.

  Only non-deleted reasons should be shown to customers when creating new returns. Deleted reasons have been replaced with better alternatives and are no longer recommended. However, they remain valid options and may still appear on existing returns.

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

  * handles

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A list of return reason definition handles to filter by.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A list of return reason definition IDs to filter by.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * deleted

        boolean

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether the return reason has been removed from taxonomy.

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by name.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Return​Reason​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReasonDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## ReturnReasonDefinition Queries

### Queried by

* [return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ReturnReasonDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
