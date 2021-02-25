import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom'
import Querybuilder from 'react-sql-query-builder'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import initialData from './initial-data'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './column'
 

const App = () => {
  const [data, setData] = useState(initialData);
  const [originalIndex, setOriginalIndex] = useState();

  const Container =  styled.div`
   display: grid;
  grid-gap: 2px;
  /* margin-top: 2px; */
  /* grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); */
  /* grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); */
  grid-auto-flow: column;
 `

  const onDragStart = useCallback(start => {
    document.body.style.color = 'orange'
    // console.log(start)
    // const originalIndex = data.columnOrder.indexOf(start.source.droppableId);

    // setOriginalIndex(2)
    // return;

  },[])

  const onDragUpdate = useCallback(update => {
    const { destination } = update;
    const opacaty = destination ? destination.index / Object.keys(data.tasks).length : 0;
    document.body.style.transition = 'background-color 0.2s ease';
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacaty})`
  },[data.tasks])

  const onDragEnd = useCallback((result) => {
    setOriginalIndex(-1)
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
    const { destination, source, draggableId, type } = result

    // console.log('draggableId => ', draggableId, 'destination => ', destination, 'source => ', source)

    if (!destination || 
      (destination.droppableId === source.droppableId && 
      destination.index === source.index)) {
      return;
    }

    if (type === 'column') {
      const { index } = destination
      const columnId = data.columnOrder[index]
      const column = data.columns[columnId]
      if (column.canmove) {
        const newColumnOrder = Array.from(data.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
  
       
        setData(prevData => ({
          ...prevData,
          columnOrder: newColumnOrder,
        }))
        return;
      }
      return;
    }

    // const move = (array, to ,from) => {
    //   array.splice(to, 0, array.splice(from, 1)[0]);
    // }
 
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) {
        const newTaksIds = Array.from(start.taskIds)
      
        newTaksIds.splice(source.index, 1)
        newTaksIds.splice(destination.index, 0, draggableId)
        // move(newTaksIds, source.index, destination.index)
    
        const newColumn = {
          ...start,
          taskIds: newTaksIds
        }
    
    
        setData(prev=> ({
          ...data,
          columns: {
            ...data.columns,
            [newColumn.id]: newColumn
          }
        }))
        return;
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
       taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    setData(prev=> ({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }))
    return;


  },[data])

  const Board = styled.div`
  -webkit-font-smoothing: antialiased;
  display: grid;
  grid-gap: 2px;
   
  grid-auto-flow: column;
`;

 
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {provided => (
            <Board
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => data.tasks[taskId],
                );
                return <Column key={column.id} column={column} tasks={tasks} index={index} />;
              })}
              {provided.placeholder}
            </Board>
        )}
      </Droppable>
    </DragDropContext>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
