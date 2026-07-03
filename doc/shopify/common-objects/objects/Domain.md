---
title: Domain - GraphQL Admin
description: >-
  A unique string that represents the address of a Shopify store on the
  Internet.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Domain

object

A unique string that represents the address of a Shopify store on the Internet.

## Fields

* host

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The host name of the domain. For example, `example.com`.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* localization

  [Domain​Localization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DomainLocalization)

  The localization of the domain, if the domain doesn't redirect.

* market​Web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The web presence of the domain.

* ssl​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether SSL is enabled.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL of the domain (for example, `https://example.com`).

***

## Map

### Fields with this object

* [MarketWebPresence.domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.domain)
* [Shop.primaryDomain](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.primaryDomain)

***

## Queries

* [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)

  query

  Returns a `Domain` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Domain` to return.

  ***

***

## Domain Queries

### Queried by

* [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Domain Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
