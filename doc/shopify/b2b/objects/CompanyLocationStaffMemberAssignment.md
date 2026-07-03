---
title: CompanyLocationStaffMemberAssignment - GraphQL Admin
description: >-
  A representation of store's staff member who is assigned to a [company

  location](https://shopify.dev/api/admin-graphql/latest/objects/CompanyLocation)

  of the shop. The staff member's actions will be limited to objects associated

  with the assigned company location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Location​Staff​Member​Assignment

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

A representation of store's staff member who is assigned to a [company location](https://shopify.dev/api/admin-graphql/latest/objects/CompanyLocation) of the shop. The staff member's actions will be limited to objects associated with the assigned company location.

## Fields

* company​Location

  [Company​Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  non-null

  The company location the staff member is assigned to.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* staff​Member

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  Represents the data of a staff member who's assigned to a company location.

***

## Map

### Fields and connections with this object

* [CompanyLocation.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments)
* [CompanyLocationStaffMemberAssignmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-nodes)
* [CompanyLocationStaffMemberAssignmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge#field-CompanyLocationStaffMemberAssignmentEdge.fields.node)

***

## Mutations

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

  mutation

  Creates one or more mappings between a staff member at a shop and a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to assign the staff member to.

  * staff​Member​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of IDs of the staff members to assign.

  ***

***

## CompanyLocationStaffMemberAssignment Mutations

### Mutated by

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CompanyLocationStaffMemberAssignment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
