---
title: MetaobjectDefinition - GraphQL Admin
description: >-
  Defines the structure and configuration for a custom data type in Shopify.
  Each

  definition specifies the fields, validation rules, and capabilities that apply
  to all
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  entries created from it.


  The definition includes field definitions that determine what data to store,

  access controls for [the Shopify
  admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions)
  and
  [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions)

  APIs, and capabilities such as publishability and translatability. You can
  track

  which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)
  or
  [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  created the definition and optionally base it on a
  [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject​Definition

object

Requires `read_metaobject_definitions` access scope.

Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.

The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).

## Fields

* access

  [Metaobject​Access!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess)

  non-null

  Access configuration for the metaobject definition.

* capabilities

  [Metaobject​Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilities)

  non-null

  The capabilities of the metaobject definition.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the metaobject definition was created.

* created​By​App

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The app used to create the metaobject definition.

* created​By​Staff

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member who created the metaobject definition.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The administrative description.

* display​Name​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of a field to reference as the display name for each object.

* field​Definitions

  [\[Metaobject​Field​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition)

  non-null

  The fields defined for this object type.

* has​Thumbnail​Field

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether this metaobject definition has field whose type can visually represent a metaobject with the `thumbnailField`.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metaobjects

  [Metaobject​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection)

  non-null

  A paginated connection to the metaobjects associated with the definition.

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

* metaobjects​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The count of metaobjects created for the definition.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name.

* standard​Template

  [Standard​Metaobject​Definition​Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate)

  The standard metaobject template associated with the definition.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the object definition. Defines the namespace of associated metafields.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the metaobject definition was last updated.

***

## Map

### Fields and connections with this object

* [CollectionConditionMetaobjectMetafieldDefinition.metaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionMetaobjectMetafieldDefinition#field-CollectionConditionMetaobjectMetafieldDefinition.fields.metaobjectDefinition)
* [Metaobject.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.definition)
* [MetaobjectDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#returns-nodes)
* [MetaobjectDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge#field-MetaobjectDefinitionEdge.fields.node)

***

## Queries

* [metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinition)

  query

  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its global ID. Metaobject definitions provide the structure and fields for metaobjects.

  The definition includes field configurations, access settings, display preferences, and capabilities that determine how [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) of this type behave across the Shopify platform.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to return.

  ***

* [metaobject​Definition​By​Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitionByType)

  query

  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its type. The type serves as a unique identifier that distinguishes one metaobject definition from another.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to return.

  ***

* [metaobject​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions)

  query

  Returns a paginated list of all [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) objects configured for the store. Metaobject definitions provide the schema for creating custom data structures composed of individual fields. Each definition specifies the field types, access permissions, and capabilities for [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of that type. Use this query to discover available metaobject types before creating or querying metaobject entries.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

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

***

## MetaobjectDefinition Queries

### Queried by

* [metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinition)
* [metaobject​Definition​By​Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitionByType)
* [metaobject​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions)

***

## Mutations

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)

  mutation

  Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types, and access permissions that all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of this type share.

  Use the `type` field to create a unique namespace for your metaobjects. Prefix the type with `$app:` to reserve the definition for your app's exclusive use. The definition can include capabilities like publishable status or translation eligibility, to extend how metaobjects integrate with Shopify's features.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * definition

    [Metaobject​Definition​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput)

    required

    ### Arguments

    The input fields for creating a metaobject definition.

  ***

* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)

  mutation

  Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure. You can modify the definition's name, description, display name key, access controls, and capabilities, as well as those of all its fields.

  The mutation supports reordering fields when `resetFieldOrder` is `true`, which arranges submitted fields first followed by alphabetized omitted fields.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * definition

    [Metaobject​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput)

    required

    ### Arguments

    The input fields for updating a metaobject definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the metaobject definition to update.

  ***

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

  mutation

  Enables the specified standard metaobject definition from its template.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to enable.

  ***

***

## MetaobjectDefinition Mutations

### Mutated by

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)
* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)
* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## MetaobjectDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
