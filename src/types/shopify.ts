export interface ShopifyImage {
  url: string;
  altText?: string | null;
  width?: number;
  height?: number;
}

export interface MoneyV2 {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
  selectedOptions?: Array<{
    name: string;
    value: string;
  }>;
  image?: ShopifyImage | null;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
  compareAtPriceRange?: {
    minVariantPrice: MoneyV2;
  };
  featuredImage?: ShopifyImage | null;
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  variants: {
    edges: Array<{
      node: ShopifyProductVariant;
    }>;
  };
  tags?: string[];
}

export interface CartLineItem {
  id: string;
  quantity: number;
  cost: {
    totalAmount: MoneyV2;
  };
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
    };
    image?: ShopifyImage | null;
    price: MoneyV2;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: MoneyV2;
    totalAmount: MoneyV2;
    totalTaxAmount?: MoneyV2 | null;
  };
  lines: {
    edges: Array<{
      node: CartLineItem;
    }>;
  };
}

export interface CODOrderData {
  fullName: string;
  phone: string;
  city: string;
  department: string;
  address: string;
  neighborhood?: string;
  notes?: string;
  bundleSelected: string;
  quantity: number;
  totalPrice: number;
}
