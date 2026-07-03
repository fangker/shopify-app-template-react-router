---
title: mobilePlatformApplicationDelete - GraphQL Admin
description: Delete a mobile platform application.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# mobile​Platform​Application​Delete

mutation

Requires `write_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Delete a mobile platform application.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the Mobile Platform Application to be deleted.

***

## Mobile​Platform​Application​Delete​Payload returns

* deleted​Mobile​Platform​Application​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the mobile platform application that was just deleted.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a mobile platform application

  #### Description

  Delete a Mobile Platform Application.

  #### Query

  ```graphql
  mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MobilePlatformApplication/1066176028"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMobilePlatformApplication($id: ID!) { mobilePlatformApplicationDelete(id: $id) { deletedMobilePlatformApplicationId } }",
   "variables": {
      "id": "gid://shopify/MobilePlatformApplication/1066176028"
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
    mutation DeleteMobilePlatformApplication($id: ID!) {
      mobilePlatformApplicationDelete(id: $id) {
        deletedMobilePlatformApplicationId
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MobilePlatformApplication/1066176028"
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
    mutation DeleteMobilePlatformApplication($id: ID!) {
      mobilePlatformApplicationDelete(id: $id) {
        deletedMobilePlatformApplicationId
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MobilePlatformApplication/1066176028"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMobilePlatformApplication($id: ID!) {
        mobilePlatformApplicationDelete(id: $id) {
          deletedMobilePlatformApplicationId
        }
      }`,
      "variables": {
          "id": "gid://shopify/MobilePlatformApplication/1066176028"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/MobilePlatformApplication/1066176028"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation DeleteMobilePlatformApplication($id: ID!) {
          mobilePlatformApplicationDelete(id: $id) {
            deletedMobilePlatformApplicationId
          }
        }
      `,
      variables: {
          "id": "gid://shopify/MobilePlatformApplication/1066176028"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "mobilePlatformApplicationDelete": {
      "deletedMobilePlatformApplicationId": "gid://shopify/MobilePlatformApplication/1066176028"
    }
  }
  ```

* ### mobilePlatformApplicationDelete reference
