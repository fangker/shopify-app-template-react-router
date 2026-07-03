---
title: PageInfo - GraphQL Admin
description: >-
  Returns information about pagination in a connection, in accordance with the

  [Relay
  specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).

  For more information, please read our [GraphQL Pagination Usage
  Guide](https://shopify.dev/api/usage/pagination-graphql).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Page​Info

object

Returns information about pagination in a connection, in accordance with the [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).

## Fields

* end​Cursor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The cursor corresponding to the last node in edges.

* has​Next​Page

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether there are more pages to fetch following the current page.

* has​Previous​Page

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether there are any pages prior to the current page.

* start​Cursor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The cursor corresponding to the first node in edges.

***

## Map

### Fields and connections with this object

* [AbandonedCheckoutConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-pageInfo)
* [AbandonedCheckoutLineItemConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-pageInfo)
* [AppConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-pageInfo)
* [AppCreditConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#returns-pageInfo)
* [AppDiscountTypeConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-pageInfo)
* [AppInstallationConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-pageInfo)
* [AppPurchaseOneTimeConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-pageInfo)
* [AppRevenueAttributionRecordConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#returns-pageInfo)
* [AppSubscriptionConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-pageInfo)
* [AppUsageRecordConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-pageInfo)
* [ArticleAuthorConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-pageInfo)
* [ArticleConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#returns-pageInfo)
* [BlogConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-pageInfo)
* [BulkOperationConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-pageInfo)
* [CalculatedDiscountApplicationConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-pageInfo)
* [CalculatedLineItemConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-pageInfo)
* [CartTransformConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-pageInfo)
* [CashActivityConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection#returns-pageInfo)
* [CashDrawerConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashDrawerConnection#returns-pageInfo)
* [CashManagementReasonCodeConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection#returns-pageInfo)
* [CashTrackingAdjustmentConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-pageInfo)
* [CashTrackingSessionConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#returns-pageInfo)
* [CatalogConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-pageInfo)
* [ChannelConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-pageInfo)
* [CheckoutAndAccountsConfigurationConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection#returns-pageInfo)
* [CheckoutProfileConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-pageInfo)
* [CollectionConditionsSourceConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConditionsSourceConnection#returns-pageInfo)
* [CollectionConditionsSourcesByAppConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConditionsSourcesByAppConnection#returns-pageInfo)
* [CollectionConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-pageInfo)
* [CollectionExclusionProductSelectionConnection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionExclusionProductSelectionConnection#returns-pageInfo)
