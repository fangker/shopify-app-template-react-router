---
title: companyLocationRemoveStaffMembers - GraphQL Admin
description: >-
  Deletes one or more existing mappings between a staff member at a shop and a
  company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Remove​Staff​Members

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Deletes one or more existing mappings between a staff member at a shop and a company location.

## Arguments

* company​Location​Staff​Member​Assignment​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The list of IDs of the company location staff member assignment to delete.

***

## Company​Location​Remove​Staff​Members​Payload returns

* deleted​Company​Location​Staff​Member​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted staff member assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationRemoveStaffMembers reference
