---
title: WebhookPubSubEndpoint - GraphQL Admin
description: >-
  Individual Google Cloud Pub/Sub topics that receive webhook events for
  reliable,

  asynchronous processing. This endpoint type lets your app tap into Google

  Cloud's messaging infrastructure to handle events at scale.


  For example, when inventory levels change, Shopify can publish these events to

  your Pub/Sub topic `projects/your-project/topics/inventory-updates`, allowing

  your Google Cloud functions or services to process inventory changes at their
  own pace.


  Pub/Sub endpoints provide reliable message delivery to Google Cloud Pub/Sub,

  making them excellent for apps that need to handle variable webhook volumes or

  integrate with Google Cloud Platform services.


  Learn more about [Pub/Sub webhook
  configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookPubSubEndpoint
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookPubSubEndpoint.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Webhook​Pub​Sub​Endpoint

object

Individual Google Cloud Pub/Sub topics that receive webhook events for reliable, asynchronous processing. This endpoint type lets your app tap into Google Cloud's messaging infrastructure to handle events at scale.

For example, when inventory levels change, Shopify can publish these events to your Pub/Sub topic `projects/your-project/topics/inventory-updates`, allowing your Google Cloud functions or services to process inventory changes at their own pace.

Pub/Sub endpoints provide reliable message delivery to Google Cloud Pub/Sub, making them excellent for apps that need to handle variable webhook volumes or integrate with Google Cloud Platform services.

Learn more about [Pub/Sub webhook configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).

## Fields

* pub​Sub​Project

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The Google Cloud Pub/Sub project ID.

* pub​Sub​Topic

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The Google Cloud Pub/Sub topic ID.

***

## Map

### Possible type in

* [Webhook​Subscription​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)
