---
title: StaffMember - GraphQL Admin
description: >-
  A user account that can access the Shopify admin to manage store operations.

  Includes personal information and account status.


  You can assign staff members to
  [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b),
  limiting

  their actions to those locations.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Staff​Member

object

Requires `read_users` access scope. Also: The app must be a finance embedded app or installed on a Shopify Plus or Advanced store. Contact Shopify Support to enable this scope for your app.

A user account that can access the Shopify admin to manage store operations. Includes personal information and account status.

You can assign staff members to [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b), limiting their actions to those locations.

## Fields

* account​Type

  [Account​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/AccountType)

  The type of account the staff member has.

* active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the staff member is active.

* avatar

  [Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  The image used as the staff member's avatar in the Shopify admin.

  * fallback

    [Staff​Member​Default​Image](https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMemberDefaultImage)

    Default:DEFAULT

    ### Arguments

    The default image returned if the staff member has no avatar.

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  ***

* email

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The staff member's email address.

* exists

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the staff member's account exists.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The staff member's first name.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* initials

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The staff member's initials, if available.

* is​Shop​Owner

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the staff member is the shop owner.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The staff member's last name.

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US`

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The staff member's full name.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The staff member's phone number.

* private​Data

  [Staff​Member​Private​Data!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberPrivateData)

  non-null

  The data used to customize the Shopify admin experience for the staff member.

***

## Map

### Fields and connections with this object

* [CashActivity.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity#fields-staffMember)
* [CashAdjustmentActivity.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.staffMember)
* [CashCountActivity.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.staffMember)
* [CashTrackingAdjustment.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment#field-CashTrackingAdjustment.fields.staffMember)
* [CashTrackingSession.closingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.closingStaffMember)
* [CashTrackingSession.openingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.openingStaffMember)
* [CashTransactionActivity.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTransactionActivity#field-CashTransactionActivity.fields.staffMember)
* [CommentEvent.author](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-CommentEvent.fields.author)
* [CompanyLocationStaffMemberAssignment.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment#field-CompanyLocationStaffMemberAssignment.fields.staffMember)
* [InventoryAdjustmentGroup.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.staffMember)
* [LineItem.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.staffMember)
* [Metaobject.createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.createdByStaff)
* [MetaobjectDefinition.createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.createdByStaff)
* [Order.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.staffMember)
* [OrderAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.user)
* [OrderEditAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.user)
* [OrderTransaction.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.user)
* [PointOfSaleDevicePaymentSession.closingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.closingStaffMember)
* [PointOfSaleDevicePaymentSession.openingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.openingStaffMember)
* [Refund.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.staffMember)
* [RefundAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.user)
* [Return.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.staffMember)
* [ReturnAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.user)
* [SalesAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-user)
* [Shop.accountOwner](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.accountOwner)
* [StaffMemberConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#returns-nodes)
* [StaffMemberEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberEdge#field-StaffMemberEdge.fields.node)
* [TenderTransaction.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction#field-TenderTransaction.fields.user)

***

## Queries

* [current​Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentStaffMember)

  query

  The staff member making the API request.

* [staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember)

  query

  Retrieves a [staff member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) by ID. If no ID is provided, the query returns the staff member that's making the request. A staff member is a user who can access the Shopify admin to manage store operations.

  Provides staff member details such as email, name, and shop owner status. When querying the current user (with or without an ID), additional [private data](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember#returns-StaffMember.fields.privateData) becomes available.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the staff member to return. If no ID is provided, then the staff member making the query (if any) is returned.

  ***

* [staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMembers)

  query

  Returns a paginated list of [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) objects for the shop. Staff members are users who can access the Shopify admin to manage store operations.

  Supports filtering by account type, email, and name, with an option to sort results. The query returns a [`StaffMemberConnection`](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection) for [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * account\_type

        string

      * email

        string

      - Filter by account type.

      - Valid values:

        * `collaborator`
        * `collaborator_team_member`
        * `invited`
        * `regular`
        * `requested`
        * `restricted`
        * `saml`

        Filter by email.

    * first\_name

      string

      Filter by first name.

    * * id

        id

      * last\_name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by last name.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Staff​Members​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMembersSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## StaffMember Queries

### Queried by

* [current​Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentStaffMember)
* [staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember)
* [staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMembers)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## StaffMember Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
