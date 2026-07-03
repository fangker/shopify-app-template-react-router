---
title: ShopifyPaymentsDisputeFileUpload - GraphQL Admin
description: The file upload associated with the dispute evidence.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFileUpload.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shopify​Payments​Dispute​File​Upload

object

Requires `read_shopify_payments_dispute_evidences` access scope.

The file upload associated with the dispute evidence.

## Fields

* dispute​Evidence​Type

  [Shopify​Payments​Dispute​Evidence​File​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsDisputeEvidenceFileType)

  The type of the file for the dispute evidence.

* file​Size

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The file size.

* file​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The file type.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* original​File​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The original file name.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL for accessing the file.

***

## Map

### Fields with this object

* [ShopifyPaymentsDisputeEvidence.cancellationPolicyFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.cancellationPolicyFile)
* [ShopifyPaymentsDisputeEvidence.customerCommunicationFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.customerCommunicationFile)
* [ShopifyPaymentsDisputeEvidence.disputeFileUploads](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.disputeFileUploads)
* [ShopifyPaymentsDisputeEvidence.refundPolicyFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.refundPolicyFile)
* [ShopifyPaymentsDisputeEvidence.serviceDocumentationFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.serviceDocumentationFile)
* [ShopifyPaymentsDisputeEvidence.shippingDocumentationFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.shippingDocumentationFile)
* [ShopifyPaymentsDisputeEvidence.uncategorizedFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.uncategorizedFile)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopifyPaymentsDisputeFileUpload Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
