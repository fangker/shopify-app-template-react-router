---
title: ArticleAuthor - GraphQL Admin
description: >-
  Represents the author of an article. This object provides the author's full
  name for attribution purposes.


  The `ArticleAuthor` is a simple object that contains only the author's name

  field. When articles are created or updated, the author information is stored

  and can be displayed alongside the article content.


  Use the `ArticleAuthor` object to:

  - Retrieve the author's name for display in article bylines

  - Show author attribution in article listings

  - Display who wrote specific content


  Note: This object only contains the author's full name. It does not include

  additional author details like bio, email, or social media links.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Article​Author

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

Represents the author of an article. This object provides the author's full name for attribution purposes.

The `ArticleAuthor` is a simple object that contains only the author's name field. When articles are created or updated, the author information is stored and can be displayed alongside the article content.

Use the `ArticleAuthor` object to:

* Retrieve the author's name for display in article bylines
* Show author attribution in article listings
* Display who wrote specific content

Note: This object only contains the author's full name. It does not include additional author details like bio, email, or social media links.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The author's full name.

***

## Map

### Fields and connections with this object

* [Article.author](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.author)
* [ArticleAuthorConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-nodes)
* [ArticleAuthorEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthorEdge#field-ArticleAuthorEdge.fields.node)

***

## Queries

* [article​Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleAuthors)

  query

  List of article authors for the shop.

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

## ArticleAuthor Queries

### Queried by

* [article​Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleAuthors)
