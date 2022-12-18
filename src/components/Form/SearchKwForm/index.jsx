import React from 'react';
import PropTypes from 'prop-types';

import SmartForm, { SearchForm } from '@/common/SmartForm';
import { regoins } from '@/configs';
import { formatConfig } from '@/utils';

const SearchKwForm = props => {
  const { beforeExtra, className, keyword, customConfig } = props;

  const config = [
    {
      noLabel: props.noLabel,
      itemProps: {
        label: props.label,
        name: keyword,
      },
      searchSuffix: true,
      ...customConfig,
    },
  ];

  return (
    <div className={`fsb searchKwForm ${className}`}>
      {beforeExtra}
      <SearchForm config={config} noRuleAll {...props}></SearchForm>
    </div>
  );
};

SearchKwForm.defaultProps = {
  label: '',
  className: '',
  keyword: 'keyword',
  noLabel: false,
};

SearchKwForm.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  keyword: PropTypes.string,
  noLabel: PropTypes.bool,
};

export default SearchKwForm;
