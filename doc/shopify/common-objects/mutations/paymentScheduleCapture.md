---
title: paymentScheduleCapture - GraphQL Admin
description: >-
  Captures payment for a due
  [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule)

  using the vaulted payment method associated with the order.


  The mutation resolves the order and mandate from the given payment schedule,
  then initiates

  an asynchronous payment capture. Use the returned `jobResult` to poll for the
  status of the

  payment capture.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# payment​Schedule​Capture

mutation

Requires `write_payment_mandate` access scope. Also: The user must have `pay_orders_by_vaulted_card` permission.

Captures payment for a due [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule) using the vaulted payment method associated with the order.

The mutation resolves the order and mandate from the given payment schedule, then initiates an asynchronous payment capture. Use the returned `jobResult` to poll for the status of the payment capture.

## Arguments

* payment​Schedule​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the payment schedule to capture payment for.

***

## Payment​Schedule​Capture​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The async job used for charging the payment.

* job​Result

  [Order​Create​Mandate​Payment​Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentJobResult)

  The job result for tracking the status of the payment capture.

* payment​Reference​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique ID for the created payment.

* user​Errors

  [\[Payment​Schedule​Capture​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleCaptureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### paymentScheduleCapture reference
