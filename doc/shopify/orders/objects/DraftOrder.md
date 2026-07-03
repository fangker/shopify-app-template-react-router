---
title: DraftOrder - GraphQL Admin
description: >-
  An order that a merchant creates on behalf of a customer. Draft orders are

  useful for merchants that need to do the following tasks:


  - Create new orders for sales made by phone, in person, by chat, or elsewhere.

  When a merchant accepts payment for a draft order, an order is created.

  - Send invoices to customers to pay with a secure checkout link.

  - Use custom items to represent additional costs or products that aren't
  displayed in a shop's inventory.

  - Re-create orders manually from active sales channels.

  - Sell products at discount or wholesale rates.

  - Take pre-orders.


  For draft orders in multiple currencies `presentment_money` is the source of

  truth for what a customer is going to be charged and `shop_money` is an
  estimate

  of what the merchant might receive in their shop currency.


  **Caution:** Only use this data if it's required for your app's functionality.

  Shopify will restrict [access to

  scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have
  a

  legitimate use for the associated data.


  Draft orders created on or after April 1, 2025 will be automatically purged
  after one year of inactivity.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order

object

Requires `read_draft_orders` access scope or `read_quick_sale` access scope.

An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

* Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
* Send invoices to customers to pay with a secure checkout link.
* Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
* Re-create orders manually from active sales channels.
* Sell products at discount or wholesale rates.
* Take pre-orders.

For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

## Fields

* accept​Automatic​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

* allow​Discount​Codes​In​Checkout

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether discount codes are allowed during checkout of this draft order.

* all​Variant​Prices​Overridden

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether all variant prices have been overridden.

* amount​Due​Later​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount due later. When there are payment terms, this is the total price minus the deposit amount (if any). When there are no payment terms, this is 0.

* amount​Due​Now​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount due now. When there are payment terms this is the value of the deposit (0 by default). When there are no payment terms, this is the total price.

* any​Variant​Prices​Overridden

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether any variant prices have been overridden.

* applied​Discount

  [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

  The custom order-level discount applied.

* billing​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The billing address of the customer.

* billing​Address​Matches​Shipping​Address

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the billing address matches the shipping address.

* completed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the draft order was converted to a new order, and had it's status changed to **Completed**.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the draft order was created in Shopify.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The shop currency used for calculation.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  The custom information added to the draft order on behalf of the customer.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer who will be sent an invoice.

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* deposit

  [Deposit​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration)

  The portion required to be paid at checkout.

* discount​Codes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  All discount codes applied.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The email address of the customer, which is used to send notifications.

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The list of events associated with the draft order.

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

    * * action

        string

      * comments

        boolean

      * created\_at

        time

      * id

        id

      * subject\_type

        string

      - The action that occured.

      - Example:

        * `action:create`

        Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

      - Example:

        * `false`
        * `true`

        Filter by the date and time when the event occurred. Event data is retained for 1 year.

      - Example:

        * `created_at:>2025-10-21`
        * `created_at:<now`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

        Example:

        * `PRODUCT_VARIANT`
        * `PRODUCT`
        * `COLLECTION`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the merchant has added timeline comments to the draft order.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* invoice​Email​Template​Subject

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The subject defined for the draft invoice email template.

* invoice​Sent​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the invoice was last emailed to the customer.

* invoice​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The link to the checkout, which is sent to the customer in the invoice email.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* line​Items

  [Draft​Order​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection)

  non-null

  The list of the line items in the draft order.

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

* line​Items​Subtotal​Price

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  A subtotal of the line items and corresponding discounts, excluding shipping charges, shipping discounts, taxes, or order discounts.

* localized​Fields

  [Localized​Field​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

  non-null

  List of localized fields for the resource.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * country​Codes

    [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    The country codes of the extensions.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * purposes

    [\[Localized​Field​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldPurpose)

    The purpose of the extensions.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The key for the metafield.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

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

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The identifier for the draft order, which is unique within the store. For example, *#D1223*.

* note2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The text from an optional note attached to the draft order.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that was created from the draft order.

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The associated payment terms for this draft order.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The assigned phone number.

* platform​Discounts

  [\[Draft​Order​Platform​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount)

  non-null

  The list of platform discounts applied.

* po​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The purchase order number.

* presentment​Currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The payment currency used for calculation.

* purchasing​Entity

  [Purchasing​Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

  The purchasing entity.

* ready

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the draft order is ready and can be completed. Draft orders might have asynchronous operations that can take time to finish.

* reserve​Inventory​Until

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time after which inventory will automatically be restocked.

* shipping​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The shipping address of the customer.

* shipping​Line

  [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  The line item containing the shipping information and costs.

* status

  [Draft​Order​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderStatus)

  non-null

  The status of the draft order.

* subtotal​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The comma separated list of tags associated with the draft order. Updating `tags` overwrites any existing tags that were previously added to the draft order. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

* taxes​Included

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item prices include taxes.

* tax​Exempt

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the draft order is tax exempt.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  The list of of taxes lines charged for each line item and shipping line.

* total​Discounts​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Total discounts.

* total​Line​Items​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Total price of line items, excluding discounts.

* total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price, includes taxes, shipping charges, and discounts.

* total​Quantity​Of​Line​Items

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The sum of individual line item quantities. If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.

* total​Shipping​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total shipping price.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total tax.

* total​Weight

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The total weight in grams of the draft order.

* transformer​Fingerprint

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Fingerprint of the current cart. In order to have bundles work, the fingerprint must be passed to each request as it was previously returned, unmodified.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the draft order was last changed. The format is YYYY-MM-DD HH:mm:ss. For example, 2016-02-05 17:04:01.

* visible​To​Customer

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the draft order will be visible to the customer on the self-serve portal.

* warnings

  [\[Draft​Order​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

  non-null

  The list of warnings raised while calculating.

### Deprecated fields

* localization​Extensions

  [Localization​Extension​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

  non-nullDeprecated

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * country​Codes

    [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    The country codes of the extensions.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * purposes

    [\[Localization​Extension​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

    The purpose of the extensions.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* market​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

* market​Region​Country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-nullDeprecated

* subtotal​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Shipping​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Tax

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders)
* [CompanyContact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)
* [CompanyLocation.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)
* [CustomerMergePreviewDefaultFields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)
* [DraftOrderConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-nodes)
* [DraftOrderEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge#field-DraftOrderEdge.fields.node)
* [PaymentTerms.draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.draftOrder)

### Possible type in

* [Comment​Event​Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrder)

  query

  Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID. A draft order is an order created by a merchant on behalf of their customers. Draft orders contain all necessary order details (products, pricing, customer information) but require payment to be accepted before they can be converted into [completed orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete).

  Use the `draftOrder` query to retrieve information associated with the following workflows:

  * Creating orders for phone, in-person, or chat sales
  * Sending invoices to customers with secure checkout links
  * Managing custom items and additional costs
  * Selling products at discount or wholesale rates
  * Processing pre-orders and saving drafts for later completion

  A draft order is associated with a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and contains multiple [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem). Each draft order has a [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status), which indicates its progress through the sales workflow.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DraftOrder` to return.

  ***

* [draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

  query

  List of saved draft orders.

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

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * customer\_id

      id

    * * id

        id

      * source

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

    * tag

      string

    * updated\_at

      time

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Draft​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## DraftOrder Queries

### Queried by

* [draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrder)
* [draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

***

## Mutations

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

  mutation

  Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

  Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

  You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

  * Mark the order as paid immediately.
  * Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
  * Specify a custom payment amount.
  * Select a specific payment gateway.

  ***

  **Note:** When completing a draft order, inventory is \<a href="https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states">reserved\</a> for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The draft order to complete.

  * payment​Gateway​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The gateway for the completed draft order.

  * payment​Pending

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  * source​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A channel definition handle used for sales channel attribution.

  ***

* [draft​Order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)

  mutation

  Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers with a secure checkout link.
  * Use custom items to represent additional costs or products not in inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  After creating a draft order, you can:

  * Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
  * Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
  * Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
  * Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
  * Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

  ***

  **Note:** When you create a draft order, you can\&#39;t \<a href="https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states">reserve or hold inventory\</a> for the items in the order by default. However, you can reserve inventory using the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil">\<code>\<span class="PreventFireFoxApplyingGapToWBR">reserve\<wbr/>Inventory\<wbr/>Until\</span>\</code>\</a> input.

  ***

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields used to create the draft order.

  ***

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

  mutation

  Creates a draft order from order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the order's id that we create the draft order from.

  ***

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

  mutation

  Duplicates a draft order.

  * draft​Order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order to duplicate.

  ***

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

  mutation

  Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure checkout link for reviewing and paying for the order. Use the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend#arguments-email) argument to customize the email, such as the subject and message.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    ### Arguments

    Specifies the draft order invoice email fields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    Specifies the draft order to send the invoice for.

  ***

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

  mutation

  Updates a draft order.

  If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to update.

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    The draft order properties to update.

  ***

***

## DraftOrder Mutations

### Mutated by

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)
* [draft​Order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)
* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)
* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)
* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)
* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

***

## Interfaces

* * [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

    interface

  * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Has​Localization​Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)

    interface

  * [Has​Localized​Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## DraftOrder Implements

### Implements

* [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
* [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* [Has​Localization​Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)
* [Has​Localized​Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)
* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
