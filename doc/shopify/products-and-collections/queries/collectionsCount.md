---
title: collectionsCount - GraphQL Admin
description: Count of collections. Limited to a maximum of 10000 by default.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsCount'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsCount.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# collections​Count

query

Requires `read_products` access scope.

Count of collections. Limited to a maximum of 10000 by default.

## Arguments

* limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:10000

  The upper bound on count value before returning a result. Use `null` to have no limit.

* query

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

  * * default

      string

    * collection\_type

      string

    * handle

      string

    - Filter by a case-insensitive search of multiple fields in a document.

    - Example:
      * `query=Bob Norman`
      * `query=title:green hoodie`

    - Valid values:
      * `custom`
      * `smart`

  * * id

      id

    * product\_id

      id

    - Filter by `id` range.

    - Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

      Filter by collections containing a product by its ID.

  * * product\_publication\_status

      string

    * publishable\_status

      string

    * published\_at

      time

    - Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

    - Valid values:

      * `* {channel_app_id}-approved`
      * `* {channel_app_id}-rejected`
      * `* {channel_app_id}-needs_action`
      * `* {channel_app_id}-awaiting_review`
      * `* {channel_app_id}-published`
      * `* {channel_app_id}-demoted`
      * `* {channel_app_id}-scheduled`
      * `* {channel_app_id}-provisionally_published`

      Example:

      * `product_publication_status:189769876-approved`

      **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

    - Valid values:

      * `* {channel_app_id}-unset`
      * `* {channel_app_id}-pending`
      * `* {channel_app_id}-approved`
      * `* {channel_app_id}-not_approved`

      Example:

      * `publishable_status:580111-unset`
      * `publishable_status:580111-pending`

      Filter by the date and time when the collection was published to the Online Store.

  * * published\_status

      string

    * title

      string

    - Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

    - Valid values:
      * `online_store_channel`
      * `published`
      * `visible`
      * `unpublished`
      * `* {channel_id_or_handle}-published`
      * `* {channel_id_or_handle}-visible`
      * `* {channel_id_or_handle}-intended`
      * `* {channel_id_or_handle}-hidden`
      * `* {channel_app_id_or_handle}-published`
      * `* {channel_app_id_or_handle}-visible`
      * `* {channel_app_id_or_handle}-intended`
      * `* {channel_app_id_or_handle}-hidden`
      * `unavailable`
      Example:
      * `published_status:online_store_channel`
      * `published_status:published`
      * `published_status:580111-published`
      * `published_status:580111-hidden`
      * `published_status:my-channel-handle-published`
      * `published_status:unavailable`

  * updated\_at

    time

* saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

***

## Possible returns

* Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A numeric count with precision information indicating whether the count is exact or an estimate.

  * count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The count of elements.

  * precision

    [Count​Precision!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision)

    non-null

    The count's precision, or the exactness of the value.

***

## Examples

* ### Retrieves a count of custom collections

  #### Query

  ```graphql
  query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query CollectionsCount { collectionsCount(query: \"collection_type:custom\") { count } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query CollectionsCount {
      collectionsCount(query: "collection_type:custom") {
        count
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query CollectionsCount {
      collectionsCount(query: "collection_type:custom") {
        count
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query CollectionsCount {
      collectionsCount(query: "collection_type:custom") {
        count
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query CollectionsCount {
          collectionsCount(query: "collection_type:custom") {
            count
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collectionsCount": {
      "count": 8
    }
  }
  ```

* ### Retrieves a count of smart collections

  #### Query

  ```graphql
  query CollectionsCount {
    collectionsCount(query: "collection_type:smart") {
      count
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query CollectionsCount { collectionsCount(query: \"collection_type:smart\") { count } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query CollectionsCount {
      collectionsCount(query: "collection_type:smart") {
        count
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query CollectionsCount {
      collectionsCount(query: "collection_type:smart") {
        count
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query CollectionsCount {
      collectionsCount(query: "collection_type:smart") {
        count
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query CollectionsCount {
    collectionsCount(query: "collection_type:smart") {
      count
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query CollectionsCount {
          collectionsCount(query: "collection_type:smart") {
            count
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collectionsCount": {
      "count": 10
    }
  }
  ```
