import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import SelectList from './selectList';

import { RootState } from '../store/store';
import AddNewTask from './addNewTask';
import Tasks from './Task';

// import Add

const MainContent: FC = () => {
    const selectedList = useSelector((state: RootState) => state.list.selectedList)
    return (
        <div className="column is-9">
            <div className="box">
                <SelectList/>
                {
                    selectedList && 
                    <Fragment>
                        <AddNewTask list={selectedList}/>
                        <hr/>
                        <Tasks tasks={selectedList.tasks}/>
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default MainContent;