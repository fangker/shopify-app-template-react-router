---
title: MetafieldDefinition - GraphQL Admin
description: >-
  Defines the structure, validation rules, and permissions for
  [`Metafield`](/docs/api/admin-graphql/2026-07/objects/Metafield)

  objects attached to a specific owner type. Each definition establishes a
  schema

  that metafields must follow, including the data type and validation
  constraints.


  The definition controls access permissions across different APIs, determines

  whether the metafield can be used for filtering or as a collection condition,

  and can be constrained to specific resource subtypes.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Definition

object

Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

## Fields

* access

  [Metafield​Access!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess)

  non-null

  The access settings associated with the metafield definition.

* capabilities

  [Metafield​Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities)

  non-null

  The capabilities of the metafield definition.

* constraints

  [Metafield​Definition​Constraints](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints)

  The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what subtypes of resources a metafield definition applies to.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the metafield definition.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace.

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  The metafields that belong to the metafield definition.

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

  * validation​Status

    [Metafield​Validation​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValidationStatus)

    Default:ANY

    Returns the metafields filtered by the validation status.

  ***

* metafields​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The count of the metafields that belong to the metafield definition.

  * validation​Status

    [Metafield​Validation​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValidationStatus)

    ### Arguments

    The current validation status.

  ***

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name of the metafield definition.

* namespace

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The container for a group of metafields that the metafield definition is associated with.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The resource type that the metafield definition is attached to.

* pinned​Position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The position of the metafield definition in the pinned list.

* standard​Template

  [Standard​Metafield​Definition​Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate)

  The standard metafield definition template associated with the metafield definition.

* type

  [Metafield​Definition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

  non-null

  The type of data that each of the metafields that belong to the metafield definition will store. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

* use​As​Collection​Condition

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the metafield definition can be used as a collection condition.

* validations

  [\[Metafield​Definition​Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

  non-null

  A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the metafields that belong to the metafield definition. For example, for a metafield definition with the type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only store dates after the specified minimum.

* validation​Status

  [Metafield​Definition​Validation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionValidationStatus)

  non-null

  The validation status for the metafields that belong to the metafield definition.

***

## Map

### Fields and connections with this object

* [CollectionRuleMetafieldCondition.metafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition#field-CollectionRuleMetafieldCondition.fields.metafieldDefinition)
* [CollectionSourceInclusionConditionMetafield.definition](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CollectionSourceInclusionConditionMetafield#fields-definition)
* [CollectionSourceInclusionConditionMetafieldBoolean.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldBoolean#field-CollectionSourceInclusionConditionMetafieldBoolean.fields.definition)
* [CollectionSourceInclusionConditionMetafieldDecimal.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldDecimal#field-CollectionSourceInclusionConditionMetafieldDecimal.fields.definition)
* [CollectionSourceInclusionConditionMetafieldInteger.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldInteger#field-CollectionSourceInclusionConditionMetafieldInteger.fields.definition)
* [CollectionSourceInclusionConditionMetafieldMetaobject.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldMetaobject#field-CollectionSourceInclusionConditionMetafieldMetaobject.fields.definition)
* [CollectionSourceInclusionConditionMetafieldMetaobjectList.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldMetaobjectList#field-CollectionSourceInclusionConditionMetafieldMetaobjectList.fields.definition)
* [CollectionSourceInclusionConditionMetafieldString.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldString#field-CollectionSourceInclusionConditionMetafieldString.fields.definition)
* [CollectionSourceInclusionConditionMetafieldStringList.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSourceInclusionConditionMetafieldStringList#field-CollectionSourceInclusionConditionMetafieldStringList.fields.definition)
* [Metafield.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.definition)
* [MetafieldDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-nodes)
* [MetafieldDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionEdge#field-MetafieldDefinitionEdge.fields.node)

***

## Queries

* [metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinition)

  query

  Retrieves a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MetafieldDefinition) by its identifier. You can identify a definition using either its owner type, namespace, and key, or its global ID.

  Use this query to inspect a definition's configuration, including its data type, validations, access settings, and the count of [metafields](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/Metafield) using it.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the MetafieldDefinition to return.

  ***

* [metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

  query

  Returns a list of metafield definitions.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter metafield definitions based on whether they are constrained.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    Filter metafield definitions based on whether they apply to a given resource subtype.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definition by key.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definition by namespace.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    Filter the metafield definition by the specific owner type.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter the metafield definition by the pinned status.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * key

        string

      * namespace

        string

      * owner\_type

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the metafield definition was created.

      - Example:

        * `created_at:>2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

      - Example:

        * `key:some-key`

        Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

      - Example:

        * `namespace:some-namespace`

        Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

      - Example:

        * `owner_type:PRODUCT`

        Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

      - Example:

        * `type:single_line_text_field`

        Filter by the date and time when the metafield definition was last updated.

        Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## MetafieldDefinition Queries

### Queried by

* [metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinition)
* [metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

***

## Mutations

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

  mutation

  Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MetafieldDefinition) that establishes structure and validation rules for metafields. The definition specifies the data type, validation constraints, and access permissions for metafields with a given namespace and key combination.

  When you create a new definition, the system validates any existing unstructured metafields matching the same owner type, namespace, and key against it. The system updates each valid metafield's type to match the definition. Invalid metafields remain unchanged but must conform to the definition when updated.

  Learn more about [creating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput)

    required

    ### Arguments

    Specifies the input fields for a metafield definition.

  ***

* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to pin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to pin.

  ***

* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the metafield definition to unpin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to unpin.

  ***

* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

  mutation

  Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-07/objects/MetafieldDefinition)'s configuration and settings. You can modify the definition's name, description, validation rules, access settings, capabilities, and constraints.

  The mutation updates access settings that control visibility across different APIs, such as the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Storefront API](https://shopify.dev/docs/api/storefront), and [Customer Account API](https://shopify.dev/docs/api/customer). It also enables capabilities like admin filtering or unique value validation, and modifies constraints that determine which resource subtypes the definition applies to.

  ***

  **Note:** The type, namespace, key, and owner type identify the definition and so can\&#39;t be changed.

  ***

  Learn more about [updating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput)

    required

    ### Arguments

    The input fields for the metafield definition update.

  ***

* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

  mutation

  Activates the specified standard metafield definition from its template.

  Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

  * access

    [Standard​Metafield​Definition​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

    ### Arguments

    The access settings that apply to each of the metafields that belong to the metafield definition.

  * capabilities

    [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

    The capabilities of the metafield definition.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the standard metafield definition template to enable.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of the standard metafield to enable. Used in combination with `namespace`.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The namespace of the standard metafield to enable. Used in combination with `key`.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    The resource type that the metafield definition is scoped to.

  * pin

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:null

    Whether to pin the metafield definition.

  * use​As​Collection​Condition

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * visible​To​Storefront​Api

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  ***

***

## MetafieldDefinition Mutations

### Mutated by

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)
* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)
* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)
* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)
* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## MetafieldDefinition Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
