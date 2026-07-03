---
title: companyLocationAssignStaffMembers - GraphQL Admin
description: >-
  Creates one or more mappings between a staff member at a shop and a company
  location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Location​Assign​Staff​Members

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Creates one or more mappings between a staff member at a shop and a company location.

## Arguments

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company location to assign the staff member to.

* staff​Member​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The list of IDs of the staff members to assign.

***

## Company​Location​Assign​Staff​Members​Payload returns

* company​Location​Staff​Member​Assignments

  [\[Company​Location​Staff​Member​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  The list of created staff member assignments.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyLocationAssignStaffMembers reference
