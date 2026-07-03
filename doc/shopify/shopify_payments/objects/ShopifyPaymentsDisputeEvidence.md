---
title: ShopifyPaymentsDisputeEvidence - GraphQL Admin
description: The evidence associated with the dispute.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Dispute​Evidence

object

Requires `read_shopify_payments_dispute_evidences` access scope.

The evidence associated with the dispute.

## Fields

* access​Activity​Log

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The activity logs associated with the dispute evidence.

* billing​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The billing address that's provided by the customer.

* cancellation​Policy​Disclosure

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The cancellation policy disclosure associated with the dispute evidence.

* cancellation​Policy​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The cancellation policy file associated with the dispute evidence.

* cancellation​Rebuttal

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The cancellation rebuttal associated with the dispute evidence.

* customer​Communication​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The customer communication file associated with the dispute evidence.

* customer​Email​Address

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's email address.

* customer​First​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's first name.

* customer​Last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's last name.

* customer​Purchase​Ip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer purchase ip for this dispute evidence.

* dispute

  [Shopify​Payments​Dispute!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

  non-null

  The dispute associated with the evidence.

* dispute​File​Uploads

  [\[Shopify​Payments​Dispute​File​Upload!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  non-null

  The file uploads associated with the dispute evidence.

* fulfillments

  [\[Shopify​Payments​Dispute​Fulfillment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFulfillment)

  non-null

  The fulfillments associated with the dispute evidence.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* product​Description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The product description for this dispute evidence.

* refund​Policy​Disclosure

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The refund policy disclosure associated with the dispute evidence.

* refund​Policy​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The refund policy file associated with the dispute evidence.

* refund​Refusal​Explanation

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The refund refusal explanation associated with dispute evidence.

* service​Documentation​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The service documentation file associated with the dispute evidence.

* shipping​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The mailing address for shipping that's provided by the customer.

* shipping​Documentation​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The shipping documentation file associated with the dispute evidence.

* submitted

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the dispute evidence is submitted.

* uncategorized​File

  [Shopify​Payments​Dispute​File​Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload)

  The uncategorized file associated with the dispute evidence.

* uncategorized​Text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The uncategorized text for the dispute evidence.

***

## Map

### Fields with this object

* [ShopifyPaymentsDispute.disputeEvidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.disputeEvidence)

***

## Queries

* [dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeEvidence)

  query

  Returns a `ShopifyPaymentsDisputeEvidence` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ShopifyPaymentsDisputeEvidence` to return.

  ***

***

## ShopifyPaymentsDisputeEvidence Queries

### Queried by

* [dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeEvidence)

***

## Mutations

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

  mutation

  Updates the evidence package for a Shopify Payments dispute. Merchants submit evidence — such as shipping confirmations, customer communications, and refund policies — to contest a dispute filed by a cardholder. This mutation updates the evidence fields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the dispute evidence to be updated.

  * input

    [Shopify​Payments​Dispute​Evidence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

    required

    The updated properties for a dispute evidence.

  ***

***

## ShopifyPaymentsDisputeEvidence Mutations

### Mutated by

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopifyPaymentsDisputeEvidence Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
