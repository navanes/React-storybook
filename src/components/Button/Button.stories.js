import Button from "./Button";
import React from 'react'

export default {
    title: 'form/Button',
    component: Button,
    //decorators: [ story => <Center>{story()}</Center>],
    args: {
        children: 'My Button'
    }
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    //children: 'Secondary Args'
}

export const LongPrimary = Template.bind({})
LongPrimary.args = {
    ...PrimaryA.args,
    //children: 'Long Primary Args'
}

