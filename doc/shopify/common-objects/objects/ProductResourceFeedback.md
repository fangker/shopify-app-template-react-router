---
title: ProductResourceFeedback - GraphQL Admin
description: |-
  Reports the status of product for a Sales Channel or Storefront API.
  This might include why a product is not available in a Sales Channel
  and how a merchant might fix this.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Resource​Feedback

object

Requires `read_resource_feedbacks` access scope. Also: App must be configured to use the Storefront API or as a Sales Channel.

Reports the status of product for a Sales Channel or Storefront API. This might include why a product is not available in a Sales Channel and how a merchant might fix this.

## Fields

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel this feedback is for.

* feedback​Generated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time when the feedback was generated. Used to help determine whether incoming feedback is outdated compared to existing feedback.

* messages

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The feedback messages presented to the merchant.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product associated with the feedback.

* product​Updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The timestamp of the product associated with the feedback.

* state

  [Resource​Feedback​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState)

  non-null

  Conveys the state of the feedback and whether it requires merchant action or not.

***

## Map

No referencing types

***

## Queries

* [product​Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/queries/productResourceFeedback)

  query

  Retrieves product resource feedback for the currently authenticated app, providing insights into product data quality, completeness, and optimization opportunities. This feedback helps apps guide merchants toward better product listings and improved store performance.

  For example, an SEO app might receive feedback indicating that certain products lack meta descriptions or have suboptimal titles, enabling the app to provide specific recommendations for improving search visibility and conversion rates.

  Use `ProductResourceFeedback` to:

  * Display product optimization recommendations to merchants
  * Identify data quality issues across product catalogs
  * Build product improvement workflows and guided experiences
  * Track progress on product listing completeness and quality
  * Implement automated product auditing and scoring systems
  * Generate reports on catalog health and optimization opportunities
  * Provide contextual suggestions within product editing interfaces

  The feedback system evaluates products against various criteria including SEO best practices, required fields, media quality, and sales channel requirements. Each feedback item includes specific details about the issue, suggested improvements, and priority levels.

  Feedback is app-specific and reflects the particular focus of your application

  * marketing apps receive different insights than inventory management apps. The system continuously updates as merchants make changes, providing real-time guidance for product optimization.

  This resource is particularly valuable for apps that help merchants improve their product listings, optimize for search engines, or enhance their overall catalog quality. The feedback enables proactive suggestions rather than reactive problem-solving.

  Learn more about [product optimization](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

  * channel​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The channel to filter resource feedback by. Use this when your app manages multiple channels and each channel may have different feedback for the same product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product associated with the resource feedback.

  ***

***

## ProductResourceFeedback Queries

### Queried by

* [product​Resource​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/queries/productResourceFeedback)

***

## Mutations

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

  mutation

  Creates product feedback for multiple products.

  * feedback​Input

    [\[Product​Resource​Feedback​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

    required

    ### Arguments

    An array of inputs to create the feedback. Limited to 50.

  ***

***

## ProductResourceFeedback Mutations

### Mutated by

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)
