---
title: collectionConditionsSourceDelete - GraphQL Admin
description: Deletes a shareable collection source owned by the calling app.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# collection​Conditions​Source​Delete

mutation

Requires `write_products` access scope. Also: The store must not be on the Starter or Retail plans and the user must have permission to delete a collection source.

Deletes a shareable collection source owned by the calling app.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the source to delete.

***

## Collection​Conditions​Source​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted collection source.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a shareable collection source

  #### Description

  Delete a shareable collection source owned by the calling app. If the source is linked to collections, deleting it also unlinks it from those collections.

  #### Query

  ```graphql
  mutation CollectionConditionsSourceDelete($id: ID!) {
    collectionConditionsSourceDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/CollectionConditionsSource/129168209"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CollectionConditionsSourceDelete($id: ID!) { collectionConditionsSourceDelete(id: $id) { deletedId userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/CollectionConditionsSource/129168209"
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
    mutation CollectionConditionsSourceDelete($id: ID!) {
      collectionConditionsSourceDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/CollectionConditionsSource/129168209"
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
    mutation CollectionConditionsSourceDelete($id: ID!) {
      collectionConditionsSourceDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/CollectionConditionsSource/129168209"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CollectionConditionsSourceDelete($id: ID!) {
        collectionConditionsSourceDelete(id: $id) {
          deletedId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/CollectionConditionsSource/129168209"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CollectionConditionsSourceDelete($id: ID!) {
    collectionConditionsSourceDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/CollectionConditionsSource/129168209"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CollectionConditionsSourceDelete($id: ID!) {
          collectionConditionsSourceDelete(id: $id) {
            deletedId
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/CollectionConditionsSource/129168209"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "collectionConditionsSourceDelete": {
      "deletedId": "gid://shopify/CollectionConditionsSource/129168209",
      "userErrors": []
    }
  }
  ```

* ### collectionConditionsSourceDelete reference
