import Link from 'next/link';
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Image } from '@mantine/core';

import { meta } from '@mantinex/mantine-meta';
import { searchHandlers } from '../Search';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}


export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className="mantine-focus-auto">
          <Image
              src="/haluoicon.webp"
              alt="Haluo.org"
              data-dark
              style={{width: '160px', height: '150px', marginTop: '30px' }} // Inline styles to control image size
            />
          </Link>
          <HeaderControls
            visibleFrom="sm"
            onSearch={searchHandlers.open}
            githubLink={meta.gitHubLinks.mantineUi}
            withDirectionToggle={false}
            discordLink={meta.discordLink}
          />

          <Group hiddenFrom="sm">
            <SearchMobileControl onSearch={searchHandlers.open} />
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
