---
title: Menu - GraphQL Admin
description: >-
  Navigation menus that organize links into logical structures to guide
  customers

  through a store. Menus serve as the backbone of store navigation, making it
  easy

  for customers to find products, pages, and other content through organized

  hierarchical links.


  For example, a merchant might create a main navigation menu with top-level

  categories like "Products," "About Us," and "Contact," where each category can

  contain nested menu items linking to specific collections, pages, or external
  resources.


  Use the `Menu` object to:

  - Build and customize store navigation structures

  - Organize hierarchical menu systems with nested items

  - Work with default menus that can't be deleted

  - Access menu items for building navigation


  Menus can be designated as default navigation elements (like main menu or

  footer), which can't be deleted and have restricted handle updates. The handle

  provides a unique identifier that themes can reference, while the items

  collection enables nested navigation structures.


  Each menu contains menu items that can link to various resource types. This

  flexibility lets merchants create navigation experiences that guide customers

  through their store.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Menu

object

Requires `read_online_store_navigation` access scope.

Navigation menus that organize links into logical structures to guide customers through a store. Menus serve as the backbone of store navigation, making it easy for customers to find products, pages, and other content through organized hierarchical links.

For example, a merchant might create a main navigation menu with top-level categories like "Products," "About Us," and "Contact," where each category can contain nested menu items linking to specific collections, pages, or external resources.

Use the `Menu` object to:

* Build and customize store navigation structures
* Organize hierarchical menu systems with nested items
* Work with default menus that can't be deleted
* Access menu items for building navigation

Menus can be designated as default navigation elements (like main menu or footer), which can't be deleted and have restricted handle updates. The handle provides a unique identifier that themes can reference, while the items collection enables nested navigation structures.

Each menu contains menu items that can link to various resource types. This flexibility lets merchants create navigation experiences that guide customers through their store.

## Fields

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The menu's handle.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* is​Default

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the menu is a default. The handle for default menus can't be updated and default menus can't be deleted.

* items

  [\[Menu​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem)

  non-null

  A list of items on the menu sorted by position.

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The number of menu items to be returned.

  ***

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The menu's title.

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

***

## Map

### Fields and connections with this object

* [MenuConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-nodes)
* [MenuEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuEdge#field-MenuEdge.fields.node)

***

## Queries

* [menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/menu)

  query

  Returns a `Menu` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Menu` to return.

  ***

* [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

  query

  Retrieves navigation menus. Menus organize content into hierarchical navigation structures that merchants can display in the online store (for example, in headers, footers, and sidebars) and customer accounts.

  Each [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) contains a handle for identification, a title for display, and a collection of [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects that can be nested up to 3 levels deep. Default menus have protected handles that can't be modified.

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

    * * default

        string

      * id

        id

      * title

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Menu​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Menu Queries

### Queried by

* [menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/menu)
* [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

***

## Mutations

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

  mutation

  Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

  Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The menu's handle.

  * items

    [\[Menu​Item​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

    required

    List of the menu's items.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's title.

  ***

* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

  mutation

  Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and navigation structure, including nested [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects. You can update the handle for non-default menus.

  The items argument accepts a list of menu items with their nested structure. Each item can include nested items to create multi-level navigation hierarchies. Default menus have restricted updates—you can't change their handles.

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The menu's handle.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the menu to be updated.

  * items

    [\[Menu​Item​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

    required

    List of the menu's items.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's title.

  ***

***

## Menu Mutations

### Mutated by

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)
* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

***

## Interfaces

* * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Menu Implements

### Implements

* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
