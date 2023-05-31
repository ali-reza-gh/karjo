import {
  LegacyCard,
  ResourceList,
  Filters,
  Avatar,
  Text,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

export function FilterJobs() {
  const [queryValue, setQueryValue] = useState(undefined);
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleQueryValueRemove = useCallback(
    () => setQueryValue(undefined),
    [],
  );
  const handleFiltersClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [
    handleQueryValueRemove,
  ]);
  const filters = [];

  return (
    <div style={{ height: '568px' }}>
      <LegacyCard>
        <ResourceList
          resourceName={{ singular: 'customer', plural: 'customers' }}
          filterControl={
            <Filters
              queryPlaceholder="Searching your job . . ."
              queryValue={queryValue}
              filters={filters}
              onQueryChange={handleFiltersQueryChange}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleFiltersClearAll}
            />
          }
          items={[
            {
              id: '341',
              url: '#',
              name: 'Mae Jemison',
              location: 'Decatur, USA',
            },
          ]}
          renderItem={(item) => {
            const { id, url, name, location } = item;
            const media = <Avatar customer size="medium" name={name} />;
            return (
              <ResourceList.Item
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`View details for ${name}`}
              >
                <Text as="h3" variant="bodyMd" fontWeight="bold">
                  {name}
                </Text>
                <div>{location}</div>
              </ResourceList.Item>
            );
          }}
        />
      </LegacyCard>
    </div>
  );

}