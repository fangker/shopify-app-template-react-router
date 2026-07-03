---
title: SubscriptionManualDiscount - GraphQL Admin
description: Custom subscription discount.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Manual​Discount

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Custom subscription discount.

## Fields

* entitled​Lines

  [Subscription​Discount​Entitled​Lines!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines)

  non-null

  Entitled line items used to apply the subscription discount on.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times the subscription discount will be applied on orders.

* rejection​Reason

  [Subscription​Discount​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason)

  The reason that the discount on the subscription draft is rejected.

* target​Type

  [Discount​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountTargetType)

  non-null

  Type of line the discount applies on.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title associated with the subscription discount.

* type

  [Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountType)

  non-null

  The type of the subscription discount.

* usage​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of times the discount was applied.

* value

  [Subscription​Discount​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscountValue)

  non-null

  The value of the subscription discount.

***

## Map

### Fields and connections with this object

* [SubscriptionBillingCycleEditedContract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.discounts)
* [SubscriptionContract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)
* [SubscriptionContractBase.discounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-discounts)
* [SubscriptionManualDiscountConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-nodes)
* [SubscriptionManualDiscountEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscountEdge#field-SubscriptionManualDiscountEdge.fields.node)

### Possible type in

* [Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

***

## Mutations

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

  mutation

  Adds a subscription discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to add a subscription discount to.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties of the new Subscription Discount.

  ***

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

  mutation

  Updates a subscription discount on a subscription draft.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Discount to update.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract draft to update a subscription discount on.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties to update on the Subscription Discount.

  ***

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

  mutation

  Adds a subscription free shipping discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract draft to add a subscription free shipping discount to.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties of the new subscription free shipping discount.

  ***

* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)

  mutation

  Updates a subscription free shipping discount on a subscription draft.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Discount to update.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract draft to update a subscription discount on.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties to update on the Subscription Free Shipping Discount.

  ***

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

  mutation

  Removes a subscription line from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to remove a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to remove.

  ***

***

## SubscriptionManualDiscount Mutations

### Mutated by

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)
* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)
* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)
* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)
* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
