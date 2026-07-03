---
title: CommentAuthor - GraphQL Admin
description: >-
  The author of a comment on a blog article, containing the commenter's name and

  email address. This information helps merchants moderate comments and

  potentially engage with their community.


  For example, when reviewing pending comments, merchants can see the
  commenter's

  name and email to help with moderation decisions or to enable follow-up

  communication if needed.


  Use the `CommentAuthor` object to:

  - Display comment attribution

  - Support comment moderation workflows

  - Enable merchant-to-reader communication
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentAuthor'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentAuthor.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Comment​Author

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

The author of a comment on a blog article, containing the commenter's name and email address. This information helps merchants moderate comments and potentially engage with their community.

For example, when reviewing pending comments, merchants can see the commenter's name and email to help with moderation decisions or to enable follow-up communication if needed.

Use the `CommentAuthor` object to:

* Display comment attribution
* Support comment moderation workflows
* Enable merchant-to-reader communication

## Fields

* email

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The author's email.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The author’s name.

***

## Map

### Fields with this object

* [Comment.author](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.author)
