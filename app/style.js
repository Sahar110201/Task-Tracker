import styled, { css } from 'styled-components';

// Tokens & Theme
const colors = {
  primary: '#6366f1',
  secondary: '#a855f7',
  background: '#f8fafc',
  card: '#ffffff',
  text: '#1e293b',
  textLight: '#64748b',
  danger: '#ef4444',
  success: '#22c55e',
  border: '#e2e8f0'
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px'
};


export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const Card = styled.div`
  background: ${colors.card};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

// Navbar Styles (for layout.js)
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid ${colors.border};
  
  .nav-brand {
    font-weight: 800;
    font-size: 1.5rem;
    color: ${colors.primary};
    span { color: ${colors.secondary}; }
  }
`;

// Input & Button Styles (for TaskInput.js & Filter Buttons)
export const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus { border-color: ${colors.primary}; outline: none; }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  background: ${props => props.variant === 'danger' ? colors.danger : colors.primary};
  color: white;

  &:hover { opacity: 0.9; transform: translateY(-1px); }

  // Conditional styling for Filter buttons
  ${props => props.active && css`
    background: ${colors.secondary};
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${colors.secondary};
  `}
`;

// Task Item Styles (for TaskItem.js)
export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: ${colors.background};
  border-radius: 8px;
  border-left: 4px solid ${props => props.completed ? colors.success : colors.primary};
  transition: opacity 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TaskText = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: ${props => props.completed ? colors.textLight : colors.text};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;