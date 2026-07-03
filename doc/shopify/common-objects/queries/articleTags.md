---
title: articleTags - GraphQL Admin
description: List of all article tags.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/articleTags'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/articleTags.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# article​Tags

query

Requires `read_content` access scope or `read_online_store_pages` access scope.

List of all article tags.

## Arguments

* limit

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  required

  The maximum number of tags to return.

* sort

  [Article​Tag​Sort](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleTagSort)

  Default:ALPHABETICAL

  Type of sort order.

***

## Possible returns

* String

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

***

## Examples

* ### Retrieves a list of all article tags

  #### Query

  ```graphql
  query ArticleTagsList {
    articleTags(limit: 10, sort: ALPHABETICAL)
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query ArticleTagsList { articleTags(limit: 10, sort: ALPHABETICAL) }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query ArticleTagsList {
      articleTags(limit: 10, sort: ALPHABETICAL)
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
    query ArticleTagsList {
      articleTags(limit: 10, sort: ALPHABETICAL)
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query ArticleTagsList {
      articleTags(limit: 10, sort: ALPHABETICAL)
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query ArticleTagsList {
    articleTags(limit: 10, sort: ALPHABETICAL)
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query ArticleTagsList {
          articleTags(limit: 10, sort: ALPHABETICAL)
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
    "articleTags": [
      "alpha",
      "important",
      "not_alpha"
    ]
  }
  ```
