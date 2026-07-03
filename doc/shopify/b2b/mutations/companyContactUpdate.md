---
title: companyContactUpdate - GraphQL Admin
description: Updates a company contact.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contact​Update

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Updates a company contact.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company contact to be updated.

* input

  [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

  required

  The fields to use to update the company contact.

***

## Company​Contact​Update​Payload returns

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The updated company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactUpdate reference
