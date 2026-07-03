---
title: Metaobject - GraphQL Admin
description: >-
  An instance of custom structured data defined by a
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition).
  [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects)

  store reusable data that extends beyond Shopify's standard resources, such as

  product highlights, size charts, or custom content sections.


  Each metaobject includes fields that match the field types and validation
  rules

  specified in its definition, which also determines the metaobject's

  capabilities, such as storefront visibility, publishing and translation
  support.
  [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  can reference metaobjects to connect custom data with

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  objects,
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  objects, and other Shopify resources.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject

object

Requires `read_metaobjects` access scope.

An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.

Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.

## Fields

* capabilities

  [Metaobject​Capability​Data!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilityData)

  non-null

  Metaobject capabilities for this Metaobject.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  When the object was created.

* created​By

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app used to create the object.

* created​By​App

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app used to create the object.

* created​By​Staff

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member who created the metaobject.

* definition

  [Metaobject​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  non-null

  The MetaobjectDefinition that models this object type.

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The preferred display name field value of the metaobject.

* field

  [Metaobject​Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

  The field for an object key, or null if the key has no field definition.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The metaobject key to access.

  ***

* fields

  [\[Metaobject​Field!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

  non-null

  All ordered fields of the metaobject with their definitions and values.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique handle of the object, useful as a custom ID.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* referenced​By

  [Metafield​Relation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection)

  non-null

  List of back references metafields that belong to the resource.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* thumbnail​Field

  [Metaobject​Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

  The recommended field to visually represent this metaobject. May be a file reference or color field.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the metaobject.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  When the object was last updated.

* values

  [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  non-null

  The values of the metaobject.

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  Deprecated

***

## Map

### Fields and connections with this object

* [CollectionSourceInclusionConditionMetafieldMetaobject.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldMetaobject#field-CollectionSourceInclusionConditionMetafieldMetaobject.fields.value)
* [CollectionSourceInclusionConditionMetafieldMetaobjectList.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldMetaobjectList#field-CollectionSourceInclusionConditionMetafieldMetaobjectList.fields.values)
* [MetaobjectConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-nodes)
* [MetaobjectDefinition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.metaobjects)
* [MetaobjectEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge#field-MetaobjectEdge.fields.node)

### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobject)

  query

  Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its global ID. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store custom structured data based on defined schemas. The returned metaobject includes its fields with values, display name, handle, and associated metadata like update timestamps and capabilities.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to return.

  ***

* [metaobject​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectByHandle)

  query

  Retrieves a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its handle and type. Handles are unique identifiers within a metaobject type.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to return.

  ***

* [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

  query

  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries for a specific type. Metaobjects are custom data structures that extend Shopify's data model with merchant or app-specific data types.

  Filter results using the query parameter with a search syntax for metaobject fields. Use `fields.{key}:{value}` to filter by field values, supporting any field previously marked as filterable. The `sortKey` parameter accepts `id`, `type`, `updated_at`, or `display_name` to control result ordering.

  Learn more about [querying metaobjects by field value](https://shopify.dev/docs/apps/build/custom-data/metafields/query-by-metafield-value).

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

    * display\_name

      string

    * fields.{key}

      mixed

      Filters metaobject entries by field value. Format: `fields.{key}:{value}`. Only fields marked as filterable in the metaobject definition can be used. Learn more about [querying metaobjects by field value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

    * * `fields.color:blue`\
        \- `fields.on_sale:true`

    * handle

      string

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of a field to sort with. Supports "id", "type", "updated\_at", and "display\_name".

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The type of the metaobjects to query.

  ***

***

## Metaobject Queries

### Queried by

* [metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobject)
* [metaobject​By​Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectByHandle)
* [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

***

## Mutations

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)

  mutation

  Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). The type must match a definition that already exists in the shop.

  Specify field values using key-value pairs that correspond to the field definitions. The mutation generates a unique handle automatically if you don't provide one. You can also configure capabilities like publishable status to control the metaobject's visibility across channels.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * metaobject

    [Metaobject​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput)

    required

    ### Arguments

    The parameters for the metaobject to create.

  ***

* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)

  mutation

  Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

  You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to update.

  * metaobject

    [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

    required

    Specifies parameters to update on the metaobject.

  ***

* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

  mutation

  Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

  The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to upsert.

  * metaobject

    [Metaobject​Upsert​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

    The parameters to upsert the metaobject. Only the fields you provide are updated. Cannot be used in conjunction with `values`.

  * values

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    The values of the metaobject as a JSON object keyed by field definition key. This is a full replacement — omitted keys are cleared on an existing record. Cannot be used in conjunction with `metaobject`.

  ***

***

## Metaobject Mutations

### Mutated by

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)
* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)
* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## Metaobject Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
