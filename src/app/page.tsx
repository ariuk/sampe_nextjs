'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import { redirect } from 'next/navigation';
import { useGlobal } from '@/components/LayoutContext';
import { themeDark } from '@/utils';
import {
  CssBaseline,
} from '@mui/material';

export default function Page() {
  const { globalState } = useGlobal();
  React.useEffect(() => {
    if (!globalState.authenticated) {
      redirect('/login');
    } else {
      redirect('/home');
    }
  }, [globalState.authenticated]);

  return (
    <ThemeProvider theme={themeDark}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
      </Container>
    </ThemeProvider>
  );
}
