---
title: WebhookEventBridgeEndpoint - GraphQL Admin
description: >-
  Connects your app to Amazon EventBridge so you can receive Shopify webhook

  events and process them through AWS's event-driven architecture. This gives
  you

  enterprise-grade scalability and lets you tap into the full AWS ecosystem for

  handling webhook traffic.


  For example, when a customer places an order, Shopify can publish the order

  creation event directly to your EventBridge partner source, allowing your AWS

  infrastructure to process the event through Lambda functions, SQS queues, or

  other AWS services.


  EventBridge endpoints provide enterprise-grade event routing and processing

  capabilities, making them ideal for apps that need to handle high-volume
  webhook

  traffic or integrate deeply with AWS services.


  Learn more about [webhook
  endpoints](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookEventBridgeEndpoint
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookEventBridgeEndpoint.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Webhook​Event​Bridge​Endpoint

object

Connects your app to Amazon EventBridge so you can receive Shopify webhook events and process them through AWS's event-driven architecture. This gives you enterprise-grade scalability and lets you tap into the full AWS ecosystem for handling webhook traffic.

For example, when a customer places an order, Shopify can publish the order creation event directly to your EventBridge partner source, allowing your AWS infrastructure to process the event through Lambda functions, SQS queues, or other AWS services.

EventBridge endpoints provide enterprise-grade event routing and processing capabilities, making them ideal for apps that need to handle high-volume webhook traffic or integrate deeply with AWS services.

Learn more about [webhook endpoints](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).

## Fields

* arn

  [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

  non-null

  The ARN of this EventBridge partner event source.

***

## Map

### Possible type in

* [Webhook​Subscription​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)
