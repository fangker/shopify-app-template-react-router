---
title: urlRedirectBulkDeleteAll - GraphQL Admin
description: >-
  Asynchronously delete [URL
  redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
  in bulk.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# url​Redirect​Bulk​Delete​All

mutation

Requires `write_online_store_navigation` access scope. Also: Requires an active user.

Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

## Url​Redirect​Bulk​Delete​All​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### urlRedirectBulkDeleteAll reference
