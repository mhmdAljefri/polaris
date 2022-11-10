import React, {useState} from 'react';
import type {ComponentMeta} from '@storybook/react';
import {
  Avatar,
  Card,
  ResourceItem,
  ResourceList,
  ResourceListProps,
  Text,
} from '@shopify/polaris';

export default {
  component: ResourceItem,
} as ComponentMeta<typeof ResourceItem>;

type SelectedType = ResourceListProps['selectedItems'];

export function Default() {
  const [selectedItems, setSelectedItems] = useState<SelectedType>([]);
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'blog post', plural: 'blog posts'}}
        items={items}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        selectable
        renderItem={(item) => {
          const {id, url, title, author} = item;
          const authorMarkup = author ? <div>by {author}</div> : null;
          return (
            <ResourceItem
              id={id}
              url={url}
              accessibilityLabel={`View details for ${title}`}
              name={title}
            >
              <h3>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {title}
                </Text>
              </h3>
              {authorMarkup}
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export function WithMedia() {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={items}
        renderItem={(item) => {
          const {id, url, avatarSource, name, lastOrder, location} = item;

          return (
            <ResourceItem
              id={id}
              url={url}
              media={
                <Avatar
                  customer
                  size="medium"
                  name={name}
                  source={avatarSource}
                />
              }
              accessibilityLabel={`View details for ${name}`}
              name={name}
            >
              <h3>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {name}
                </Text>
              </h3>
              <div>{location}</div>
              <div>{lastOrder}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export function WithShortcutActions() {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={items}
        renderItem={(item) => {
          const {
            id,
            url,
            avatarSource,
            name,
            location,
            lastOrder,
            latestOrderUrl,
          } = item;

          return (
            <ResourceItem
              id={id}
              url={url}
              media={
                <Avatar
                  customer
                  size="medium"
                  name={name}
                  source={avatarSource}
                />
              }
              shortcutActions={
                latestOrderUrl
                  ? [{content: 'View latest order', url: latestOrderUrl}]
                  : undefined
              }
              accessibilityLabel={`View details for ${name}`}
              name={name}
            >
              <h3>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {name}
                </Text>
              </h3>
              <div>{location}</div>
              <div>{lastOrder}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}
export function WithPersistedShortcutActions() {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={items}
        renderItem={(item) => {
          const {
            id,
            url,
            avatarSource,
            name,
            location,
            lastOrder,
            latestOrderUrl,
          } = item;

          return (
            <ResourceItem
              id={id}
              url={url}
              persistActions
              media={
                <Avatar
                  customer
                  size="medium"
                  name={name}
                  source={avatarSource}
                />
              }
              shortcutActions={
                latestOrderUrl
                  ? [{content: 'View latest order', url: latestOrderUrl}]
                  : undefined
              }
              accessibilityLabel={`View details for ${name}`}
              name={name}
            >
              <h3>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {name}
                </Text>
              </h3>
              <div>{location}</div>
              <div>{lastOrder}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export function WithVerticalAlignment() {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={items}
        renderItem={(item) => {
          const {
            id,
            url,
            avatarSource,
            name,
            location,
            lastOrder,
            latestOrderUrl,
          } = item;
          return (
            <ResourceItem
              verticalAlignment="center"
              id={id}
              url={url}
              shortcutActions={
                latestOrderUrl
                  ? [{content: 'View latest order', url: latestOrderUrl}]
                  : undefined
              }
              media={
                <Avatar
                  customer
                  size="medium"
                  name={name}
                  source={avatarSource}
                />
              }
              accessibilityLabel={`View details for ${name}`}
              name={name}
            >
              <h3>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {name}
                </Text>
              </h3>
              <div>{location}</div>
              <div>{lastOrder}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

const items = [
  {
    id: '145',
    url: 'customers/145',
    avatarSource:
      'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
    name: 'Yi So-Yeon',
    location: 'Gwangju, South Korea',
    lastOrder: 'Emerald Silk Gown',
    latestOrderUrl: 'orders/1456',
    title: 'How To Get Value From Wireframes',
    author: 'Jonathan Mangrove',
  },
  {
    id: '146',
    url: 'customers/146',
    avatarSource:
      'https://burst.shopifycdn.com/photos/woman-canada-learning-code.jpg?width=746',
    name: 'Joanne Doe',
    location: 'Toronto, Canada',
    lastOrder: 'Canada learning code sticker',
    latestOrderUrl: 'orders/1476',
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt and Dave Thomas',
  },
];
