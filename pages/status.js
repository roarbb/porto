import React from 'react'
import Body from '../components/Body'
import { H1 } from '../components/H1'
import * as packages from '../package.json'

let deps = Object.keys(packages.dependencies).map((dependency) =>
    <div key={dependency}>{dependency}</div>
)

export default () => (
    <Body>
        <H1>Status</H1><br/>
        <b>Platform:</b> <strike>AWS</strike> Heroku<br /><br/>
        <b>Dependencies:</b> {deps}
    </Body>
)