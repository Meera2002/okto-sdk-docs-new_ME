import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';
import { FaReact, FaShield } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";

export const docsOptions: DocsLayoutProps = {
  tree: pageTree,
  nav: {
    transparentMode: 'top',
  },
  sidebar: {
    banner: (
      <RootToggle
        // options={modes.map((mode) => ({
        //   url: `/docs/${mode.param}`,
        //   icon: (
        //     <mode.icon
        //       className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
        //       style={{
        //         backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
        //         color: `hsl(var(--${mode.param}-color))`,
        //       }}
        //     />
        //   ),
        //   title: mode.name,
        //   description: mode.description,
        // }))},
        options={[
          {
            url: '/docs/introduction-to-okto/okto-universe',
            title: 'Introduction',
            icon: <IoMdDocument/>,
            description: '',
          },
          {
            url: '/docs/developer-admin-dashboard/learn',
            title: 'Dashboard',
            icon: <FaShield/>,
            description: '',
          },
          {
            url: '/docs/react-sdk/getting-started/overview-okto-react',
            title: 'React',
            icon: <FaReact/>,
            description: '',
          },
          {
            url: '/docs/react-native-sdk/getting-started/overview-okto-react-native',
            title: 'React Native',
            icon: <TbBrandReactNative/>,
            description: '',
          },
          {
            url: '/docs/flutter-sdk/getting-started/overview-okto-flutter',
            title: 'Flutter',
            icon: <SiFlutter/>,
            description: '',
          },
        ]}
      />
    ),
  },
};
