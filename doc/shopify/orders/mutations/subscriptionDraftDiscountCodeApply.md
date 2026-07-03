---
title: subscriptionDraftDiscountCodeApply - GraphQL Admin
description: Applies a code discount on the subscription draft.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# subscription​Draft​Discount​Code​Apply

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Applies a code discount on the subscription draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the subscription contract draft to apply a subscription code discount on.

* redeem​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  Code discount redeem code.

***

## Subscription​Draft​Discount​Code​Apply​Payload returns

* applied​Discount

  [Subscription​Applied​Code​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount)

  The added subscription discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftDiscountCodeApply reference
