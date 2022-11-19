import React from 'react';
import { ArrowBackIcon, Box, IBoxProps, IconButton } from 'native-base';

type NavHeaderProps = {
  hidden?: boolean;
  transparent?: boolean;
} & IBoxProps;

export const NavHeader = ({
  hidden,
  transparent,
  ...props
}: NavHeaderProps) => {
  return hidden ? null : (
    <Box alignItems="flex-start" pt={12} {...props}>
      <IconButton
        icon={<ArrowBackIcon size="5" color="white" />}
        borderRadius="full"
      />
    </Box>
  );
};
