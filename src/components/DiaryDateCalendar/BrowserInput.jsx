import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export const BrowserInput = function BrowserInput(props) {
  const { inputProps, InputProps, ownerState, inputRef, error, ...other } =
    props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '21px',
        width: '100%',
        '& input': {
          fontFamily: 'Verdana',
          border: 'none',
          outline: 'none',
          bgcolor: 'background.paper',
          fontSize: '34px',
          fontWeight: 700,

          '&::placeholder': {
            color: 'black',
          },
        },
      }}
      ref={InputProps?.ref}
    >
      <input  ref={inputRef} {...inputProps} {...other} />
      {InputProps?.endAdornment}
    </Box>
  );
};

BrowserInput.propTypes = {
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  ownerState: PropTypes.any,
};
