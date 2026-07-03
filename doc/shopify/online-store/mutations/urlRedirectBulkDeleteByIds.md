---
title: urlRedirectBulkDeleteByIds - GraphQL Admin
description: >-
  Asynchronously delete
  [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) 

  objects in bulk by IDs.

  Learn more about
  [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) 

  objects.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# url​Redirect​Bulk​Delete​By​Ids

mutation

Requires `write_online_store_navigation` access scope. Also: Requires an active user.

Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

## Arguments

* ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

***

## Url​Redirect​Bulk​Delete​By​Ids​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Ids​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### urlRedirectBulkDeleteByIds reference
