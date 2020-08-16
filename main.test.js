const {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
} = require('./main.js')


const originalTodos = [
  {
    text: 'Christmas shopping',
    id: 0,
    complete: false,
    priority: 1,
  },
  {
    text: `make doctor's appointment`,
    id: 1,
    complete: true,
    priority: 2,
  },
  {
    text: 'binge watch The Office',
    id: 2,
    complete: false,
    priority: 2,
  },
  {
    text: 'research dinosaurs',
    id: 3,
    complete: false,
    priority: 1,
  },
  {
    text: 'fire Colin',
    id: 4,
    complete: true,
    priority: 2,
  },
  {
    text: 'start novel',
    id: 5,
    complete: true,
    priority: 1,
  },
]

describe('getTodoName', () => {
  xit(`returns the text property of a todo`, () => {
    const todo1 = {
    text: 'Christmas shopping',

    complete: false,
    priority: 1,
  };

  const todo2 = {
    text: `make doctor's appointment`,

    complete: false,
    priority: 2,
  };

    expect(getTodoName(todo1)).toBe('Christmas shopping')
    expect(getTodoName(todo2)).toBe(`make doctor's appointment`)
  })
})

describe('getPriority', () => {
  xit(`returns the priority of a todo`, () => {
    const todo1 = {
    text: 'Christmas shopping',

    complete: false,
    priority: 1,
  };

  const todo2 = {
    text: `make doctor's appointment`,

    complete: true,
    priority: 2,
  };

    expect(getPriority(todo1)).toBe(1)
    expect(getPriority(todo2)).toBe(2)
  })
})

describe('isComplete', () => {
  xit(`returns whether the given todo is complete`, () => {
    const todo1 = {
    text: 'Christmas shopping',

    complete: false,
    priority: 1,
  };

  const todo2 = {
    text: `make doctor's appointment`,

    complete: true,
    priority: 2,
  };

    expect(isComplete(todo1)).toBe(false)
    expect(isComplete(todo2)).toBe(true)
  })
})

describe('isHighPriority', () => {
  xit(`returns whether the given todo is of high priority`, () => {
    const todo1 = {
    text: 'Christmas shopping',

    complete: false,
    priority: 2,
  };

  const todo2 = {
    text: `make doctor's appointment`,

    complete: true,
    priority: 1,
  };

    expect(isHighPriority(todo1)).toBe(true)
    expect(isHighPriority(todo2)).toBe(false)
  })
})

describe('names', () => {
  it(`returns an array of the given todos names`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    expect(names(todos)).toEqual([
      'Christmas shopping',
      `make doctor's appointment`,
      'binge watch The Office',
      'research dinosaurs',
      'fire Colin',
      'start novel',
    ])
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    names(todos);
    expect(todos).toEqual(originalTodos);
  });
});

describe('priorities', () => {
  it(`returns an array of the given todos priorities`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    expect(priorities(todos)).toEqual([1, 2, 2, 1, 2, 1])
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    priorities(todos);
    expect(todos).toEqual(originalTodos);
  });
});

describe('namesAndPriorities', () => {
  it(`returns an array of the string containing the given todos name and priority`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    expect(namesAndPriorities(todos)).toEqual([
      'Christmas shopping - Low',
      `make doctor's appointment - High`,
      'binge watch The Office - High',
      'research dinosaurs - Low',
      'fire Colin - High',
      'start novel - Low',
    ])
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    namesAndPriorities(todos);
    expect(todos).toEqual(originalTodos);
  });
});

describe('justNotComplete', () => {
  it(`returns an array of only those todos that are not complete`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    const notComplete = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
    ];

    expect(justNotComplete(todos)).toEqual(notComplete);
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    justNotComplete(todos);
    expect(todos).toEqual(originalTodos);
  });
})

describe('justComplete', () => {
  it(`returns an array of only those todos that are not complete`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    const complete = [
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ];

    expect(justComplete(todos)).toEqual(complete);
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    justComplete(todos);
    expect(todos).toEqual(originalTodos);
  });
})

describe('priority2Only', () => {
  it(`returns an array of only those todos that are of high priority`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    const highPriority = [
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
    ]

    expect(priority2Only(todos)).toEqual(highPriority);
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    priority2Only(todos);
    expect(todos).toEqual(originalTodos);
  });
})

describe('priority1Only', () => {
  it(`returns an array of only those todos that are of low priority`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    const lowPriority = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    expect(priority1Only(todos)).toEqual(lowPriority);
  })

  it(`doesn't modify the original array`, () => {
    const todos = [
      {
        text: 'Christmas shopping',
        id: 0,
        complete: false,
        priority: 1,
      },
      {
        text: `make doctor's appointment`,
        id: 1,
        complete: true,
        priority: 2,
      },
      {
        text: 'binge watch The Office',
        id: 2,
        complete: false,
        priority: 2,
      },
      {
        text: 'research dinosaurs',
        id: 3,
        complete: false,
        priority: 1,
      },
      {
        text: 'fire Colin',
        id: 4,
        complete: true,
        priority: 2,
      },
      {
        text: 'start novel',
        id: 5,
        complete: true,
        priority: 1,
      },
    ]

    priority1Only(todos);
    expect(todos).toEqual(originalTodos);
  });
})
