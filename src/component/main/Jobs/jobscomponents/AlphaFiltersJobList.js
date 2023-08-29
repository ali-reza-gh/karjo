import {
  LegacyCard,
  ResourceList,
  AlphaFilters,
  Avatar,
  Text,
} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function AlphaFiltersJobList() {
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
  const filters = [ ];
  return (
    <div style={{height: '568px'}}className="min-w-[600px] mt-4">
      <LegacyCard>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          filterControl={
            <AlphaFilters
              queryValue={queryValue}
              queryPlaceholder="Searching your job . . ."
              filters={filters}
              onQueryChange={handleFiltersQueryChange}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleFiltersClearAll}
            />
          }
          flushFilters
          items={[
            {
              id: '341',
              url: '#',
              name: 'Mae Jemison',
              location: 'Decatur, USA',
            },
         
          ]}

          renderItem={(item) => {
            const {id, url, name, location} = item;
            const media = <Avatar customer size="medium" name={name} />;

            return (
              <ResourceList.Item
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`View details for ${name}`}
              >
                <Text as="h3" fontWeight="bold">
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