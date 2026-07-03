---
title: WebPixel - GraphQL Admin
description: >-
  The `WebPixel` object enables you to manage JavaScript code snippets

  that run on an online store and collect

  [behavioral data](https://shopify.dev/docs/api/web-pixels-api/standard-events)

  for marketing campaign optimization and analytics.


  Learn how to create a

  [web pixel
  extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)

  to subscribe your app to events that are emitted by Shopify.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Web​Pixel

object

Requires `read_pixels` access scope.

The `WebPixel` object enables you to manage JavaScript code snippets that run on an online store and collect [behavioral data](https://shopify.dev/docs/api/web-pixels-api/standard-events) for marketing campaign optimization and analytics.

Learn how to create a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) to subscribe your app to events that are emitted by Shopify.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* settings

  [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  non-null

  The [settings object](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings) for the web pixel. This object specifies configuration options that control the web pixel's functionality and behavior. You can find the settings for a web pixel in `extensions/<your_extension_name>/shopify.extension.toml`.

***

## Map

No referencing types

***

## Queries

* [web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPixel)

  query

  Returns a [web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by ID.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the `WebPixel` object to return.

  ***

***

## WebPixel Queries

### Queried by

* [web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPixel)

***

## Mutations

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

  When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    ### Arguments

    The web pixel settings in JSON format.

  ***

* [web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by updating a web pixel record on the store where you installed your app.

  When you run the `webPixelUpdate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to update.

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    The web pixel settings in JSON format.

  ***

***

## WebPixel Mutations

### Mutated by

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)
* [web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## WebPixel Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
