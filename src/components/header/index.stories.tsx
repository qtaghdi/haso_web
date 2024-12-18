import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Header from "./header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/design/theme";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof Header>;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});