---
title: ShopifyPaymentsPayoutSchedule - GraphQL Admin
description: The payment schedule for a payments account.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Payout​Schedule

object

Requires `read_shopify_payments` access scope, `read_shopify_payments_accounts` access scope or `read_shopify_payments_payouts` access scope. Also: The user must have access to `shopify_payments`, `shopify_payments_accounts`, or `shopify_payments_payouts` scopes or the `shopify_payments_transfers`/`view_payouts` user permission.

The payment schedule for a payments account.

## Fields

* interval

  [Shopify​Payments​Payout​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutInterval)

  non-null

  The interval at which payouts are sent to the connected bank account.

* monthly​Anchor

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The day of the month funds will be paid out.

  The value can be any day of the month from the 1st to the 31st. If the payment interval is set to monthly, this value will be used. Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.

* weekly​Anchor

  [Day​Of​The​Week](https://shopify.dev/docs/api/admin-graphql/latest/enums/DayOfTheWeek)

  The day of the week funds will be paid out.

  The value can be any weekday from Monday to Friday. If the payment interval is set to weekly, this value will be used.

***

## Map

### Fields with this object

* [ShopifyPaymentsAccount.payoutSchedule](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payoutSchedule)
