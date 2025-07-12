import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_image_blocks';
  info: {
    displayName: 'ImageBlock';
  };
  attributes: {
    alt: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    isHeader: Schema.Attribute.Boolean;
  };
}

export interface ComponentsLinkBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_link_blocks';
  info: {
    displayName: 'LinkBlock';
  };
  attributes: {
    alt: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    header: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.image-block': ComponentsImageBlock;
      'components.link-block': ComponentsLinkBlock;
      'components.text-block': ComponentsTextBlock;
    }
  }
}
