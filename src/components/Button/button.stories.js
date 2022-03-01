import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["check", "refresh", "arrow-right", ""],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  onClick: () => alert("ouch!"),
  disabled: false,
  children: "Click me!!",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  onClick: () => alert("ouch!"),
  disabled: false,
  children: "Click me!!",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  onClick: () => alert("ouch!"),
  disabled: false,
  children: "Click me!!",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  color: "primary",
  icon: "check",
  onClick: () => alert("ouch!"),
  disabled: false,
  children: "Click me!!",
};

export const Disabled = Template.bind({});

Disabled.args = {
  color: "primary",
  icon: "check",
  onClick: () => alert("ouch!"),
  disabled: true,
  children: "Click me!!",
};
