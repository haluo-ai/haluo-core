import cx from 'clsx';
import { IconExternalLink } from '@tabler/icons-react';
import { GithubIcon } from '@mantinex/dev-icons';
import {
  Title,
  Overlay,
  Group,
  Text,
  Button,
  ThemeIcon,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import data from './data';
import bannerImage from './banner-haluo1.webp';
import classes from './Banner.module.css';

interface BannerProps {
  componentsCount: number;
}

export function Banner({ componentsCount }: BannerProps) {
  const [, scrollTo] = useWindowScroll();

  const features = data.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon className={classes.featureIcon} size={44} radius="md">
        <feature.icon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      </ThemeIcon>

      <div className={classes.featureBody}>
        <Text className={classes.featureTitle}>{feature.title}</Text>
        <Text className={classes.featureDescription}>{feature.description}</Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.image} style={{ backgroundImage: `url(${bannerImage.src})` }} />
        <Overlay className={classes.overlay} opacity={1} zIndex={1} />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Haluo AI</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>Haluo, your personal AI assistant.</span>
            <br /> Built with OP Stack
          </Title>

          <Text className={classes.description}>
          AI-driven search engine for real-time news.
          </Text>

          <Group className={classes.controlsy}>
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              onClick={() => scrollTo({ y: 700 })}
            >
              Coming soon
            </Button>
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              leftSection={<GithubIcon size="1rem" />}
              component="a"
              href="https://github.com/mantinedev/ui.mantine.dev"
            >
              GitHub
            </Button>
            <Button
              className={cx(classes.control, classes.controlMain)}
              rightSection={<IconExternalLink size="1rem" stroke={1.5} />}
              component="a"
              href="https://mantine.dev/getting-started/"
            >
              Launch App
            </Button>
          </Group>

          <SimpleGrid
            cols={{ base: 1, sm: 3 }}
            spacing={{ base: 'lg', sm: 'xl' }}
            className={classes.features}
            mt={100}
          >
            {features}
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
