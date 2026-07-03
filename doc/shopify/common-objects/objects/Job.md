---
title: Job - GraphQL Admin
description: >-
  A job corresponds to some long running task that the client should poll for
  status.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Job'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Job.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Job

object

A job corresponds to some long running task that the client should poll for status.

## Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

* query

  [Query​Root](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot)

  This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job.

***

## Map

### Fields with this object

* [CollectionDuplicateOperation.job](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateOperation#field-CollectionDuplicateOperation.fields.job)

***

## Queries

* [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)

  query

  Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the job to query.

  ***

***

## Job Queries

### Queried by

* [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)

***

## Mutations

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

  mutation

  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  An existing collection ID and new title are required.

  ## Publication Duplication

  Publications may be excluded by passing `copyPublications: false` in the input.

  ## Metafields

  Metafield values are not duplicated if the unique values capability is enabled.

  * input

    [Collection​Duplicate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput)

    required

    ### Arguments

    The input for duplicating a collection.

  ***

* [collection​Reorder​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionReorderProducts)

  mutation

  Asynchronously reorders products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`.

  How to use this mutation:

  * Provide only the products that actually moved in the `moves` list; do not send the entire product list. For example: to move the product at index 1 to index N, send a single move for that product with `newPosition: N`.
  * Each move is applied sequentially in the order provided.
  * `newPosition` is a zero-based index within the collection at the moment the move is applied (after any prior moves in the list).
  * Products not included in `moves` keep their relative order, aside from any displacement caused by the moves.
  * If `newPosition` is greater than or equal to the number of products, the product is placed at the end.

  Example:

  * Initial order: \[A, B, C, D, E] (indices 0..4)
  * Moves (applied in order):
  * E -> newPosition: 1
  * C -> newPosition: 4
  * Result: \[A, E, B, D, C]

  Displaced products will have their position altered in a consistent manner with no gaps.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection on which to reorder products.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform, evaluated in order. Provide only products whose positions changed; do not send the full list. `newPosition` is a zero-based index evaluated at the time each move is applied (after any prior moves). `newPosition` values do not need to be unique, and if a value is greater than or equal to the number of products, the product is moved to the end. Up to 250 moves are supported.

  ***

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

  mutation

  Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

  * Updating collection details, like title, description, or image
  * Modifying SEO metadata for better search visibility
  * Changing which products are included in a collection by updating its rules, sources, or conditions
  * Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

  Collections can include products manually and can also include products automatically based on rules, sources, or conditions. When product membership is updated through rules, sources, or conditions, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

  To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

  Learn more about [using metafields with collection conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * collection

    [Collection​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUpdateInput)

    ### Arguments

    The properties and sources to use when updating the collection.

  * input

    [Collection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    Deprecated

  ***

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

  mutation

  Merges two customers.

  The `customerOneId` and `customerTwoId` arguments don't guarantee which customer is kept. Shopify selects the resulting customer in this order:

  1. If `overrideFields.customerIdOfEmailToKeep` is provided and valid, then the selected customer is kept.
  2. If exactly one customer has an email address, then that customer is kept.
  3. If both customers have email addresses, then account state and email marketing consent determine the customer that's kept: an `enabled` account wins over other account states; otherwise, an `invited` account can win when consent doesn't already prefer `subscribed` or `pending`; otherwise the consent result is used. If those rules don't prefer either customer, then `customerTwoId` is kept.
  4. If neither customer has an email address, then `customerTwoId` is kept.

  Use `customerMergePreview` and `resultingCustomerId` to check which customer will be kept before merging.

  * customer​One​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of one customer to merge. This customer isn't guaranteed to be kept.

  * customer​Two​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of another customer to merge. This customer is kept when neither customer has an email address.

  * override​Fields

    [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

    The field-specific overrides for default customer merge rules.

  ***

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)

  mutation

  Enqueue the removal of a delivery profile.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to remove.

  ***

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)

  mutation

  Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This mutation processes deletions asynchronously to handle large volumes without blocking other operations.

  For example, when cleaning up expired seasonal promotions or removing outdated automatic discounts across product categories, merchants can delete dozens of discounts simultaneously rather than processing each individually.

  Use `DiscountAutomaticBulkDelete` to:

  * Remove multiple automatic discounts efficiently
  * Clean up expired or obsolete promotions
  * Streamline discount management workflows
  * Process large-scale discount removals asynchronously

  The operation returns a job object for tracking deletion progress and any validation errors encountered during processing.

  Learn more about [discount management](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomatic).

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the automatic discounts to delete.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search to use for filtering automatic discounts to delete.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering automatic discounts to delete.

    For more information on the list of supported fields and search syntax, refer to the [AutomaticDiscountNodes query section](https://shopify.dev/api/admin-graphql/latest/queries/automaticDiscountNodes#argument-automaticdiscountnodes-query).

  ***

* [discount​Bulk​Tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd)

  mutation

  Adds tags to multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount IDs

  For example, you can add tags to price rules that match a search criteria, or add tags to a predefined set of price rules.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the discounts to tag.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to tag.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The tags to add to the discounts.

  ***

* [discount​Bulk​Tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove)

  mutation

  Removes tags from multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount IDs

  For example, you can delete tags from price rules that match a search criteria, or delete tags from a predefined set of price rules.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the discounts to untag.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to remove tags from.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The tags to remove from the discounts.

  ***

* [discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)

  mutation

  Activates multiple [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can activate discounts for all codes that match a search criteria, or activate a predefined set of discount codes.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the discounts to activate.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to activate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  ***

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)

  mutation

  Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the discounts to deactivate.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to deactivate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  ***

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)

  mutation

  Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the discounts to delete.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to delete. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  ***

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)

  mutation

  Asynchronously delete [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be removed from. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the [`DiscountRedeemCode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode#field-id) objects to delete. For example, `gid://shopify/DiscountRedeemCode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch#field-id).

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators that you can use to search for code discounts. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

    For a list of accepted values for the `search` field, refer to the [`query` argument on the `codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#argument-query).

  ***

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)

  mutation

  Adds tags to multiple draft orders.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the draft orders to add tags to.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be added.

  ***

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)

  mutation

  Deletes multiple draft orders.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the draft orders to delete.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  ***

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)

  mutation

  Removes tags from multiple draft orders.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The IDs of the draft orders to remove tags from.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be removed.

  ***

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)

  mutation

  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

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

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)

  mutation

  Asynchronously delete metaobjects and their associated metafields in bulk.

  * where

    [Metaobject​Bulk​Delete​Where​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

    required

    ### Arguments

    Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

  ***

* [order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel)

  mutation

  Cancels an order, with options for refunding, restocking inventory, and customer notification.

  ***

  **Caution:** Order cancellation is irreversible. An order that has been cancelled can\&#39;t be restored to its original state.

  ***

  Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

  * Customer-requested cancellations due to size, color, or other preference changes
  * Payment processing failures or declined transactions
  * Fraud detection and prevention
  * Insufficient inventory availability
  * Staff errors in order processing
  * Wholesale or B2B order management workflows

  The `orderCancel` mutation provides flexible refund options including refunding to original payment methods or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged, that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

  The mutation supports different cancellation reasons: customer requests, payment declines, fraud, inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional staff notes for internal documentation (notes aren't visible to customers).

  An order can only be cancelled if it meets the following criteria:

  * The order hasn't already been cancelled.
  * The order has no pending payment authorizations.
  * The order has no active returns in progress.
  * The order has no outstanding fulfillments that can't be cancelled.

  Orders might be assigned to locations that become [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations) after the order was created. When cancelling such orders, inventory behavior depends on payment status:

  * **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory can't be returned to deactivated locations.
  * **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the restock option is enabled. The committed inventory effectively becomes unavailable rather than being returned to stock at the deactivated location.

  After you cancel an order, you can still make limited updates to certain fields (like notes and tags) using the [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

  For partial refunds or more complex refund scenarios on active orders, such as refunding only specific line items while keeping the rest of the order fulfilled, consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation instead of full order cancellation.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to send a notification to the customer about the order cancellation.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the order to be canceled.

  * reason

    [Order​Cancel​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

    required

    The reason for canceling the order.

  * refund

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * refund​Method

    [Order​Cancel​Refund​Method​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput)

    Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.

  * restock

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.

  * staff​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:null

    A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

  ***

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

  mutation

  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

  The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

  Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    ### Arguments

    The payment amount to collect.

  * auto​Capture

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the payment should be authorized or captured. If `false`, then the authorization of the payment is triggered.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the order to collect the balance for.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique key to identify the payment request.

  * mandate​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The mandate ID used for payment.

  * payment​Schedule​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the payment schedule to collect the balance for.

  ***

* [payment​Schedule​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture)

  mutation

  Captures payment for a due [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule) using the vaulted payment method associated with the order.

  The mutation resolves the order and mandate from the given payment schedule, then initiates an asynchronous payment capture. Use the returned `jobResult` to poll for the status of the payment capture.

  * payment​Schedule​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the payment schedule to capture payment for.

  ***

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

  mutation

  Duplicates a product.

  If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

  To avoid these timeout errors, you can instead duplicate the product asynchronously.

  In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

  In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

  Metafield values are not duplicated if the unique values capability is enabled.

  * include​Images

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Specifies whether or not to duplicate images.

  * include​Translations

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate translations.

  * new​Status

    [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    The new status of the product. If no value is provided the status will be inherited from the original product.

  * new​Title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The new title of the product.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product to be duplicated.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)

  mutation

  Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

  Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

  ***

  **Note:** Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

  ***

  The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

  Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product on which to reorder medias.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform which will be evaluated in order.

  ***

* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)

  mutation

  Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * actor

    [Subscription​Actor](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionActor)

    ### Arguments

    The actor who initiated a subscription action.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  * payment​Processing​Policy

    [Subscription​Billing​Attempt​Payment​Processing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptPaymentProcessingPolicy)

    Default:FAIL\_UNLESS\_VALID\_PAYMENT\_METHOD

    Selected payment processing policy for the billing attempt. Defaults to FAIL\_UNLESS\_VALID\_PAYMENT\_METHOD.

  ***

* [subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)

  mutation

  Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  ***

* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

  mutation

  Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or overwriting existing ones with the same filename.

  ***

  **Note:** You can process a maximum of 50 files in a single request.

  ***

  Each file requires a filename and body content. The body must specify a [`type`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.type) with the corresponding [`value`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.value). The mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-job) field for tracking asynchronous operations and an [`upsertedThemeFiles`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-upsertedThemeFiles) field with details about the processed files.

  * files

    [\[Online​Store​Theme​Files​Upsert​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeFilesUpsertFileInput)

    required

    ### Arguments

    The files to update.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The theme to update.

  ***

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)

  mutation

  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

  mutation

  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

  ***

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

  mutation

  Asynchronously delete redirects in bulk.

  * saved​Search​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect saved search for filtering.

  ***

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

  mutation

  Asynchronously delete redirects in bulk.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Search query for filtering redirects on (both Redirect from and Redirect to fields).

  ***

* [url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

  mutation

  Submits a `UrlRedirectImport` request to be processed.

  The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  ***

### Deprecated mutations

* [collection​Add​Products​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProductsV2)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If the collection's sort order is manual, the products will be added in the order in which they are provided.

  ***

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection to remove products from. The ID must reference an existing collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

  ***

***

## Job Mutations

### Mutated by

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)
* [collection​Reorder​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionReorderProducts)
* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)
* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)
* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)
* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)
* [discount​Bulk​Tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd)
* [discount​Bulk​Tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove)
* [discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)
* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)
* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)
* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)
* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)
* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)
* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)
* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)
* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)
* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)
* [order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel)
* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)
* [payment​Schedule​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentScheduleCapture)
* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)
* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)
* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)
* [subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)
* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)
* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)
* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)
* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)
* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)
