---
title: removeFromReturn - GraphQL Admin
description: Removes return and/or exchange lines from a return.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# remove​From​Return

mutation

Requires `write_returns` access scope. Also: The user must have `return_orders` permission.

Removes return and/or exchange lines from a return.

## Arguments

* exchange​Line​Items

  [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

  The exchange line items to remove from the return.

* return​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the return for line item removal.

* return​Line​Items

  [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

  The return line items to remove from the return.

***

## Remove​From​Return​Payload returns

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The modified return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### removeFromReturn reference
