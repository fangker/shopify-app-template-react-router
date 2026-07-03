---
title: WebhookSubscription - GraphQL Admin
description: >-
  A webhook subscription is a persisted data object created by an app using the
  REST Admin API or GraphQL Admin API.

  It describes the topic that the app wants to receive, and a destination where

  Shopify should send webhooks of the specified topic.

  When an event for a given topic occurs, the webhook subscription sends a
  relevant payload to the destination.

  Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Webhook​Subscription

object

A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API. It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic. When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination. Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

## Fields

* api​Version

  [Api​Version!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion)

  non-null

  The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the webhook subscription was created.

* filter

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.

* format

  [Webhook​Subscription​Format!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

  non-null

  The format in which the webhook subscription should send the data.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* include​Fields

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The list of fields to be included in the webhook subscription. Only the fields specified will be included in the webhook payload. If null, then all fields will be included. Learn more about [modifying webhook payloads](https://shopify.dev/docs/apps/build/webhooks/customize/modify-payloads).

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* metafield​Namespaces

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The list of namespaces for any metafields that should be included in the webhook subscription.

* metafields

  [\[Webhook​Subscription​Metafield​Identifier!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionMetafieldIdentifier)

  non-null

  The list of identifiers specifying metafields to include in the webhook subscription.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable name for the webhook subscription.

* topic

  [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

  non-null

  The type of event that triggers the webhook. The topic determines when the webhook subscription sends a webhook, as well as what class of data object that webhook contains.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the webhook subscription was updated.

* uri

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The URI to which the webhook subscription will send events.

### Deprecated fields

* callback​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

* endpoint

  [Webhook​Subscription​Endpoint!](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [WebhookSubscriptionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-nodes)
* [WebhookSubscriptionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge#field-WebhookSubscriptionEdge.fields.node)

***

## Queries

* [webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscription)

  query

  Returns a webhook subscription by ID.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `WebhookSubscription` to return.

  ***

* [webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

  query

  Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.

  ***

  **Note:** Returns only shop-scoped subscriptions, not app-scoped subscriptions configured in TOML files.

  ***

  Subscription details include event topics, endpoint URIs, filtering rules, field inclusion settings, and metafield namespace permissions. Results support cursor-based pagination that you can filter by topic, format, or custom search criteria.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * format

    [Webhook​Subscription​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

    Response format to filter by.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Webhook​Subscription​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * topics

    [\[Webhook​Subscription​Topic!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    List of webhook subscription topics to filter by.

  * uri

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    URI to filter by. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

  ***

***

## WebhookSubscription Queries

### Queried by

* [webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscription)
* [webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

***

## Mutations

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

  mutation

  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in a shop. Webhooks push event data to your endpoint immediately when changes happen, eliminating the need for polling.

  The subscription configuration supports multiple endpoint types including HTTPS URLs, Google Pub/Sub topics, and AWS EventBridge event sources. You can filter events using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to receive only relevant webhooks, control which data fields are included in webhook payloads, and specify metafield namespaces to include.

  ***

  **Note:** The Webhooks API version \<a href="https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version">configured in your app\</a> determines the API version for webhook events. You can\&#39;t specify it per subscription.

  ***

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

  mutation

  Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription.

  The mutation accepts a [`WebhookSubscriptionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput) that specifies the new configuration. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format. Updates apply atomically without interrupting webhook delivery.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

### Deprecated mutations

* [event​Bridge​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

* [event​Bridge​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

* [pub​Sub​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

* [pub​Sub​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

***

## WebhookSubscription Mutations

### Mutated by

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)
* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## WebhookSubscription Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
