import * as React from 'react';

import { Create } from './Create/create';
import { Sheep } from './Sheep/sheep';
import { Menu } from './Menu/menu';

import './Field.css';

interface sheep {
    branded: boolean
    name: string,
    gender: string,
};

interface state {
    selectedSheep: sheep
};

interface props {
    sheep: sheep[],
    sheepUpdate(arg0 : sheep[]) : any,
    sheepHandler(arg0: object) :any,
    onBreeding() : any
};

export class Field extends React.Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = { selectedSheep: {name: '', gender: '', branded: false} };
    }

    brandSheep() {
        const { selectedSheep } = this.state;
        const { sheep } = this.props;
        let index = sheep.findIndex( obj => {
            return obj.name === selectedSheep.name
        });

        sheep[index].branded = true;
        this.props.sheepUpdate(sheep);
    }

    handleSheepSelect(sheep: sheep) {
        this.setState({ selectedSheep: sheep });
    }

    renderFieldContent() {
        const { sheep = [] } = this.props;
        let output = [];

        if (sheep.length) {
            for (let i = 0; i < sheep.length; i++) {
                let cell = sheep[i];
                output.push(
                    <Sheep
                        name={cell.name}
                        gender={cell.gender}
                        branded={cell.branded}
                        onSelect={() => this.handleSheepSelect(cell)}
                    />
                )
            }
        }
        return output
    };

    getSheepByName() {
        const { sheep } = this.props;
        let output = [];

        for (let i = 0; i < sheep.length; i++) {
            output.push(sheep[i].name)
        }
        return output;
    }

    render() {
        const sheepNames = this.getSheepByName();

        return (
            <div className='container-fluid'> 
                <Create 
                    addSheep={ (config: sheep) => this.props.sheepHandler(config) } 
                    sheepNames={ sheepNames } 
                />
                
                <div className="perimeter" key="perimeter">
                    { this.renderFieldContent() }
                </div>
                <Menu 
                    sheep={ this.props.sheep }
                    selectedSheep={ this.state.selectedSheep } 
                    onBranding={ () => this.brandSheep() }
                    onBreeding={ () => this.props.onBreeding() }
                />
            </div>
        );
    }
}