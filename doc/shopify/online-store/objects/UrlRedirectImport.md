---
title: UrlRedirectImport - GraphQL Admin
description: >-
  A request to import a
  [`URLRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
  object

  into the Online Store channel. Apps can use this to query the state of an
  `UrlRedirectImport` request.


  For more information, see
  [`url-redirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)s.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Url​Redirect​Import

object

Requires `read_online_store_navigation` access scope.

A request to import a [`URLRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object into the Online Store channel. Apps can use this to query the state of an `UrlRedirectImport` request.

For more information, see [`url-redirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)s.

## Fields

* count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of rows in the file.

* created​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of redirects created from the import.

* failed​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of redirects that failed to be imported.

* finished

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the import is finished.

* finished​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the import finished.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the `UrlRedirectImport` object.

* preview​Redirects

  [\[Url​Redirect​Import​Preview!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportPreview)

  non-null

  A list of up to three previews of the URL redirects to be imported.

* updated​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of redirects updated during the import.

***

## Map

No referencing types

***

## Queries

* [url​Redirect​Import](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectImport)

  query

  Returns a `UrlRedirectImport` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `UrlRedirectImport` to return.

  ***

***

## UrlRedirectImport Queries

### Queried by

* [url​Redirect​Import](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectImport)

***

## Mutations

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

  mutation

  Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

  * url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    The staged upload URL of the CSV file. You can download [a sample URL redirect CSV file](https://help.shopify.com/csv/sample-redirect-template.csv).

  ***

***

## UrlRedirectImport Mutations

### Mutated by

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## UrlRedirectImport Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
