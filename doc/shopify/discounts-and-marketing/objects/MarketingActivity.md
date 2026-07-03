---
title: MarketingActivity - GraphQL Admin
description: |-
  The marketing activity resource represents marketing that a
          merchant created through an app.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Marketing​Activity

object

Requires `read_marketing_events` access scope.

The marketing activity resource represents marketing that a merchant created through an app.

## Fields

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

### Deprecated fields

* marketing​Channel

  [Marketing​Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  non-nullDeprecated

* status​Badge​Type

  [Marketing​Activity​Status​Badge​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatusBadgeType)

  Deprecated

***

## Map

### Fields and connections with this object

* [MarketingActivityConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#returns-nodes)
* [MarketingActivityEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge#field-MarketingActivityEdge.fields.node)
* [MarketingEngagement.marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.marketingActivity)

***

## Queries

* [marketing​Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivities)

  query

  A list of marketing activities associated with the marketing app.

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

  * marketing​Activity​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The list of marketing activity IDs to filter by.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * app\_name

      string

      A comma-separated list of app names.

    * created\_at

      time

    * * id

        id

      * marketing\_campaign\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * scheduled\_to\_end\_at

      time

    * scheduled\_to\_start\_at

      time

    * tactic

      string

    * title

      string

    * updated\_at

      time

  * remote​Ids

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:\[]

    The list of remote IDs associated with marketing activities to filter by.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Marketing​Activity​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivitySortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    The UTM parameters associated with marketing activities to filter by.

  ***

* [marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivity)

  query

  Returns a `MarketingActivity` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `MarketingActivity` to return.

  ***

***

## MarketingActivity Queries

### Queried by

* [marketing​Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivities)
* [marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivity)

***

## Mutations

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

  mutation

  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

    required

    ### Arguments

    The Input of marketing activity create.

  ***

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

  mutation

  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

    required

    ### Arguments

    The Input of the marketing activity.

  ***

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

  mutation

  Update an external marketing activity.

  * input

    [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

    required

    ### Arguments

    The input field for updating an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  ***

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

  mutation

  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

  * input

    [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

    required

    ### Arguments

    The input field for creating or updating an external marketing activity.

  ***

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

  mutation

  Deprecated

  * input

    [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

    required

    ### Arguments

    The input field for creating an external marketing activity.

  ***

***

## MarketingActivity Mutations

### Mutated by

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)
* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)
* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)
* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## MarketingActivity Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
