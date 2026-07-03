---
title: SavedSearch - GraphQL Admin
description: >-
  A representation of a search query in the Shopify admin used on resource index

  views. Preserves complex queries with search terms and filters, enabling

  merchants to quickly access frequently used data views. For example, a saved

  search can be applied to the product index table to filter products. The query

  string combines free-text search terms with structured filters to narrow
  results

  based on resource attributes.


  The search applies to a specific resource type such as
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer),

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), or
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
  objects.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Saved​Search

object

A representation of a search query in the Shopify admin used on resource index views. Preserves complex queries with search terms and filters, enabling merchants to quickly access frequently used data views. For example, a saved search can be applied to the product index table to filter products. The query string combines free-text search terms with structured filters to narrow results based on resource attributes.

The search applies to a specific resource type such as [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects.

## Fields

* filters

  [\[Search​Filter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchFilter)

  non-null

  The filters of a saved search.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of a saved search.

* query

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query string of a saved search. This includes search terms and filters.

* resource​Type

  [Search​Result​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SearchResultType)

  non-null

  The type of resource this saved search is searching in.

* search​Terms

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The search terms of a saved search.

***

## Map

### Fields and connections with this object

* [SavedSearchConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection#returns-nodes)
* [SavedSearchEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearchEdge#field-SavedSearchEdge.fields.node)

***

## Queries

* [automatic​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountSavedSearches)

  query

  List of the shop's automatic discount saved searches.

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

* [code​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountSavedSearches)

  query

  List of the shop's code discount saved searches.

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

* [collection​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionSavedSearches)

  query

  Returns a list of the shop's collection saved searches.

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

* [discount​Redeem​Code​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches)

  query

  List of the shop's redeemed discount code saved searches.

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

      * times\_used

        integer

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

    [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [draft​Order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderSavedSearches)

  query

  List of the shop's draft order saved searches.

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

* [file​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/fileSavedSearches)

  query

  A list of the shop's file saved searches.

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

* [order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderSavedSearches)

  query

  Returns [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) for orders in the shop. Saved searches store search queries with their filters and search terms.

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

* [product​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productSavedSearches)

  query

  Returns a list of the shop's product saved searches.

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

* [url​Redirect​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectSavedSearches)

  query

  A list of the shop's URL redirect saved searches.

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

* [customer​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSavedSearches)

  query

  Deprecated

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

    [Customer​Saved​Search​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSavedSearchSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## SavedSearch Queries

### Queried by

* [automatic​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountSavedSearches)
* [code​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountSavedSearches)
* [collection​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionSavedSearches)
* [discount​Redeem​Code​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches)
* [draft​Order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderSavedSearches)
* [file​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/fileSavedSearches)
* [order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderSavedSearches)
* [product​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productSavedSearches)
* [url​Redirect​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectSavedSearches)

***

## Mutations

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)

  mutation

  Creates a saved search.

  * input

    [Saved​Search​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput)

    required

    ### Arguments

    Specifies the input fields for a saved search.

  ***

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

  mutation

  Updates a saved search.

  * input

    [Saved​Search​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchUpdateInput)

    required

    ### Arguments

    The input fields to update a saved search.

  ***

***

## SavedSearch Mutations

### Mutated by

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)
* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## SavedSearch Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
