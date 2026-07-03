---
title: Refund - GraphQL Admin
description: >-
  The `Refund` object represents a financial record of money returned to a
  customer from an order.

  It provides a comprehensive view of all refunded amounts, transactions, and
  restocking instructions

  associated with returning products or correcting order issues.


  The `Refund` object provides information to:


  - Process customer returns and issue payments back to customers

  - Handle partial or full refunds for line items with optional inventory
  restocking

  - Refund shipping costs, duties, and additional fees

  - Issue store credit refunds as an alternative to original payment method
  returns

  - Track and reconcile all financial transactions related to refunds


  Each `Refund` object maintains detailed records of what was refunded, how much
  was refunded,

  which payment transactions were involved, and any inventory restocking that
  occurred. The refund

  can include multiple components such as product line items, shipping charges,
  taxes, duties, and

  additional fees, all calculated with proper currency handling for
  international orders.


  Refunds are always associated with an
  [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  and can optionally be linked to a
  [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  if the refund was initiated through the returns process. The refund tracks
  both the presentment currency

  (what the customer sees) and the shop currency for accurate financial
  reporting.


  > Note:

  > The existence of a `Refund` object doesn't guarantee that the money has been
  returned to the customer.

  > The actual financial processing happens through associated

  >
  [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  > objects, which can be in various states, such as pending, processing,
  success, or failure.

  > To determine if money has actually been refunded, check the

  >
  [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)

  > of the associated transactions.


  Learn more about

  [managing
  returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management),

  [refunding
  duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties),
  and

  [processing
  refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Refund

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

The `Refund` object provides information to:

* Process customer returns and issue payments back to customers
* Handle partial or full refunds for line items with optional inventory restocking
* Refund shipping costs, duties, and additional fees
* Issue store credit refunds as an alternative to original payment method returns
* Track and reconcile all financial transactions related to refunds

Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

***

**Note:** The existence of a \<code>Refund\</code> object doesn\&#39;t guarantee that the money has been returned to the customer. The actual financial processing happens through associated \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code>\</a> objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status">status\</a> of the associated transactions.

***

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

## Fields

* created​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the refund was created.

* duties

  [\[Refund​Duty!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty)

  A list of the refunded duties as part of this refund.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The optional note associated with the refund.

* order

  [Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  non-null

  The order associated with the refund.

* order​Adjustments

  [Order​Adjustment​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection)

  non-null

  The order adjustments that are attached with the refund.

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

* processed​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the refund was processed.

* refund​Line​Items

  [Refund​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection)

  non-null

  The `RefundLineItem` resources attached to the refund.

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

* refund​Shipping​Lines

  [Refund​Shipping​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection)

  non-null

  The `RefundShippingLine` resources attached to the refund.

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

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The return associated with the refund.

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member who created the refund.

* total​Refunded​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total amount across all transactions for the refund, in shop and presentment currencies.

* transactions

  [Order​Transaction​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection)

  non-null

  The transactions associated with the refund.

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the refund was updated.

* total​Refunded

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [Order.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds)
* [RefundAgreement.refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.refund)
* [RefundConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection#returns-nodes)
* [RefundEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundEdge#field-RefundEdge.fields.node)
* [Return.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.refunds)

***

## Queries

* [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)

  query

  Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID. A refund represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  Use the `refund` query to retrieve information associated with the following workflows:

  * Displaying refund details in order management interfaces
  * Building customer service tools for reviewing refund history
  * Creating reports on refunded amounts and reasons
  * Auditing refund transactions and payment gateway records
  * Tracking inventory impacts from refunded items

  A refund is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes [refund line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) that specify which items were refunded. Each refund processes through [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) that handle the actual money transfer back to the customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Refund to return.

  ***

***

## Refund Queries

### Queried by

* [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)

***

## Mutations

* [refund​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

  mutation

  Creates a refund for an order, allowing you to process returns and issue payments back to customers.

  Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

  The `refundCreate` mutation supports various refund scenarios:

  * Refunding line items with optional restocking
  * Refunding shipping costs
  * Refunding duties and import taxes
  * Refunding additional fees
  * Processing refunds through different payment methods
  * Issuing store credit refunds (when enabled)

  You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

  After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

  ***

  **Note:** The refunding behavior of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation is similar to the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund">\<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Return\</span>\</code>\</a> mutation. The key difference is that the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation lets you to specify restocking behavior for line items, whereas the \<code>\<span class="PreventFireFoxApplyingGapToWBR">return\<wbr/>Refund\</span>\</code> mutation focuses solely on handling the financial refund without any restocking input.

  ***

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput)

    required

    ### Arguments

    The input fields that are used in the mutation for creating a refund.

  ***

* [return​Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

  mutation

  Deprecated

  * return​Refund​Input

    [Return​Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput)

    required

    ### Arguments

    The input fields to refund a return.

  ***

***

## Refund Mutations

### Mutated by

* [refund​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Refund Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
