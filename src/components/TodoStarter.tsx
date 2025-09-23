// TodoStarter.tsx - 수강생이 작업할 시작 코드
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 타입 정의
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

// 🎨 기본 스타일 제공됨 - 수정 불필요!
const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO 1: Flexbox로 좌우 끝 정렬
const Header = styled.header`
  /* 🎯 필요한 속성:
     - display: ???
     - justify-content: ???
     - align-items: ???
  */

  /* 기본 스타일 제공 (수정 불필요) */
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    color: #2d3748;
    font-size: 28px;
  }

  span {
    font-size: 18px;
    color: #4a5568;
    font-weight: 500;
  }
`;

// TODO 2: Flexbox로 input이 남은 공간 차지
const InputForm = styled.form`
  /* 🎯 Form에 필요한 속성:
     - display: ???
     - ???: ??? // input과 버튼 사이 간격 12px
  */

  /* 기본 스타일 제공 (수정 불필요) */
  width: 100%;
  max-width: 800px;
  margin-bottom: 32px;

  input {
    /* 🎯 필요한 속성:
       - ???: ??? (남은 공간 차지)
    */

    /* 기본 스타일 제공 (수정 불필요) */
    padding: 14px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }

  select {
    /* 기본 스타일 제공 (수정 불필요) */
    padding: 14px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: #cbd5e0;
    }
  }

  button {
    /* 기본 스타일 제공 (수정 불필요) */
    padding: 14px 32px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #5a67d8;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
`;

// TODO 3: Grid로 반응형 카드 레이아웃
const TodoGrid = styled.div`
  /* 🎯 필요한 속성:
     - display: ???
     - grid-template-columns: repeat(???, minmax(???, ???))
     - gap: ??? // 간격 20px
  */

  /* 기본 스타일 제공 (수정 불필요) */
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// 🎨 카드 스타일 제공됨 - 수정 불필요!
interface TodoCardProps {
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

const TodoCard = styled.div<TodoCardProps>`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid
    ${(props) => {
      switch (props.priority) {
        case 'high':
          return '#f56565';
        case 'medium':
          return '#f6ad55';
        case 'low':
          return '#68d391';
        default:
          return '#cbd5e0';
      }
    }};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  ${(props) =>
    props.completed &&
    css`
      opacity: 0.6;
      background: #f7fafc;

      span {
        text-decoration: line-through;
        color: #a0aec0;
      }
    `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

// TODO 4: Flexbox로 체크박스와 텍스트 정렬
const CardContent = styled.div`
  /* 🎯 필요한 속성:
     - display: ???
     - align-items: ???
     - gap: ??? // 간격 12px
  */

  /* 기본 스타일 제공 (수정 불필요) */
  margin-bottom: 16px;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: 16px;
    line-height: 1.5;
    color: #2d3748;
  }
`;

// TODO 5: Flexbox로 우선순위와 버튼 양 끝 정렬
const CardActions = styled.div`
  /* 🎯 필요한 속성:
     - display: ???
     - justify-content: ???
     - align-items: ???
  */

  /* 기본 스타일 제공 (수정 불필요) */
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;

  .priority {
    padding: 4px 12px;
    background: #edf2f7;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #4a5568;
  }

  button {
    padding: 6px 12px;
    background: #fc8181;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f56565;
    }
  }
`;

// 메인 컴포넌트
function TodoStarter() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Emotion 학습하기', completed: false, priority: 'high' },
    { id: 2, text: 'Flexbox 실습하기', completed: false, priority: 'medium' },
    { id: 3, text: 'Grid 마스터하기', completed: false, priority: 'low' },
  ]);

  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
      priority,
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <AppContainer>
      <Header>
        <h1>📝 할일 관리</h1>
        <span>
          {completedCount} / {totalCount} 완료
        </span>
      </Header>

      <InputForm onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할일을 입력하세요..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <option value="low">낮음</option>
          <option value="medium">보통</option>
          <option value="high">높음</option>
        </select>
        <button type="submit">추가</button>
      </InputForm>

      <TodoGrid>
        {todos.map((todo) => (
          <TodoCard key={todo.id} priority={todo.priority} completed={todo.completed}>
            <CardContent>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
            </CardContent>
            <CardActions>
              <span className="priority">{todo.priority}</span>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </CardActions>
          </TodoCard>
        ))}
      </TodoGrid>
    </AppContainer>
  );
}

export default TodoStarter;
