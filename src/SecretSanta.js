import React from "react";
import './SecretSanta.css';
import { StartPage } from "./StartPage/StartPage";
import { EditPage } from "./EditPage/EditPage";
import { ResultPage } from "./ResultPage/ResultPage";
import { Header } from "./Common/Header";
import { Utils } from "./Utils";
import { PAGE } from "./constants";

export class SecretSanta extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: PAGE.START,
            santas: [],
            rules: {}
        }

        this.toPage = this.toPage.bind(this);
        this.addSanta = this.addSanta.bind(this);
        this.removeSanta = this.removeSanta.bind(this);
        this.assignRecipients = this.assignRecipients.bind(this);
    }

    toPage(page) {
        let new_state = this.state;
        new_state.page = page;
        this.setState(new_state);
    }

    // State-related functions
    addSanta(santaName) {
        // no empty name
        if(santaName === '') {
            return false;
        }

        // no repeated name
        for(let i = 0; i < this.state.santas.length; i++) {
            if(this.state.santas[i].name === santaName) {
                return false;
            }
        }

        const new_santa = {
            id: Date.now(),
            name: santaName,
            assigned: null
        };
        
        let new_state = this.state;
        new_state.santas = [ ...new_state.santas, new_santa ];
        this.setState(new_state);

        return true;
    }

    removeSanta(targetID) {
        let new_state = this.state;
        new_state.santas = new_state.santas.filter((santa) => (santa.id !== targetID));
        this.setState(new_state);
    }
    
    assignRecipients() {
        // Generate new pattern
        const assignments = Utils.derangement(this.state.santas.length);

        let newState = this.state;
        // Assign recipient for each santa to the 'assigned' field
        for( let i = 0; i < this.state.santas.length; i++ ) {
            newState.santas[i].assigned = assignments[i];
        }

        this.setState(newState);
    }

    render () {
        let current_page;
        let hasHeader = true;
        
        switch(this.state.page) {
            case PAGE.START:
                current_page = <StartPage onStart={() => {this.toPage(PAGE.EDIT)}}/>;
                hasHeader = false;
                break;
            case PAGE.EDIT:
                current_page = 
                    <EditPage 
                        santas={this.state.santas}
                        addSanta={this.addSanta}
                        removeSanta={this.removeSanta}
                        toPage={this.toPage}
                    />;
                break;
            case PAGE.RESULT:
                current_page =
                    <ResultPage 
                        santas={this.state.santas}
                        assignRecipients={this.assignRecipients}
                        toPage={this.toPage}
                    />
                break;
            default:
                current_page = <p>Error! Page not found!</p>;
        }

        return (
            <div className='SecretSanta'>
                { hasHeader && <Header /> }
                { current_page }
            </div>
        );
    }
}