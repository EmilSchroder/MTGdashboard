import React from 'react'

const QueryBar = () => (
    <div>
        <form>
            <input type='text' placeholder='Dinopower, black...' />
            <select name='searchTerms'>
                <option defaultValue>Search by...</option>
                <option value='deckName'>Deck Name</option>
                <option value='color'>Color</option>
            </select>
        </form>
        
    </div>
)

export default QueryBar