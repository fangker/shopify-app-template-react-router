---
title: StorefrontAccessToken - GraphQL Admin
description: >-
  A token that delegates unauthenticated access scopes to clients that need to

  access the [Storefront API](https://shopify.dev/docs/api/storefront).
  Storefront

  access tokens enable headless storefronts and custom applications to interact

  with a store on behalf of customers without requiring authentication.


  The token provides specific permissions, such as reading

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  data, managing carts, or creating

  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  accounts. An app can have a maximum of 100 active storefront access tokens for

  each [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop).


  Learn more about [building with the Storefront
  API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Storefront​Access​Token

object

A token that delegates unauthenticated access scopes to clients that need to access the [Storefront API](https://shopify.dev/docs/api/storefront). Storefront access tokens enable headless storefronts and custom applications to interact with a store on behalf of customers without requiring authentication.

The token provides specific permissions, such as reading [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) data, managing carts, or creating [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts. An app can have a maximum of 100 active storefront access tokens for each [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop).

Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

## Fields

* access​Scopes

  [\[Access​Scope!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  non-null

  List of permissions associated with the token.

* access​Token

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The issued public access token.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the public access token was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An arbitrary title for each token determined by the developer, used for reference purposes.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the storefront access token was updated.

***

## Map

### Fields and connections with this object

* [Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.storefrontAccessTokens)
* [StorefrontAccessTokenConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-nodes)
* [StorefrontAccessTokenEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge#field-StorefrontAccessTokenEdge.fields.node)

***

## Mutations

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

  mutation

  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

  Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

  Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

  * input

    [Storefront​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

    required

    ### Arguments

    Provides the input fields for creating a storefront access token.

  ***

***

## StorefrontAccessToken Mutations

### Mutated by

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## StorefrontAccessToken Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
