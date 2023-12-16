import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { deleteTodos, changeTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [newText, setNewText] = useState(text);
  const [isChange, setIsChange] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    setNewText(e.currentTarget.value);
  };

  const handleClick = () => {
    dispatch(changeTodo({ id, text: newText }));
    handleToggle();
  };
  const handleToggle = () => {
    setIsChange(!isChange);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>

        {isChange ? (
          <>
            <input type="text" value={newText} onChange={handleChange} />
            <button type="button" onClick={handleClick}>
              Change
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleToggle}>
              Icon
            </button>
            <Text>{text}</Text>
          </>
        )}
        <DeleteButton type="button" onClick={() => dispatch(deleteTodos(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
