---
title: PaymentTerms - GraphQL Admin
description: >-
  Payment conditions for an

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or
  [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder),

  including when payment is due and how it's scheduled. Payment terms are
  created

  from templates that specify net terms (payment due after a certain number of

  days) or fixed schedules with specific due dates. You can optionally provide

  custom payment schedules using
  [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).


  Each payment term contains one or more
  [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule),

  which you can access through the
  [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

  field. Payment schedules contain detailed information for each payment
  installment.


  Learn more about [payment
  terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Terms

object

Requires `read_payment_terms` access scope.

Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).

Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.

Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The draft order associated with the payment terms.

* due

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether payment terms have a payment schedule that's due.

* due​In​Days

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Duration of payment terms in days based on the payment terms template used to create the payment terms.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the payment terms.

* overdue

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the payment terms have overdue payment schedules.

* payment​Schedules

  [Payment​Schedule​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection)

  non-null

  List of schedules for the payment terms.

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

* payment​Terms​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the payment terms template used to create the payment terms.

* payment​Terms​Type

  [Payment​Terms​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType)

  non-null

  The payment terms template type used to create the payment terms.

* translated​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The payment terms name, translated into the shop admin's preferred language.

***

## Map

### Fields with this object

* [DraftOrder.paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.paymentTerms)
* [Order.paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentTerms)
* [PaymentSchedule.paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule#field-PaymentSchedule.fields.paymentTerms)

***

## Mutations

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

  mutation

  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * payment​Terms​Attributes

    [Payment​Terms​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

    required

    ### Arguments

    The attributes used to create the payment terms.

  * reference​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Specifies the reference orderId to add the payment terms for.

  ***

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

  mutation

  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

    required

    ### Arguments

    The input fields used to update the payment terms.

  ***

***

## PaymentTerms Mutations

### Mutated by

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)
* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PaymentTerms Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
