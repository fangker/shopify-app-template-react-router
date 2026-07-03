---
title: BulkOperation - GraphQL Admin
description: >-
  An asynchronous operation that exports large datasets or imports data in bulk.

  Create bulk operations using
  [bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

  to export data or
  [bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

  to import data.


  After creation, check the
  [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status)

  field to track progress. When completed, the
  [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url)

  field contains a link to download results in [JSONL](http://jsonlines.org/)
  format. The
  [`objectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount)

  field shows the running total of processed objects, while
  [`rootObjectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount)

  tracks only root-level objects in nested queries.


  If an operation fails but retrieves partial data, then the
  [`partialDataUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl)

  field provides access to incomplete results.


  > Note: `url` and `partialDataUrl` values expire after seven days.


  Learn more about

  [exporting](https://shopify.dev/docs/api/usage/bulk-operations/queries) and

  [importing](https://shopify.dev/docs/api/usage/bulk-operations/imports) data
  in bulk.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Bulk​Operation

object

Requires Only accessible by supported access tokens: <https://shopify.dev/docs/api/usage/bulk-operations/queries#access-token-considerations>.

An asynchronous operation that exports large datasets or imports data in bulk. Create bulk operations using [bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) to export data or [bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) to import data.

After creation, check the [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status) field to track progress. When completed, the [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url) field contains a link to download results in [JSONL](http://jsonlines.org/) format. The [`objectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount) field shows the running total of processed objects, while [`rootObjectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount) tracks only root-level objects in nested queries.

If an operation fails but retrieves partial data, then the [`partialDataUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl) field provides access to incomplete results.

***

**Note:** \<code>url\</code> and \<code>\<span class="PreventFireFoxApplyingGapToWBR">partial\<wbr/>Data\<wbr/>Url\</span>\</code> values expire after seven days.

***

Learn more about [exporting](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [importing](https://shopify.dev/docs/api/usage/bulk-operations/imports) data in bulk.

## Fields

* completed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  When the bulk operation was successfully completed.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  When the bulk operation was created.

* error​Code

  [Bulk​Operation​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationErrorCode)

  Error code for failed operations.

* file​Size

  [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  File size in bytes of the file in the `url` field.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* object​Count

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  A running count of all the objects processed. For example, when fetching all the products and their variants, this field counts both products and variants. This field can be used to track operation progress.

* partial​Data​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL that points to the partial or incomplete response data (in [JSONL](http://jsonlines.org/) format) that was returned by a failed operation. The URL expires 7 days after the operation fails. Returns `null` when there's no data available.

* query

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  GraphQL query document specified in `bulkOperationRunQuery`.

* root​Object​Count

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  A running count of all the objects that are processed at the root of the query. For example, when fetching all the products and their variants, this field only counts products. This field can be used to track operation progress.

* status

  [Bulk​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationStatus)

  non-null

  Status of the bulk operation.

* type

  [Bulk​Operation​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType)

  non-null

  The bulk operation's type.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL that points to the response data in [JSONL](http://jsonlines.org/) format. The URL expires 7 days after the operation completes.

***

## Map

### Fields and connections with this object

* [BulkOperationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-nodes)
* [BulkOperationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationEdge#field-BulkOperationEdge.fields.node)

***

## Queries

* [bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperation)

  query

  Returns a `BulkOperation` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `BulkOperation` to return.

  ***

* [bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

  query

  Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created\_at, with newest operations first.

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

    * created\_at

      time

      Filter operations created after a specific date.

    * * id

        id

      * operation\_type

        string

      * status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter operations by type.

      - Valid values:

        * `query`
        * `mutation`

        Filter operations by status.

        Valid values:

        * `canceled`
        * `canceling`
        * `completed`
        * `created`
        * `failed`
        * `running`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Bulk​Operations​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [current​Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation)

  query

  Deprecated

  * type

    [Bulk​Operation​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType)

    Default:QUERY

    ### Arguments

    The current bulk operation's type.

  ***

***

## BulkOperation Queries

### Queried by

* [bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperation)
* [bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

***

## Mutations

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

  mutation

  Starts the cancelation process of a running bulk operation.

  There may be a short delay from when a cancelation starts until the operation is actually canceled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the bulk operation to cancel.

  ***

* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutation executes a specified GraphQL mutation multiple times using input data from a [JSONL](http://jsonlines.org/) file that you've uploaded to Shopify.

  The operation processes each line in your JSONL file as a separate mutation execution. The operation delivers results in a JSONL file when it completes. Bulk mutation operations and [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery) operations can run at the same time per shop. The number of concurrent operations that an app can run depends on the API version. For the applicable concurrency limits, refer to the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/imports).

  Learn more about [bulk importing data](https://shopify.dev/docs/api/usage/bulk-operations/imports).

  * client​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    An optional identifier which may be used for querying.

  * group​Objects

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * mutation

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The mutation to be executed in bulk.

  * staged​Upload​Path

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The staged upload path of the file containing mutation variables.

  ***

* [bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

  Bulk query and bulk mutation operations can run at the same time per shop. The number of concurrent operations that an app can run depends on the API version. For the applicable concurrency limits, refer to the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries). The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

  ***

  **Note:** Results remain available for seven days after completion.

  ***

  For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

  * group​Objects

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    requiredDefault:false

    ### Arguments

    Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The query to be executed in bulk.

  ***

***

## BulkOperation Mutations

### Mutated by

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)
* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)
* [bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## BulkOperation Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
