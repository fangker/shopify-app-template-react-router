---
title: OnlineStoreTheme - GraphQL Admin
description: >-
  A theme for display on the storefront. Themes control the visual appearance
  and

  functionality of the online store through templates, stylesheets, and assets

  that determine how

  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),
  [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),

  and other content display to customers.


  Each theme has a
  [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role)

  that indicates its status. Main themes are live on the storefront, unpublished

  themes are inactive, demo themes require purchase before publishing, and

  development themes are temporary for previewing during development. The theme
  includes
  [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations)

  for multi-language support.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Online​Store​Theme

object

Requires `read_themes` access scope.

A theme for display on the storefront. Themes control the visual appearance and functionality of the online store through templates, stylesheets, and assets that determine how [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), and other content display to customers.

Each theme has a [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role) that indicates its status. Main themes are live on the storefront, unpublished themes are inactive, demo themes require purchase before publishing, and development themes are temporary for previewing during development. The theme includes [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations) for multi-language support.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme was created.

* files

  [Online​Store​Theme​File​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection)

  The files in the theme.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A cursor for use in pagination.

  * filenames

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The filenames of the theme files. At most 50 filenames can be specified. Use '\*' to match zero or more characters.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:50

    Returns at most the first n files for this theme. Fewer than n files may be returned to stay within the payload size limit, or when the end of the list is reached. At most 2500 can be fetched at once.

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the theme, set by the merchant.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the theme.

* processing

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the theme is processing.

* processing​Failed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the theme processing failed.

* role

  [Theme​Role!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

  non-null

  The role of the theme.

* theme​Store​Id

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The theme store ID.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the theme was last updated.

***

## Map

### Fields and connections with this object

* [OnlineStoreThemeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-nodes)
* [OnlineStoreThemeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge#field-OnlineStoreThemeEdge.fields.node)

***

## Queries

* [theme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme)

  query

  Returns an [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) by its ID. Use this query to retrieve theme metadata and access the theme's [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#returns-OnlineStoreTheme.fields.files), which include templates, assets, [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-published_translations), and configuration files.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme.

  ***

* [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

  query

  Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online store. Themes control the appearance and layout of the storefront.

  You can filter themes by [`role`](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles) to find specific theme types, such as `MAIN` for the published theme and `UNPUBLISHED` for draft themes.

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

  * names

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The theme names to filter by. Use '\*' to match zero or more characters.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * roles

    [\[Theme​Role!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    The theme roles to filter by.

  ***

***

## OnlineStoreTheme Queries

### Queried by

* [theme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme)
* [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

***

## Mutations

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

  mutation

  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

  New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The name of the theme to be created.

  * role

    [Theme​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    Default:UNPUBLISHED

    The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

  * source

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

  ***

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

  mutation

  Duplicates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be duplicated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Name of the new theme.

  ***

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

  mutation

  Publishes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be published.

  ***

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

  mutation

  Updates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be updated.

  * input

    [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

    required

    The attributes of the theme to be updated.

  ***

***

## OnlineStoreTheme Mutations

### Mutated by

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)
* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)
* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)
* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## OnlineStoreTheme Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
