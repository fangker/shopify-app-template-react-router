---
title: Translation - GraphQL Admin
description: >-
  A localized version of a field on a resource. Translations enable merchants to

  provide content in multiple languages for

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  objects,
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  objects, and other store resources.


  Each translation specifies the locale, the field being translated (identified
  by

  its key), and the translated value. Translations can be market-specific,

  allowing different content for the same language across different markets, or

  available globally when no

  [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)
  is

  specified. The `outdated` flag indicates whether the original content has

  changed since this translation was last updated.


  Learn more about [managing translated
  content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Translation

object

A localized version of a field on a resource. Translations enable merchants to provide content in multiple languages for [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other store resources.

Each translation specifies the locale, the field being translated (identified by its key), and the translated value. Translations can be market-specific, allowing different content for the same language across different markets, or available globally when no [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) is specified. The `outdated` flag indicates whether the original content has changed since this translation was last updated.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  On the resource that this translation belongs to, the reference to the value being translated.

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  ISO code of the translation locale.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market that the translation is specific to. Null value means the translation is available in all markets.

* outdated

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the original content has changed since this translation was updated.

* updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the translation was updated.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Translation value.

***

## Map

### Fields with this object

* [Article.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.translations)
* [Blog.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.translations)
* [Collection.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.translations)
* [CookieBanner.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner#field-CookieBanner.fields.translations)
* [HasPublishedTranslations.translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations#fields-translations)
* [Image.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.translations)
* [Link.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Link#field-Link.fields.translations)
* [MediaImage.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.translations)
* [Menu.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu#field-Menu.fields.translations)
* [Metafield.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.translations)
* [OnlineStoreTheme.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations)
* [Page.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.translations)
* [Product.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.translations)
* [ProductOption.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption#field-ProductOption.fields.translations)
* [ProductOptionValue.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-ProductOptionValue.fields.translations)
* [ProductVariant.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.translations)
* [SellingPlan.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.translations)
* [SellingPlanGroup.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.translations)
* [Shop.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.translations)
* [ShopPolicy.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.translations)
* [TranslatableResource.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.translations)

***

## Mutations

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

  mutation

  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

  Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

  Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the resource that is being translated.

  * translations

    [\[Translation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

    required

    Specifies the input fields for a translation.

  ***

* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

  mutation

  Deletes translations.

  * locales

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The list of translation locales. Only locales returned in `shopLocales` are valid.

  * market​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of market IDs.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the translatable resource for which translations are being deleted.

  * translation​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation keys.

  ***

***

## Translation Mutations

### Mutated by

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)
* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)
