import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            list: []
        }

        this.getList = this.getList.bind(this)
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList()
    }

    // Retrieves the list from the express app
    getList() {
        fetch('/api/getList')
            .then(res => res.json())
            .then(list => this.setState({ list }))
            .catch(err => console.log(err))
    }

    render() {
        const { list } = this.state

        return (
            <div>
                <h1>List of Items</h1>
                {list.length ? 
                    (
                        <div>
                            {list.map((item, index) => {
                                return (
                                    <div key={`list-${index}`}>{item}</div>
                                )})
                            }
                        </div>
                    ) : (
                        <div>
                            <h2> No List Items Found</h2>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default List
