---
title: inventoryDeactivate - GraphQL Admin
description: >-
  Removes an inventory item's quantities from a location, and turns off
  inventory at the location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# inventory​Deactivate

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to deactivate an inventory.

Removes an inventory item's quantities from a location, and turns off inventory at the location.

## Arguments

* inventory​Level​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory level to deactivate.

***

## Inventory​Deactivate​Payload returns

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Deletes an inventory level from a location

  #### Query

  ```graphql
  mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryDeactivate($inventoryLevelId: ID!) { inventoryDeactivate(inventoryLevelId: $inventoryLevelId) { userErrors { message } } }",
   "variables": {
      "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
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
    mutation inventoryDeactivate($inventoryLevelId: ID!) {
      inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
        userErrors {
          message
        }
      }
    }`,
    {
      variables: {
          "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
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
    mutation inventoryDeactivate($inventoryLevelId: ID!) {
      inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
        userErrors {
          message
        }
      }
    }
  QUERY

  variables = {
    "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryDeactivate($inventoryLevelId: ID!) {
        inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
          userErrors {
            message
          }
        }
      }`,
      "variables": {
          "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }' \
  --variables \
  '{
    "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation inventoryDeactivate($inventoryLevelId: ID!) {
          inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
            userErrors {
              message
            }
          }
        }
      `,
      variables: {
          "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "inventoryDeactivate": {
      "userErrors": []
    }
  }
  ```

* ### inventoryDeactivate reference
