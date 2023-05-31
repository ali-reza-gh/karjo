import {LegacyStack, Tag, Autocomplete} from '@shopify/polaris';
import {useState, useCallback, useMemo} from 'react';

export  function Auto() {
  const deselectedOptions = useMemo(
    () => [
      {value: 'React', label: 'React'},
      {value: 'Vue', label: 'Vue'},
      {value: 'javascript', label: 'javascript'},
      {value: 'js', label: 'js'},
      {value: 'git', label: 'git'},
      {value: 'Angular', label: 'Angular'},
      {value: 'git hub', label: 'git hub'},
      {value: 'Front-End', label: 'Front-End'},
      {value: 'Typescript', label: 'Typescript'},
      {value: 'Nextjs', label: 'Nextjs'},
      {value: 'Nodejs', label: 'Nodejs'},
    ],
    [],
  );

  const [selectedOptions, setSelectedOptions] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );

      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const removeTag = useCallback(
    () => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(Tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );

  const verticalContentMarkup =
    selectedOptions.length > 0 ? (
      <LegacyStack spacing="extraTight" alignment="center">
        {selectedOptions.map((option) => {
          let tagLabel = '';
          tagLabel = option.replace('_', ' ');
          tagLabel = titleCase(tagLabel);
          return (
            <Tag key={`option${option}`} onRemove={removeTag(option)}>
              {tagLabel}
            </Tag>
          );
        })}
      </LegacyStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Skills"
      value={inputValue}
      placeholder="Enter your skills . . . "
      verticalContent={verticalContentMarkup}
      autoComplete="off"
    />
  );

  return (
    <div style={{height: '325px'}}>
      <Autocomplete
        allowMultiple
        options={options}
        selected={selectedOptions}
        textField={textField}
        onSelect={setSelectedOptions}
        listTitle="Suggested Tags"
      />
    </div>
  );

  function titleCase(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  }
}