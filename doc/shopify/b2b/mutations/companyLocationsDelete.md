---
title: companyLocationsDelete - GraphQL Admin
description: Deletes a list of company locations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Locations​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes a list of company locations.

## Arguments

* company​Location​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  A list of IDs of company locations to delete.

***

## Company​Locations​Delete​Payload returns

* deleted​Company​Location​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of IDs of the deleted company locations.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationsDelete reference
