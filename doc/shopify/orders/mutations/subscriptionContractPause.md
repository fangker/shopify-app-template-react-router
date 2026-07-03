---
title: subscriptionContractPause - GraphQL Admin
description: Pauses a Subscription Contract.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# subscription​Contract​Pause

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Pauses a Subscription Contract.

## Arguments

* actor

  [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

  The actor who initiated a subscription action.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the Subscription Contract.

***

## Subscription​Contract​Pause​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionContractPause reference
