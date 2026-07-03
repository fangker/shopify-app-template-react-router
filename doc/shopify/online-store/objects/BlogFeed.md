---
title: BlogFeed - GraphQL Admin
description: >-
  RSS feed provider details for blog syndication. This object contains the

  location and path information for external feed services that were previously

  integrated with the blog.


  The `BlogFeed` object maintains the feed URL and path to ensure existing feed
  subscriptions continue working.


  Use the `BlogFeed` object to:

  - Access RSS feed provider configuration

  - Retrieve feed location and path information

  - Maintain existing feed syndication settings


  > Note:

  > This is a legacy feature. New integrations with external feed services are
  not supported.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogFeed'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogFeed.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Blog​Feed

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

RSS feed provider details for blog syndication. This object contains the location and path information for external feed services that were previously integrated with the blog.

The `BlogFeed` object maintains the feed URL and path to ensure existing feed subscriptions continue working.

Use the `BlogFeed` object to:

* Access RSS feed provider configuration
* Retrieve feed location and path information
* Maintain existing feed syndication settings

***

**Note:** This is a legacy feature. New integrations with external feed services are not supported.

***

## Fields

* location

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  Blog feed provider url.

* path

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Blog feed provider path.

***

## Map

### Fields with this object

* [Blog.feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.feed)
