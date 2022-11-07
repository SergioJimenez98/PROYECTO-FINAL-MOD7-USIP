import React from 'react';

import {Modal1} from '../components/Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Modal1 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  titulo: "PROYECTO FINAL MOD.7 USIP",
  contenido: 'TRABAJO FINAL DE SERGIO JIMENEZ - DIPLOMADO EN FULLSTACK',
};

