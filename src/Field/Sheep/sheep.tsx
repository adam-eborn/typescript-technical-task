import * as React from 'react';

import './Sheep.css';

interface props {
    name: string,
    branded: boolean,
    gender: string,
    onSelect() : any
};

export class Sheep extends React.Component<props, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: '', gender: 'female', branded: false };
    }

    render() {
        const { branded, name, gender, onSelect } = this.props;
        let brandStatus = branded ? 'branded' : '';
        let className = `sheep ${gender} ${brandStatus}`;

        return (
            <div key={name} className={className} onClick={onSelect}>
                {name}
                <br />
                {gender}
            </div>
        ) 
    }
}