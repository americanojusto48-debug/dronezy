import { shopifyFetch } from "./client";
import { ShopifyProduct } from "@/types/shopify";
import { STAR_PRODUCT_DEFAULT } from "@/lib/constants";

export const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    title
    handle
    description
    descriptionHtml
    availableForSale
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 8) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

/**
 * Retrieves the star product or falls back to our high-converting default
 */
export async function getStarProduct(): Promise<ShopifyProduct> {
  try {
    const res = await shopifyFetch<{
      data?: {
        products?: {
          edges: Array<{ node: ShopifyProduct }>;
        };
      };
    }>({
      query: GET_PRODUCTS_QUERY,
      variables: { first: 5 },
      tags: ["products"],
    });

    const products = res.body?.data?.products?.edges || [];
    if (products.length > 0 && products[0]?.node) {
      return products[0].node;
    }
  } catch (err) {
    console.warn("Unable to fetch products from Storefront API. Falling back to default star product.", err);
  }

  return STAR_PRODUCT_DEFAULT;
}
