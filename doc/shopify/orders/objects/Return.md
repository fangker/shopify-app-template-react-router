---
title: Return - GraphQL Admin
description: >-
  The `Return` object represents the intent of a buyer to ship one or more items
  from an order back to a merchant

  or a third-party fulfillment location. A return is associated with an

  [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  and can include multiple return [line
  items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem).

  Each return has a
  [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses),

  which indicates the state of the return.


  Use the `Return` object to capture the financial, logistical,

  and business intent of a return. For example, you can identify eligible items
  for a return and issue customers

  a refund for returned items on behalf of the merchant.


  Learn more about providing a

  [return management
  workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)

  for merchants. You can also manage
  [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges),

  [reverse fulfillment
  orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders),

  and [reverse
  deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries)

  on behalf of merchants.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Return'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Return.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Return

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

## Fields

* closed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the return was closed.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the return was created.

* decline

  [Return​Decline](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnDecline)

  Additional information about the declined return.

* exchange​Line​Items

  [Exchange​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection)

  non-null

  The exchange line items attached to the return.

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

  * include​Removed​Items

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Include exchange line items that have been removed from the order by an order edit, return, etc. Items that have been removed have a zero ([LineItem.currentQuantity](https://shopify.dev/docs/api/admin-graphql/unstable/objects/LineItem#field-lineitem-currentquantity)).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * processing​Status

    [Return​Processing​Status​Filter​Input](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnProcessingStatusFilterInput)

    Filter exchange line items by processing status.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the return.

* order

  [Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  non-null

  The order that the return belongs to.

* refunds

  [Refund​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection)

  non-null

  The list of refunds associated with the return.

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

* request​Approved​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the return was approved.

* return​Line​Items

  [Return​Line​Item​Type​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnLineItemTypeConnection)

  non-null

  The return line items attached to the return.

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

  * processing​Status

    [Return​Processing​Status​Filter​Input](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnProcessingStatusFilterInput)

    Filter return line items by processing status.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* return​Shipping​Fees

  [\[Return​Shipping​Fee!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnShippingFee)

  non-null

  The return shipping fees for the return.

* reverse​Fulfillment​Orders

  [Reverse​Fulfillment​Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection)

  non-null

  The list of reverse fulfillment orders for the return.

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

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member that created the return.

* status

  [Return​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnStatus)

  non-null

  The status of the return.

* suggested​Financial​Outcome

  [Suggested​Return​Financial​Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome)

  A suggested financial outcome for the return.

  * exchange​Line​Items

    [\[Suggested​Outcome​Exchange​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SuggestedOutcomeExchangeLineItemInput)

    required

    ### Arguments

    The exchange line items from the return to include in the outcome.

  * refund​Duties

    [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

    The duties from the associated order to include as a refund.

  * refund​Method​Allocation

    [Refund​Method​Allocation](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundMethodAllocation)

    Default:ORIGINAL\_PAYMENT\_METHODS

    Specifies which refund methods to allocate the suggested refund amount to.

  * refund​Shipping

    [Refund​Shipping​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput)

    The shipping amount from the associated order to include as a refund.

  * return​Line​Items

    [\[Suggested​Outcome​Return​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SuggestedOutcomeReturnLineItemInput)

    required

    The line items from the return to include in the outcome.

  * tip​Line​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ID of the tip line item.

  ***

* total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The sum of all return line item quantities for the return.

* transactions

  [Order​Transaction​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection)

  non-null

  The order transactions created from the return.

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

* suggested​Refund

  [Suggested​Return​Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund)

  Deprecated

  * refund​Duties

    [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

    ### Arguments

    The duties from to associated order to include in the refund.

  * refund​Shipping

    [Refund​Shipping​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput)

    The shipping amount from the associated order to include in the refund.

  * return​Refund​Line​Items

    [\[Return​Refund​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundLineItemInput)

    required

    The line items from the return to include in the refund.

  ***

***

## Map

### Fields and connections with this object

* [Order.returns](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.returns)
* [Refund.return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.return)
* [ReturnAgreement.return](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.return)
* [ReturnConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection#returns-nodes)
* [ReturnEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnEdge#field-ReturnEdge.fields.node)

***

## Queries

* [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)

  query

  Retrieves a return by its ID. A return represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location.

  Use the `return` query to retrieve information associated with the following workflows:

  * [Managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
  * [Processing exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges)
  * [Tracking reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders)

  A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) of the return to retrieve.

  ***

***

## Return Queries

### Queried by

* [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)

***

## Mutations

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)

  mutation

  Removes return and/or exchange lines from a return.

  * exchange​Line​Items

    [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

    ### Arguments

    The exchange line items to remove from the return.

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    The return line items to remove from the return.

  ***

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)

  mutation

  Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

  * input

    [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

    required

    ### Arguments

    The input fields to approve a return.

  ***

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)

  mutation

  Cancels a return and restores the items back to being fulfilled. Canceling a return is only available before any work has been done on the return (such as an inspection or refund).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to cancel.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  ***

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)

  mutation

  Indicates a return is complete, either when a refund has been made and items restocked, or simply when it has been marked as returned in the system.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to close.

  ***

* [return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)

  mutation

  Creates a return from an existing order that has at least one fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that hasn't yet been refunded. If you create a return on an archived order, then the order is automatically unarchived.

  Use the `returnCreate` mutation when your workflow involves [approving](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) or [declining](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) requested returns outside of the Shopify platform.

  The `returnCreate` mutation performs the following actions:

  * Creates a return in the `OPEN` state, and assumes that the return request from the customer has already been approved
  * Creates a [reverse fulfillment order](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and enables you to create a [reverse delivery](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) for the reverse fulfillment order

  After you've created a return, use the [`return`](https://shopify.dev/docs/api/admin-graphql/latest/queries/return) query to retrieve the return by its ID. Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants.

  * return​Input

    [Return​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput)

    required

    ### Arguments

    Specifies the input fields for a return.

  ***

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)

  mutation

  Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

  * input

    [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

    required

    ### Arguments

    The input fields for declining a customer's return request.

  ***

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)

  mutation

  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation confirms the quantities for [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) and [`ExchangeLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem) objects previously created on the [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return).

  For returned items, you specify how to handle them through dispositions such as restocking or disposal. The mutation creates [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects for exchange items and records all transactions in the merchant's financial reports. You can optionally issue refunds through financial transfers, apply refund duties, and refund shipping costs.

  Learn more about [processing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Process​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput)

    required

    ### Arguments

    Specifies the input fields for processing a return.

  ***

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)

  mutation

  Reopens a closed return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to reopen.

  ***

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

  mutation

  Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

  Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

  For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput)

    required

    ### Arguments

    The input fields for requesting a return.

  ***

* [return​Line​Item​Remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnLineItemRemoveFromReturn)

  mutation

  Deprecated

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    required

    The return line items to remove from the return.

  ***

***

## Return Mutations

### Mutated by

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)
* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)
* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)
* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)
* [return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)
* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)
* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)
* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)
* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Return Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
