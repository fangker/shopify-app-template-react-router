---
title: Metafield - GraphQL Admin
description: >-
  Metafields enable you to attach additional information to a Shopify resource,
  such

  as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product)
  or

  a
  [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection).

  For more information about where you can attach metafields refer to
  [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields).

  Some examples of the data that metafields enable you to store are

  specifications, size charts, downloadable documents, release dates, images, or
  part numbers.

  Metafields are identified by an owner resource, namespace, and key. and store
  a

  value along with type information for that value.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield

object

Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

## Fields

* compare​Digest

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The data stored in the resource, represented as a digest.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the metafield was created.

* definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that the metafield belongs to, if any.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* json​Value

  [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  non-null

  The data stored in the metafield in JSON format.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield within its namespace.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The container for a group of metafields that the metafield is associated with.

* owner

  [Has​Metafields!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

  non-null

  The resource that the metafield is attached to.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The type of resource that the metafield is attached to.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

  Returns a reference object if the metafield definition's type is a resource reference.

* references

  [Metafield​Reference​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection)

  A list of reference objects if the metafield's type is a resource reference list.

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

  ***

* size​In​Bytes

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The size of the metafield value in bytes.

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of data that's stored in the metafield. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the metafield was updated.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

### Fields and connections with this object

* [AppInstallation.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafield)
* [AppInstallation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields)
* [Article.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafield)
* [Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields)
* [Blog.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafield)
* [Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields)
* [CartTransform.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafield)
* [CartTransform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields)
* [Collection.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafield)
* [Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafields)
* [Company.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafield)
* [Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafields)
* [CompanyLocation.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafield)
* [CompanyLocation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)
* [Customer.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafield)
* [Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafields)
* [CustomerSegmentMember.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafield)
* [CustomerSegmentMember.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafields)
* [DeliveryCustomization.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafield)
* [DeliveryCustomization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafields)
* [DiscountAutomaticNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafield)
* [DiscountAutomaticNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafields)
* [DiscountCodeNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafield)
* [DiscountCodeNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafields)
* [DiscountNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafield)
* [DiscountNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafields)
* [DraftOrder.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafield)
* [DraftOrder.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields)
* [FulfillmentConstraintRule.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafield)
* [FulfillmentConstraintRule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafields)

***

## Mutations

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

## Metafield Mutations

### Mutated by

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

***

## Interfaces

* * [Has​Compare​Digest](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest)

    interface

  * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

  * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## Metafield Implements

### Implements

* [Has​Compare​Digest](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest)
* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
