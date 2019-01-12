import React, { Component } from 'react';

export default class TextItem extends Component{
    
    createItems(nodes, states, childIndex = 0) {
        if(!nodes && !states) return;
        let title;
        switch(childIndex) {
            case 0:
                title = `<h1>${nodes.title}</h1>`;
                break;
            case 1:
                title = `<h2>${nodes.title}</h2>`;
                break;
            case 2:
                title = `<h3>${nodes.title}</h3>`;
                break;
            default:
                title = `<h4>${nodes.title}</h4>`;
        }

        let parentNode = `<div class="node">${title}</div>`;
        if (nodes.qas) {
            let qas = `<ul class="qas">`
            nodes.qas.map((item, index) => {
                qas += `<li class="liclass ${(states.indexOf(item.tocId) !== -1 ? ' selected' : ' ')}"> <div class="quest">Q${index+1}. ${item.question}</div> <div class="ans">${item.answer}</div>`;
            });
            qas += `</ul>`;
            parentNode = `<div class="node">${title} ${qas}</div>`;
        }

        if (nodes.children) {
            nodes.children.map(item => {
                parentNode += this.createItems(item, states, ++childIndex);
            });
        }

        return parentNode;
    }

    render(){
        const { nodes, states } = this.props
        return <div class="node"><div className='tree-container' dangerouslySetInnerHTML={{__html: this.createItems(nodes, states, 0)}} ></div></div>
    }

}