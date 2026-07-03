---
title: subscriptionBillingCycleContractEdit - GraphQL Admin
description: Edit the contents of a subscription contract for the specified billing cycle.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# subscription​Billing​Cycle​Contract​Edit

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Edit the contents of a subscription contract for the specified billing cycle.

## Arguments

* actor

  [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

  The actor who initiated a subscription action.

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

  required

  Input object for selecting and using billing cycles.

***

## Subscription​Billing​Cycle​Contract​Edit​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The draft subscription contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionBillingCycleContractEdit reference
