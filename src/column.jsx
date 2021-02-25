import React from 'react';
import styled, { css } from 'styled-components'
import Task from './task'
import { Droppable, Draggable } from 'react-beautiful-dnd'


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
   
   

  display: flex;
  flex-direction: column;
`;


const Title = styled.h3`
padding: 8px;
`;

const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props =>
  props.isDraggingOver ? 'lightgrey' : 'inherit'};
flex-grow: 1;
min-height: 100px;
width: 300px;
 

`;
  
const column = (props) => {
  const isDragDisabled = props.column.id === 'column-1';
  return (
    <Draggable draggableId={props.column.id} index={props.index} isDragDisabled={isDragDisabled}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef} isDragDisabled={isDragDisabled}>
            <Title {...provided.dragHandleProps}>
              {props.column.title}
            </Title>
            <Droppable droppableId={props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {props.tasks.map((task, index) => (
                   
                    <Task key={task.id} task={task} index={index} />
                   
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
   
  )

}

export default column;