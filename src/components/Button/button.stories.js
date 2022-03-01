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

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  icon: "check",
  onClick: () => alert("ouch!"),
  disabled: false,
  children: "Click me!!",
};
