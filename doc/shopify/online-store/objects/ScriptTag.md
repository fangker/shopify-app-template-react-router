---
title: ScriptTag - GraphQL Admin
description: >-
  <div class="note"><h4>Theme app extensions</h4>
    <p>If your app integrates with a Shopify theme and you plan to submit it to the
  Shopify App Store, you must use theme app extensions instead of Script tags.

  Script tags can only be used with vintage themes. <a

  href="/apps/online-store#what-integration-method-should-i-use"

  target="_blank">Learn more</a>.</p></div>


  <div class="note"><h4>Script tag deprecation</h4>
    <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a
  href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade

  to Checkout Extensibility</a> before this date. <a

  href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to
  work

  alongside Checkout Extensibility until August 28, 2025.</p></div>



  A script tag represents remote JavaScript code that is loaded into the pages
  of

  a shop's storefront or the **Order status** page of checkout.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Script​Tag

object

Requires `read_script_tags` access scope. Also: Requires access to script tags.

**Theme app extensions:**

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

**Script tag deprecation:**

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

A script tag represents remote JavaScript code that is loaded into the pages of a shop's storefront or the **Order status** page of checkout.

## Fields

* cache

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the Shopify CDN can cache and serve the script tag. If `true`, then the script will be cached and served by the CDN. The cache expires 15 minutes after the script tag is successfully returned. If `false`, then the script will be served as is.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the script tag was created.

* display​Scope

  [Script​Tag​Display​Scope!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ScriptTagDisplayScope)

  non-null

  The page or pages on the online store that the script should be included.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* src

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL to the remote script.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the script tag was last updated.

***

## Map

### Fields and connections with this object

* [ScriptTagConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-nodes)
* [ScriptTagEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge#field-ScriptTagEdge.fields.node)

***

## Queries

* [script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTag)

  query

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Returns a `ScriptTag` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ScriptTag` to return.

  ***

* [script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

  query

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  A list of script tags.

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

    * created\_at

      time

    * * id

        id

      * src

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * src

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The source URL of the script tag to filter by.

  ***

***

## ScriptTag Queries

### Queried by

* [script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTag)
* [script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

***

## Mutations

* [script​Tag​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate)

  mutation

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Creates a new script tag.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    ### Arguments

    The input fields for a script tag.

  ***

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

  mutation

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Updates a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to update.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    Specifies the input fields for a script tag.

  ***

***

## ScriptTag Mutations

### Mutated by

* [script​Tag​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate)
* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ScriptTag Implements

### Implements

* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
