import React from 'react';
import Input from "./Input";

export default {
    title: 'form/Input',
    component: Input,
    args: {
        placeholder: 'My template inputs'
    }
}

export const Small = () =>   <Input size='small' placeholder='Small size'/>
export const Medium = () =>  <Input size='medium' placeholder='Medium size'/>
export const Large = () =>  <Input size='large' placeholder='Large size'/>

Small.storyName = 'Small Input';

const Template = args => <Input {...args} />

export const SmallA = Template.bind({})
SmallA.args = {
    size: 'small',
    placeholder: 'This is template for the small text'
}

export const LargeA = Template.bind({})
LargeA.args = {
    size: 'large',
    placeholder: 'This a template for the large text'
}

export const MediumA = Template.bind({})
MediumA.args = {
    size: 'medium'
}




