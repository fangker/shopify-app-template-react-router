---
title: MenuItem - GraphQL Admin
description: >-
  Individual navigation links that make up store menus, giving customers
  clickable

  paths to explore the store. Menu items are the building blocks that connect

  shoppers to products, collections, pages, or external resources.


  For example, within a "Products" menu, individual menu items might link to

  specific collections like "Summer Collection" or "Best Sellers," each with its

  own title, URL, and resource connection.


  Use the `MenuItem` object to:

  - Define individual navigation links and their destinations

  - Create nested menu hierarchies through item relationships

  - Use tags for collection filtering

  - Connect menu links to specific store resources


  Menu items support various link types, enabling connections to internal store

  content or external websites. The nested items capability allows for dropdown
  or

  multi-level navigation structures that help organize complex store catalogs.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Menu​Item

object

Individual navigation links that make up store menus, giving customers clickable paths to explore the store. Menu items are the building blocks that connect shoppers to products, collections, pages, or external resources.

For example, within a "Products" menu, individual menu items might link to specific collections like "Summer Collection" or "Best Sellers," each with its own title, URL, and resource connection.

Use the `MenuItem` object to:

* Define individual navigation links and their destinations
* Create nested menu hierarchies through item relationships
* Use tags for collection filtering
* Connect menu links to specific store resources

Menu items support various link types, enabling connections to internal store content or external websites. The nested items capability allows for dropdown or multi-level navigation structures that help organize complex store catalogs.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID of the navigation menu item.

* items

  [\[Menu​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem)

  non-null

  List of the menu items nested under this item sorted by position.

* resource​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the resource to link to.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The menu item's tags to filter a collection.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The menu item's title.

* type

  [Menu​Item​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuItemType)

  non-null

  The menu item's type.

* url

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The menu item's url.

***

## Map

### Fields with this object

* [Menu.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu#field-Menu.fields.items)
* [MenuItem.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem#field-MenuItem.fields.items)
