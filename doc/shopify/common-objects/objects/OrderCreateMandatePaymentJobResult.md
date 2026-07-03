---
title: OrderCreateMandatePaymentJobResult - GraphQL Admin
description: A job result for tracking the status of a mandate payment request on an order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentJobResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentJobResult.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Order​Create​Mandate​Payment​Job​Result

object

Requires `read_payment_mandate` access scope. Also: The user requires `pay_orders_by_vaulted_card` permission.

A job result for tracking the status of a mandate payment request on an order.

## Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  Returns any errors that occurred during the mandate payment.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the mandate payment request.

* status

  [Order​Create​Mandate​Payment​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateMandatePaymentStatus)

  non-null

  The current status of the mandate payment request.

***

## Map

No referencing types

***

## Mutations

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

  mutation

  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

  The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

  Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    ### Arguments

    The payment amount to collect.

  * auto​Capture

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the payment should be authorized or captured. If `false`, then the authorization of the payment is triggered.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the order to collect the balance for.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique key to identify the payment request.

  * mandate​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The mandate ID used for payment.

  * payment​Schedule​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the payment schedule to collect the balance for.

  ***

* [payment​Schedule​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture)

  mutation

  Captures payment for a due [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule) using the vaulted payment method associated with the order.

  The mutation resolves the order and mandate from the given payment schedule, then initiates an asynchronous payment capture. Use the returned `jobResult` to poll for the status of the payment capture.

  * payment​Schedule​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the payment schedule to capture payment for.

  ***

***

## OrderCreateMandatePaymentJobResult Mutations

### Mutated by

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)
* [payment​Schedule​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture)

***

## Interfaces

* * [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## OrderCreateMandatePaymentJobResult Implements

### Implements

* [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
