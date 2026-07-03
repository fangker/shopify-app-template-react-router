---
title: shopLocaleDisable - GraphQL Admin
description: >-
  Deletes a locale for a shop. This also deletes all translations of this
  locale.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# shop​Locale​Disable

mutation

Requires `write_locales` access scope.

Deletes a locale for a shop. This also deletes all translations of this locale.

## Arguments

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  ISO code of the locale to delete.

***

## Shop​Locale​Disable​Payload returns

* locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  ISO code of the locale that was deleted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete the Korean locale from a shop

  #### Description

  Deleting a locale also permanently deletes all of its translations.

  #### Query

  ```graphql
  mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
    }
  }
  ```

  #### Variables

  ```json
  {
    "locale": "ko"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation disableLocale($locale: String!) { shopLocaleDisable(locale: $locale) { userErrors { message field } locale } }",
   "variables": {
      "locale": "ko"
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
    mutation disableLocale($locale: String!) {
      shopLocaleDisable(locale: $locale) {
        userErrors {
          message
          field
        }
        locale
      }
    }`,
    {
      variables: {
          "locale": "ko"
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
    mutation disableLocale($locale: String!) {
      shopLocaleDisable(locale: $locale) {
        userErrors {
          message
          field
        }
        locale
      }
    }
  QUERY

  variables = {
    "locale": "ko"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation disableLocale($locale: String!) {
        shopLocaleDisable(locale: $locale) {
          userErrors {
            message
            field
          }
          locale
        }
      }`,
      "variables": {
          "locale": "ko"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
    }
  }' \
  --variables \
  '{
    "locale": "ko"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation disableLocale($locale: String!) {
          shopLocaleDisable(locale: $locale) {
            userErrors {
              message
              field
            }
            locale
          }
        }
      `,
      variables: {
          "locale": "ko"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "shopLocaleDisable": {
      "userErrors": [],
      "locale": "ko"
    }
  }
  ```

* ### shopLocaleDisable reference
