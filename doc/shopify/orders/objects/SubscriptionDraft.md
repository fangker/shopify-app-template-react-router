---
title: SubscriptionDraft - GraphQL Admin
description: >-
  The `SubscriptionDraft` object represents a draft version of a

  [subscription
  contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  before it's committed. It serves as a staging area for making changes to an
  existing subscription or creating

  a new one. The draft allows you to preview and modify various aspects of a
  subscription before applying the changes.


  Use the `SubscriptionDraft` object to:


  - Add, remove, or modify subscription lines and their quantities

  - Manage discounts (add, remove, or update manual and code-based discounts)

  - Configure delivery options and shipping methods

  - Set up billing and delivery policies

  - Manage customer payment methods

  - Add custom attributes and notes to generated orders

  - Configure billing cycles and next billing dates

  - Preview the projected state of the subscription


  Each `SubscriptionDraft` object maintains a projected state that shows how the
  subscription will look after the changes

  are committed. This allows you to preview the impact of your modifications
  before applying them. The draft can be

  associated with an existing subscription contract (for modifications) or used
  to create a new subscription.


  The draft remains in a draft state until it's committed, at which point the
  changes are applied to the subscription

  contract and the draft is no longer accessible.


  Learn more about

  [how subscription contracts
  work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)

  and how to
  [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract),

  [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract),
  and

  [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts)
  subscription contracts.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Draft

object

Requires `read_own_subscription_contracts` access scope.

The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

Use the `SubscriptionDraft` object to:

* Add, remove, or modify subscription lines and their quantities
* Manage discounts (add, remove, or update manual and code-based discounts)
* Configure delivery options and shipping methods
* Set up billing and delivery policies
* Manage customer payment methods
* Add custom attributes and notes to generated orders
* Configure billing cycles and next billing dates
* Preview the projected state of the subscription

Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

## Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The billing cycle that the subscription contract will be associated with.

* billing​Policy

  [Subscription​Billing​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)

  non-null

  The billing policy for the subscription contract.

* concatenated​Billing​Cycles

  [Subscription​Billing​Cycle​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

  non-null

  The billing cycles of the contracts that will be concatenated to the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency used for the subscription contract.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of the custom attributes to be added to the generated orders.

* customer

  [Customer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  non-null

  The customer to whom the subscription contract belongs.

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method used for the subscription contract.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to show the customer's revoked payment method.

  ***

* delivery​Method

  [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

  The delivery method for each billing of the subscription contract.

* delivery​Options

  [Subscription​Delivery​Option​Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOptionResult)

  The available delivery options for a given delivery address. Returns `null` for pending requests.

* delivery​Policy

  [Subscription​Delivery​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

  non-null

  The delivery policy for the subscription contract.

* delivery​Price

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The delivery price for each billing the subscription contract.

* discounts

  [Subscription​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

  non-null

  The list of subscription discounts which will be associated with the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* discounts​Added

  [Subscription​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

  non-null

  The list of subscription discounts to be added to the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* discounts​Removed

  [Subscription​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

  non-null

  The list of subscription discounts to be removed from the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* discounts​Updated

  [Subscription​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

  non-null

  The list of subscription discounts to be updated on the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines which will be associated with the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines​Added

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines to be added to the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines​Removed

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines to be removed from the subscription contract.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* next​Billing​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The next billing date for the subscription contract.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note field that will be applied to the generated orders.

* original​Contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The original subscription contract.

* status

  [Subscription​Contract​Subscription​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

  The current status of the subscription contract.

* shipping​Options

  [Subscription​Shipping​Option​Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionShippingOptionResult)

  Deprecated

***

## Map

No referencing types

***

## Queries

* [subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionDraft)

  query

  Returns a Subscription Draft resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Draft to return.

  ***

***

## SubscriptionDraft Queries

### Queried by

* [subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionDraft)

***

## Mutations

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

  mutation

  Concatenates a contract to a Subscription Draft.

  * concatenated​Billing​Cycle​Contracts

    [\[Subscription​Billing​Cycle​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Contract draft to update.

  ***

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

  mutation

  Edit the contents of a subscription contract for the specified billing cycle.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    Input object for selecting and using billing cycles.

  ***

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

  mutation

  Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscription details before committing them to create the actual [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  The mutation requires [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, billing details, and contract configuration including the [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy). You can specify the [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod), the [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and subscription intervals.

  After you create the draft, you can either modify it with the [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate) mutation or finalize and create the active subscription contract with [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit).

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract).

  * input

    [Subscription​Contract​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

* [subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)

  mutation

  Creates a draft of an existing [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The draft captures the current state of the contract and allows incremental modifications through draft mutations such as [`subscriptionDraftLineAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd), [`subscriptionDraftDiscountAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd), and [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate).

  Changes remain in draft state and don't affect the live contract until committed. After you've made all necessary changes to the draft, commit it using [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) to apply the updates to the original contract.

  Learn more about [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract#step-2-create-a-draft-of-an-existing-contract).

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Contract to update.

  ***

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

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

  mutation

  Removes a subscription discount from a subscription draft.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription draft discount to remove.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the subscription contract draft to remove a subscription discount from.

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

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

  mutation

  Updates a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Draft to update.

  * input

    [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

    required

    The properties of the new Subscription Contract.

  ***

***

## SubscriptionDraft Mutations

### Mutated by

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)
* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)
* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)
* [subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)
* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)
* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)
* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)
* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)
* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)
* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)
* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)
* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)
* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## SubscriptionDraft Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
