---
title: CommentEvent - GraphQL Admin
description: >-
  A comment that staff members add to the timeline of

  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order),
  [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder),
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer),
  [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer),

  [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company),
  [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation),
  or
  [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule)

  objects. Staff use comments to document internal notes, communicate with team

  members, and track important information about these types.


  The comment includes information like the
  [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  who authored it, when it was created, and whether it's editable or deletable.

  Comments can have file attachments and reference related objects like

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  or
  [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  objects through embeds.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Comment​Event

object

A comment that staff members add to the timeline of [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), or [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) objects. Staff use comments to document internal notes, communicate with team members, and track important information about these types.

The comment includes information like the [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) who authored it, when it was created, and whether it's editable or deletable. Comments can have file attachments and reference related objects like [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects through embeds.

## Fields

* action

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The action that occured.

* app​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the app that created the event.

* attachments

  [\[Comment​Event​Attachment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment)

  non-null

  The attachments associated with the comment event.

* attribute​To​App

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was created by an app.

* attribute​To​User

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was caused by an admin user.

* author

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The name of the user that authored the comment event.

* can​Delete

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the comment event can be deleted. If true, then the comment event can be deleted.

* can​Edit

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the comment event can be edited. If true, then the comment event can be edited.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the event was created.

* critical​Alert

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event is critical.

* edited

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the comment event has been edited. If true, then the comment event has been edited.

* embed

  [Comment​Event​Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)

  The object reference associated with the comment event. For example, a product or discount).

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* message

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Human readable text that describes the event.

* raw​Message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The raw body of the comment event.

* subject

  [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

  The parent subject to which the comment event belongs.

***

## Map

No referencing types

***

## Interfaces

* * [Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CommentEvent Implements

### Implements

* [Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
