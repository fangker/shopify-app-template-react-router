---
title: AppUsagePricing - GraphQL Admin
description: >-
  Defines usage-based pricing terms for app subscriptions where merchants pay

  based on their actual consumption of app features or services. This pricing

  model provides flexibility for merchants who want to pay only for what they
  use

  rather than fixed monthly fees.


  For example, an email marketing app might charge variable pricing per email

  sent, with a monthly cap of variable pricing, allowing small merchants to pay

  minimal amounts while protecting larger merchants from excessive charges.


  Use the `AppUsagePricing` object to:

  - View consumption-based billing for variable app usage

  - See spending caps that protect merchants from unexpected charges


  The balance and capped amount fields provide apps with data about current
  usage

  costs and remaining budget within the billing period, which apps can present
  to

  merchants to promote transparency in variable pricing.


  For implementation guidance, see the [usage billing
  documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Usage​Pricing

object

Defines usage-based pricing terms for app subscriptions where merchants pay based on their actual consumption of app features or services. This pricing model provides flexibility for merchants who want to pay only for what they use rather than fixed monthly fees.

For example, an email marketing app might charge variable pricing per email sent, with a monthly cap of variable pricing, allowing small merchants to pay minimal amounts while protecting larger merchants from excessive charges.

Use the `AppUsagePricing` object to:

* View consumption-based billing for variable app usage
* See spending caps that protect merchants from unexpected charges

The balance and capped amount fields provide apps with data about current usage costs and remaining budget within the billing period, which apps can present to merchants to promote transparency in variable pricing.

For implementation guidance, see the [usage billing documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

## Fields

* balance​Used

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total usage records for interval.

* capped​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The capped amount prevents the merchant from being charged for any usage over that amount during a billing period. This prevents billing from exceeding a maximum threshold over the duration of the billing period. For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.

* interval

  [App​Pricing​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

  non-null

  The frequency with which the app usage records are billed.

* terms

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The terms and conditions for app usage pricing. Must be present in order to create usage charges. The terms are presented to the merchant when they approve an app's usage charges.

***

## Map

### Possible type in

* [App​Pricing​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails)
