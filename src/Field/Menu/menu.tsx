import * as React from 'react';

interface props {
    sheep: sheep[],
    selectedSheep: sheep,
    onBranding(): any,
    onBreeding(): any
};

interface sheep {
    name: string,
    gender: string,
    branded: boolean
}

interface state {
    message: string,
    selectedMate: sheep,
    mates: sheep[]
}

export class Menu extends React.Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = { message: "", mates: [], selectedMate: { name: '', gender: '', branded: false } };
    }

    componentDidMount() {
        this.getAppropriateMates();
    }

    componentDidUpdate(prevProps: any) {
        let isEqual = prevProps.selectedSheep.name === this.props.selectedSheep.name;

        if (prevProps.sheep.length < this.props.sheep.length || !isEqual ) {
            this.getAppropriateMates();
        }
    }

    renderMates() {
        const { mates } = this.state; 
        let output = [];

        if (mates.length > 0 ) {
            for (let i = 0; i < mates.length; i++) {
                let option = mates[i];
                output.push(
                    <option value={option.name}>{option.name}</option>
                )
            }
            return output
        }
        else return <option value={"none"}>{"No applicable sheep"}</option>
    }

    getAppropriateMates() {
        const { sheep, selectedSheep } = this.props;
        let output = [];

        for (let i = 0; i < sheep.length; i++) {
            if(!sheep[i].branded)
            if (selectedSheep.gender === 'male' && sheep[i].gender === 'female'
                || selectedSheep.gender === 'female' && sheep[i].gender === 'male') {
                output.push(sheep[i])
            }
        }
        return this.setState({mates: output})
    }

    selectMate() {
        let breedSuccess = Math.floor(Math.random() * 2);

        if (breedSuccess === 1) {
          this.setState(
            { message: "Congratulations, a sheep was born!" }, 
            this.props.onBreeding()
          );
        }

        else {
          this.setState({ message: "Sorry, no new sheep was born"})
        }
    }

    render() {
        const { selectedSheep } = this.props;
        const { mates, message } = this.state;
        const disabledLogic = selectedSheep.branded || selectedSheep.gender === "";

        return (
            <div id="menu" className="container">
                Options:
                     <br />
                <div className="row">
                    <div className="col-5" key="branding">
                        <button disabled={disabledLogic} className="btn btn-primary" onClick={() => this.props.onBranding() }> Brand Sheep </button>
                    </div>
                    <div className="col-5" key="breeding">

                        Breed Sheep:
                        <select name="breed" >
                            {this.renderMates()}
                        </select>
                        <button 
                            key="breeding-button" 
                            disabled={disabledLogic || mates.length === 0 } 
                            className="btn btn-primary" 
                            onClick={() => this.selectMate()}
                        > Breed Sheep 
                        </button>
                        <br />
                        <span> { message } </span>
                    </div>
                </div>
            </div>
        );
    }

}