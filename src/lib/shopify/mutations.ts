import { shopifyFetch } from "./client";
import { ShopifyCart } from "@/types/shopify";

export const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 20) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              image {
                url
                altText
              }
              product {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_CART_MUTATION = `
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const ADD_LINES_TO_CART_MUTATION = `
  mutation AddLinesToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
  ${CART_FRAGMENT}
`;

export async function createShopifyCart(lines: Array<{ merchandiseId: string; quantity: number }>): Promise<ShopifyCart | null> {
  try {
    const res = await shopifyFetch<{
      data?: {
        cartCreate?: {
          cart: ShopifyCart;
          userErrors: Array<{ message: string }>;
        };
      };
    }>({
      query: CREATE_CART_MUTATION,
      variables: { lines },
      cache: "no-store",
    });

    return res.body?.data?.cartCreate?.cart || null;
  } catch (error) {
    console.error("Error creating cart:", error);
    return null;
  }
}
