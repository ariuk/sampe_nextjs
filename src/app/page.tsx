'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { redirect } from 'next/navigation';
import { useGlobal } from '@/components/LayoutContext';
import { themeDark } from '@/utils';

export default function SignIn() {
  const { globalState, updateGloblaState } = useGlobal();

  if (!globalState?.authenticated) {
    redirect('/login');
  }

  return (
    <ThemeProvider theme={themeDark}>
      <Container component='main' maxWidth='xs' />
    </ThemeProvider>
  );
}
