---
title: Comment - GraphQL Admin
description: A comment on an article.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Comment

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

A comment on an article.

## Fields

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article associated with the comment.

* author

  [Comment​Author!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentAuthor)

  non-null

  The comment’s author.

* body

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The content of the comment.

* body​Html

  [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  non-null

  The content of the comment, complete with HTML formatting.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the comment was created.

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The paginated list of events associated with the host subject.

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

    * * action

        string

      * comments

        boolean

      * created\_at

        time

      * id

        id

      * subject\_type

        string

      - The action that occured.

      - Example:

        * `action:create`

        Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

      - Example:

        * `false`
        * `true`

        Filter by the date and time when the event occurred. Event data is retained for 1 year.

      - Example:

        * `created_at:>2025-10-21`
        * `created_at:<now`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

        Example:

        * `PRODUCT_VARIANT`
        * `PRODUCT`
        * `COLLECTION`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* ip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IP address of the commenter.

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether or not the comment is published.

* published​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the comment was published.

* status

  [Comment​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentStatus)

  non-null

  The status of the comment.

* updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the comment was last updated.

* user​Agent

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The user agent of the commenter.

***

## Map

### Fields and connections with this object

* [Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments)
* [CommentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-nodes)
* [CommentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge#field-CommentEdge.fields.node)

***

## Queries

* [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)

  query

  Returns a `Comment` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Comment` to return.

  ***

* [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

  query

  List of the shop's comments.

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

      * created\_at

        time

      * id

        id

      * published\_at

        time

      * published\_status

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the comment was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the comment was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

      - Valid values:
        * `any`
        * `published`
        * `unpublished`
        Example:
        * `published_status:any`
        * `published_status:published`
        * `published_status:unpublished`

    * updated\_at

      time

      Filter by the date and time when the comment was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Comment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Comment Queries

### Queried by

* [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)
* [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

***

## Mutations

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

  mutation

  Approves a pending comment, making it visible to store visitors on the associated blog article.

  For example, when a customer submits a question about a product in a blog post, merchants can approve the comment to make it publicly visible.

  Use the `commentApprove` mutation to:

  * Publish pending comments after review
  * Enable customer discussions on blog articles
  * Maintain quality control over comments

  Once approved, the comment becomes visible to all store visitors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be approved.

  ***

* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

  mutation

  Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a comment has been manually marked as spam.

  For example, when a merchant reviews comments marked as spam and finds a legitimate customer question, they can use this mutation to restore the comment's normal status and make it eligible for approval.

  Use the `commentNotSpam` mutation to:

  * Unmark comments that were marked as spam
  * Restore comments to normal moderation status
  * Move comments back to the approval queue

  This action changes the comment's status from spam back to pending, where it can then be approved or managed according to standard moderation practices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as not spam.

  ***

* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

  mutation

  Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

  For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

  Use the `commentSpam` mutation to:

  * Hide promotional or malicious comments from public view
  * Protect customers from potentially harmful links
  * Maintain professional discussion quality on blog articles

  Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as spam.

  ***

***

## Comment Mutations

### Mutated by

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)
* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)
* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Comment Implements

### Implements

* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
