---
title: ShopPolicy - GraphQL Admin
description: >-
  Policy that a merchant has configured for their store, such as their refund or
  privacy policy.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Policy

object

Requires `read_legal_policies` access scope.

Policy that a merchant has configured for their store, such as their refund or privacy policy.

## Fields

* body

  [HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  non-null

  The text of the policy. The maximum size is 512kb.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The translated title of the policy. For example, Refund Policy or Politique de remboursement.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* type

  [Shop​Policy​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyType)

  non-null

  The shop policy type.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was last modified.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The public URL of the policy.

***

## Map

### Fields with this object

* [Shop.shopPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.shopPolicies)

***

## Mutations

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

  mutation

  Updates a shop policy.

  * shop​Policy

    [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

    required

    ### Arguments

    The properties to use when updating the shop policy.

  ***

***

## ShopPolicy Mutations

### Mutated by

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ShopPolicy Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
