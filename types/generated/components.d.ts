import type { Schema, Struct } from '@strapi/strapi';

export interface CatalogDiscount extends Struct.ComponentSchema {
  collectionName: 'components_catalog_discounts';
  info: {
    displayName: 'discount';
  };
  attributes: {
    amountUsd: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    percentage: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    robots: Schema.Attribute.Enumeration<
      ['index,follow', 'oindex,follow', 'noindex,nofollow']
    >;
  };
}

export interface UiColorSwatch extends Struct.ComponentSchema {
  collectionName: 'components_ui_color_swatches';
  info: {
    displayName: 'color-swatch';
  };
  attributes: {
    hex: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UiDressStyleCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_dress_style_card_s';
  info: {
    displayName: 'dress-style-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface UiFilterOption extends Struct.ComponentSchema {
  collectionName: 'components_ui_filter_options';
  info: {
    displayName: 'filter-option';
  };
  attributes: {
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface UiFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'ui.menu-link', true>;
  };
}

export interface UiHeroStat extends Struct.ComponentSchema {
  collectionName: 'components_ui_hero_stats';
  info: {
    displayName: 'hero-stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface UiKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_ui_key_values';
  info: {
    displayName: 'key-value';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UiMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_menu_links';
  info: {
    displayName: 'menu-link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_ui_section_headings';
  info: {
    displayName: 'section-heading';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiSizeOption extends Struct.ComponentSchema {
  collectionName: 'components_ui_size_options';
  info: {
    displayName: 'size-option';
  };
  attributes: {
    code: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface UiSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_submenu_items';
  info: {
    displayName: 'submenu-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'catalog.discount': CatalogDiscount;
      'shared.seo': SharedSeo;
      'ui.color-swatch': UiColorSwatch;
      'ui.dress-style-card': UiDressStyleCard;
      'ui.faq-item': UiFaqItem;
      'ui.filter-option': UiFilterOption;
      'ui.footer-column': UiFooterColumn;
      'ui.hero-stat': UiHeroStat;
      'ui.key-value': UiKeyValue;
      'ui.menu-link': UiMenuLink;
      'ui.section-heading': UiSectionHeading;
      'ui.size-option': UiSizeOption;
      'ui.submenu-item': UiSubmenuItem;
    }
  }
}
