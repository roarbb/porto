import React from 'react'
import Body from '../components/molecules/Body'
import { H1 } from '../components/atoms/H1'
import PackagesList from '../components/molecules/PackagesList'

export default () => (
    <Body>
        <H1>Status</H1><br/>
        <b>Platform: </b> Heroku<br /><br/>
        <b>Dependencies: </b> <PackagesList />
    </Body>
)