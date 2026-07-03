---
title: companyContactRemoveFromCompany - GraphQL Admin
description: Removes a company contact from a Company.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contact​Remove​From​Company

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Removes a company contact from a Company.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company contact to remove from the Company.

***

## Company​Contact​Remove​From​Company​Payload returns

* removed​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the removed company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactRemoveFromCompany reference
