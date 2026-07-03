---
title: GiftCardRecipient - GraphQL Admin
description: Represents a recipient who will receive the issued gift card.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Gift​Card​Recipient

object

Requires `read_gift_cards` access scope.

Represents a recipient who will receive the issued gift card.

## Fields

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The message sent with the gift card.

* preferred​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The preferred name of the recipient who will receive the gift card.

* recipient

  [Customer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  non-null

  The recipient who will receive the gift card.

* send​Notification​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The scheduled datetime on which the gift card will be sent to the recipient. The gift card will be sent within an hour of the specified datetime.

***

## Map

### Fields with this object

* [GiftCard.recipientAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.recipientAttributes)
