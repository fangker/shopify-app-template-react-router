---
title: AppDiscountType - GraphQL Admin
description: >-
  The details about the app extension that's providing the

  [discount type](https://help.shopify.com/manual/discounts/discount-types).

  This information includes the app extension's name and

  [client
  ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets),

  [App Bridge configuration](https://shopify.dev/docs/api/app-bridge),

  [discount
  class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations),

  [function
  ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries),

  and other metadata about the discount type, including the discount type's name
  and description.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# App​Discount​Type

object

Requires Apps must have `read_discounts` access scope.

The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

## Fields

* app

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The name of the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

* app​Bridge

  [Functions​App​Bridge!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsAppBridge)

  non-null

  The [App Bridge configuration](https://shopify.dev/docs/api/app-bridge) for the [discount type](https://help.shopify.com/manual/discounts/discount-types).

* app​Key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets) of the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A description of the [discount type](https://help.shopify.com/manual/discounts/discount-types) provided by the app extension.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The list of [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that this app extension supports.

* function​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries) associated with the app extension providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the [discount type](https://help.shopify.com/manual/discounts/discount-types) that the app extension is providing.

### Deprecated fields

* discount​Class

  [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-nullDeprecated

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [AppDiscountTypeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-nodes)
* [AppDiscountTypeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge#field-AppDiscountTypeEdge.fields.node)
* [DiscountAutomaticApp.appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.appDiscountType)
* [DiscountCodeApp.appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.appDiscountType)

***

## Queries

* [app​Discount​Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountType)

  query

  An app discount type.

  * function​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The ID for the function providing the app discount type.

  ***

* [app​Discount​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypes)

  query

  A list of app discount types installed by apps.

* [app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

  query

  A list of app discount types installed by apps.

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

***

## AppDiscountType Queries

### Queried by

* [app​Discount​Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountType)
* [app​Discount​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypes)
* [app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)
