---
title: ConsentPolicyError - GraphQL Admin
description: The errors encountered while performing mutations on consent policies.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Consent​Policy​Error

object

The errors encountered while performing mutations on consent policies.

## Fields

* code

  [Consent​Policy​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ConsentPolicyErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

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

## ConsentPolicyError Mutations

### Mutated by

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ConsentPolicyError Implements

### Implements

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
