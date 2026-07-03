---
title: menuDelete - GraphQL Admin
description: Deletes a menu.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# menu​Delete

mutation

Requires `write_online_store_navigation` access scope.

Deletes a menu.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the menu to be deleted.

***

## Menu​Delete​Payload returns

* deleted​Menu​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted menu.

* user​Errors

  [\[Menu​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Failing to delete the main menu

  #### Description

  Deleting the main menu returns an error

  #### Query

  ```graphql
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
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
    "id": "gid://shopify/Menu/166235728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMenu($id: ID!) { menuDelete(id: $id) { deletedMenuId userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Menu/166235728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMenu($id: ID!) {
        menuDelete(id: $id) {
          deletedMenuId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Menu/166235728"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Menu/166235728"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation DeleteMenu($id: ID!) {
          menuDelete(id: $id) {
            deletedMenuId
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Menu/166235728"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "menuDelete": {
      "deletedMenuId": null,
      "userErrors": [
        {
          "field": [
            "id"
          ],
          "message": "Default menu cannot be deleted."
        }
      ]
    }
  }
  ```

* ### Successfully deleting a menu

  #### Description

  Delete a menu by its ID

  #### Query

  ```graphql
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Menu/166235728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMenu($id: ID!) { menuDelete(id: $id) { deletedMenuId } }",
   "variables": {
      "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Menu/166235728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMenu($id: ID!) {
        menuDelete(id: $id) {
          deletedMenuId
        }
      }`,
      "variables": {
          "id": "gid://shopify/Menu/166235728"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Menu/166235728"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation DeleteMenu($id: ID!) {
          menuDelete(id: $id) {
            deletedMenuId
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Menu/166235728"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "menuDelete": {
      "deletedMenuId": "gid://shopify/Menu/166235728"
    }
  }
  ```

* ### menuDelete reference
