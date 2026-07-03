---
title: ShopFeatures - GraphQL Admin
description: >-
  Represents the feature set available to the shop.

  Most fields specify whether a feature is enabled for a shop, and some fields
  return information

  related to specific features.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopFeatures'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopFeatures.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Features

object

Represents the feature set available to the shop. Most fields specify whether a feature is enabled for a shop, and some fields return information related to specific features.

## Fields

* avalara​Avatax

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has access to Avalara AvaTax.

* branding

  [Shop​Branding!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopBranding)

  non-null

  The branding of the shop, which influences its look and feel in the Shopify admin.

* bundles

  [Bundles​Feature!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BundlesFeature)

  non-null

  Represents the Bundles feature configuration for the shop.

* buyer​Experience​Deposit​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the buyer experience deposit configuration is enabled.

* captcha

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop's online store can have CAPTCHA protection.

* cart​Transform

  [Cart​Transform​Feature!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformFeature)

  non-null

  Represents the cart transform feature configuration for the shop.

* direct​Connection​Catalog​Assignment​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the direct connection catalog assignment is enabled.

* dynamic​Remarketing

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has access to the Google Analytics dynamic remarketing feature.

* eligible​For​Subscription​Migration

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop can be migrated to use Shopify subscriptions.

* eligible​For​Subscriptions

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop is configured properly to sell subscriptions.

* gift​Cards

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop can create gift cards.

* harmonized​System​Code

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop displays Harmonized System codes on products. This is used for customs when shipping internationally.

* legacy​Subscription​Gateway​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has enabled a legacy subscription gateway to handle older subscriptions.

* live​View

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial or don't have a storefront.

* market​Driven​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether market-driven shipping is enabled for the shop.

* paypal​Express​Subscription​Gateway​Status

  [Paypal​Express​Subscriptions​Gateway​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaypalExpressSubscriptionsGatewayStatus)

  non-null

  Whether a shop is configured to sell subscriptions with PayPal Express.

* reports

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has access to all reporting features.

* sells​Subscriptions

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has ever had subscription products.

* show​Metrics

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful.

* storefront

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop has an online store.

* sub​Country​Markets​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop is eligible for Sub Country Markets.

* unified​Markets

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop is eligible for Unified Markets.

* using​Shopify​Balance

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a shop is using Shopify Balance.

### Deprecated fields

* captcha​External​Domains

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* delivery​Profiles

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* international​Domains

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* international​Price​Overrides

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* international​Price​Rules

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* onboarding​Visual

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* shopify​Plus

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

***

## Map

### Fields with this object

* [Shop.features](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.features)
