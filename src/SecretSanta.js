import React from "react";
import './SecretSanta.css';
import { StartPage } from "./StartPage/StartPage";
import { EditPage } from "./EditPage/EditPage";
import { ResultPage } from "./ResultPage/ResultPage";
import { PageControl } from "./Common/PageControl";
import { Header } from "./Common/Header";

const PAGE = {
    START: 0,
    EDIT: 1,
    RESULT: 2
}

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
            name: santaName
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

    render () {
        let current_page;
        let hasHeader = true;
        let hasPageControl = true;
        let buttons;
        
        switch(this.state.page) {
            case PAGE.START:
                current_page = <StartPage onStart={() => {this.toPage(PAGE.EDIT)}}/>;
                hasHeader = false;
                hasPageControl = false;
                break;
            case PAGE.EDIT:
                current_page = 
                    <EditPage 
                        santas={this.state.santas}
                        addSanta={this.addSanta}
                        removeSanta={this.removeSanta}
                    />;
                buttons = [
                    [() => this.toPage(PAGE.START), 'Back', true],
                    [() => this.toPage(PAGE.RESULT), 'Confirm', true]
                ];
                break;
            case PAGE.RESULT:
                current_page =
                    <ResultPage 
                        santas={this.state.santas}
                    />
                buttons = [
                    [() => this.toPage(PAGE.EDIT), 'Back', true],
                    [() => this.toPage(PAGE.START), 'Finish', true]
                ];
                break;
            default:
                current_page = <p>Error! Page not found!</p>;
        }

        return (
            <div className='SecretSanta'>
                { hasHeader && <Header /> }
                { current_page }
                { 
                    hasPageControl && 
                    <PageControl 
                        buttons={buttons}
                    />
                }
            </div>
        );
    }
}