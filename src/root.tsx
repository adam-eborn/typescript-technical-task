import * as React from 'react';

import { Field } from './Field/field';


// I wanted to keep all the interfaces in a separate file outside of the folder structure.
// These could then be imported where needed as to keep a single source of truth but ran out of time figuring it out


interface sheep {
    name: string,
    gender: string,
    branded: boolean
};

export class Root extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { sheep: [], selectedSheep: {} };
    }

    handleNewSheep(sheepConfig: sheep) {
        this.setState({ sheep: [...this.state.sheep, sheepConfig] });
    }

    handleSheepUpdate(arr: sheep[]) {
        this.setState({sheep: arr});
    }

    generateNewSheep() {
        let gender = Math.floor(Math.random() * 2) === 1 ? 'female' : 'male';

        return {
            name: String(this.state.sheep.length + 1),
            gender,
            branded: false
        };
    }

    render() {
        let newConfig = this.generateNewSheep();
        
        return (
            <Field 
                sheepHandler={(config: sheep) => this.handleNewSheep(config)} 
                sheep={this.state.sheep} 
                sheepUpdate={(arr: sheep[]) => this.handleSheepUpdate(arr)}
                onBreeding={() => this.handleNewSheep(newConfig)}
            />
        );
    }
}
