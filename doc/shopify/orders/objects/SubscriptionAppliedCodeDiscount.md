---
title: SubscriptionAppliedCodeDiscount - GraphQL Admin
description: Represents an applied code discount.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Applied​Code​Discount

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents an applied code discount.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID.

* redeem​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The redeem code of the discount that applies on the subscription.

* rejection​Reason

  [Subscription​Discount​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason)

  The reason that the discount on the subscription draft is rejected.

***

## Map

### Possible type in

* [Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

***

## Mutations

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

  mutation

  Applies a code discount on the subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to apply a subscription code discount on.

  * redeem​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    Code discount redeem code.

  ***

***

## SubscriptionAppliedCodeDiscount Mutations

### Mutated by

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)
