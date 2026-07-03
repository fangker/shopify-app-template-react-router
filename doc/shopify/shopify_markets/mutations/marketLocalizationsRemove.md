---
title: marketLocalizationsRemove - GraphQL Admin
description: Deletes market localizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# market​Localizations​Remove

mutation

Requires `write_translations` access scope.

Deletes market localizations.

## Arguments

* market​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The list of market IDs.

* market​Localization​Keys

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The list of market localization keys.

* resource​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the resource for which market localizations are being deleted.

***

## Market​Localizations​Remove​Payload returns

* market​Localizations

  [\[Market​Localization!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  The market localizations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### marketLocalizationsRemove reference
