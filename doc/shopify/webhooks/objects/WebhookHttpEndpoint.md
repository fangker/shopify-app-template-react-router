---
title: WebhookHttpEndpoint - GraphQL Admin
description: >-
  An HTTPS endpoint that receives webhook events as POST requests, letting your

  app respond to Shopify events in real-time. This is the most common webhook

  endpoint type, allowing apps to process Shopify events through standard HTTP
  callbacks.


  For example, when setting up order notifications, your app would provide an

  HTTPS URL like `https://yourapp.com/webhooks/orders/create` to receive order

  creation events as JSON payloads.


  HTTP endpoints offer straightforward webhook integration with immediate event

  delivery, making them suitable for apps that need real-time notifications

  without complex infrastructure requirements.


  Learn more about [HTTP webhook
  configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/https).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookHttpEndpoint
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookHttpEndpoint.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Webhook​Http​Endpoint

object

An HTTPS endpoint that receives webhook events as POST requests, letting your app respond to Shopify events in real-time. This is the most common webhook endpoint type, allowing apps to process Shopify events through standard HTTP callbacks.

For example, when setting up order notifications, your app would provide an HTTPS URL like `https://yourapp.com/webhooks/orders/create` to receive order creation events as JSON payloads.

HTTP endpoints offer straightforward webhook integration with immediate event delivery, making them suitable for apps that need real-time notifications without complex infrastructure requirements.

Learn more about [HTTP webhook configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/https).

## Fields

* callback​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL to which the webhooks events are sent.

***

## Map

### Possible type in

* [Webhook​Subscription​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)
