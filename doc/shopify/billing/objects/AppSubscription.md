---
title: AppSubscription - GraphQL Admin
description: >-
  A recurring billing agreement that associates an

  [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) with a

  merchant's shop. Each subscription contains one or more
  [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem)

  objects that define the pricing structure. The pricing structure can include

  recurring charges, usage-based pricing, or both.


  The subscription tracks billing details including the current period end date,

  trial days, and
  [`AppSubscriptionStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus). 


  Merchants must approve subscriptions through a [confirmation
  URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl)

  before billing begins. Test subscriptions allow developers to verify billing

  flows without actual charges.


  Learn more about [subscription

  billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing)
  and [testing
  charges](https://shopify.dev/docs/apps/launch/billing/managed-pricing#test-charges).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Subscription

object

A recurring billing agreement that associates an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) with a merchant's shop. Each subscription contains one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure. The pricing structure can include recurring charges, usage-based pricing, or both.

The subscription tracks billing details including the current period end date, trial days, and [`AppSubscriptionStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus).

Merchants must approve subscriptions through a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) before billing begins. Test subscriptions allow developers to verify billing flows without actual charges.

Learn more about [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing) and [testing charges](https://shopify.dev/docs/apps/launch/billing/managed-pricing#test-charges).

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app subscription was created.

* current​Period​End

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the current app subscription period ends. Returns `null` if the subscription isn't active.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Items

  [\[App​Subscription​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem)

  non-null

  The plans attached to the app subscription.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the app subscription.

* return​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL that the merchant is redirected to after approving the app subscription.

* status

  [App​Subscription​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus)

  non-null

  The status of the app subscription.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Specifies whether the app subscription is a test transaction.

* trial​Days

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of free trial days, starting at the subscription's creation date, by which billing is delayed.

***

## Map

### Fields and connections with this object

* [AppInstallation.activeSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.activeSubscriptions)
* [AppInstallation.allSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions)
* [AppSubscriptionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-nodes)
* [AppSubscriptionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionEdge#field-AppSubscriptionEdge.fields.node)

***

## Mutations

* [app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)

  mutation

  Cancels an active app subscription, stopping future billing cycles. The cancellation behavior depends on the `replacementBehavior` setting - it can either disable auto-renewal (allowing the subscription to continue until the end of the current billing period) or immediately cancel with prorated refunds.

  When a merchant decides to discontinue using subscription features, this mutation provides a clean cancellation workflow that respects billing periods and merchant expectations.

  Use the `AppSubscriptionCancel` mutation to:

  * Process merchant-initiated subscription cancellations
  * Terminate subscriptions due to policy violations or account issues
  * Handle subscription cancellations during app uninstallation workflows

  The cancellation timing and merchant access depends on the `replacementBehavior` setting and the app's specific implementation of subscription management.

  For subscription lifecycle management and cancellation best practices, consult the [subscription management guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to be cancelled.

  * prorate

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ***

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

  mutation

  Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchants for app features and services. The subscription includes one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure, billing intervals, and optional [`AppSubscriptionDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount) values.

  Returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant approves or declines the charges. After approval, the subscription becomes active and billing begins after any trial period expires. You can specify [`AppSubscriptionReplacementBehavior`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior) to control how this subscription interacts with existing active subscriptions.

  Learn more about [creating app subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-time-based-subscriptions).

  * line​Items

    [\[App​Subscription​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput)

    required

    ### Arguments

    Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A descriptive name for the app subscription.

  * replacement​Behavior

    [App​Subscription​Replacement​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior)

    Default:STANDARD

    The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL pointing to the page where the merchant is redirected after approving the app subscription.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app subscription is a test transaction.

  * trial​Days

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of days of the free trial period, beginning on the day that the merchant approves the app charges.

  ***

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

  mutation

  Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem). Enables you to modify the maximum charge limit that prevents merchants from exceeding a specified threshold during their billing period.

  The mutation returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant must approve the new pricing limit before it takes effect. Use this when adjusting usage limits based on merchant needs or changing pricing models.

  Learn more about [updating the maximum charge for a subscription](https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge).

  * capped​Amount

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    ### Arguments

    The new maximum amount of usage charges that can be incurred within a subscription billing interval.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the app subscription line item to be updated.

  ***

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

  mutation

  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

  Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

  Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

  * days

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    ### Arguments

    The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the app subscription to extend the trial for.

  ***

***

## AppSubscription Mutations

### Mutated by

* [app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)
* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)
* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)
* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## AppSubscription Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
