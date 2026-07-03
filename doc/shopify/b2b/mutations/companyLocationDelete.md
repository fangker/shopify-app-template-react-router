---
title: companyLocationDelete - GraphQL Admin
description: Deletes a company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company location to delete.

***

## Company​Location​Delete​Payload returns

* deleted​Company​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationDelete reference
