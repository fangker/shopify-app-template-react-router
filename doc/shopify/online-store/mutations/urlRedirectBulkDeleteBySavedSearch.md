---
title: urlRedirectBulkDeleteBySavedSearch - GraphQL Admin
description: Asynchronously delete redirects in bulk.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# url​Redirect​Bulk​Delete​By​Saved​Search

mutation

Requires `write_online_store_navigation` access scope. Also: Requires an active user.

Asynchronously delete redirects in bulk.

## Arguments

* saved​Search​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the URL redirect saved search for filtering.

***

## Url​Redirect​Bulk​Delete​By​Saved​Search​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### urlRedirectBulkDeleteBySavedSearch reference
