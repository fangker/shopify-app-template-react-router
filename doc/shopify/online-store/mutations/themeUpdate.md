---
title: themeUpdate - GraphQL Admin
description: Updates a theme.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# theme​Update

mutation

Requires The user needs write\_themes and an exemption from Shopify to modify themes. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Updates a theme.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the theme to be updated.

* input

  [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

  required

  The attributes of the theme to be updated.

***

## Theme​Update​Payload returns

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was updated.

* user​Errors

  [\[Theme​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update the name of a theme

  #### Query

  ```graphql
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
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
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
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
  "query": "mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) { themeUpdate(id: $id, input: $input) { theme { id name } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/OnlineStoreTheme/908009861",
      "input": {
        "name": "Dawn - Summer Sale"
      }
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
    mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "input": {
              "name": "Dawn - Summer Sale"
          }
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
    mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
        themeUpdate(id: $id, input: $input) {
          theme {
            id
            name
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "input": {
              "name": "Dawn - Summer Sale"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
          themeUpdate(id: $id, input: $input) {
            theme {
              id
              name
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "input": {
              "name": "Dawn - Summer Sale"
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "themeUpdate": {
      "theme": {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "name": "Dawn - Summer Sale"
      },
      "userErrors": []
    }
  }
  ```

* ### themeUpdate reference
