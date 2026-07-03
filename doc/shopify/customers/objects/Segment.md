---
title: Segment - GraphQL Admin
description: >-
  A group of
  [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  that meet specific criteria defined through [ShopifyQL

  query](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference)

  conditions. Common use cases for segments include customer analytics, targeted

  marketing campaigns, and automated discount eligibility.


  The segment's
  [`query`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-query)
  field contains ShopifyQL conditions that determine membership, such as
  purchase

  history, location, or engagement patterns. Tracks when the segment was created
  with
  [`creationDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-creationDate)

  and when it was last modified with
  [`lastEditDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-lastEditDate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment

object

Requires `read_customers` access scope. Also: The user must not have restricted access.

A group of [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) that meet specific criteria defined through [ShopifyQL query](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference) conditions. Common use cases for segments include customer analytics, targeted marketing campaigns, and automated discount eligibility.

The segment's [`query`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-query) field contains ShopifyQL conditions that determine membership, such as purchase history, location, or engagement patterns. Tracks when the segment was created with [`creationDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-creationDate) and when it was last modified with [`lastEditDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-lastEditDate).

## Fields

* creation​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the segment was added to the store.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Edit​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the segment was last updated.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the segment.

* query

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers.

***

## Map

### Fields and connections with this object

* [DiscountCustomerSegments.segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments#field-DiscountCustomerSegments.fields.segments)
* [PriceRuleCustomerSelection.segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-PriceRuleCustomerSelection.fields.segments)
* [SegmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-nodes)
* [SegmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge#field-SegmentEdge.fields.node)

***

## Queries

* [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)

  query

  Retrieves a customer [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) by ID. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

  Use segments for targeted marketing campaigns, analyzing customer behavior, or creating personalized experiences. Each segment includes its name, creation date, and the query that defines which [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects belong to it.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a segment by ID.

  ***

* [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

  query

  Returns a paginated list of [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) objects for the shop. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). You can filter segments by search query and sort them by creation date or other criteria.

  The query supports standard [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) arguments and returns a [`SegmentConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentConnection) containing segment details including names, creation dates, and the query definitions that determine segment membership.

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

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Segment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys)

    Default:CREATION\_DATE

    Sort the underlying list by the given key.

  ***

***

## Segment Queries

### Queried by

* [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
* [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

***

## Mutations

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

  mutation

  Creates a segment.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the segment to be created. Segment names must be unique.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

  mutation

  Updates a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to be updated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The new name for the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

***

## Segment Mutations

### Mutated by

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)
* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Segment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
