---
title: companyContactsDelete - GraphQL Admin
description: Deletes one or more company contacts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contacts​Delete

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes one or more company contacts.

## Arguments

* company​Contact​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The list of IDs of the company contacts to delete.

***

## Company​Contacts​Delete​Payload returns

* deleted​Company​Contact​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted company contacts.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactsDelete reference
