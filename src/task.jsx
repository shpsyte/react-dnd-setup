import React from 'react';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
const Container =  styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({isDragging, isDragDisabled}) => (isDragDisabled ? 'gray' :  isDragging ? 'lightgreen' : 'white')};
  display: flex;
`
const Title =  styled.h3`
   padding: 8px;

`
const TaskList =  styled.div`
  padding: 8px;
`

const task = (props) => {
  const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
     border-radius: 4px;
     margin-right: 8px;
  `
  const isDragDisabled = props.task.id === 'task-1';
  return (
    <Draggable 
      draggableId={props.task.id} 
      index={props.index}
      isDragDisabled={isDragDisabled}
      
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            
          >
            <Handle />
            {props.task.content}
          </Container>
        )}
      </Draggable>

  ) 
}

export default task;