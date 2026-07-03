---
title: ConsentPolicy - GraphQL Admin
description: >-
  A consent policy describes the level of consent that the merchant requires
  from the user before actually

  collecting and processing the data.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Consent​Policy

object

A consent policy describes the level of consent that the merchant requires from the user before actually collecting and processing the data.

## Fields

* consent​Required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether consent is required for the region.

* country​Code

  [Privacy​Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

  The `ISO 3166` country code for which the policy applies.

* data​Sale​Opt​Out​Required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether data sale opt-out is required for the region.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The global ID of the consent policy. IDs prefixed with `SD-` are system default policies.

* region​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `ISO 3166` region code for which the policy applies.

* shop​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The global ID of the shop that owns the policy.

***

## Map

No referencing types

***

## Queries

* [consent​Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicy)

  query

  Returns the customer privacy consent policies of a shop.

  * consent​Required

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Return policies where consent is required or not.

  * country​Code

    [Privacy​Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

    Return policies with the provided country code.

  * data​Sale​Opt​Out​Required

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Return policies where data sale opt out is required or not.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Return the policy with the provided ID.

  * region​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Return policies with the provided region code.

  ***

***

## ConsentPolicy Queries

### Queried by

* [consent​Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicy)

***

## Mutations

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

  mutation

  Update or create consent policies in bulk.

  * consent​Policies

    [\[Consent​Policy​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput)

    required

    ### Arguments

    The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

  ***

***

## ConsentPolicy Mutations

### Mutated by

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ConsentPolicy Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
