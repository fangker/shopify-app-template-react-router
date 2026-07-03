---
title: marketingActivity - GraphQL Admin
description: Returns a `MarketingActivity` resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivity.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# marketing​Activity

query

Returns a `MarketingActivity` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `MarketingActivity` to return.

***

## Possible returns

* Marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The marketing activity resource represents marketing that a merchant created through an app.

  * activity​List​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL of the marketing activity listing page in the marketing section.

  * ad​Spend

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The amount spent on the marketing activity.

  * app

    [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    non-null

    The app which created this marketing activity.

  * app​Errors

    [Marketing​Activity​Extension​App​Errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors)

    The errors generated when an app publishes the marketing activity.

  * budget

    [Marketing​Budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget)

    The allocated budget for the marketing activity.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the marketing activity was created.

  * form​Data

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The completed content in the marketing activity creation form.

  * hierarchy​Level

    [Marketing​Activity​Hierarchy​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityHierarchyLevel)

    The hierarchy level of the marketing activity.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * in​Main​Workflow​Version

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the marketing activity is in the main workflow version of the marketing automation.

  * is​External

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    The marketing activity represents an external marketing activity.

  * marketing​Channel​Type

    [Marketing​Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

    non-null

    The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

  * marketing​Event

    [Marketing​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

    Associated marketing event of this marketing activity.

  * parent​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ID of the parent activity of this marketing activity.

  * parent​Remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ID of the parent activity of this marketing activity.

  * source​And​Medium

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A contextual description of the marketing activity based on the platform and tactic used.

  * status

    [Marketing​Activity​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus)

    non-null

    The current state of the marketing activity.

  * status​Badge​Type​V2

    [Badge​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/BadgeType)

    The severity of the marketing activity's status.

  * status​Label

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The rendered status of the marketing activity.

  * status​Transitioned​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The [date and time](https://help.shopify.com/https://en.wikipedia.org/wiki/ISO_8601) when the activity's status last changed.

  * tactic

    [Marketing​Tactic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

    non-null

    The method of marketing used for this marketing activity.

  * target​Status

    [Marketing​Activity​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus)

    The status to which the marketing activity is currently transitioning.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The marketing activity's title, which is rendered on the marketing listing page.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the marketing activity was updated.

  * url​Parameter​Value

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The value portion of the URL query parameter used in attributing sessions to this activity.

  * utm​Parameters

    [UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters)

    The set of [Urchin Tracking Module](https://help.shopify.com/https://en.wikipedia.org/wiki/UTM_parameters) used in the URL for tracking this marketing activity.

  * marketing​Channel

    [Marketing​Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

    non-nullDeprecated

  * status​Badge​Type

    [Marketing​Activity​Status​Badge​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatusBadgeType)

    Deprecated

***

## Examples

* ### marketingActivity reference
