---
title: tagsRemove - GraphQL Admin
description: |-
  Removes tags from a resource. If the resource type doesn't support tagging,
  the `id` argument returns a resource-not-found error.

  Tags are searchable keywords that help organize and filter these resources.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# tags​Remove

mutation

Removes tags from a resource. If the resource type doesn't support tagging, the `id` argument returns a resource-not-found error.

Tags are searchable keywords that help organize and filter these resources.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the resource to remove tags from. Supported resources: [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article), and [`DiscountNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode).

* tags

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  A list of tags to remove from the resource in the form of an array of strings. Example value: `["tag1", "tag2", "tag3"]`.

***

## Tags​Remove​Payload returns

* node

  [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  The object that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove tags from a customer

  #### Query

  ```graphql
  mutation removeTags($id: ID!, $tags: [String!]!) {
    tagsRemove(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Customer/544365967",
    "tags": [
      "Bob"
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation removeTags($id: ID!, $tags: [String!]!) { tagsRemove(id: $id, tags: $tags) { node { id } userErrors { message } } }",
   "variables": {
      "id": "gid://shopify/Customer/544365967",
      "tags": [
        "Bob"
      ]
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
    mutation removeTags($id: ID!, $tags: [String!]!) {
      tagsRemove(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Customer/544365967",
          "tags": [
              "Bob"
          ]
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
    mutation removeTags($id: ID!, $tags: [String!]!) {
      tagsRemove(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Customer/544365967",
    "tags": [
      "Bob"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation removeTags($id: ID!, $tags: [String!]!) {
        tagsRemove(id: $id, tags: $tags) {
          node {
            id
          }
          userErrors {
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Customer/544365967",
          "tags": [
              "Bob"
          ]
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation removeTags($id: ID!, $tags: [String!]!) {
    tagsRemove(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Customer/544365967",
    "tags": [
      "Bob"
    ]
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation removeTags($id: ID!, $tags: [String!]!) {
          tagsRemove(id: $id, tags: $tags) {
            node {
              id
            }
            userErrors {
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Customer/544365967",
          "tags": [
              "Bob"
          ]
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "tagsRemove": {
      "node": {
        "id": "gid://shopify/Customer/544365967"
      },
      "userErrors": []
    }
  }
  ```

* ### tagsRemove reference
