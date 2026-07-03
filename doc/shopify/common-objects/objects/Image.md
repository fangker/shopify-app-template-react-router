---
title: Image - GraphQL Admin
description: Represents an image resource.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Image'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Image.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Image

object

Represents an image resource.

## Fields

* alt​Text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to share the nature or contents of an image.

* height

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A unique ID for the image.

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

* thumbhash

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ThumbHash of the image.

  Useful to display placeholder images while the original image is loading.

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

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The location of the image as a URL.

  If no transform options are specified, then the original image will be preserved including any pre-applied transforms.

  All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.

  If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).

  * transform

    [Image​Transform​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ImageTransformInput)

    ### Arguments

    A set of options to transform the original image.

  ***

* width

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

### Deprecated fields

* original​Src

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

* src

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

* transformed​Src

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-nullDeprecated

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    ### Arguments

    Crops the image according to the specified region.

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Image height in pixels between 1 and 5760.

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Image width in pixels between 1 and 5760.

  * preferred​Content​Type

    [Image​Content​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ImageContentType)

    Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported).

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:1

    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.

  ***

***

## Map

### Fields and connections with this object

* [AbandonedCheckoutLineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.image)
* [AbandonedCheckoutLineItemComponent.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent#field-AbandonedCheckoutLineItemComponent.fields.image)
* [App.banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.banner)
* [App.icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.icon)
* [App.screenshots](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.screenshots)
* [Article.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.image)
* [CalculatedDraftOrderLineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.image)
* [CalculatedLineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.image)
* [CheckoutAndAccountsConfigurationBrandingImage.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingImage#field-CheckoutAndAccountsConfigurationBrandingImage.fields.image)
* [CheckoutBrandingHeaderCartLink.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeaderCartLink#field-CheckoutBrandingHeaderCartLink.fields.image)
* [CheckoutBrandingImage.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingImage#field-CheckoutBrandingImage.fields.image)
* [CheckoutBrandingLogo.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo#field-CheckoutBrandingLogo.fields.image)
* [Collection.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.image)
* [CommentEventAttachment.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment#field-CommentEventAttachment.fields.image)
* [Customer.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.image)
* [DeliveryCarrierService.icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService#field-DeliveryCarrierService.fields.icon)
* [DiscountShareableUrl.targetItemImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl#field-DiscountShareableUrl.fields.targetItemImage)
* [DraftOrderLineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.image)
* [FulfillmentOrderLineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.image)
* [ImageConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-nodes)
* [ImageEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageEdge#field-ImageEdge.fields.node)
* [LineItem.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.image)
* [MediaImage.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.image)
* [MediaPreviewImage.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage#field-MediaPreviewImage.fields.image)
* [OrderApp.icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp#field-OrderApp.fields.icon)
* [OrderTransaction.paymentIcon](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentIcon)
* [PriceRuleShareableUrl.targetItemImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl#field-PriceRuleShareableUrl.fields.targetItemImage)
* [SearchResult.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResult#field-SearchResult.fields.image)
* [StaffMember.avatar](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.avatar)
* [SubscriptionLine.variantImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.variantImage)

***

## Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

    interface

***

## Image Implements

### Implements

* [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* [Has​Published​Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
