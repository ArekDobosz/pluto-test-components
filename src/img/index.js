import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const wrapSvgPath = (path, viewBox = '0 0 24 24') => (props) => (
    <SvgIcon {...props} viewBox={viewBox}>{path}</SvgIcon>
  );
  
export const ArrowRightIcon = wrapSvgPath(<path d="M14.591 7.497H9.587v-2h8.414v8.414h-2V8.915l-8.6 8.6-1.414-1.414 8.604-8.604z" transform="rotate(45 11.5 12)" />);