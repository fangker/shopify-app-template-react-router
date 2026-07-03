---
title: urlRedirect - GraphQL Admin
description: Returns a `UrlRedirect` resource by ID.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirect'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirect.md'
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# url​Redirect

query

Returns a `UrlRedirect` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `UrlRedirect` to return.

***

## Possible returns

* Url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  The URL redirect for the online store.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The ID of the URL redirect.

  * path

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The old path to be redirected from. When the user visits this path, they will be redirected to the target location.

  * target

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The target location where the user will be redirected to.

***

## Examples

* ### Retrieves a single redirect

  #### Query

  ```graphql
  query UrlRedirect($id: ID!) {
    urlRedirect(id: $id) {
      id
      path
      target
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/UrlRedirect/905192165"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query UrlRedirect($id: ID!) { urlRedirect(id: $id) { id path target } }",
   "variables": {
      "id": "gid://shopify/UrlRedirect/905192165"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query UrlRedirect($id: ID!) {
      urlRedirect(id: $id) {
        id
        path
        target
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/UrlRedirect/905192165"
      },
    },
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
    query UrlRedirect($id: ID!) {
      urlRedirect(id: $id) {
        id
        path
        target
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/UrlRedirect/905192165"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query UrlRedirect($id: ID!) {
        urlRedirect(id: $id) {
          id
          path
          target
        }
      }`,
      "variables": {
          "id": "gid://shopify/UrlRedirect/905192165"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query UrlRedirect($id: ID!) {
    urlRedirect(id: $id) {
      id
      path
      target
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/UrlRedirect/905192165"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query UrlRedirect($id: ID!) {
          urlRedirect(id: $id) {
            id
            path
            target
          }
        }
      `,
      variables: {
          "id": "gid://shopify/UrlRedirect/905192165"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "urlRedirect": {
      "id": "gid://shopify/UrlRedirect/905192165",
      "path": "/about",
      "target": "/pages/aboutus"
    }
  }
  ```
