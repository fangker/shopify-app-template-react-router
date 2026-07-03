---
title: SubscriptionLine - GraphQL Admin
description: >-
  A product line item within a
  [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  Each line represents a specific product variant that the customer subscribes
  to,

  including its quantity, pricing, and whether shipping is required.


  The line maintains references to the
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant),
  [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan),
  and custom
  [`Attribute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  objects. It tracks the current price and any scheduled price changes through
  its
  [`pricingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy).

  You can modify lines through
  [`SubscriptionDraft`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  objects without affecting the original contract until you commit changes.


  Learn more about [subscription
  contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)
  and [selling
  plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Line

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A product line item within a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). Each line represents a specific product variant that the customer subscribes to, including its quantity, pricing, and whether shipping is required.

The line maintains references to the [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant), [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan), and custom [`Attribute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute) objects. It tracks the current price and any scheduled price changes through its [`pricingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy). You can modify lines through [`SubscriptionDraft`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft) objects without affecting the original contract until you commit changes.

Learn more about [subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

## Fields

* concatenated​Origin​Contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The origin contract of the line if it was concatenated from another contract.

* current​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The price per unit for the subscription line in the contract's currency.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  List of custom attributes associated to the line item.

* discount​Allocations

  [\[Subscription​Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation)

  non-null

  Discount allocations.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID.

* line​Discounted​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Total line price including all discounts.

* pricing​Policy

  [Subscription​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy)

  Describe the price changes of the line over time.

* product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The product ID associated with the subscription line.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the unit selected for the subscription line.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether physical shipping is required for the variant.

* selling​Plan​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The selling plan ID associated to the line.

  Indicates which selling plan was used to create this contract line initially. The selling plan ID is also used to find the associated delivery profile.

  The subscription contract, subscription line, or selling plan might have changed. As a result, the selling plan's attributes might not match the information on the contract.

* selling​Plan​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The selling plan name associated to the line. This name describes the order line items created from this subscription line for both merchants and customers.

  The value can be different from the selling plan's name, because both the selling plan's name and the subscription line's selling\_plan\_name attribute can be updated independently.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Variant SKU number of the item associated with the subscription line.

* taxable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the variant is taxable.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Product title of the item associated with the subscription line.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The product variant ID associated with the subscription line.

* variant​Image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated with the line item's variant or product.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Product variant title of the item associated with the subscription line.

***

## Map

### Fields and connections with this object

* [SubscriptionBillingCycleEditedContract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.lines)
* [SubscriptionContract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)
* [SubscriptionContractBase.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-lines)
* [SubscriptionDiscountEntitledLines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-SubscriptionDiscountEntitledLines.fields.lines)
* [SubscriptionDraft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.lines)
* [SubscriptionDraft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesAdded)
* [SubscriptionDraft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesRemoved)
* [SubscriptionLineConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-nodes)
* [SubscriptionLineEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge#field-SubscriptionLineEdge.fields.node)

***

## Mutations

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

  mutation

  Allows for the easy change of a Product in a Contract or a Product price change.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * input

    [Subscription​Contract​Product​Change​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput)

    required

    The properties of the Product changes.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the subscription contract.

  ***

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

  mutation

  Adds a subscription line to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to add a subscription line to.

  * input

    [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

    required

    The properties of the new Subscription Line.

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

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

  mutation

  Updates a subscription line on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update a subscription line from.

  * input

    [Subscription​Line​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput)

    required

    The properties of the new Subscription Line.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  ***

***

## SubscriptionLine Mutations

### Mutated by

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)
* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)
* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)
