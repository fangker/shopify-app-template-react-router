---
title: CustomerAccountNativePage - GraphQL Admin
description: A native page for the customer account navigation menu.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountNativePage
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountNativePage.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Account​Native​Page

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

A native page for the customer account navigation menu.

## Fields

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-friendly string for the customer account page.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the customer account page.

* page​Type

  [Customer​Account​Native​Page​Page​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountNativePagePageType)

  non-null

  The type of customer account native page.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the customer account page.

***

## Map

No referencing types

***

## Interfaces

* * [Customer​Account​Page](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)

    interface

  * [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CustomerAccountNativePage Implements

### Implements

* [Customer​Account​Page](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)
* [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
