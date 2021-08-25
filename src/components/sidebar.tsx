import React, {FC} from 'react'
import CreateNewList from './createNewList'
import Lists from './List'


const Sidebar: FC = () => {
    return (
        <div className="column is-3">
            <CreateNewList/>
            <Lists/>
        </div>
    )
}

export default Sidebar