import React from 'react'
import * as packages from '../../package.json'

class PackagesList extends React.Component {
    render() {
        return (
            <ul>
                {Object.keys(packages.dependencies).map((dependency) =>
                    <li key={dependency}>{dependency}</li>
                )}
            </ul>
        )
    }
}

export default PackagesList