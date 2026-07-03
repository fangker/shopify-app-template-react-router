---
title: subscriptionDraftFreeShippingDiscountAdd - GraphQL Admin
description: Adds a subscription free shipping discount to a subscription draft.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# subscription​Draft​Free​Shipping​Discount​Add

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Adds a subscription free shipping discount to a subscription draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the subscription contract draft to add a subscription free shipping discount to.

* input

  [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

  required

  The properties of the new subscription free shipping discount.

***

## Subscription​Draft​Free​Shipping​Discount​Add​Payload returns

* discount​Added

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The added subscription free shipping discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftFreeShippingDiscountAdd reference
