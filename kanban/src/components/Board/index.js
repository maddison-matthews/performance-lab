import { Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { BoardContainer, BoardIssue, BoardList, BoardTitle } from './styles'

const titles = ['TO DO', 'IN PROGRESS', 'TEST', 'DONE']

export const Board = ({ boardIndex, board }) => {
  return (
    <BoardContainer>
      <BoardTitle>{titles[boardIndex]}</BoardTitle>
      <Droppable droppableId={`${boardIndex}`}>
        {(provided) => (
          <BoardList ref={provided.innerRef} {...provided.droppableProps}>
            {board.map((item, issueIndex) => (
              <Draggable key={item.id} draggableId={item.id} index={issueIndex}>
                {(provided) => (
                  <BoardIssue
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </BoardIssue>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </BoardList>
        )}
      </Droppable>
    </BoardContainer>
  )
}
