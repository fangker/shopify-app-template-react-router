---
title: SubscriptionBillingCycle - GraphQL Admin
description: A subscription billing cycle.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Subscription​Billing​Cycle

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A subscription billing cycle.

## Fields

* billing​Attempt​Expected​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date on which the billing attempt is expected to be made.

* billing​Attempts

  [Subscription​Billing​Attempt​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

  non-null

  The list of billing attempts associated with the billing cycle.

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

* cycle​End​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The end date of the billing cycle.

* cycle​Index

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The index of the billing cycle.

* cycle​Start​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The start date of the billing cycle.

* edited

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this billing cycle was edited.

* edited​Contract

  [Subscription​Billing​Cycle​Edited​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract)

  The active edited contract for the billing cycle.

* skipped

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this billing cycle was skipped.

* source​Contract

  [Subscription​Contract!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  non-null

  The subscription contract that the billing cycle belongs to.

* status

  [Subscription​Billing​Cycle​Billing​Cycle​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBillingCycleStatus)

  non-null

  The status of the billing cycle.

***

## Map

### Fields and connections with this object

* [SubscriptionBillingCycleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-nodes)
* [SubscriptionBillingCycleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge#field-SubscriptionBillingCycleEdge.fields.node)
* [SubscriptionBillingCycleEditedContract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles)
* [SubscriptionDraft.billingCycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.billingCycle)
* [SubscriptionDraft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)

***

## Queries

* [subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycle)

  query

  Returns a subscription billing cycle found either by cycle index or date.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

* [subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)

  query

  Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

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

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the billing cycle bulk operation job.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* [subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

  query

  Returns subscription billing cycles for a contract ID.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * billing​Cycles​Date​Range​Selector

    [Subscription​Billing​Cycles​Date​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    Select subscription billing cycles within a date range.

  * billing​Cycles​Index​Range​Selector

    [Subscription​Billing​Cycles​Index​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesIndexRangeSelector)

    Select subscription billing cycles within an index range.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the subscription contract to retrieve billing cycles for.

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

  * sort​Key

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## SubscriptionBillingCycle Queries

### Queried by

* [subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycle)
* [subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)
* [subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

***

## Mutations

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

  mutation

  Delete the schedule and contract edits of the selected subscription billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

  mutation

  Delete the current and future schedule and contract edits of a list of subscription billing cycles.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The globally-unique identifier of the subscription contract that the billing cycle belongs to.

  * target​Selection

    [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

    required

    Select billing cycles to be deleted.

  ***

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

  mutation

  Modify the schedule of a specific billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  * input

    [Subscription​Billing​Cycle​Schedule​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

    required

    Data used to create or modify billing cycle schedule edit.

  ***

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## SubscriptionBillingCycle Mutations

### Mutated by

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)
* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)
* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)
* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)
* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)
