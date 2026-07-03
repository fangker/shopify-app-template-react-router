---
title: OrderTransaction - GraphQL Admin
description: >-
  The `OrderTransaction` object represents a payment transaction that's
  associated with an order. An order

  transaction is a specific action or event that happens within the context of
  an order, such as a customer paying

  for a purchase or receiving a refund, or other payment-related activity.


  Use the `OrderTransaction` object to capture the complete lifecycle of a
  payment, from initial

  authorization to final settlement, including refunds and currency exchanges.
  Common use cases for using the

  `OrderTransaction` object include:


  - Processing new payments for orders

  - Managing payment authorizations and captures

  - Processing refunds for returned items

  - Tracking payment status and errors

  - Managing multi-currency transactions

  - Handling payment gateway integrations


  Each `OrderTransaction` object has a
  [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)

  that defines the type of transaction and a
  [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)

  that indicates the current state of the transaction. The object stores
  detailed information about payment

  methods, gateway processing, and settlement details.


  Learn more about [payment
  processing](https://help.shopify.com/manual/payments)

  and [payment gateway
  integrations](https://www.shopify.com/ca/payment-gateways).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Transaction

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `OrderTransaction` object represents a payment transaction that's associated with an order. An order transaction is a specific action or event that happens within the context of an order, such as a customer paying for a purchase or receiving a refund, or other payment-related activity.

Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial authorization to final settlement, including refunds and currency exchanges. Common use cases for using the `OrderTransaction` object include:

* Processing new payments for orders
* Managing payment authorizations and captures
* Processing refunds for returned items
* Tracking payment status and errors
* Managing multi-currency transactions
* Handling payment gateway integrations

Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind) that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus) that indicates the current state of the transaction. The object stores detailed information about payment methods, gateway processing, and settlement details.

Learn more about [payment processing](https://help.shopify.com/manual/payments) and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

## Fields

* account​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The masked account number associated with the payment method.

* amount​Rounding​Set

  [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  The rounding adjustment applied on the cash amount in shop and presentment currencies.

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount and currency of the transaction in shop and presentment currencies.

* authorization​Expires​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time when the authorization expires. This field is available only to stores on a Shopify Plus plan.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  Date and time when the transaction was created.

* currency​Exchange​Adjustment

  [Currency​Exchange​Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyExchangeAdjustment)

  An adjustment on the transaction showing the amount lost or gained due to fluctuations in the currency exchange rate.

* device

  [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  The Shopify Point of Sale device used to process the transaction.

* error​Code

  [Order​Transaction​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionErrorCode)

  A standardized error code, independent of the payment provider.

* fees

  [\[Transaction​Fee!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee)

  non-null

  The transaction fees charged on the order transaction. Only present for Shopify Payments transactions.

* formatted​Gateway

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The human-readable payment gateway name used to process the transaction.

* gateway

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The payment gateway used to process the transaction.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* kind

  [Order​Transaction​Kind!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)

  non-null

  The kind of transaction.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The physical location where the transaction was processed.

* manually​Capturable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the transaction can be manually captured.

* manual​Payment​Gateway

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the transaction is processed by manual payment gateway.

* maximum​Refundable​V2

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  Specifies the available amount with currency to refund on the gateway. This value is only available for transactions of type `SuggestedRefund`.

* multi​Capturable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the transaction can be captured multiple times.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The associated order.

* parent​Transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The associated parent transaction, for example the authorization of a capture.

* payment​Details

  [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

  The payment details for the transaction.

* payment​Icon

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The payment icon to display for the transaction.

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    Deprecated

    ### Arguments

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    DeprecatedDefault:1

  ***

* payment​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The payment ID associated with the transaction.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Date and time when the transaction was processed.

* receipt​Json

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The transaction receipt that the payment gateway attaches to the transaction.

  ***

  **Note:** \<strong>\</strong> This field is \<strong>gateway-specific\</strong> and \<strong>not a stable contract\</strong>. Its structure and contents can vary by payment gateway and may change without notice. Apps \<strong>shouldn\&#39;t parse or rely on this field for business logic\</strong>; prefer typed fields on \<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code> and related objects.

  ***

* settlement​Currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The settlement currency.

* settlement​Currency​Rate

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The rate used when converting the transaction amount to settlement currency.

* shopify​Payments​Set

  [Shopify​Payments​Transaction​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet)

  Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan.

* status

  [Order​Transaction​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)

  non-null

  The status of this transaction.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the transaction is a test transaction.

* total​Unsettled​Set

  [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  The amount of the original authorization that remains unsettled, in shop and presentment currencies. During a pending capture, this reflects the full outstanding balance including the pending amount. When no capture is pending, this equals the capturable amount. Only available when an amount is capturable or manually marked as paid.

* user

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  Staff member who was logged into the Shopify POS device when the transaction was processed.

### Deprecated fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* amount​V2

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

* authorization​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* maximum​Refundable

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

* payment​Method

  [Payment​Methods](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentMethods)

  Deprecated

* total​Unsettled

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

* total​Unsettled​V2

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  Deprecated

***

## Map

### Fields and connections with this object

* [CashTrackingSession.cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions)
* [CashTransactionActivity.orderTransaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTransactionActivity#field-CashTransactionActivity.fields.orderTransaction)
* [Order.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.transactions)
* [OrderPaymentStatus.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus#field-OrderPaymentStatus.fields.transactions)
* [OrderTransaction.parentTransaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.parentTransaction)
* [OrderTransactionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-nodes)
* [OrderTransactionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransactionEdge#field-OrderTransactionEdge.fields.node)
* [Refund.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.transactions)
* [Return.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.transactions)
* [SubscriptionBillingAttempt.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.transactions)
* [SuggestedOrderTransaction.parentTransaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction#field-SuggestedOrderTransaction.fields.parentTransaction)

### Possible type in

* [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

***

## Mutations

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)

  mutation

  Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

  The `orderCapture` mutation can be used in the following scenarios:

  * To capture the full amount of an authorized transaction
  * To capture a partial payment by specifying an amount less than the total order amount
  * To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

  ***

  **Note:** Multi-capture functionality is only available to stores on a \<a href="https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan">Shopify Plus plan\</a>. For multi-currency orders, the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency">\<code>currency\</code>\</a> field is required and should match the presentment currency from the order.

  ***

  After capturing a payment, you can:

  * View the transaction details including status, amount, and processing information.
  * Track the captured amount in both shop and presentment currencies.
  * Monitor the transaction's settlement status.

  Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

  * input

    [Order​Capture​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput)

    required

    ### Arguments

    The input for the mutation.

  ***

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

  mutation

  Trigger the voiding of an uncaptured authorization transaction.

  * parent​Transaction​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An uncaptured authorization transaction.

  ***

***

## OrderTransaction Mutations

### Mutated by

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)
* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## OrderTransaction Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
