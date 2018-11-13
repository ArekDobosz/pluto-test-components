import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const wrapSvgPath = (path, viewBox = '0 0 24 24') => (props) => (
    <SvgIcon {...props} viewBox={viewBox}>{path}</SvgIcon>
  );
  
export const ArrowRightIcon = wrapSvgPath(
  <path d="M14.591 7.497H9.587v-2h8.414v8.414h-2V8.915l-8.6 8.6-1.414-1.414 8.604-8.604z" transform="rotate(45 11.5 12)" />
);

export const CheckboxBlank = wrapSvgPath(
  <path fill="#FFF" stroke="#074445" strokeOpacity=".5" strokeWidth="2" d="M1 1h30v30H1z"/>,
  '0 0 32 32'
);

export const CheckboxChecked = wrapSvgPath(
  <g>
    <path fillRule="nonzero" d="M0 0h32v32H0z"/>
    <path fill="#FFF" transform="translate(4 4) rotate(131 11.737 10.653)" d="M19.669 7.403l.056-.036-.223 6.58-1.968-.104.129-4.469H3.737v-1.97H19.67z"/>
  </g>,
  '0 0 32 32'
);

export const Hint = wrapSvgPath(
  <g>
    <circle transform="translate(2 2)" cx="10" cy="10" r="9.429"/>
    <path fill="#fff" transform="translate(8 6)"  d="M4.7 7.89H3.12v-.853c0-.374.044-.651.133-.833.088-.182.282-.423.58-.721L4.856 4.46c.214-.234.322-.523.322-.868a1.18 1.18 0 0 0-.336-.861c-.224-.23-.514-.343-.868-.343-.355 0-.651.11-.89.329-.237.219-.375.51-.412.875H.977c.093-.831.417-1.482.973-1.953.555-.472 1.248-.707 2.079-.707.83 0 1.507.226 2.03.679.522.452.784 1.085.784 1.897 0 .56-.154 1.026-.462 1.4a6.038 6.038 0 0 1-.406.476c-.094.093-.217.212-.371.357-.154.144-.285.27-.392.378a5.847 5.847 0 0 0-.26.273c-.167.205-.251.494-.251.868v.63zM3.93 11c-.289 0-.54-.1-.755-.301a.96.96 0 0 1-.322-.728c0-.285.105-.53.315-.735.21-.206.462-.308.756-.308s.548.1.763.3a.96.96 0 0 1 .322.729c0 .284-.105.53-.315.735-.21.205-.465.308-.763.308z"/>
  </g>
);

export const Search = wrapSvgPath(<path d="M16.872 15.36l3.702 3.8-1.415 1.414-3.689-3.786a7.5 7.5 0 1 1 1.401-1.427zm-6.006 1.006a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"/>);

export const RadioBlank = wrapSvgPath(
  <circle cx="16" cy="16" r="15" fill="#FFF" fillRule="nonzero" stroke="#074445" strokeOpacity=".5" strokeWidth="2"/>,
  '0 0 32 32'
);

export const RadioChecked = wrapSvgPath(
  <g fill="none" fillRule="nonzero">
    <circle cx="16" cy="16" r="16" fill="currentColor"/>
    <circle cx="16" cy="16" r="14" fill="#FFF"/>
    <circle cx="16" cy="16" r="9" fill="currentColor"/>
  </g>,
  '0 0 32 32'
);