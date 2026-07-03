---
title: App - GraphQL Admin
description: >-
  A Shopify application that extends store functionality. Apps integrate with

  Shopify through APIs to add features, automate workflows, or connect external
  services.


  Provides metadata about the app including its developer information and
  listing

  details in the Shopify App Store. Use the
  [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation)

  field to determine if the app is currently installed on the shop and access

  installation-specific details like granted
  [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)
  objects. Check
  [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements)

  before installation to identify any prerequisites that must be met.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/App'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/App.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App

object

A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.

Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.

## Fields

* api​Key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique application API identifier.

* app​Store​App​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  App store page URL of the app.

* app​Store​Developer​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  App store page URL of the developer who created the app.

* available​Access​Scopes

  [\[Access​Scope!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  non-null

  All requestable access scopes available to the app.

* banner

  [Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  Banner image for the app.

* channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

  non-null

  The sales channels associated with this app.

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

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Description of the app.

* developer​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the app developer.

* developer​Type

  [App​Developer​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppDeveloperType)

  non-null

  The type of app developer.

* embedded

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app uses the Embedded App SDK.

* failed​Requirements

  [\[Failed​Requirement!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FailedRequirement)

  non-null

  Requirements that must be met before the app can be installed.

* features

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of app features that are shown in the Shopify App Store listing.

* feedback

  [App​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  Feedback from this app about the store.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Handle of the app.

* icon

  [Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  Icon that represents the app.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* installation

  [App​Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

  Corresponding AppInstallation for this shop and App. Returns null if the App isn't installed.

* install​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  Webpage where you can install the app, if app requires explicit user permission.

* is​Post​Purchase​App​In​Use

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use.

* optional​Access​Scopes

  [\[Access​Scope!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  non-null

  The optional scopes requested by the app. Lists the optional access scopes the app has declared in its configuration. These scopes are optionally requested by the app after installation.

* previously​Installed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app was previously installed on the current shop.

* pricing​Details

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Detailed information about the app pricing.

* pricing​Details​Summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Summary of the app pricing details.

* privacy​Policy​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  Link to app privacy policy.

* public​Category

  [App​Public​Category!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPublicCategory)

  non-null

  The public category for the app.

* published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app is published to the Shopify App Store.

* requested​Access​Scopes

  [\[Access​Scope!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  non-null

  The access scopes requested by the app. Lists the access scopes the app has declared in its configuration. Merchant must grant approval to these scopes for the app to be installed.

* screenshots

  [\[Image!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  Screenshots of the app.

* shopify​Developed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app was developed by Shopify.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Name of the app.

* uninstall​Message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Message that appears when the app is uninstalled. For example: By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.

* webhook​Api​Version

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The webhook API version for the app.

### Deprecated fields

* developer​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

* launch​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

* navigation​Items

  [\[Navigation​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem)

  non-nullDeprecated

* uninstall​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  Deprecated

***

## Map

### Fields and connections with this object

* [Abandonment.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.app)
* [AppCatalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps)
* [AppConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-nodes)
* [AppDiscountType.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-AppDiscountType.fields.app)
* [AppEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge#field-AppEdge.fields.node)
* [AppFeedback.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.app)
* [AppInstallation.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.app)
* [Channel.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app)
* [ChannelInformation.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.app)
* [CollectionConditionsSource.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource#field-CollectionConditionsSource.fields.app)
* [CollectionConditionsSourcesByApp.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSourcesByApp#field-CollectionConditionsSourcesByApp.fields.app)
* [CollectionSource.app](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSource#fields-app)
* [CollectionSubCollectionsSource.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionsSource#field-CollectionSubCollectionsSource.fields.app)
* [DiscountRedeemCode.createdBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode#field-DiscountRedeemCode.fields.createdBy)
* [FulfillmentHold.heldByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold#field-FulfillmentHold.fields.heldByApp)
* [InventoryAdjustmentGroup.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.app)
* [MarketingActivity.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.app)
* [MarketingEvent.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.app)
* [Metaobject.createdBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.createdBy)
* [Metaobject.createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.createdByApp)
* [MetaobjectDefinition.createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.createdByApp)
* [OrderAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.app)
* [OrderEditAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.app)
* [OrderRiskAssessment.provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.provider)
* [PriceRule.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.app)
* [PriceRuleDiscountCode.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode#field-PriceRuleDiscountCode.fields.app)
* [RefundAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.app)
* [ReturnAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.app)
* [SalesAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-app)
* [Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.availableChannelApps)

***

## Queries

* [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)

  query

  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its ID. If no ID is provided, returns details about the currently authenticated app. The query provides access to app details including title, icon, and pricing information.

  If the app isn't installed on the current shop, then the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#returns-App.fields.installation) field will be `null`.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID to lookup the App by.

  ***

* [app​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByHandle)

  query

  Retrieves an app by its unique handle. The handle is a URL-friendly identifier for the app.

  Returns the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) if found, or `null` if no app exists with the specified handle.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Handle of the App.

  ***

* [app​By​Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByKey)

  query

  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its client ID (API key). Returns the app's configuration, installation status, [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, and developer information.

  Returns `null` if no app exists with the specified client ID.

  * api​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Client ID of the app.

  ***

***

## App Queries

### Queried by

* [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)
* [app​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByHandle)
* [app​By​Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByKey)

***

## Mutations

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

  mutation

  Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves programmatically, removing their [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) from the merchant's store.

  When an app uninstalls, Shopify automatically performs cleanup tasks, such as deleting [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) objects and [admin links](https://shopify.dev/docs/apps/build/admin/admin-links) associated with the app.

  Learn more about [app lifecycle management](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/uninstall-app-api-request).

  ***

  **Caution:** This action is irreversible. You can\&#39;t restore an uninstalled app\&#39;s configuration or data. Before you uninstall an app, make sure that you no longer need to make API calls for the store in which the app has been installed.

  ***

***

## App Mutations

### Mutated by

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## App Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
