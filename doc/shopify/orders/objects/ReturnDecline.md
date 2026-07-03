---
title: ReturnDecline - GraphQL Admin
description: >-
  Additional information about why a merchant declined the customer's return
  request.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnDecline'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnDecline.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Return​Decline

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

Additional information about why a merchant declined the customer's return request.

## Fields

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The notification message sent to the customer about their declined return request. Maximum length: 500 characters.

* reason

  [Return​Decline​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnDeclineReason)

  non-null

  The reason the customer's return request was declined.

***

## Map

### Fields with this object

* [Return.decline](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.decline)
