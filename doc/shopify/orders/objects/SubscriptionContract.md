---
title: SubscriptionContract - GraphQL Admin
description: >-
  A subscription contract that defines recurring purchases for a customer. Each

  contract specifies what products to deliver, when to bill and ship them, and
  at what price.


  The contract includes
  [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)
  and
  [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

  that control the frequency of charges and fulfillments.
  [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  items define the products, quantities, and pricing for each recurring

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).
  The

  contract tracks
  [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  records, payment status, and generated orders throughout its lifecycle.

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)
  instances

  manage contracts through various status transitions including active, paused,

  failed, cancelled, or expired states.


  Learn more about [building subscription
  contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract)

  and [updating subscription
  contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Contract

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The subscription app that the subscription contract is registered to.

* app​Admin​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL of the subscription contract page on the subscription app.

* billing​Attempts

  [Subscription​Billing​Attempt​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

  non-null

  The list of billing attempts associated with the subscription contract.

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

* billing​Policy

  [Subscription​Billing​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)

  non-null

  The billing policy associated with the subscription contract.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was created.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency that's used for the subscription contract.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of the custom attributes to be added to the generated orders.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom the subscription contract belongs.

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method that's used for the subscription contract.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to show the customer's revoked payment method.

  ***

* delivery​Method

  [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

  The delivery method for each billing of the subscription contract.

* delivery​Policy

  [Subscription​Delivery​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

  non-null

  The delivery policy associated with the subscription contract.

* delivery​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The delivery price for each billing of the subscription contract.

* discounts

  [Subscription​Manual​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

  non-null

  The list of subscription discounts associated with the subscription contract.

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

* last​Billing​Attempt​Error​Type

  [Subscription​Contract​Last​Billing​Error​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastBillingErrorType)

  The last billing error type of the contract.

* last​Payment​Status

  [Subscription​Contract​Last​Payment​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastPaymentStatus)

  The current status of the last payment.

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines associated with the subscription contract.

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

* lines​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of lines associated with the subscription contract.

* next​Billing​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The next billing date for the subscription contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note field that will be applied to the generated orders.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

  non-null

  A list of the subscription contract's orders.

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

* origin​Order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order from which this contract originated.

* revision​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The revision id of the contract.

* status

  [Subscription​Contract​Subscription​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

  non-null

  The current status of the subscription contract.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was updated.

* line​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [Customer.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.subscriptionContracts)
* [CustomerPaymentMethod.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.subscriptionContracts)
* [LineItem.contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.contract)
* [SubscriptionBillingAttempt.subscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.subscriptionContract)
* [SubscriptionBillingCycle.sourceContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.sourceContract)
* [SubscriptionContractConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#returns-nodes)
* [SubscriptionContractEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractEdge#field-SubscriptionContractEdge.fields.node)
* [SubscriptionDraft.originalContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.originalContract)
* [SubscriptionLine.concatenatedOriginContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.concatenatedOriginContract)

***

## Queries

* [subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract)

  query

  Retrieves a [`SubscriptionContract`](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) by ID.

  The contract tracks the subscription's lifecycle through various [statuses](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract#returns-SubscriptionContract.fields.status), and links to related billing attempts, generated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects, and the customer's [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract to return.

  ***

* [subscription​Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts)

  query

  Returns a [`SubscriptionContractConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractConnection) containing [subscription contracts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract). Subscription contracts are agreements between [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and merchants for recurring purchases with defined billing and delivery schedules.

  Filter results with the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts#arguments-query) argument. You can paginate results using standard [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * customer\_id

        id

      * id

        id

      * last\_billing\_attempt\_error\_type

        string

      - Filter subscription contracts by the customer [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Customer#field-Customer.fields.id) field.

      - Example:

        * `customer_id:123`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * * product\_id

        id

      * product\_variant\_id

        id

      * status

        string

      - Filter subscription contracts by the [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.id) of any product on the contract's lines.

      - Example:

        * `product_id:123`

        Filter subscription contracts by the [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.id) of any product variant on the contract's lines.

      - Example:
        * `product_variant_id:123`

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Contracts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## SubscriptionContract Queries

### Queried by

* [subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract)
* [subscription​Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts)

***

## Mutations

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

  mutation

  Creates a Subscription Contract.

  * input

    [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

  mutation

  Expires a Subscription Contract.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)

  mutation

  Fails a Subscription Contract.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Subscription Contract.

  ***

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

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

  mutation

  Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to set the next billing date for.

  * date

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The next billing date.

  ***

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

  mutation

  Commits the updates of a Subscription Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

***

## SubscriptionContract Mutations

### Mutated by

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)
* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)
* [subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)
* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)
* [subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)
* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)
* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)
* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)
* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Subscription​Contract​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase)

    interface

***

## SubscriptionContract Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Subscription​Contract​Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase)
