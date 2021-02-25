const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'User 1' },
    'task-2': { id: 'task-2', content: 'User 2' },
    'task-3': { id: 'task-3', content: 'User 3' },
    'task-4': { id: 'task-4', content: 'User 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Candidates',
      canmove: false,
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Interview',
      canmove: true,
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'column-3',
      canmove: true,
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'column-4',
      canmove: true,
      taskIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'column-5',
      canmove: true,
      taskIds: [],
    },
    'column-6': {
      id: 'column-6',
      title: 'column-6',
      canmove: true,
      taskIds: [],
    },
    'column-7': {
      id: 'column-7',
      title: 'column-7',
      canmove: true,
      taskIds: [],
    },
    'column-8': {
      id: 'column-8',
      title: 'column-8',
      canmove: true,
      taskIds: [],
    },
    'column-9': {
      id: 'column-9',
      title: 'column-9',
      canmove: true,
      taskIds: [],
    },
    'column-10': {
      id: 'column-10',
      title: 'column-10',
      canmove: true,
      taskIds: [],
    },
    'column-11': {
      id: 'column-11',
      title: 'column-11',
      canmove: true,
      taskIds: [],
    },
    'column-12': {
      id: 'column-12',
      title: 'column-12',
      canmove: true,
      taskIds: [],
    },
    'column-13': {
      id: 'column-13',
      title: 'column-13',
      canmove: true,
      taskIds: [],
    },
    'column-14': {
      id: 'column-14',
      title: 'column-14',
      canmove: true,
      taskIds: [],
    },
    'column-15': {
      id: 'column-15',
      title: 'column-15',
      canmove: true,
      taskIds: [],
    },
    'column-16': {
      id: 'column-16',
      title: 'column-16',
      canmove: true,
      taskIds: [],
    },
    'column-17': {
      id: 'column-17',
      title: 'column-17',
      canmove: true,
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3','column-4','column-5','column-6','column-7','column-8','column-9','column-10','column-11','column-12','column-13','column-14','column-15','column-16','column-17'],
};

export default initialData;
