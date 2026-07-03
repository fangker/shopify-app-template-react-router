---
title: CheckoutAndAccountsConfiguration - GraphQL Admin
description: >-
  A checkout and account configuration packages branding settings, UI
  extensions, and overrides for a shop's checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Checkout​And​Accounts​Configuration

object

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

A checkout and account configuration packages branding settings, UI extensions, and overrides for a shop's checkout.

## Fields

* branding

  [Checkout​And​Accounts​Configuration​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding)

  The branding configuration.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was created.

* edited​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last edited.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the configuration is published or not.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The configuration name.

* overrides

  [\[Checkout​And​Accounts​Configuration​Override!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationOverride)

  non-null

  The list of overrides for the configuration.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last updated.

***

## Map

### Fields and connections with this object

* [CheckoutAndAccountsConfigurationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection#returns-nodes)
* [CheckoutAndAccountsConfigurationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationEdge#field-CheckoutAndAccountsConfigurationEdge.fields.node)

***

## Queries

* [checkout​And​Accounts​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfiguration)

  query

  A checkout and accounts configuration for a shop.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the configuration.

  ***

* [checkout​And​Accounts​Configurations](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations)

  query

  List of checkout and accounts configurations on a shop.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * is\_published

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * one\_page\_checkout\_enabled

      boolean

    * typ\_osp\_pages\_enabled

      boolean

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Checkout​And​Accounts​Configurations​Graph​QLSort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationsGraphQLSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## CheckoutAndAccountsConfiguration Queries

### Queried by

* [checkout​And​Accounts​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfiguration)
* [checkout​And​Accounts​Configurations](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations)

***

## Mutations

* [checkout​And​Accounts​Configuration​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate)

  mutation

  Updates a checkout and accounts configuration.

  * configuration

    [Checkout​And​Accounts​Configuration​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationInput)

    required

    ### Arguments

    The intended changes to the configuration.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the configuration to update.

  ***

***

## CheckoutAndAccountsConfiguration Mutations

### Mutated by

* [checkout​And​Accounts​Configuration​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate)

***

## Interfaces

* * [Checkout​And​Accounts​Configuration​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutAndAccountsConfigurationInterface)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CheckoutAndAccountsConfiguration Implements

### Implements

* [Checkout​And​Accounts​Configuration​Interface](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutAndAccountsConfigurationInterface)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
