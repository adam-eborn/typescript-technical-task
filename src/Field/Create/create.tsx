import * as React from 'react';

import './Create.css';

interface state {
    name: string,
    gender: string,
    branded: boolean,
  };

interface props{
    sheepNames: string[],
    addSheep(arg0: object) : any
};

export class Create extends React.Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = { name: '', gender: 'female', branded: false };
    }


    //I was initially tring to encompass the two gender / name functions into one,  like so:

    // handleFormUpdate(event: { target: { value: string } }, type) {
    //     this.setState({ [type]: event.target.value })
    // };

    // however typescript wasnt keen on the dynamic property naming and not overly confident enough with typescript
    // to fix it.

    
    handleGender(event: { target: { value: string } }) {
        this.setState({gender: event.target.value})
    }

    handleNameValue(event: { target: { value: string }}) {
        this.setState({name: event.target.value})
    }

    handleFormClear() {
        this.setState({ name: '', branded: false })
    }

    handleOnClick(callback: any) {
        this.props.addSheep(this.state);
        if (callback) {
            callback();
        }
    }

    render() {
        const { name, gender } = this.state;
        const { sheepNames } = this.props;
        const disabledLogic = name.length === 0 || sheepNames.includes(name);

        return (
            <div id="sheep-generator" className="container">
                <div className="row">
                        <div className="col-5">
                            Sheep Name: <input type="text" value={this.state.name} onChange={(e) => this.handleNameValue(e)}/>
                        </div>
                        <div className="col-5">
                            Gender: 
                            <select name="gender" value={gender} onChange={(e) => this.handleGender(e)}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <button disabled={disabledLogic} className="btn btn-primary" onClick={() => { this.handleOnClick(this.handleFormClear())}}> Generate Sheep </button>
                        </div>
                </div>
            </div>
        );
    }
}