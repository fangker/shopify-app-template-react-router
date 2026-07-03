---
title: companyDelete - GraphQL Admin
description: Deletes a company.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes a company.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company to delete.

***

## Company​Delete​Payload returns

* deleted​Company​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyDelete reference
