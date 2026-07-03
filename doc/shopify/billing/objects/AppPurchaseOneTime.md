---
title: AppPurchaseOneTime - GraphQL Admin
description: >-
  Represents a one-time purchase of app services or features by a merchant,

  tracking the transaction details and status throughout the billing lifecycle.

  This object captures essential information about non-recurring charges,

  including price and merchant acceptance status.


  One-time purchases are particularly valuable for apps offering premium
  features,

  professional services, or digital products that don't require ongoing

  subscriptions. For instance, a photography app might sell premium filters as

  one-time purchases, while a marketing app could charge for individual campaign

  setups or advanced analytics reports.


  Use the `AppPurchaseOneTime` object to:

  - Track the status of individual feature purchases and service charges

  - Track payment status for premium content or digital products

  - Access purchase details to enable or disable features based on payment
  status


  The purchase status indicates whether the charge is pending merchant approval,

  has been accepted and processed, or was declined. This status tracking is

  crucial for apps that need to conditionally enable features based on
  successful

  payment completion.


  Purchase records include creation timestamps, pricing details, and test flags
  to

  distinguish between production charges and development testing. The test flag

  ensures that development and staging environments don't generate actual
  charges

  while maintaining realistic billing flow testing.


  For detailed implementation patterns and billing best practices, see the

  [one-time-charges

  page](https://shopify.dev/docs/apps/launch/billing/one-time-charges).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Purchase​One​Time

object

Requires The staff member must have permission to manage app billing or approve app charges if authenticated with an online access token as described in <https://shopify.dev/apps/auth/oauth/access-modes>.

Represents a one-time purchase of app services or features by a merchant, tracking the transaction details and status throughout the billing lifecycle. This object captures essential information about non-recurring charges, including price and merchant acceptance status.

One-time purchases are particularly valuable for apps offering premium features, professional services, or digital products that don't require ongoing subscriptions. For instance, a photography app might sell premium filters as one-time purchases, while a marketing app could charge for individual campaign setups or advanced analytics reports.

Use the `AppPurchaseOneTime` object to:

* Track the status of individual feature purchases and service charges
* Track payment status for premium content or digital products
* Access purchase details to enable or disable features based on payment status

The purchase status indicates whether the charge is pending merchant approval, has been accepted and processed, or was declined. This status tracking is crucial for apps that need to conditionally enable features based on successful payment completion.

Purchase records include creation timestamps, pricing details, and test flags to distinguish between production charges and development testing. The test flag ensures that development and staging environments don't generate actual charges while maintaining realistic billing flow testing.

For detailed implementation patterns and billing best practices, see the [one-time-charges page](https://shopify.dev/docs/apps/launch/billing/one-time-charges).

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app purchase occurred.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the app purchase.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount to be charged to the store for the app purchase.

* status

  [App​Purchase​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus)

  non-null

  The status of the app purchase.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app purchase is a test transaction.

***

## Map

### Fields and connections with this object

* [AppInstallation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases)
* [AppPurchaseOneTimeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-nodes)
* [AppPurchaseOneTimeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge#field-AppPurchaseOneTimeEdge.fields.node)

***

## Mutations

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

  mutation

  Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual features, premium content, or services on a per-use basis rather than subscription models.

  For example, a design app might charge merchants once for premium templates, or a marketing app could bill for individual campaign setups without ongoing monthly fees.

  Use the `AppPurchaseOneTimeCreate` mutation to:

  * Charge for premium features or content purchases
  * Bill for professional services or setup fees
  * Generate revenue from one-time digital product sales

  The mutation returns a confirmation URL that merchants must visit to approve the charge. Test and development stores are not charged, allowing safe testing of billing flows.

  Explore one-time billing options on the [app purchases page](https://shopify.dev/docs/apps/launch/billing/support-one-time-purchases).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the one-time purchase from the app.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The amount to be charged to the store for the app one-time purchase.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL where the merchant is redirected after approving the app one-time purchase.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app one-time purchase is a test transaction.

  ***

***

## AppPurchaseOneTime Mutations

### Mutated by

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

***

## Interfaces

* * [App​Purchase](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## AppPurchaseOneTime Implements

### Implements

* [App​Purchase](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
